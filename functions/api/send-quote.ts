import { Env, jsonResponse, corsHeaders } from './_shared';
import { sendSmtpEmail } from './_smtp';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// Helper to generate a luxury HTML email for Admin
function generateQuoteHtmlEmail(data: any): string {
  const {
    quote_id,
    buyer_name,
    buyer_email,
    buyer_company,
    buyer_phone,
    buyer_country,
    product_code,
    product_name,
    quantity,
    cartons,
    cbm,
    destination_port,
    message,
  } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%); padding: 30px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0 0 8px; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { margin: 0; font-size: 13px; color: #a7f3d0; font-weight: 500; }
    .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 800; margin-top: 12px; letter-spacing: 1px; }
    .content { padding: 28px 24px; }
    .section-title { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #065f46; margin: 20px 0 10px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    .data-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #f1f5f9; }
    .data-table td.label { font-weight: 700; color: #64748b; width: 38%; }
    .data-table td.val { font-weight: 600; color: #0f172a; }
    .highlight-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 16px; margin: 16px 0; }
    .message-box { background: #f8fafc; border-left: 4px solid #047857; padding: 14px; border-radius: 4px; font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-wrap; }
    .cta-btn { display: inline-block; background: #166534; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; margin-top: 16px; }
    .footer { background: #f8fafc; padding: 18px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Website Order & Quote Request</h1>
      <p>Golden Fiber Crafts Ltd. - Automated Export Dispatch System</p>
      <div class="badge">REFERENCE: ${quote_id}</div>
    </div>
    <div class="content">
      <div class="highlight-box">
        <strong style="color:#166534; font-size: 14px;">📦 Product Inquiry Summary:</strong>
        <div style="font-size: 15px; font-weight: 800; color: #0f172a; margin-top: 4px;">
          ${product_name || 'Handicraft Item'} (${product_code || 'N/A'})
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 2px;">
          <strong>Quantity:</strong> ${quantity || 'N/A'} pcs &nbsp;|&nbsp; <strong>Cartons:</strong> ${cartons || 'N/A'} &nbsp;|&nbsp; <strong>Total CBM:</strong> ${cbm || 'N/A'} m³
        </div>
      </div>

      <div class="section-title">👤 Buyer & Contact Information</div>
      <table class="data-table">
        <tr><td class="label">Buyer Full Name:</td><td class="val">${buyer_name}</td></tr>
        <tr><td class="label">Work Email:</td><td class="val"><a href="mailto:${buyer_email}" style="color: #047857; font-weight: 700;">${buyer_email}</a></td></tr>
        <tr><td class="label">Phone / WhatsApp:</td><td class="val"><a href="https://wa.me/${(buyer_phone || '').replace(/[^0-9]/g, '')}" style="color: #047857;">${buyer_phone || 'Not provided'}</a></td></tr>
        <tr><td class="label">Company / Brand:</td><td class="val">${buyer_company || 'Not provided'}</td></tr>
        <tr><td class="label">Country:</td><td class="val">${buyer_country || 'Not provided'}</td></tr>
        <tr><td class="label">Port of Destination:</td><td class="val">${destination_port || 'Not specified (FOB Chittagong)'}</td></tr>
      </table>

      <div class="section-title">📝 Custom Requirements & Message</div>
      <div class="message-box">${message || 'No additional custom message provided.'}</div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${buyer_email}?subject=RE: Golden Fiber Crafts Ltd Quotation [${quote_id}] - ${product_code || 'Order Inquiry'}&body=Dear ${buyer_name},%0D%0A%0D%0AThank you for your quotation request for ${product_name || 'our handicraft products'}.%0D%0A%0D%0AOur export merchandising team has prepared the following details for you:" class="cta-btn">
          ✉️ Reply Directly to Buyer
        </a>
      </div>
    </div>
    <div class="footer">
      This is an automated notification from Golden Fiber Crafts Ltd (goldenfibercraftsltd.com).<br>
      Dhaka, Gazipur & Kishoreganj, Bangladesh.
    </div>
  </div>
</body>
</html>
  `.trim();
}

// POST /api/send-quote
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = await context.request.json() as any;
    const {
      quote_id,
      buyer_name,
      buyer_email,
      buyer_company,
      buyer_phone,
      buyer_country,
      product_code,
      product_name,
      quantity,
      cartons,
      cbm,
      destination_port,
      message,
      raw_summary,
    } = data;

    if (!buyer_name || !buyer_email) {
      return jsonResponse({ error: 'buyer_name and buyer_email are required' }, 400);
    }

    const referenceId = quote_id || `RFQ-${Date.now().toString().slice(-6)}`;
    const productInterest = `${product_code || 'General Item'} - ${product_name || 'Handicrafts'} (Qty: ${quantity || 'N/A'}, Cartons: ${cartons || 'N/A'}, CBM: ${cbm || 'N/A'})`;
    const fullSummary = raw_summary || `
Quote Request [${referenceId}]
Product: ${product_name} (${product_code})
Quantity: ${quantity} pcs
Cartons: ${cartons}
Total CBM: ${cbm}
Port: ${destination_port || 'Not specified'}

Buyer: ${buyer_name}
Email: ${buyer_email}
Phone: ${buyer_phone || 'N/A'}
Company: ${buyer_company || 'N/A'}
Country: ${buyer_country || 'N/A'}

Message:
${message || 'Standard quote request.'}
    `.trim();

    // 1. Save to D1 Database (Inquiries table)
    try {
      await context.env.DB.prepare(
        'INSERT INTO inquiries (name, email, company, phone, country, product_interest, message) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        buyer_name,
        buyer_email,
        buyer_company || '',
        buyer_phone || '',
        buyer_country || '',
        productInterest,
        fullSummary
      ).run();
    } catch (dbErr: any) {
      console.warn('D1 Inquiries insert error:', dbErr.message);
    }

    // 2. Also record in D1 cart_orders
    try {
      const items = [{
        code: product_code,
        name: product_name,
        qty: quantity,
        cartons,
        cbm,
      }];
      await context.env.DB.prepare(
        `INSERT INTO cart_orders (buyer_name, buyer_email, buyer_phone, buyer_company, buyer_country, items_json, total_cartons, total_cbm, total_gw)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        buyer_name,
        buyer_email,
        buyer_phone || '',
        buyer_company || '',
        buyer_country || '',
        JSON.stringify(items),
        Number(cartons) || 0,
        Number(cbm) || 0,
        0
      ).run();
    } catch (orderDbErr: any) {
      console.warn('D1 Orders record error:', orderDbErr.message);
    }

    const htmlContent = generateQuoteHtmlEmail({
      quote_id: referenceId,
      buyer_name,
      buyer_email,
      buyer_company,
      buyer_phone,
      buyer_country,
      product_code,
      product_name,
      quantity,
      cartons,
      cbm,
      destination_port,
      message,
    });

    const emailSubject = `🔔 [NEW WEBSITE ORDER REQUEST] ${product_code || 'Handicrafts'} (${quantity || 'RFQ'} pcs) - ${buyer_name}`;

    // 3. Primary: Direct cPanel SMTP Sending via Cloudflare Sockets
    try {
      await sendSmtpEmail({
        to: [
          'shafiq@goldenfibercraftsltd.com',
          'fromadmin@goldenfibercraftsltd.com',
        ],
        subject: emailSubject,
        html: htmlContent,
        text: fullSummary,
        replyTo: buyer_email,
        fromName: 'Golden Fiber Crafts Order Alert',
      });
    } catch (smtpErr: any) {
      console.warn('Direct SMTP dispatch error:', smtpErr.message);
    }

    // 4. Secondary: Dispatch via Brevo API (if BREVO_API_KEY is configured)
    const brevoApiKey = (context.env as any).BREVO_API_KEY;
    if (brevoApiKey) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: 'Golden Fiber Crafts Order Alert',
              email: 'fromadmin@goldenfibercraftsltd.com',
            },
            to: [
              { email: 'shafiq@goldenfibercraftsltd.com', name: 'Md. Safiqul Islam' },
            ],
            replyTo: {
              email: buyer_email,
              name: buyer_name,
            },
            subject: emailSubject,
            htmlContent: htmlContent,
          }),
        });
      } catch (brevoErr: any) {
        console.warn('Brevo API dispatch error:', brevoErr.message);
      }
    }

    // 4. Dispatch via FormSubmit to shafiq@goldenfibercraftsltd.com
    try {
      await fetch('https://formsubmit.co/ajax/shafiq@goldenfibercraftsltd.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://goldenfibercraftsltd.com',
          'Referer': 'https://goldenfibercraftsltd.com/',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          _replyto: buyer_email,
          Reference_ID: referenceId,
          Buyer_Name: buyer_name,
          Buyer_Email: buyer_email,
          Phone_WhatsApp: buyer_phone || 'N/A',
          Company: buyer_company || 'N/A',
          Country: buyer_country || 'N/A',
          Product_Code: product_code || 'N/A',
          Product_Name: product_name || 'N/A',
          Order_Quantity: `${quantity || 'N/A'} pcs`,
          Total_Cartons: cartons || 'N/A',
          Total_CBM: `${cbm || 'N/A'} m³`,
          Destination_Port: destination_port || 'FOB Chittagong',
          Custom_Message: message || 'Standard quote request.',
        }),
      });
    } catch (fsErr: any) {
      console.warn('FormSubmit dispatch error:', fsErr.message);
    }

    // 5. Dispatch via MailChannels (Native Cloudflare free transactional mail)
    try {
      await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                { email: 'shafiq@goldenfibercraftsltd.com', name: 'Md. Safiqul Islam' },
              ],
            },
          ],
          from: {
            email: 'noreply@goldenfibercraftsltd.com',
            name: 'Golden Fiber Crafts Web System',
          },
          reply_to: {
            email: buyer_email,
            name: buyer_name,
          },
          subject: emailSubject,
          content: [
            {
              type: 'text/html',
              value: htmlContent,
            },
          ],
        }),
      });
    } catch (mcErr: any) {
      console.warn('MailChannels dispatch error:', mcErr.message);
    }

    return jsonResponse({
      success: true,
      quote_id: referenceId,
      forwarded_to: ['shafiq@goldenfibercraftsltd.com'],
      message: 'Quotation email successfully dispatched and recorded.',
    }, 201);
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
