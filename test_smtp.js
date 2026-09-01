import tls from 'tls';

function sendSmtpTest() {
  const host = 'alpha.hostseba.com'; // or mail.goldenfibercraftsltd.com
  const port = 465;
  const user = 'fromadmin@goldenfibercraftsltd.com';
  const pass = 'Shafiq@123';
  const to = 'fromadmin@goldenfibercraftsltd.com';

  console.log(`Connecting to ${host}:${port}...`);
  const socket = tls.connect(port, host, { rejectUnauthorized: false }, () => {
    console.log('Connected to SMTP server via TLS!');
  });

  socket.setEncoding('utf-8');

  let step = 0;

  socket.on('data', (data) => {
    console.log('S:', data.trim());

    if (step === 0 && data.startsWith('220')) {
      step++;
      socket.write(`EHLO goldenfibercraftsltd.com\r\n`);
    } else if (step === 1 && data.startsWith('250')) {
      step++;
      socket.write(`AUTH LOGIN\r\n`);
    } else if (step === 2 && data.startsWith('334')) {
      step++;
      socket.write(Buffer.from(user).toString('base64') + '\r\n');
    } else if (step === 3 && data.startsWith('334')) {
      step++;
      socket.write(Buffer.from(pass).toString('base64') + '\r\n');
    } else if (step === 4 && data.startsWith('235')) {
      console.log('✅ Authentication SUCCESSFUL!');
      step++;
      socket.write(`MAIL FROM:<${user}>\r\n`);
    } else if (step === 5 && data.startsWith('250')) {
      step++;
      socket.write(`RCPT TO:<${to}>\r\n`);
    } else if (step === 6 && data.startsWith('250')) {
      step++;
      socket.write(`DATA\r\n`);
    } else if (step === 7 && data.startsWith('354')) {
      step++;
      const emailContent = `From: "Golden Fiber Crafts Website Alert" <${user}>\r\nTo: <${to}>\r\nSubject: 🔔 [NEW WEBSITE ORDER TEST] Golden Fiber Crafts Ltd\r\nContent-Type: text/html; charset=utf-8\r\n\r\n<h2>New Website Quote / Order Request</h2><p>This is a live SMTP test from Golden Fiber Crafts Ltd website.</p>\r\n.\r\n`;
      socket.write(emailContent);
    } else if (step === 8 && data.startsWith('250')) {
      console.log('✅ Email SENT SUCCESSFUL!');
      step++;
      socket.write(`QUIT\r\n`);
    }
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });

  socket.on('end', () => {
    console.log('Connection closed.');
  });
}

sendSmtpTest();
