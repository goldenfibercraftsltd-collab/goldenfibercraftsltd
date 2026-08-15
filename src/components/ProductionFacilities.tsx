import React from 'react';
import { Sparkles, Layers, Package } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

export const ProductionFacilities: React.FC = () => {
  return (
    <section id="infrastructure" className="py-20 bg-white border-y border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center reveal-up">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-900">Infrastructure</span>
          <div className="mt-2">
            <ScrollTypingText
              as="h2"
              text="PRODUCTION FACILITIES"
              className="font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-black uppercase"
              speed={40}
            />
          </div>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-600" />
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          
          {/* Main Facility Image from PPTX with reveal-left */}
          <div className="reveal-left relative group overflow-hidden rounded-2xl shadow-2xl border border-amber-900/10 bg-amber-950 img-zoom-container">
            <img
              src="/products/image10.png"
              alt="Golden Fiber Crafts Production Facility"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Crafting Excellence</span>
                <p className="text-white font-serif text-lg sm:text-xl font-bold">100% Handcrafted Sustainable Natural Fibers</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Divisions List with staggered reveal-right */}
          <div className="space-y-8">
            
            <div className="reveal-right stagger-1 hover-lift-sm flex gap-4 p-4 rounded-xl hover:bg-amber-50/60 transition-all border border-transparent hover:border-amber-900/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-950 shadow-inner">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold tracking-wider text-black uppercase">
                  BASKETS & CONTAINER WEAVING DIVISION
                </h3>
                <p className="mt-1 text-sm text-stone-950 leading-relaxed font-medium">
                  Handcrafted Kaisa grass, Seagrass, Water Hyacinth, Rattan and Cotton rope baskets woven with reinforced internal structure to international apparel and home standards.
                </p>
              </div>
            </div>

            <div className="reveal-right stagger-2 hover-lift-sm flex gap-4 p-4 rounded-xl hover:bg-amber-50/60 transition-all border border-transparent hover:border-amber-900/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-950 shadow-inner">
                <Layers className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold tracking-wider text-black uppercase">
                  PLANTERS & HOME DECOR DIVISION
                </h3>
                <p className="mt-1 text-sm text-stone-950 leading-relaxed font-medium">
                  Indoor planter pot covers, hanging macrame holders, braided jute floor area rugs, placemats, and bohemian wall hanging decor units.
                </p>
              </div>
            </div>

            <div className="reveal-right stagger-3 hover-lift-sm flex gap-4 p-4 rounded-xl hover:bg-amber-50/60 transition-all border border-transparent hover:border-amber-900/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-950 shadow-inner">
                <Package className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold tracking-wider text-black uppercase">
                  ECO BAGS & PACKAGING DIVISION
                </h3>
                <p className="mt-1 text-sm text-stone-950 leading-relaxed font-medium">
                  Custom golden jute shopping bags, fashion totes, promotional giveaway bags, wine bags, and corporate gift bags with high quality screen printing.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
