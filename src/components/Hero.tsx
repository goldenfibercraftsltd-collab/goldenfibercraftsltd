import React from 'react';
import { ArrowRight, CheckCircle2, Truck, DollarSign, Award, Leaf } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreProducts }) => {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden px-2 py-2 sm:px-4 sm:py-3">
      <div className="hero-gradient relative rounded-2xl overflow-hidden shadow-2xl border border-amber-900/30">
        
        {/* PPTX Background Image Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 transition-all duration-700 hover:scale-105"
          style={{ backgroundImage: `url('/products/image1.jpeg')` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-950/95 via-amber-950/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div className="max-w-3xl text-white">
            
            {/* Tagline Badge */}
            <div className="hero-type flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-sm lg:text-base">
              <Leaf className="h-4 w-4 animate-bounce" />
              GOLDEN FIBER CRAFTS LTD.
            </div>

            {/* Main Headline */}
            <h1 className="hero-type mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-amber-50">
              One-Stop Solution for <span className="text-amber-400 underline decoration-amber-600/50 decoration-wavy">Natural Fiber Crafts</span> & Jute Products
            </h1>

            {/* Subheadline */}
            <p className="hero-type mt-5 text-sm sm:text-base lg:text-lg text-amber-100/90 leading-relaxed font-light">
              A premier manufacturer & exporter of eco-friendly jute, seagrass, kaisa, rattan baskets, plant pots, handcrafted bags and lifestyle accessories for global retail brands.
            </p>

            {/* CTA Buttons */}
            <div className="hero-type mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-amber-950/50 hover:bg-amber-500 transition-all hover:scale-105 active:scale-95"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-300/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                Request a Quote
              </button>
            </div>

            {/* Value Proposition Badges */}
            <div className="hero-type mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <div className="flex items-center gap-2.5 rounded-lg border border-amber-500/20 bg-amber-950/40 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-amber-100 backdrop-blur-md shadow-sm hover:border-amber-400/40 transition-colors">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-stone-950">
                  <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="truncate">100% Eco-Friendly</span>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-amber-500/20 bg-amber-950/40 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-amber-100 backdrop-blur-md shadow-sm hover:border-amber-400/40 transition-colors">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-stone-950">
                  <Truck className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="truncate">On-Time Global Delivery</span>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-amber-500/20 bg-amber-950/40 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-amber-100 backdrop-blur-md shadow-sm hover:border-amber-400/40 transition-colors">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-stone-950">
                  <DollarSign className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="truncate">Competitive Factory Price</span>
              </div>

              <div className="flex items-center gap-2.5 rounded-lg border border-amber-500/20 bg-amber-950/40 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-amber-100 backdrop-blur-md shadow-sm hover:border-amber-400/40 transition-colors">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-stone-950">
                  <Award className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="truncate">Export Grade Quality</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
