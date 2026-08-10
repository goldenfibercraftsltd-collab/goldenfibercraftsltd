import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onOpenQuoteModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <MessageSquare className="h-3.5 w-3.5" />
              Direct Factory Inquiry
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Us & Request Sample
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Have a custom product requirement or price quotation inquiry? Our team responds within 1 business hour.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-stone-200/80 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-stone-900">Head Office & Factory</h2>
              
              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Corporate Address</h4>
                    <p className="text-xs text-stone-500">Dhaka Industrial Zone, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Email Address</h4>
                    <a href="mailto:goldenfibercraftsltd@gmail.com" className="text-xs text-emerald-700 font-semibold hover:underline">
                      goldenfibercraftsltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">WhatsApp / Call Direct</h4>
                    <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noreferrer" className="text-xs text-emerald-700 font-semibold hover:underline">
                      +880-1617-778488
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Working Hours</h4>
                    <p className="text-xs text-stone-500">Saturday – Thursday: 9:00 AM – 7:00 PM (GMT+6)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full rounded-2xl bg-emerald-700 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-emerald-600 transition-all"
                >
                  Open Fast Quote Request Modal
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-950 p-6 text-white space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Globe className="h-4 w-4" />
                Worldwide Export Ready
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                We accept FOB, CIF, DDP shipping terms with L/C, T/T payment terms for global buyers.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-stone-200/80">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Message Received!</h3>
                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out to Golden Fiber Crafts Ltd. Our export team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-stone-900 px-6 py-2.5 text-xs font-semibold text-white shadow hover:bg-stone-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-stone-900">Send an Inquiry</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Apparel"
                      className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Message / Product Specification *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about quantity, dimensions, materials, or target delivery date..."
                    className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 py-3.5 text-sm font-bold text-white shadow-xl hover:from-emerald-500 hover:to-green-600 transition-all hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  Submit Factory Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
