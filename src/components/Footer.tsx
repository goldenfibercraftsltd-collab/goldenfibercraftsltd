import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUp, MessageCircle, FileText, HelpCircle, Download, Building2, User } from 'lucide-react';
import { TAGLINE } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#053d2e] text-white font-sans border-t-4 border-emerald-500 shadow-2xl">
      
      {/* Main Footer Content Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: About / Branding (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3">
            <Link to="/" onClick={scrollToTop} className="block group">
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-emerald-400/30 overflow-hidden hover:scale-105 transition-transform duration-300 w-56 flex flex-col items-center justify-center text-center">
                {/* Official Green Leaf GF Emblem */}
                <img
                  src="/logo-icon.png"
                  alt="Golden Fiber Crafts Ltd."
                  className="h-16 w-auto object-contain"
                />
                
                {/* Brand Typography */}
                <div className="mt-2 text-center w-full">
                  <h3 className="font-serif text-sm font-black text-[#14532d] tracking-wider uppercase leading-none">
                    GOLDEN FIBER
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 my-1">
                    <span className="h-[1px] w-4 bg-[#14532d]/40"></span>
                    <span className="text-[11px] font-sans font-black text-[#14532d] uppercase tracking-widest">
                      CRAFTS LTD.
                    </span>
                    <span className="h-[1px] w-4 bg-[#14532d]/40"></span>
                  </div>
                </div>

                {/* Tagline Directly Underneath */}
                <div className="mt-1.5 pt-1.5 border-t border-stone-200 w-full">
                  <p className="text-xs text-stone-800 font-serif italic text-center font-normal">
                    "{TAGLINE}"
                  </p>
                </div>
              </div>
            </Link>

            {/* Official Website URL Under Logo */}
            <a
              href="https://www.goldenfibercraftsltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-amber-300 hover:text-amber-200 font-normal transition-colors flex items-center gap-1.5 pt-1"
            >
              <Globe className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>www.goldenfibercraftsltd.com</span>
            </a>

            <p className="text-xs sm:text-sm text-emerald-100/90 font-normal leading-relaxed max-w-xs">
              Bangladesh’s premier manufacturer & global exporter of sustainable, 100% natural fiber handicrafts.
            </p>
          </div>

          {/* Col 2: Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-medium text-amber-300 uppercase tracking-wider border-b border-emerald-700/80 pb-1.5">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal text-emerald-100">
              <li>
                <a
                  href="/company-profile.pdf"
                  download="Golden_Fiber_Crafts_Ltd_Company_Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Download className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>Company Profile</span>
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={scrollToTop}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={scrollToTop}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <HelpCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Locations (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif text-base font-medium text-amber-300 uppercase tracking-wider border-b border-emerald-700/80 pb-1.5">
              Contact & Locations
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-100 font-normal leading-relaxed">
              
              {/* MD Safiqul Islam */}
              <div className="flex items-center gap-2.5">
                <User className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-white font-normal">MD. Safiqul Islam</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:shafiq@goldenfibercraftsltd.com"
                  className="hover:underline text-white font-normal"
                >
                  shafiq@goldenfibercraftsltd.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-300 shrink-0" />
                <a
                  href="https://wa.me/8801916183583?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-200 font-normal"
                >
                  WhatsApp: +8801916-183583
                </a>
              </div>

              {/* Corporate Office */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-amber-300 font-normal block text-xs uppercase tracking-wider">
                    Corporate Office:
                  </span>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              {/* Unit 1 */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-300 font-normal block text-xs uppercase tracking-wider">
                    Unit 1 (Salna, Gazipur):
                  </span>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    Paler para, Akter market (Beside UTAH Garments), Salna, Gazipur, Bangladesh
                  </span>
                </div>
              </div>

              {/* Unit 2 */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-300 font-normal block text-xs uppercase tracking-wider">
                    Unit 2 (Kishoreganj):
                  </span>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    Kacharipara, Milonganj Bazar, Nilganj, Kishoreganj, Bangladesh
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#032e23] py-3.5 px-4 text-center text-xs sm:text-sm text-emerald-100 font-normal border-t border-emerald-900/80">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© Golden Fiber Crafts Ltd. All rights reserved.</span>
          <span className="text-amber-300 font-serif italic font-normal">"{TAGLINE}"</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors font-normal cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
