import React from 'react';
import { Globe, Ship, Award, Users, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollTypingText } from './ScrollTypingText';

export const GlobalClients: React.FC = () => {
  const stats = [
    { label: 'Export Destinations', target: 20, suffix: '+ Countries', icon: Globe, slideAnim: 'card-slide-far-left stagger-2' },
    { label: 'Monthly Craft Capacity', target: 50000, suffix: '+ Pcs', icon: Ship, slideAnim: 'card-slide-left stagger-1' },
    { label: 'OEM Custom Designs', target: 100, suffix: '+ Developed', icon: Award, slideAnim: 'card-slide-right stagger-1' },
    { label: 'Artisan Community', target: 500, suffix: '+ Skilled Craftsmen', icon: Users, slideAnim: 'card-slide-far-right stagger-2' },
  ];

  const regions = [
    {
      name: 'North America',
      countries: 'USA, Canada',
      focus: 'Storage Baskets, Laundry Hampers, Boho Wall Decor',
      slideAnim: 'card-slide-far-left stagger-2'
    },
    {
      name: 'Europe',
      countries: 'Germany, Netherlands, France, UK, Scandinavia',
      focus: 'Plant Pots, Jute Shopping Bags, Seagrass Placemats',
      slideAnim: 'card-slide-left stagger-1'
    },
    {
      name: 'Australia & New Zealand',
      countries: 'Australia, NZ',
      focus: 'Natural Fiber Home Decor, Braided Rugs',
      slideAnim: 'card-slide-right stagger-1'
    },
    {
      name: 'Asia-Pacific & Middle East',
      countries: 'Japan, UAE, Saudi Arabia, Singapore',
      focus: 'Eco Promotional Bags, Bamboo Utility Crafts',
      slideAnim: 'card-slide-far-right stagger-2'
    }
  ];

  return (
    <section id="clients" className="bg-white py-20 border-b border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with reveal-up */}
        <div className="text-center reveal-up">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-900">Worldwide Footprint</span>
          <div className="mt-2">
            <ScrollTypingText
              as="h2"
              text="GLOBAL CLIENTS & EXPORT REACH"
              className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-black uppercase"
              speed={35}
            />
          </div>
          <p className="mt-2 text-xs sm:text-sm text-stone-900 font-medium max-w-2xl mx-auto">
            Supplying major retail chains, boutique home brands, and wholesale importers across key global markets.
          </p>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-600" />
        </div>

        {/* Stats Row with Animated Counter and Middle-Outward Card Slide */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.slideAnim} hover-lift-sm flex items-center gap-4 rounded-2xl bg-amber-50/50 p-6 border border-amber-900/10 shadow-xs`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-700 text-white shadow-xs">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif text-xl font-extrabold text-black">
                    <AnimatedCounter target={item.target} suffix={item.suffix} />
                  </div>
                  <div className="text-xs text-stone-900 font-bold">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Export Destinations Grid with Middle-Outward Card Slide */}
        <div className="mt-12">
          <h3 className="font-serif text-xl font-extrabold text-black text-center sm:text-left mb-6 reveal-up">
            Export Regions & Core Product Lines
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, index) => {
              return (
                <div
                  key={index}
                  className={`${region.slideAnim} hover-lift-sm rounded-2xl bg-white p-6 border border-amber-900/10 shadow-xs hover:shadow-md transition-all`}
                >
                  <div className="text-xs font-black text-amber-900 uppercase tracking-widest">Region</div>
                  <h4 className="mt-1 font-serif text-lg font-extrabold text-black">{region.name}</h4>
                  <p className="mt-1 text-xs font-bold text-stone-900">{region.countries}</p>
                  <div className="mt-4 pt-3 border-t border-amber-900/10 text-xs text-stone-950">
                    <span className="font-extrabold text-black">Key Offerings:</span>
                    <p className="mt-0.5 text-stone-950 font-medium">{region.focus}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalClients;
