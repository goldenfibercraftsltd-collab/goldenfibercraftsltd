import React from 'react';
import { Sparkles, Layers, Package, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollTypingText } from './ScrollTypingText';

export const ProductionFacilities: React.FC = () => {
  return (
    <section id="infrastructure" className="py-20 bg-white border-y border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center reveal-up max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-900">EXPORT MANUFACTURING</span>
          <ScrollTypingText
            as="h2"
            text="PRODUCTION FACILITIES & INFRASTRUCTURE"
            className="font-serif text-2xl sm:text-4xl font-extrabold tracking-wide text-black uppercase"
            speed={35}
          />
          <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
            Operating export-oriented manufacturing facilities in Gazipur & Kishoreganj with over 10,000 skilled artisans.
          </p>
          <p className="text-xs font-serif italic text-emerald-800 font-bold">
            "Precision Manufacturing. Sustainable Innovation. Global Quality."
          </p>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-emerald-600" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* Main Facility Image from Profile */}
          <div className="reveal-left relative group overflow-hidden rounded-3xl shadow-2xl border border-stone-200 bg-stone-900 img-zoom-container">
            <img
              src="/infrastructure/factory_machine_1.png"
              alt="Golden Fiber Crafts Ltd. Production Facility"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-black/40 px-2.5 py-0.5 rounded backdrop-blur-xs">
                  Gazipur & Kishoreganj Units
                </span>
                <p className="text-white font-serif text-lg sm:text-xl font-bold">50 × 40' HQ Container Capacity / Month</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Divisions List with staggered reveal-right */}
          <div className="space-y-5">
            
            <div className="reveal-right stagger-1 hover-lift-sm flex gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 transition-all border border-stone-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-950 shadow-inner">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold tracking-wider text-black uppercase">
                  BASKETS & CONTAINER WEAVING DIVISION
                </h3>
                <p className="mt-1 text-xs text-stone-700 leading-relaxed font-normal">
                  Handcrafted Kaisa grass, Seagrass, Water Hyacinth, and Cotton rope storage baskets woven with reinforced internal molds.
                </p>
              </div>
            </div>

            <div className="reveal-right stagger-2 hover-lift-sm flex gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 transition-all border border-stone-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-950 shadow-inner">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold tracking-wider text-black uppercase">
                  PLANTERS & HOME DECOR DIVISION
                </h3>
                <p className="mt-1 text-xs text-stone-700 leading-relaxed font-normal">
                  Indoor planter pot covers, hanging macrame holders, braided jute floor area rugs, placemats, and bohemian wall decor.
                </p>
              </div>
            </div>

            <div className="reveal-right stagger-3 hover-lift-sm flex gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 transition-all border border-stone-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-950 shadow-inner">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold tracking-wider text-black uppercase">
                  ECO JUTE BAGS & PACKAGING DIVISION
                </h3>
                <p className="mt-1 text-xs text-stone-700 leading-relaxed font-normal">
                  Custom golden jute shopping bags, fashion totes, promotional bags, wine carriers, and corporate gift packaging.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/infrastructure"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md"
              >
                <span>View Full Factory & Process Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

