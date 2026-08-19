import React from 'react';
import { GlobalClients } from '../components/GlobalClients';
import { HeartHandshake, ArrowRight, Award } from 'lucide-react';
import { ScrollTypingText } from '../components/ScrollTypingText';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
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
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-2.5">
            <ScrollTypingText
              as="h1"
              text="Buyers We Work With"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
              speed={35}
            />
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-normal">
              Golden Fiber Crafts Ltd. is a trusted manufacturing & export partner for world-renowned fair trade organizations, ethical global retailers, and international home decor importers.
            </p>
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
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto font-light">
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

        {/* Global Export Reach */}
        <GlobalClients />

        {/* Call to Action with reveal-up */}
        <div className="reveal-up text-center bg-gradient-to-r from-emerald-800 to-green-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">Partner With a Certified Fair Trade Manufacturer</h2>
          <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto font-light">
            Get instant competitive price quotes, custom sample prototyping, and full compliance documentation.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 shadow-md hover:bg-emerald-50 transition-all btn-interactive"
          >
            <span>Request Instant Quote</span>
            <ArrowRight className="h-4 w-4 btn-arrow" />
          </button>
        </div>

      </div>
    </div>
  );
};
