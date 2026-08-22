import React from 'react';
import { ScrollTypingText } from '../components/ScrollTypingText';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = () => {
  // Authentic Client Logos Extracted Directly from GFCL Corporate Presentation
  const officialBuyers = [
    { name: 'Aarong', logo: '/clients/aarong.png' },
    { name: 'Det Gamle Apotek', logo: '/clients/det_gamle_apotek.png' },
    { name: 'Ten Thousand Villages', logo: '/clients/ten_thousand_villages.png' },
    { name: 'The Body Shop', logo: '/clients/the_body_shop.png' },
    { name: 'Bozy', logo: '/clients/bozy.png' },
    { name: 'Le Reve', logo: '/clients/le_reve.png' },
    { name: 'Dekker Decoration', logo: '/clients/dekker_decoration.png' },
    { name: 'Traidcraft', logo: '/clients/traidcraft.png' }
  ];

  // Authentic Certificate Images Extracted Directly from GFCL Product PPT (Slide 3: CERTIFICATE)
  const certificateImages = [
    { title: 'ISO 14001 Environmental Management', image: '/certificates/cert1.png' },
    { title: 'ISO 9001:2015 Quality Management', image: '/certificates/cert2.png' },
    { title: 'BSCI Social Compliance Initiative', image: '/certificates/cert3.png' },
    { title: 'OEKO-TEX® Standard 100 Certification', image: '/certificates/cert4.png' }
  ];

  const getCardSlideClass = (idx: number) => {
    const col = idx % 4;
    if (col === 0) return 'card-slide-far-left stagger-3';
    if (col === 1) return 'card-slide-left stagger-1';
    if (col === 2) return 'card-slide-right stagger-1';
    return 'card-slide-far-right stagger-3';
  };

  return (
    <div className="bg-amber-50/20 py-6 sm:py-8 space-y-10 animate-fadeIn font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner with reveal-up */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] p-6 sm:p-9 text-white shadow-xl">
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} 
          />
          <div className="relative z-10 max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              Global Export Partnerships
            </div>
            <ScrollTypingText
              as="h1"
              text="Buyers We Work With"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white"
              speed={35}
            />
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              Golden Fiber Crafts Ltd. is a trusted manufacturing & export partner for world-renowned fair trade organizations, ethical global retailers, and international home decor importers.
            </p>
          </div>

          {/* Large Decorative Watermark in Background (Fully Visible) */}
          <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
            <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
          </div>
        </div>

        {/* Real Buyers Grid - Authentic Brand Logos Only */}
        <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center space-y-2 reveal-up">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">AUTHENTIC CLIENT PORTFOLIO</span>
            <ScrollTypingText
              as="h2"
              text="Our Official Buyers"
              className="font-serif text-2xl sm:text-4xl font-extrabold text-black"
              speed={35}
            />
            <p className="text-stone-900 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Real brand partners featured in the Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {officialBuyers.map((buyer, idx) => {
              const slideAnim = getCardSlideClass(idx);
              return (
                <div
                  key={idx}
                  className={`${slideAnim} hover-lift group relative flex items-center justify-center rounded-2xl bg-stone-50/70 p-6 sm:p-8 border border-stone-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300 h-36 sm:h-44`}
                  title={buyer.name}
                >
                  <img
                    src={buyer.logo}
                    alt={buyer.name}
                    className="max-h-20 sm:max-h-24 max-w-[85%] w-auto object-contain filter group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Authentic Factory Certificates Section with Middle-Outward Card Slide */}
        <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6 border border-emerald-500/20">
          <div className="text-center space-y-2 reveal-up relative z-10">
            <ScrollTypingText
              as="h2"
              text="Factory Certificates & Compliance"
              className="font-serif text-2xl sm:text-4xl font-bold text-white"
              speed={35}
            />
            <p className="text-stone-100 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Authentic factory certificates and compliance documents extracted from Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
          </div>

          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <img src="/logo-icon.png" alt="GF Icon" className="h-64 w-64 filter invert" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificateImages.map((cert, idx) => {
              const slideAnim = getCardSlideClass(idx);
              return (
                <div key={idx} className={`${slideAnim} hover-lift group rounded-2xl bg-white p-4 text-stone-900 shadow-xl border border-emerald-500/30`}>
                  <div className="h-44 w-full overflow-hidden rounded-xl bg-stone-100 flex items-center justify-center p-2">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-xs font-bold text-stone-900 text-center line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

