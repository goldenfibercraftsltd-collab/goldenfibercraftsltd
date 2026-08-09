import React from 'react';
import { GlobalClients } from '../components/GlobalClients';
import { Globe, Building2, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

interface ClientsPageProps {
  onOpenQuoteModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenQuoteModal }) => {
  const brandLogos = [
    { name: 'B&T Group', tag: 'Group Partner' },
    { name: 'Falabella', tag: 'Retail Giant' },
    { name: 'Zara', tag: 'Global Fashion' },
    { name: 'Primark', tag: 'Apparel Leader' },
    { name: 'Lefties', tag: 'Fashion Brand' },
    { name: 'OVS', tag: 'Italian Fashion' },
    { name: 'George', tag: 'Global Retail' },
    { name: 'Tesco', tag: 'International' },
    { name: 'Next', tag: 'UK Fashion' },
    { name: 'Cora', tag: 'Hypermarket' },
    { name: 'Ripley', tag: 'Department Store' },
    { name: 'Renner', tag: 'Latin America' },
    { name: 'Pull&Bear', tag: 'Casualwear' },
    { name: 'El Corte Inglés', tag: 'Spanish Leader' },
    { name: 'H&M Group', tag: 'Sustainable Fashion' },
    { name: 'C&A', tag: 'Global Apparel' }
  ];

  return (
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-emerald-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <Globe className="h-3.5 w-3.5" />
              Global Footprint & Trusted Partnerships
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Clients & Global Reach
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              We proudly supply leading international fashion houses, buying offices, and global sourcing networks across Europe, Americas, Middle East, and Asia.
            </p>
          </div>
        </div>

        {/* Partnership Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all">
            <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Manufacturers & Exporters</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Supporting Bangladesh’s top apparel export factories with high-volume garment trims.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Sourcing Partners</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Reliable accessories & handicrafts supplier for international buying agencies worldwide.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all">
            <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Global Brands</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Nominated trim supplier for world-class high-street apparel & home decor retailers.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80 hover:shadow-xl transition-all">
            <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Export Network</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Long-term distribution channels covering 35+ countries across 5 continents.
            </p>
          </div>
        </div>

        {/* Brands That Trust Us Grid (Matching Trims Art Screenshot 2) */}
        <div className="space-y-6 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-100">
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold">OUR VALUED CUSTOMERS</p>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
              Brands That Trust Us
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
              Delivering certified quality and on-time shipments for leading global apparel and home decor leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center rounded-2xl bg-stone-50 p-6 text-center border border-stone-200/70 hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <span className="font-serif text-lg font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                  {brand.name}
                </span>
                <span className="mt-1 text-[10px] font-semibold text-stone-400 uppercase tracking-wider group-hover:text-emerald-600">
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Export Map Component */}
        <GlobalClients />

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-900 to-green-950 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">Become Our Next Sourcing Partner</h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
            Get instant competitive price quotes, free sampling, and custom prototyping for your brand.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-md hover:bg-emerald-50 transition-all hover:scale-105"
          >
            Request Instant Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
