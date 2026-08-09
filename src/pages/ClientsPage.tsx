import React from 'react';
import { GlobalClients } from '../components/GlobalClients';
import { HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  // Authentic Client Logos Extracted Directly from GFCL Product PPT
  const officialBuyers = [
    {
      name: 'Aarong',
      logo: '/clients/aarong.png',
      origin: 'Bangladesh',
      category: 'Ethical Lifestyle & Craft Giant',
      description: 'Bangladesh’s iconic fair trade retail chain empowering thousands of rural artisans.',
      badge: 'Premier Partner'
    },
    {
      name: 'Det Gamle Apotek',
      logo: '/clients/det_gamle_apotek.png',
      origin: 'Denmark / Scandinavia',
      category: 'Scandinavia Home Decor',
      description: 'Renowned Nordic home decor, seasonal accents, and handcrafted basket importer.',
      badge: 'European Buyer'
    },
    {
      name: 'Ten Thousand Villages',
      logo: '/clients/ten_thousand_villages.png',
      origin: 'USA & Canada',
      category: 'Fair Trade Pioneer',
      description: 'One of the world’s largest fair trade organizations bringing ethical crafts to North America.',
      badge: 'North America Buyer'
    },
    {
      name: 'The Body Shop',
      logo: '/clients/the_body_shop.png',
      origin: 'United Kingdom / Global',
      category: 'Global Ethical Beauty & Gifts',
      description: 'World-famous eco-ethical beauty brand sourcing natural jute bags and artisanal gift packaging.',
      badge: 'Global Brand'
    },
    {
      name: 'Bozy',
      logo: '/clients/bozy.png',
      origin: 'Europe / International',
      category: 'Eco & Sustainable Living',
      description: 'Sustainable lifestyle brand specializing in natural seagrass and jute home accessories.',
      badge: 'Eco Living'
    },
    {
      name: 'Le Reve',
      logo: '/clients/le_reve.png',
      origin: 'International Fashion',
      category: 'Apparel & Lifestyle Chain',
      description: 'Leading apparel and lifestyle retail chain sourcing eco-friendly accessories and trims.',
      badge: 'Lifestyle Retail'
    },
    {
      name: 'Dekker Decoration',
      logo: '/clients/dekker_decoration.png',
      origin: 'Netherlands / Europe',
      category: 'Floral & Home Decor Importer',
      description: 'Major European wholesale distributor of natural fiber planters, pots, and decor products.',
      badge: 'Wholesale Importer'
    },
    {
      name: 'Traidcraft',
      logo: '/clients/traidcraft.png',
      origin: 'United Kingdom',
      category: 'Fair Trade & Ethical Commerce',
      description: 'Pioneering UK fair trade company fighting poverty through sustainable international trade.',
      badge: 'Fair Trade UK'
    }
  ];

  // Authentic Certificate Images Extracted Directly from GFCL Product PPT
  const certificateImages = [
    { title: 'Factory Registration & Export License', image: '/certificates/cert1.png' },
    { title: 'BSCI Social Compliance Certification', image: '/certificates/cert2.png' },
    { title: 'Sedex SMETA Audit & Ethics Standard', image: '/certificates/cert3.png' },
    { title: 'OEKO-TEX & Fair Trade Compliance', image: '/certificates/cert4.png' }
  ];

  return (
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <HeartHandshake className="h-3.5 w-3.5" />
              Official GFCL Corporate Presentation Data
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Buyers We Work With
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Golden Fiber Crafts Ltd. is a trusted manufacturing & export partner for world-renowned fair trade organizations, ethical global retailers, and international home decor importers.
            </p>
          </div>
        </div>

        {/* Real Buyers Grid (With Authentic Logos Extracted from PPT) */}
        <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">AUTHENTIC CLIENT PORTFOLIO</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
              Our Official Buyers
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
              Real brand partners featured in the Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {officialBuyers.map((buyer, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl bg-stone-50/80 p-6 border border-stone-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                      {buyer.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-400">
                      {buyer.origin}
                    </span>
                  </div>

                  {/* Real Logo Image Container */}
                  <div className="my-4 h-20 w-full flex items-center justify-center p-3 rounded-xl bg-white border border-stone-200/60 shadow-xs group-hover:scale-105 transition-transform">
                    <img
                      src={buyer.logo}
                      alt={buyer.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {buyer.name}
                  </h3>

                  <p className="mt-0.5 text-xs font-bold text-emerald-600">
                    {buyer.category}
                  </p>

                  <p className="mt-2 text-xs text-stone-500 leading-relaxed font-light">
                    {buyer.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  Verified Active Export Partner
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Factory Certificates Section (From Slide 3 of PPT) */}
        <div className="bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
              <Award className="h-4 w-4" />
              OFFICIAL COMPLIANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">
              Factory Certificates & Compliance
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
              Authentic factory certificates and compliance documents extracted from Golden Fiber Crafts Ltd. corporate portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificateImages.map((cert, idx) => (
              <div key={idx} className="group rounded-2xl bg-white p-4 text-stone-900 shadow-xl border border-emerald-500/30 hover:scale-105 transition-all">
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
            ))}
          </div>
        </div>

        {/* Global Export Reach */}
        <GlobalClients />

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-800 to-green-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">Partner With a Certified Fair Trade Manufacturer</h2>
          <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto">
            Get instant competitive price quotes, custom sample prototyping, and full compliance documentation.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 shadow-md hover:bg-emerald-50 transition-all hover:scale-105"
          >
            Request Instant Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
