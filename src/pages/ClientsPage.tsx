import React from 'react';
import { GlobalClients } from '../components/GlobalClients';
import { Globe, HeartHandshake, ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  // Official Golden Fiber Crafts Ltd. Buyers from Corporate PPT
  const officialBuyers = [
    {
      name: 'Aarong',
      origin: 'Bangladesh',
      category: 'Ethical Lifestyle & Craft Giant',
      description: 'Bangladesh’s iconic fair trade retail chain & lifestyle brand empowering thousands of rural artisans.',
      badge: 'Premier Partner'
    },
    {
      name: 'Det Gamle Apotek',
      origin: 'Denmark / Scandinavia',
      category: 'Scandinavia Home Decor',
      description: 'Renowned Nordic home decor, seasonal accents, and handcrafted basket importer.',
      badge: 'European Buyer'
    },
    {
      name: 'Ten Thousand Villages',
      origin: 'USA & Canada',
      category: 'Fair Trade Pioneer',
      description: 'One of the world’s oldest and largest fair trade organizations bringing ethical crafts to North America.',
      badge: 'North America Buyer'
    },
    {
      name: 'The Body Shop',
      origin: 'United Kingdom / Global',
      category: 'Global Ethical Beauty & Gifts',
      description: 'World-famous eco-ethical beauty brand sourcing natural jute bags and artisanal gift packaging.',
      badge: 'Global Brand'
    },
    {
      name: 'Bozy',
      origin: 'Europe / International',
      category: 'Eco & Sustainable Living',
      description: 'Sustainable lifestyle brand specializing in natural seagrass and jute home accessories.',
      badge: 'Eco Living'
    },
    {
      name: 'Le Reve',
      origin: 'International Fashion',
      category: 'Apparel & Lifestyle Chain',
      description: 'Leading apparel and lifestyle retail chain sourcing eco-friendly accessories and trims.',
      badge: 'Lifestyle Retail'
    },
    {
      name: 'Dekker Decoration',
      origin: 'Netherlands / Europe',
      category: 'Floral & Home Decor Importer',
      description: 'Major European wholesale distributor of natural fiber planters, pots, and decor products.',
      badge: 'Wholesale Importer'
    },
    {
      name: 'Traidcraft',
      origin: 'United Kingdom',
      category: 'Fair Trade & Ethical Commerce',
      description: 'Pioneering UK fair trade company fighting poverty through sustainable international trade.',
      badge: 'Fair Trade UK'
    }
  ];

  const certifications = [
    { name: 'Fair Trade Certified', desc: 'Ensuring ethical artisan wages, zero child labor, and community development.' },
    { name: 'BSCI Social Audit', desc: 'Business Social Compliance Initiative compliant factory environment.' },
    { name: 'Sedex SMETA', desc: 'Audited labor standards, health & safety, environment, and business ethics.' },
    { name: 'OEKO-TEX Standard 100', desc: '100% harmful substance-free certified textiles, dyes, and raw materials.' },
    { name: 'ISO 9001:2015 Quality', desc: 'Certified quality management system across weaving, finishing, and packing.' }
  ];

  return (
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <HeartHandshake className="h-3.5 w-3.5" />
              Official Corporate Presentation Data
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Buyers We Work With
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Golden Fiber Crafts Ltd. is a trusted manufacturing & export partner for world-renowned fair trade organizations, ethical global retailers, and international home decor importers.
            </p>
          </div>
        </div>

        {/* Real Buyers Grid (From Official PPT) */}
        <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">AUTHENTIC CLIENT PORTFOLIO</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
              Global Buyers & Partners
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
              Selected buyers who trust Golden Fiber Crafts Ltd. for ethical manufacturing, consistent quality, and on-time global shipments.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {officialBuyers.map((buyer, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl bg-stone-50 p-6 border border-stone-200/80 hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
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

                  <h3 className="mt-3 font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {buyer.name}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-emerald-600">
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

        {/* Certifications & Compliance Section */}
        <div className="bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">COMPLIANCE & ETHICS</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">
              Factory Certifications & Standards
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
              Our factory operates under strict international social compliance, fair trade principles, and quality management standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-3 border border-emerald-500/30">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{cert.name}</h3>
                <p className="mt-2 text-xs text-stone-300 leading-relaxed font-light">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Export Reach & Regions */}
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
