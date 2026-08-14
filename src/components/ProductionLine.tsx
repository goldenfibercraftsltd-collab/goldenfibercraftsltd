import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Product } from '../types/product';

interface ProductionLineProps {
  products: any[];
  onSelectProduct?: (product: any) => void;
}

export const ProductionLine: React.FC<ProductionLineProps> = ({ products, onSelectProduct }) => {
  // Select 9 representative products for the production line grid
  const gridProducts = products.slice(0, 9);

  return (
    <section className="bg-amber-100/30 py-16 border-b border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Artisan Line</span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-stone-900 uppercase">
            PRODUCTION LINE
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            Click any craft line item to inspect complete specifications, materials & MOQ.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* 3x3 Grid */}
        <div className="mt-10 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3">
          {gridProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct && onSelectProduct(product)}
              className="group relative block overflow-hidden rounded-xl border border-amber-900/10 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-md bg-stone-900"
              aria-label={`View ${product.name}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-950/80 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-xs p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-stone-950 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="h-6 w-6" />
                </div>
                
                <div className="absolute bottom-3 left-0 right-0 px-3 text-center sm:bottom-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {product.categoryLabel}
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold leading-tight text-white mt-1">
                    {product.name}
                  </div>
                  <div className="text-[11px] text-amber-200/80 mt-0.5">
                    Code: {product.itemCode}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
