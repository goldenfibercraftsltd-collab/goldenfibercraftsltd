import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

interface ProductShowcaseProps {
  products: ProductItem[];
  onSelectProduct?: (product: any) => void;
  onOpenQuoteModal?: (productCode?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onSelectProduct
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter Categories tailored to Golden Fiber Crafts Ltd.
  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'jute', label: 'All types of Basket' },
    { id: 'seagrass', label: 'Seagrass Baskets' },
    { id: 'kans-grass', label: 'Kaisa Grass Crafts' },
    { id: 'water-hyacinth', label: 'Water Hyacinth' },
    { id: 'rugs', label: 'Floor Rugs & Mats' },
    { id: 'recycle-fabric', label: 'Cotton Rope Baskets' },
    { id: 'bamboo', label: 'Bamboo Crafts' }
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products.slice(0, 12); // Show top 12 featured items across categories
    }
    return products.filter(p => p.category === selectedCategory || p.categorySlug === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section className="py-14 bg-white font-sans border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Header with classic Serif typography matching reference */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 reveal-up">
          <ScrollTypingText
            as="h2"
            text="PRODUCT SHOWCASE"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 uppercase"
            speed={40}
          />
          <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
            Filter by category and explore our full range of eco-friendly jute, seagrass, and natural handicraft collections.
          </p>
          <div className="mx-auto h-0.5 w-16 bg-[#65a30d] mt-2" />
        </div>

        {/* 2. Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 reveal-up">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0284c7] text-white shadow-sm ring-2 ring-[#0284c7]/30 scale-105'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3. Product Cards Grid with 1:1 Aspect Ratio (3 Columns on Desktop matching reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredProducts.map((product, idx) => {
            return (
              <div
                key={product.id || idx}
                onClick={() => {
                  if (onSelectProduct) onSelectProduct(product);
                  else navigate(`/products/${product.slug || product.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-2xl bg-white border border-stone-200/90 hover:border-stone-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover-lift-sm"
              >
                {/* 1:1 Square Image Container */}
                <div className="relative aspect-square w-full bg-stone-50/60 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Clean Subtle Art No Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-stone-700 text-[10.5px] font-mono font-semibold px-2 py-0.5 rounded-md border border-stone-200/70 shadow-2xs">
                    {product.code || product.id}
                  </div>
                </div>

                {/* Content Area: Category Label & Product Name */}
                <div className="p-5 border-t border-stone-100 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <span className="block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-stone-400">
                      {product.categoryName ? `ALL TYPES OF ${product.categoryName.toUpperCase()}` : 'HANDICRAFTS'}
                    </span>
                    <h3 className="mt-1 font-sans text-sm sm:text-base font-semibold text-stone-800 group-hover:text-[#0284c7] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom View Full Catalog Button */}
        <div className="text-center pt-6 reveal-up">
          <button
            onClick={() => {
              navigate('/products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-stone-900 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-stone-800 transition-all duration-300 group cursor-pointer"
          >
            <span>Explore Complete Product Catalog</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
