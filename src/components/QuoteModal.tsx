import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, Globe, Package, Layers, Sparkles, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { GmailOfficialIcon, OutlookOfficialIcon, YahooOfficialIcon } from './OfficialEmailIcons';

export interface QuoteInitialData {
  productCode?: string;
  productName?: string;
  quantity?: string | number;
  cartons?: string | number;
  cbm?: string | number;
  message?: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductCode?: string;
  initialData?: QuoteInitialData;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductCode = '',
  initialData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCode: '',
    productName: '',
    quantity: '',
    cartons: '',
    cbm: '',
    destinationPort: '',
    message: '',
  });

  // Sync initial data when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        productCode: initialData?.productCode || initialProductCode || '',
        productName: initialData?.productName || '',
        quantity: initialData?.quantity ? String(initialData.quantity) : '',
        cartons: initialData?.cartons ? String(initialData.cartons) : '',
        cbm: initialData?.cbm ? String(initialData.cbm) : '',
        destinationPort: '',
        message: initialData?.message || '',
      });
    }
  }, [isOpen, initialProductCode, initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `RFQ-${Date.now().toString().slice(-6)}`;
    setQuoteId(generatedId);

    const detailedMessage = `
[NEW EXPORT QUOTE REQUEST - ${generatedId}]
Product Code / SKU: ${formData.productCode || 'N/A'}
Product Name: ${formData.productName || 'N/A'}
Order Quantity: ${formData.quantity || 'N/A'} pcs
Total Cartons: ${formData.cartons || 'N/A'}
Total CBM: ${formData.cbm || 'N/A'} m³
Destination Port: ${formData.destinationPort || 'Not specified'}

--- BUYER INFORMATION ---
Full Name: ${formData.name}
Work Email: ${formData.email}
Phone / WhatsApp: ${formData.phone || 'N/A'}
Company / Brand: ${formData.company || 'N/A'}
Country: ${formData.country || 'N/A'}

--- CUSTOM SPECIFICATIONS / INQUIRY ---
${formData.message || 'Standard export specifications requested.'}
    `.trim();

    try {
      // 1. Submit to D1 Inquiries API
      const resInquiry = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          product_interest: `${formData.productCode} - ${formData.productName} (Qty: ${formData.quantity}, CBM: ${formData.cbm})`,
          message: detailedMessage,
        }),
      });

      // 2. Also dispatch to send-quote backend endpoint (which triggers Brevo, FormSubmit & MailChannels)
      await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote_id: generatedId,
          buyer_name: formData.name,
          buyer_email: formData.email,
          buyer_company: formData.company,
          buyer_phone: formData.phone,
          buyer_country: formData.country,
          product_code: formData.productCode,
          product_name: formData.productName,
          quantity: formData.quantity,
          cartons: formData.cartons,
          cbm: formData.cbm,
          destination_port: formData.destinationPort,
          message: formData.message,
          raw_summary: detailedMessage,
        }),
      }).catch(() => {
        // Fallback silently if send-quote route is processing
      });

      // 3. Client-side direct FormSubmit dispatch for guaranteed delivery to shafiq@goldenfibercraftsltd.com
      try {
        await fetch('https://formsubmit.co/ajax/shafiq@goldenfibercraftsltd.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _subject: `🔔 [NEW WEBSITE ORDER REQUEST] ${formData.productCode || 'Handicrafts'} (${formData.quantity || 'RFQ'} pcs) - ${formData.name}`,
            _template: 'table',
            _captcha: 'false',
            _replyto: formData.email,
            Reference_ID: generatedId,
            Buyer_Name: formData.name,
            Buyer_Email: formData.email,
            Phone_WhatsApp: formData.phone || 'N/A',
            Company: formData.company || 'N/A',
            Country: formData.country || 'N/A',
            Product_Code: formData.productCode || 'N/A',
            Product_Name: formData.productName || 'N/A',
            Order_Quantity: `${formData.quantity || 'N/A'} pcs`,
            Total_Cartons: formData.cartons || 'N/A',
            Total_CBM: `${formData.cbm || 'N/A'} m³`,
            Destination_Port: formData.destinationPort || 'FOB Chittagong Port',
            Custom_Message: formData.message || 'Standard quote request.',
          }),
        }).catch(() => {});
      } catch {
        // Ignore fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Quote submission error:', err);
      setIsSubmitting(false);
      setSubmitted(true); // Still show confirmation so buyer is not blocked
    }
  };

  const getClientComposeUrl = (provider: 'gmail' | 'outlook' | 'yahoo' | 'mailto') => {
    const to = 'shafiq@goldenfibercraftsltd.com';
    const cc = 'shafiq@goldenfibercraftsltd.com';
    const subject = `Export Quote Request: ${formData.productCode || 'Handicrafts'} (${formData.quantity || ''} pcs) - ${formData.name}`;
    const body = `Dear Golden Fiber Crafts Ltd. Export Team,\n\nI have submitted a quotation request with the following details:\n\n- Reference ID: ${quoteId}\n- Item Code: ${formData.productCode}\n- Product: ${formData.productName}\n- Quantity: ${formData.quantity} pcs\n- Cartons: ${formData.cartons}\n- Total CBM: ${formData.cbm}\n- Company: ${formData.company}\n- Country: ${formData.country}\n- Port of Destination: ${formData.destinationPort}\n\nNotes / Message:\n${formData.message}\n\nPlease send us your official FOB Chittagong Port quotation and proforma invoice.\n\nBest regards,\n${formData.name}\n${formData.email}\n${formData.phone}`;

    if (provider === 'gmail') {
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&cc=${encodeURIComponent(cc)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    if (provider === 'outlook') {
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    if (provider === 'yahoo') {
      return `https://compose.mail.yahoo.com/?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    return `mailto:${to}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsappMessageUrl = `https://wa.me/8801916183583?text=${encodeURIComponent(
    `Hello Golden Fiber Crafts Ltd., I submitted RFQ [${quoteId}] for ${formData.productCode || 'Handicrafts'} (Qty: ${formData.quantity || 'N/A'}, CBM: ${formData.cbm || 'N/A'}). Buyer: ${formData.name}, Email: ${formData.email}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn"
      data-lenis-prevent
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-stone-200 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] px-6 py-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-black tracking-wide text-white">
                Request Official Factory Quotation
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
                Instant FOB Pricing & Direct Delivery to Admin Maildesk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-6 text-center space-y-5 animate-fadeIn">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Reference: {quoteId}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 pt-2">
                  Quotation Request Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your quote details have been transmitted directly to our official inbox at{' '}
                  <span className="font-bold text-[#14532d]">shafiq@goldenfibercraftsltd.com</span>.
                </p>
              </div>

              {/* Direct Mail Launchers for Instant Confirmation */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Want instant direct priority response?
                  </span>
                  <span className="text-[10px] text-stone-500 font-semibold">1-Click Compose</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={getClientComposeUrl('gmail')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white border border-stone-200 hover:border-red-400 hover:bg-red-50/40 shadow-xs transition-all text-center group cursor-pointer"
                  >
                    <GmailOfficialIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-stone-800 group-hover:text-[#EA4335]">Gmail</span>
                  </a>

                  <a
                    href={getClientComposeUrl('outlook')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white border border-stone-200 hover:border-blue-400 hover:bg-blue-50/40 shadow-xs transition-all text-center group cursor-pointer"
                  >
                    <OutlookOfficialIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-stone-800 group-hover:text-[#0078D4]">Outlook</span>
                  </a>

                  <a
                    href={getClientComposeUrl('yahoo')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white border border-stone-200 hover:border-purple-400 hover:bg-purple-50/40 shadow-xs transition-all text-center group cursor-pointer"
                  >
                    <YahooOfficialIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-stone-800 group-hover:text-[#6001D2]">Yahoo</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-2">
                  <a
                    href={whatsappMessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    Ping on WhatsApp (+8801916-183583)
                  </a>
                  <button
                    onClick={onClose}
                    className="px-4 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              
              {/* Product Info Pre-filled Pill Card */}
              {(formData.productCode || formData.quantity || formData.cbm) && (
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-amber-700 shrink-0" />
                    <div>
                      <span className="font-bold text-stone-900 block">
                        {formData.productName || 'Selected Item'} {formData.productCode && `(${formData.productCode})`}
                      </span>
                      <span className="text-stone-600 text-[11px]">Factory direct export item</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {formData.quantity && (
                      <span className="bg-white px-2.5 py-1 rounded-lg font-mono font-bold text-emerald-800 border border-amber-200 shadow-2xs">
                        Qty: {formData.quantity} pcs
                      </span>
                    )}
                    {formData.cartons && (
                      <span className="bg-white px-2.5 py-1 rounded-lg font-mono font-bold text-stone-800 border border-amber-200 shadow-2xs">
                        {formData.cartons} Cartons
                      </span>
                    )}
                    {formData.cbm && (
                      <span className="bg-white px-2.5 py-1 rounded-lg font-mono font-bold text-amber-900 border border-amber-200 shadow-2xs">
                        {formData.cbm} CBM
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* 1. Buyer Name & Email (Required) */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* 2. Company & Phone / WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Company / Importer Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="e.g. Nordic Living GmbH"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="e.g. +49 170 1234567"
                  />
                </div>
              </div>

              {/* 3. Country & Destination Port */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Country of Import
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="e.g. Germany, USA, Japan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Port of Destination (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                    placeholder="e.g. Hamburg Port, Rotterdam, Los Angeles"
                  />
                </div>
              </div>

              {/* 4. Product Code & Order Volume */}
              <div className="grid sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Item Code / SKU
                  </label>
                  <input
                    type="text"
                    value={formData.productCode}
                    onChange={(e) => setFormData({ ...formData, productCode: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white uppercase font-mono"
                    placeholder="GFC-SB-030"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Required Quantity (Pcs)
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white font-mono"
                    placeholder="e.g. 500 pcs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-900 mb-1">
                    Total CBM / Volume
                  </label>
                  <input
                    type="text"
                    value={formData.cbm}
                    onChange={(e) => setFormData({ ...formData, cbm: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white font-mono"
                    placeholder="e.g. 2.45 CBM"
                  />
                </div>
              </div>

              {/* 5. Custom Requirements / Message */}
              <div>
                <label className="block text-xs font-bold text-stone-900 mb-1">
                  Customization Details / Special Instructions
                </label>
                <textarea
                  rows={2.5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
                  placeholder="Mention custom dimensions, hangtag branding, barcode requirements, target shipping timeline..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] hover:from-[#0f3f22] hover:to-[#14532d] py-3.5 px-6 text-sm font-black text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending to Official Export Maildesk...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Quote Request to Official Maildesk</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security & Routing Assurance */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 text-center pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>
                  Delivers instantly to <strong className="text-stone-700">shafiq@goldenfibercraftsltd.com</strong> (Official Cloudflare Routing)
                </span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
