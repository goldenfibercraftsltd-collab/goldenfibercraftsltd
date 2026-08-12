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
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner with reveal-up */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <MessageSquare className="h-3.5 w-3.5" />
              Direct Factory Inquiry
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Us & Request Sample
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Have a custom product requirement or price quotation inquiry? Our team responds within 1 business hour.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Cards with reveal-left */}
          <div className="lg:col-span-5 space-y-6 reveal-left">
            
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-stone-200/80 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-stone-900">Head Office & Factory</h2>
              
              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3 hover-lift-sm p-1 rounded-xl transition-all">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Corporate Address</h4>
                    <p className="text-xs text-stone-500">Dhaka Industrial Zone, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift-sm p-1 rounded-xl transition-all">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Email Address</h4>
                    <a href="mailto:goldenfibercraftsltd@gmail.com" className="text-xs text-emerald-700 font-semibold hover:underline">
                      goldenfibercraftsltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift-sm p-1 rounded-xl transition-all">
                  <div className="h-10 w-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">WhatsApp / Call Direct</h4>
                    <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noreferrer" className="text-xs text-emerald-700 font-semibold hover:underline">
                      +880-1617-778488
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift-sm p-1 rounded-xl transition-all">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 shadow-xs">
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
                  className="w-full rounded-2xl bg-emerald-700 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-emerald-600 transition-all btn-interactive"
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
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We accept FOB, CIF, DDP shipping terms with L/C, T/T payment terms for global buyers.
              </p>
            </div>

          </div>

          {/* Contact Form with reveal-right */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-stone-200/80 reveal-right">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Message Received!</h3>
                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto font-light">
                  Thank you for reaching out to Golden Fiber Crafts Ltd. Our export team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-stone-900 px-6 py-2.5 text-xs font-semibold text-white shadow hover:bg-stone-800 btn-interactive"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-stone-900">Send an Inquiry</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-stone-300 p-3 text-xs focus:border-emerald-600 focus:outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@retailer.com"
                      className="w-full rounded-xl border border-stone-300 p-3 text-xs focus:border-emerald-600 focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-stone-300 p-3 text-xs focus:border-emerald-600 focus:outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">Company / Brand Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Nordic Living AS"
                      className="w-full rounded-xl border border-stone-300 p-3 text-xs focus:border-emerald-600 focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">Message / Product Request *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the products, quantities, or custom requirements you are interested in..."
                    className="w-full rounded-xl border border-stone-300 p-3 text-xs focus:border-emerald-600 focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-8 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-emerald-600 transition-all btn-interactive"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message to Export Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
