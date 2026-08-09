import React from 'react';
import { Leaf, HeartHandshake, ShieldCheck, Sun, Recycle } from 'lucide-react';

export const Sustainability: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Renewable Fibers',
      description: 'We harvest golden jute, wild seagrass, kaisa grass, and bamboo — naturally rapidly renewable, zero-plastic materials that leave zero synthetic waste.'
    },
    {
      icon: HeartHandshake,
      title: 'Artisan Empowerment',
      description: 'Over 80% of our weaving workforce comprises skilled rural female artisans in Bangladesh, providing fair trade wages, healthcare, and financial independence.'
    },
    {
      icon: Sun,
      title: 'Eco-Friendly Dyeing',
      description: 'All color treatments utilize azo-free, heavy-metal-free, and non-toxic vegetable dyes that ensure safe indoor use and child-safe play storage.'
    },
    {
      icon: Recycle,
      title: 'Biodegradable & Zero Waste',
      description: 'From raw fiber processing to production off-cuts, 100% of organic waste is recycled or composted into bio-mulch for local agricultural farms.'
    }
  ];

  return (
    <section id="sustainability" className="relative bg-amber-950 py-20 text-white overflow-hidden">
      {/* Decorative ambient backdrop light */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            <Leaf className="h-3.5 w-3.5" />
            Eco Commitment
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white uppercase">
            SUSTAINABILITY & SOCIAL IMPACT
          </h2>
          <p className="mt-4 text-sm sm:text-base text-amber-200/80 leading-relaxed font-light">
            Empowering Bangladeshi rural communities while supplying global retail markets with 100% biodegradable natural fiber products.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-amber-500" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-amber-800/40 bg-stone-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-950/60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-amber-700/30 bg-gradient-to-r from-amber-900/60 via-amber-950 to-stone-900 p-8 text-center sm:p-10 shadow-2xl backdrop-blur-lg">
          <div className="mx-auto max-w-3xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-300">
              Transforming Lives Through Artisanal Heritage
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-amber-100/90 leading-relaxed font-light">
              By choosing Golden Fiber Crafts Ltd, international buyers support sustainable rural livelihoods across Bangladesh, preserving generation-old weaving techniques while adopting green supply chains.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-emerald-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> 100% Fair Trade Practices</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Zero Harmful Chemicals</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Ethical Supply Chain</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
