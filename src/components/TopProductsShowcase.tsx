import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Product } from '../types/product';

interface TopProductsShowcaseProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const TopProductsShowcase: React.FC<TopProductsShowcaseProps> = ({ products, onSelectProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter top ranked products
  const topProducts = products
    .filter(p => p.topRank && p.topRank <= 10)
    .sort((a, b) => (a.topRank || 0) - (b.topRank || 0));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-amber-950 to-stone-900 py-20 text-white shadow-2xl">
      
      {/* Background Decorative Arcs */}
      <div className="pointer-events-none absolute inset-0 opacity-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full border border-amber-400/40 border-dashed" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-amber-800/40 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              <Sparkles className="h-4 w-4" />
              Most Viewed
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-white">
              TOP 10 CRAFT PRODUCTS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-amber-200/80">
              Glide through our most sought-after natural fiber baskets, planters, and eco-friendly accessories.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-700/50 bg-amber-950/60 text-amber-300 hover:bg-amber-800 hover:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-700/50 bg-amber-950/60 text-amber-300 hover:bg-amber-800 hover:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar mt-10 flex gap-6 overflow-x-auto pb-8 pt-4 scroll-smooth snap-x snap-mandatory"
        >
          {topProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group relative shrink-0 snap-center cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{ width: '280px' }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-amber-700/30 bg-stone-900 shadow-xl ring-1 ring-white/10" style={{ height: '360px' }}>
                
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Rank Badge #1, #2... */}
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 font-extrabold text-stone-950 text-xs shadow-lg border border-amber-300">
                  #{product.topRank}
                </div>

                {/* Bottom Overlay Gradient & Text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-5 text-center text-white">
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400">
                    {product.categoryLabel}
                  </div>
                  <div className="mt-1 font-serif text-lg font-bold leading-snug text-white group-hover:text-amber-300 transition-colors">
                    {product.name}
                  </div>
                  <div className="mt-1 text-[11px] text-amber-200/80">
                    Item Code: {product.itemCode}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
