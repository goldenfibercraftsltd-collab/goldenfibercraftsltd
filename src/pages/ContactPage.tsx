import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, CheckCircle2, ShieldCheck, Sparkles, Building2, User } from 'lucide-react';

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
    <div className="bg-[#fcfbf9] min-h-screen pb-24 font-sans text-stone-900 animate-fadeIn space-y-12 sm:space-y-16">
      
      {/* 1. Hero Page Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] text-white">
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <MessageSquare className="h-3.5 w-3.5 text-emerald-300" />
              Global Export Inquiries
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Contact Us & Request Sample
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-medium">
              Have a custom product requirement, OEM branding specification, or container volume price quotation inquiry? Our export desk responds within 1 business hour.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-emerald-400/20 blur-xl group-hover:bg-emerald-400/35 transition-all duration-500"></div>
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 p-3.5 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo-icon.png"
                  alt="Golden Fiber Crafts Ltd."
                  className="h-full w-full object-contain filter drop-shadow-md brightness-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <img src="/logo-icon.png" alt="Watermark" className="h-64 w-64 lg:h-80 lg:w-80 object-contain filter invert" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Factory Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Leadership Direct Contacts */}
            <div className="rounded-3xl bg-gradient-to-br from-[#064e3b] via-stone-900 to-stone-950 p-6 sm:p-7 text-white shadow-lg border border-emerald-600/40 space-y-5">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Executive Management Direct Contacts</span>
              </div>
              
              <div className="space-y-3.5">
                {/* Managing Director */}
                <div className="flex items-start gap-3.5 bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <img
                    src="/about/md_safiqul_islam.png"
                    alt="Md. Safiqul Islam - CEO & Managing Director"
                    className="h-14 w-14 rounded-xl object-cover border-2 border-amber-400/80 shrink-0 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-white leading-tight">Md. Safiqul Islam</h4>
                    <p className="text-xs text-amber-300 font-bold mt-0.5">CEO & Managing Director</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                      <a href="tel:+8801916183583" className="text-emerald-300 hover:text-white flex items-center gap-1 font-extrabold">
                        <Phone className="h-3.5 w-3.5" /> +8801916-183583
                      </a>
                      <a 
                        href="https://wa.me/8801916183583" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-2 py-0.5 rounded-md bg-emerald-600/60 hover:bg-emerald-600 text-white font-extrabold text-[11px] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Senior Director */}
                <div className="flex items-start gap-3.5 bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <img
                    src="/about/md_nazrul_islam_uzzal.png"
                    alt="Md. Nazrul Islam Uzzal - Senior Director & GM"
                    className="h-14 w-14 rounded-xl object-cover border-2 border-emerald-400/80 shrink-0 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-white leading-tight">Md. Nazrul Islam Uzzal</h4>
                    <p className="text-xs text-emerald-300 font-bold mt-0.5">Senior Director & General Manager</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                      <a href="tel:+8801721994082" className="text-emerald-300 hover:text-white flex items-center gap-1 font-extrabold">
                        <Phone className="h-3.5 w-3.5" /> +8801721-994082
                      </a>
                      <a 
                        href="https://wa.me/8801721994082" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-2 py-0.5 rounded-md bg-emerald-600/60 hover:bg-emerald-600 text-white font-extrabold text-[11px] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Head Office & Factory Units */}
            <div className="rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-stone-200/80 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-black text-stone-950">Head Office & Production Units</h2>
              
              <div className="space-y-3.5 text-sm">
                {/* Corporate Address */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-950 text-xs uppercase tracking-wider">Corporate Office</h4>
                    <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed mt-0.5">
                      House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Factory Unit 1 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-950 text-xs uppercase tracking-wider">Factory Unit 1 (Gazipur)</h4>
                    <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed mt-0.5">
                      Paler para, Akter market (Beside UTAH Garments), Salna, Gazipur, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Factory Unit 2 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-950 text-xs uppercase tracking-wider">Factory Unit 2 (Kishoreganj)</h4>
                    <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed mt-0.5">
                      Kacharipara, Milonganj Bazar, Nilganj, Kishoreganj, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-950 text-xs uppercase tracking-wider">Official Email Desk</h4>
                    <div className="space-y-0.5 mt-0.5">
                      <a href="mailto:info@goldenfibercrafts.com" className="block text-xs sm:text-sm text-emerald-800 font-black hover:underline">
                        info@goldenfibercrafts.com
                      </a>
                      <a href="mailto:goldenfibercraftsltd@gmail.com" className="block text-xs sm:text-sm text-stone-700 font-bold hover:underline">
                        goldenfibercraftsltd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {onOpenQuoteModal && (
                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full rounded-2xl bg-emerald-800 py-3.5 text-xs sm:text-sm font-black text-white shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
                  >
                    Open Fast Sample & Quote Request Modal
                  </button>
                </div>
              )}
            </div>

            {/* Export Terms Box */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950 to-stone-900 p-6 text-white space-y-2.5 shadow-md border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
                <Globe className="h-4 w-4" />
                Worldwide Export Terms
              </div>
              <p className="text-xs sm:text-sm text-stone-100 leading-relaxed font-medium">
                We accept FOB Chittagong Port, CIF, CFR, and DDP terms with LC at Sight or TT (30% Advance, 70% against shipping documents).
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-7 sm:p-10 shadow-sm border border-stone-200/80">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">Inquiry Received Successfully!</h3>
                <p className="text-stone-700 text-sm sm:text-base max-w-md mx-auto font-medium">
                  Thank you for reaching out to Golden Fiber Crafts Ltd. Our export merchandising team will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-stone-950 px-7 py-3 text-xs sm:text-sm font-black text-white shadow-md hover:bg-emerald-800 transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">Send an Export Inquiry</h2>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium">Fill in your buyer details below for swift custom quotation & catalog samples.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Davis"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-xs sm:text-sm text-stone-900 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-xs sm:text-sm text-stone-900 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-xs sm:text-sm text-stone-900 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nordic Living Imports"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-xs sm:text-sm text-stone-900 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
                    Product Requirements & Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Specify item codes, materials (Jute, Seagrass, Kaisa Grass), required dimensions, estimated quantities, and target export destination port..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-3 text-xs sm:text-sm text-stone-900 font-semibold focus:bg-white focus:border-emerald-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-950 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg hover:from-emerald-700 hover:to-emerald-900 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};
