import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';
import { sendSmtpEmail } from './_smtp';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// GET all inquiries (Admin only)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);
  try {
    const result = await context.env.DB.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
    return jsonResponse({ success: true, inquiries: result.results });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};

// POST submit inquiry (Public)
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { name, email, company, phone, country, product_interest, message } = await context.request.json() as any;
    if (!name || !email || !message) return jsonResponse({ error: 'name, email, and message are required' }, 400);

    const result = await context.env.DB.prepare(
      'INSERT INTO inquiries (name, email, company, phone, country, product_interest, message) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).bind(name, email, company || '', phone || '', country || '', product_interest || '', message).run();

    const subject = `🔔 [NEW WEBSITE INQUIRY] ${product_interest || 'General Inquiry'} - ${name}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #166534; border-bottom: 2px solid #166534; padding-bottom: 8px;">🔔 New Website Inquiry Received</h2>
        <p><strong>Buyer Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone / WhatsApp:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Product Interest:</strong> ${product_interest || 'General Inquiry'}</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p><strong>Message / Requirements:</strong></p>
        <div style="background: #f8fafc; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
        <br />
        <a href="mailto:${email}?subject=RE: Golden Fiber Crafts Ltd Inquiry&body=Dear ${name},%0D%0A%0D%0AThank you for contacting Golden Fiber Crafts Ltd." style="background: #166534; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">Reply to Buyer</a>
      </div>
    `;

    // Dispatch via cPanel TLS SMTP
    try {
      await sendSmtpEmail({
        to: [
          'shafiq@goldenfibercraftsltd.com',
          'fromadmin@goldenfibercraftsltd.com',
        ],
        subject,
        html: htmlBody,
        text: message,
        replyTo: email,
      });
    } catch (smtpErr: any) {
      console.warn('Inquiries SMTP dispatch error:', smtpErr.message);
    }

    return jsonResponse({ success: true, id: result.meta.last_row_id }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
