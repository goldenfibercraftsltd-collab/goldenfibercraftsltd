import { connect } from 'cloudflare:sockets';

export interface SmtpEmailOptions {
  to: string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  fromName?: string;
}

/**
 * Direct Secure SMTP Sender for Cloudflare Pages Functions
 * Connects securely to cPanel Mail Server over TLS on Port 465
 */
export async function sendSmtpEmail({
  to,
  subject,
  html,
  text,
  replyTo,
  fromName = 'Golden Fiber Crafts Ltd - Website Alert',
}: SmtpEmailOptions): Promise<{ success: boolean; error?: string }> {
  const host = 'alpha.hostseba.com';
  const port = 465;
  const user = 'fromadmin@goldenfibercraftsltd.com';
  const pass = 'Shafiq@123';

  try {
    const socket = connect(
      { hostname: host, port },
      { secureTransport: 'on' }
    );

    const writer = socket.writable.getWriter();
    const reader = socket.readable.getReader();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    async function readResponse(): Promise<string> {
      let full = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        const lines = full.trim().split('\n');
        const lastLine = lines[lines.length - 1].trim();
        // Check for SMTP completion code (e.g. 220, 250, 334, 354, 235 followed by a space)
        if (lastLine.length >= 3 && /^\d{3} /.test(lastLine)) {
          break;
        }
      }
      return full;
    }

    async function writeCommand(cmd: string): Promise<string> {
      await writer.write(encoder.encode(cmd + '\r\n'));
      return await readResponse();
    }

    try {
      // 1. Read Greeting (220)
      const greeting = await readResponse();
      if (!greeting.startsWith('220')) {
        throw new Error(`SMTP Greeting failed: ${greeting}`);
      }

      // 2. EHLO
      await writeCommand('EHLO goldenfibercraftsltd.com');

      // 3. AUTH LOGIN
      await writeCommand('AUTH LOGIN');
      await writeCommand(btoa(user));
      const authRes = await writeCommand(btoa(pass));
      if (!authRes.includes('235')) {
        throw new Error(`SMTP Authentication failed: ${authRes}`);
      }

      // 4. MAIL FROM
      await writeCommand(`MAIL FROM:<${user}>`);

      // 5. RCPT TO for each recipient
      for (const recipient of to) {
        await writeCommand(`RCPT TO:<${recipient}>`);
      }

      // 6. DATA
      await writeCommand('DATA');

      // 7. Message Payload
      const toHeader = to.join(', ');
      const boundary = `_NextPart_${Date.now()}_${Math.random().toString(36).slice(2)}`;

      let emailData = `From: "${fromName}" <${user}>\r\n`;
      emailData += `To: ${toHeader}\r\n`;
      if (replyTo) {
        emailData += `Reply-To: ${replyTo}\r\n`;
      }
      emailData += `Subject: ${subject}\r\n`;
      emailData += `MIME-Version: 1.0\r\n`;
      emailData += `Content-Type: multipart/alternative; boundary="${boundary}"\r\n\r\n`;

      // Text section
      emailData += `--${boundary}\r\n`;
      emailData += `Content-Type: text/plain; charset=UTF-8\r\n`;
      emailData += `Content-Transfer-Encoding: 8bit\r\n\r\n`;
      emailData += `${text || subject}\r\n\r\n`;

      // HTML section
      emailData += `--${boundary}\r\n`;
      emailData += `Content-Type: text/html; charset=UTF-8\r\n`;
      emailData += `Content-Transfer-Encoding: 8bit\r\n\r\n`;
      emailData += `${html}\r\n\r\n`;

      emailData += `--${boundary}--\r\n.\r\n`;

      const dataRes = await writeCommand(emailData);
      if (!dataRes.includes('250')) {
        throw new Error(`SMTP DATA failed: ${dataRes}`);
      }

      // 8. QUIT
      await writeCommand('QUIT');

      return { success: true };
    } finally {
      try { writer.releaseLock(); } catch {}
      try { reader.releaseLock(); } catch {}
      try { socket.close(); } catch {}
    }
  } catch (err: any) {
    console.error('sendSmtpEmail error:', err.message);
    return { success: false, error: err.message };
  }
}
