import React from 'react';
import { Globe2, Ship, Award, Users, Sparkles, Building2 } from 'lucide-react';
import { usePageTitle } from '../utils/usePageTitle';
import { getDynamicCardAnimation } from '../utils/scrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  usePageTitle('Global Clients & Export Portfolio');

  // Authentic Client Logos Extracted Directly from GFCL Corporate Presentation
  const officialBuyers = [
    { name: 'Aarong', logo: '/clients/aarong.png', country: 'Bangladesh', category: 'Ethical Lifestyle & Craft Retailing' },
    { name: 'Det Gamle Apotek', logo: '/clients/det_gamle_apotek.png', country: 'Denmark', category: 'Home Decor & Seasonal Crafts' },
    { name: 'Ten Thousand Villages', logo: '/clients/ten_thousand_villages.png', country: 'USA / Canada', category: 'Fair Trade Artisan Products' },
    { name: 'The Body Shop', logo: '/clients/the_body_shop.png', country: 'UK / Global', category: 'Sustainable Packaging & Baskets' },
    { name: 'Bozy', logo: '/clients/bozy.png', country: 'Australia', category: 'Boho Home Accents & Storage' },
    { name: 'Le Rêve', logo: '/clients/le_reve.png', country: 'Bangladesh', category: 'Fashion & Handcrafted Accessories' },
    { name: 'Dekker Decoration', logo: '/clients/dekker_decoration.png', country: 'Netherlands', category: 'European Home & Garden Accessories' },
    { name: 'Traidcraft', logo: '/clients/traidcraft.png', country: 'UK', category: 'Pioneering Fair Trade Organization' }
  ];

  // Authentic Certificate Images Extracted Directly from GFCL Product PPT
  const certificateImages = [
    { title: 'ISO 14001:2015', sub: 'Environmental Management System', code: 'Certified Green Facility', image: '/certificates/cert1.png' },
    { title: 'ISO 9001:2015', sub: 'Quality Management System', code: 'Zero-Defect Export Standard', image: '/certificates/cert2.png' },
    { title: 'amfori BSCI Member', sub: 'Business Social Compliance Initiative', code: 'Ethical Workplace Audited', image: '/certificates/cert3.png' },
    { title: 'OEKO-TEX® Standard 100', sub: 'Tested for Harmful Substances', code: 'Non-Toxic Tested Textiles', image: '/certificates/cert4.png' }
  ];

  const exportStats = [
    { label: 'Export Destinations', target: 20, suffix: '+ Countries', icon: Globe2 },
    { label: 'Monthly Container Capacity', target: 40, suffix: ' HQ Containers', icon: Ship },
    { label: 'Annual Export Turnover', target: 5, suffix: ' Million USD', icon: Award },
    { label: 'Artisan Community', target: 10000, suffix: '+ Artisans', icon: Users },
  ];

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-16 font-sans text-stone-900 animate-fadeIn space-y-8 sm:space-y-12">
      
      {/* 1. Standard Page Banner Header (Matches AboutPage, InfrastructurePage, SustainabilityPage) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] text-white">
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:py-9 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <Globe2 className="h-3 w-3 text-emerald-300" />
              Global Export Network & Buyer Portfolio
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Global Clients & Export Partnerships
            </h1>
            <p className="text-amber-300 font-serif italic text-sm sm:text-base font-bold">
              "Trusted Manufacturing & Export Partner for World-Renowned Brands & Fair Trade Importers"
            </p>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              Supplying premier international retail chains, boutique home brands, and wholesale importers across Europe, North America, Australia, and Asia with 100% natural handicrafts.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                <Sparkles className="h-3 w-3 text-amber-300" /> 20+ Export Countries
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                40 HQ Containers / Month
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                BSCI & ISO Audited
              </span>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* 2. Export Capacity Key Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exportStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="hover-lift flex items-center gap-4 rounded-2xl bg-white p-5 border border-stone-200 shadow-xs"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#14532d] text-amber-300 shadow-xs">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif text-xl font-black text-stone-900">
                    <AnimatedCounter target={item.target} suffix={item.suffix} />
                  </div>
                  <div className="text-xs text-stone-600 font-bold">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Official Buyers Showcase Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-950 px-3.5 py-1 text-xs font-black uppercase tracking-wider border border-emerald-200">
              <Building2 className="h-3.5 w-3.5 text-emerald-800" />
              <span>AUTHENTIC BUYER PORTFOLIO</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight">
              Our Official Buyers & Brand Partners
            </h2>
            
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
              Real brand partners and international retail chains featured in the Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-amber-600 mt-2" />
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
            {officialBuyers.map((buyer, idx) => {
              const cardAnim = getDynamicCardAnimation(idx);
              return (
                <div
                  key={idx}
                  className={`${cardAnim} hover-lift group flex flex-col items-center justify-between rounded-2xl bg-stone-50/80 p-5 sm:p-6 border border-stone-200/90 hover:bg-white hover:border-amber-500 hover:shadow-lg transition-all duration-300 text-center`}
                >
                  {/* Logo Container */}
                  <div className="h-24 sm:h-28 w-full rounded-xl bg-white flex items-center justify-center p-4 overflow-hidden border border-stone-100 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={buyer.logo}
                      alt={buyer.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                      loading="lazy"
                    />
                  </div>

                  {/* Buyer Name & Country */}
                  <div className="mt-3.5 space-y-0.5 w-full">
                    <h3 className="font-serif text-sm sm:text-base font-extrabold text-stone-900 group-hover:text-[#14532d] transition-colors">
                      {buyer.name}
                    </h3>
                    <p className="text-[11px] text-amber-800 font-bold flex items-center justify-center gap-1">
                      <Globe2 className="h-3 w-3" /> {buyer.country}
                    </p>
                    <p className="text-[10px] text-stone-500 font-medium truncate pt-0.5">
                      {buyer.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 4. Factory Certificates & Compliance Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/80 border border-amber-300 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-amber-950 shadow-2xs">
              <Award className="h-3.5 w-3.5 text-amber-800" />
              <span>OFFICIAL ACCREDITATION</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight">
              Factory Compliance & Certifications
            </h2>
            
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
              Authentic factory certificates and compliance documents extracted from Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-amber-600 mt-2" />
          </div>

          {/* Certificate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2">
            {certificateImages.map((cert, idx) => {
              const cardAnim = getDynamicCardAnimation(idx);
              return (
                <div
                  key={idx}
                  className={`${cardAnim} hover-lift group rounded-2xl bg-stone-50/80 p-5 border border-stone-200/90 hover:bg-white hover:border-emerald-600 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center`}
                >
                  {/* Certificate Image Frame */}
                  <div className="h-36 w-full rounded-xl bg-white border border-stone-200/70 flex items-center justify-center p-3 overflow-hidden shadow-2xs group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                      loading="lazy"
                    />
                  </div>

                {/* Details */}
                <div className="mt-4 space-y-1 w-full">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
                    {cert.code}
                  </span>
                  <h3 className="font-serif text-base font-extrabold text-black pt-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-semibold leading-snug">
                    {cert.sub}
                  </p>
                </div>
              </div>
            );
          })}
          </div>

        </div>

        {/* 5. Call to Action Quote Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#14532d] via-[#0f3e22] to-[#0a2916] p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
            Looking for an Audited OEM / ODM Handicraft Supplier?
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Contact our export management team today to receive physical material swatches, custom sample prototypes, and formal FOB container quotes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Request B2B Quote
            </button>
            <a
              href="https://wa.me/8801916183583"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200"
            >
              WhatsApp Export Desk
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ClientsPage;
