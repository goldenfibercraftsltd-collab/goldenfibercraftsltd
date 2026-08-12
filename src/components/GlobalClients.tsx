import React from 'react';
import { Globe, Ship, Award, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const GlobalClients: React.FC = () => {
  const stats = [
    { label: 'Export Destinations', target: 20, suffix: '+ Countries', icon: Globe },
    { label: 'Monthly Craft Capacity', target: 50000, suffix: '+ Pcs', icon: Ship },
    { label: 'OEM Custom Designs', target: 100, suffix: '+ Developed', icon: Award },
    { label: 'Artisan Community', target: 500, suffix: '+ Skilled Craftsmen', icon: Users },
  ];

  const regions = [
    {
      name: 'North America',
      countries: 'USA, Canada',
      focus: 'Storage Baskets, Laundry Hampers, Boho Wall Decor'
    },
    {
      name: 'Europe',
      countries: 'Germany, Netherlands, France, UK, Scandinavia',
      focus: 'Plant Pots, Jute Shopping Bags, Seagrass Placemats'
    },
    {
      name: 'Australia & New Zealand',
      countries: 'Australia, NZ',
      focus: 'Natural Fiber Home Decor, Braided Rugs'
    },
    {
      name: 'Asia-Pacific & Middle East',
      countries: 'Japan, UAE, Saudi Arabia, Singapore',
      focus: 'Eco Promotional Bags, Bamboo Utility Crafts'
    }
  ];

  return (
    <section id="clients" className="bg-white py-20 border-b border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with reveal-up */}
        <div className="text-center reveal-up">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Worldwide Footprint</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-stone-900 uppercase">
            GLOBAL CLIENTS & EXPORT REACH
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Supplying major retail chains, boutique home brands, and wholesale importers across key global markets.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* Stats Row with Animated Counter */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            const staggerClass = `stagger-${idx + 1}`;
            return (
              <div
                key={idx}
                className={`reveal-up ${staggerClass} hover-lift-sm flex items-center gap-4 rounded-2xl bg-amber-50/50 p-6 border border-amber-900/10 shadow-sm`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-700 text-white shadow">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-amber-950">
                    <AnimatedCounter target={item.target} suffix={item.suffix} />
                  </div>
                  <div className="text-xs text-stone-500 font-medium">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Export Destinations Grid with Staggered Entrance */}
        <div className="mt-12">
          <h3 className="font-serif text-xl font-bold text-stone-900 text-center sm:text-left mb-6 reveal-up">
            Export Regions & Core Product Lines
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, index) => {
              const staggerClass = `stagger-${index + 1}`;
              return (
                <div
                  key={index}
                  className={`reveal-up ${staggerClass} hover-lift-sm rounded-2xl bg-white p-6 border border-amber-900/10 shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-widest">Region</div>
                  <h4 className="mt-1 font-serif text-lg font-bold text-stone-900">{region.name}</h4>
                  <p className="mt-1 text-xs font-semibold text-stone-500">{region.countries}</p>
                  <div className="mt-4 pt-3 border-t border-amber-900/5 text-xs text-stone-600">
                    <span className="font-semibold text-stone-800">Key Offerings:</span>
                    <p className="mt-0.5 text-stone-500">{region.focus}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* B2B Services Callout with reveal-scale */}
        <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-br from-amber-900 to-amber-950 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">B2B Merchandising</span>
            <h4 className="mt-1 font-serif text-2xl font-bold text-white">
              Private Labeling, Custom Branding & OEM Production
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-amber-100/80 max-w-2xl font-light">
              We offer full customization for size specs, leather/cotton handle accents, color combinations, barcode hangtags, and inner poly packaging according to buyer brand guidelines.
            </p>
          </div>
          <a
            href="mailto:goldenfibercraftsltd@gmail.com?subject=Inquiry%20from%20Website%20-%20Private%20Label"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 hover:bg-amber-400 transition-all shadow-lg btn-interactive"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="h-4 w-4 btn-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
};
