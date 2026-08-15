import React from 'react';
import { Leaf, HeartHandshake, ShieldCheck, Sun, Recycle } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

export const Sustainability: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Renewable Fibers',
      description: 'We harvest golden jute, wild seagrass, kaisa grass, and bamboo — naturally rapidly renewable, zero-plastic materials that leave zero synthetic waste.',
      slideAnim: 'card-slide-far-left stagger-2'
    },
    {
      icon: HeartHandshake,
      title: 'Artisan Empowerment',
      description: 'Over 80% of our weaving workforce comprises skilled rural female artisans in Bangladesh, providing fair trade wages, healthcare, and financial independence.',
      slideAnim: 'card-slide-left stagger-1'
    },
    {
      icon: Sun,
      title: 'Eco-Friendly Dyeing',
      description: 'All color treatments utilize azo-free, heavy-metal-free, and non-toxic vegetable dyes that ensure safe indoor use and child-safe play storage.',
      slideAnim: 'card-slide-right stagger-1'
    },
    {
      icon: Recycle,
      title: 'Biodegradable & Zero Waste',
      description: 'From raw fiber processing to production off-cuts, 100% of organic waste is recycled or composted into bio-mulch for local agricultural farms.',
      slideAnim: 'card-slide-far-right stagger-2'
    }
  ];

  return (
    <section id="sustainability" className="relative bg-amber-950 py-20 text-white overflow-hidden">
      {/* Decorative ambient backdrop light */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            <Leaf className="h-3.5 w-3.5" />
            Eco Commitment
          </div>
          <div className="mt-4">
            <ScrollTypingText
              as="h2"
              text="SUSTAINABILITY & SOCIAL IMPACT"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white uppercase"
              speed={35}
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
            Empowering Bangladeshi rural communities while supplying global retail markets with 100% biodegradable natural fiber products.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        {/* 4 Pillars Grid with Middle-Outward Glide Entrance */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`${pillar.slideAnim} hover-lift group relative rounded-2xl border border-amber-800/40 bg-stone-900/80 p-6 backdrop-blur-md transition-all`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-extrabold tracking-wide text-amber-100 group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-stone-100 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Sustainability Statement Bar */}
        <div className="reveal-up mt-12 rounded-2xl border border-amber-800/30 bg-stone-900/50 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-extrabold text-white">Ethical, Fair Trade & Audited</h4>
                <p className="text-xs text-stone-200 font-medium">Complying with BSCI, Sedex, and Fair Trade certified environmental manufacturing standards.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all btn-interactive shrink-0"
            >
              <span>Partner With Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
