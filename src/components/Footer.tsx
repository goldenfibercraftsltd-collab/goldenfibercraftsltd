import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUp, MessageCircle, FileText, HelpCircle, Download, Building2, User, Share2 } from 'lucide-react';
import { 
  SiteSettingsData, 
  DEFAULT_SITE_SETTINGS, 
  getLocalSiteSettings, 
  fetchLiveSiteSettings 
} from '../utils/siteContentStore';

export const Footer: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettingsData>(() => getLocalSiteSettings());

  useEffect(() => {
    fetchLiveSiteSettings().then(data => {
      if (data) setSettings(data);
    });

    const handleUpdated = (e: any) => {
      if (e.detail) setSettings(e.detail);
      else setSettings(getLocalSiteSettings());
    };

    window.addEventListener('gfcl_settings_updated', handleUpdated);
    return () => window.removeEventListener('gfcl_settings_updated', handleUpdated);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappClean = (settings.whatsapp || '8801916183583').replace(/[^0-9]/g, '');

  return (
    <footer className="bg-[#053d2e] text-white font-sans border-t-4 border-emerald-500 shadow-2xl">
      
      {/* Main Footer Content Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: About / Branding (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3.5 group transition-transform duration-300 hover:scale-[1.02] pb-1">
              {/* Official Green Leaf GF Emblem */}
              <img
                src="/logo-icon.png"
                alt={settings.site_name || "Golden Fiber Crafts Ltd."}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-md brightness-110 shrink-0"
              />
              
              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-black text-white tracking-wide uppercase leading-tight drop-shadow-xs">
                  GOLDEN FIBER
                </span>
                <span className="text-xs sm:text-sm font-sans font-black text-amber-400 tracking-[0.28em] pl-[0.28em] uppercase mt-0.5 drop-shadow-xs text-center">
                  CRAFTS LTD.
                </span>
              </div>
            </Link>

            {/* Official Website URL Under Logo */}
            <a
              href={settings.official_website.startsWith('http') ? settings.official_website : `https://${settings.official_website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-amber-300 hover:text-amber-200 font-normal transition-colors flex items-center gap-1.5 pt-1"
            >
              <Globe className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>{settings.official_website.replace(/^https?:\/\//, '')}</span>
            </a>

            <p className="text-xs sm:text-sm text-emerald-100/90 font-normal leading-relaxed max-w-xs">
              {settings.footer_description || "Bangladesh’s premier manufacturer & global exporter of sustainable, 100% natural fiber handicrafts."}
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
                  href={settings.footer_company_profile_url || "/company-profile.pdf"}
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
                  to={settings.footer_terms_url || "/terms"}
                  onClick={scrollToTop}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to={settings.footer_faq_url || "/faq"}
                  onClick={scrollToTop}
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <HelpCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>FAQ</span>
                </Link>
              </li>
              {settings.footer_info_custom_title_1 && (
                <li>
                  <a
                    href={settings.footer_info_custom_url_1 || "#"}
                    className="hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{settings.footer_info_custom_title_1}</span>
                  </a>
                </li>
              )}
              {settings.footer_info_custom_title_2 && (
                <li>
                  <a
                    href={settings.footer_info_custom_url_2 || "#"}
                    className="hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{settings.footer_info_custom_title_2}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact & Locations (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif text-base font-medium text-amber-300 uppercase tracking-wider border-b border-emerald-700/80 pb-1.5">
              Contact & Locations
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-100 font-normal leading-relaxed">
              
              {/* MD Name */}
              <div className="flex items-center gap-2.5">
                <User className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="text-white font-normal">{settings.md_name}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${settings.official_email}`}
                  className="hover:underline text-white font-normal"
                >
                  {settings.official_email}
                </a>
              </div>

              {/* WhatsApp / Phone */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-300 shrink-0" />
                <a
                  href={`https://wa.me/${whatsappClean}?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-200 font-normal"
                >
                  WhatsApp: {settings.whatsapp}
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
                    {settings.corporate_office}
                  </span>
                </div>
              </div>

              {/* Factory 1 */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-300 font-normal block text-xs uppercase tracking-wider">
                    Factory 1 (Gazipur):
                  </span>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    {settings.factory_unit_1}
                  </span>
                </div>
              </div>

              {/* Factory 2 */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-300 font-normal block text-xs uppercase tracking-wider">
                    Factory 2 (Kishoreganj):
                  </span>
                  <span className="text-white font-normal text-xs sm:text-sm">
                    {settings.factory_unit_2}
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
          <span>{settings.copyright_text || "Golden Fiber Crafts Ltd. All rights reserved."}</span>
          <span className="text-amber-300 font-serif italic font-normal">"{settings.tagline}"</span>
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
