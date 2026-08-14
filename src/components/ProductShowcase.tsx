import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../data/products';
import { ArrowRight, Eye, Send, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  products: ProductItem[];
  onSelectProduct?: (product: any) => void;
  onOpenQuoteModal?: (productCode?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter Categories tailored to Golden Fiber Crafts Ltd.
  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'jute', label: 'Jute Crafts & Bags' },
    { id: 'seagrass', label: 'Seagrass Baskets' },
    { id: 'kans-grass', label: 'Kaisa Grass Items' },
    { id: 'water-hyacinth', label: 'Water Hyacinth' },
    { id: 'rugs', label: 'Floor Rugs & Mats' },
    { id: 'recycle-fabric', label: 'Cotton Rope Baskets' },
    { id: 'bamboo', label: 'Bamboo Products' }
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products.slice(0, 12); // Show top 12 featured across all
    }
    return products.filter(p => p.category === selectedCategory || p.categorySlug === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section className="py-16 bg-stone-50 font-sans border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Header with classic Serif typography matching reference */}
        <div className="text-center max-w-3xl mx-auto space-y-3 reveal-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Authentic Handicraft Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 uppercase">
            PRODUCT SHOWCASE
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Filter by category and explore our full range of eco-friendly jute, seagrass, kaisa grass, and handcrafted lifestyle collections.
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-emerald-600 mt-2" />
        </div>

        {/* 2. Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2 reveal-up">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md scale-105 ring-2 ring-emerald-700/30'
                    : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-100 hover:border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3. Product Cards Grid (3 Columns on Desktop like screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProducts.map((product, idx) => {
            const specItem = product.specifications?.find(s => s.key.toLowerCase().includes('spec') || s.key.toLowerCase().includes('size'))?.value;
            const matItem = product.specifications?.find(s => s.key.toLowerCase().includes('mat'))?.value || product.material;
            const moqItem = product.specifications?.find(s => s.key.toLowerCase().includes('moq'))?.value;

            return (
              <div
                key={product.id || idx}
                className="group relative rounded-3xl bg-white border border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container with Zoom */}
                <div 
                  className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct ? onSelectProduct(product) : navigate(`/products/${product.slug || product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Top Item Code Badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                    {product.code}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectProduct) onSelectProduct(product);
                        else navigate(`/products/${product.slug || product.id}`);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-stone-900 text-xs font-bold shadow-lg hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="h-4 w-4" /> Quick View
                    </button>
                    {onOpenQuoteModal && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal(product.code);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 text-white text-xs font-bold shadow-lg hover:bg-emerald-800 transition-colors cursor-pointer"
                      >
                        <Send className="h-3.5 w-3.5" /> Inquire
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category Label */}
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {product.categoryName || product.category}
                    </span>

                    {/* Product Name */}
                    <h3 
                      onClick={() => onSelectProduct ? onSelectProduct(product) : navigate(`/products/${product.slug || product.id}`)}
                      className="mt-1 font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs Pill Summary */}
                  <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-600">
                    {specItem && (
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400 font-medium">Specs:</span>
                        <span className="font-semibold text-stone-800 truncate max-w-[190px]">{specItem}</span>
                      </div>
                    )}
                    {matItem && (
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400 font-medium">Material:</span>
                        <span className="font-semibold text-stone-800 truncate max-w-[190px]">{matItem}</span>
                      </div>
                    )}
                    {moqItem && (
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400 font-medium">MOQ:</span>
                        <span className="font-semibold text-emerald-700">{moqItem}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct ? onSelectProduct(product) : navigate(`/products/${product.slug || product.id}`)}
                      className="flex-1 py-2 px-3 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold hover:bg-stone-200 transition-colors text-center cursor-pointer"
                    >
                      View Details
                    </button>
                    {onOpenQuoteModal && (
                      <button
                        onClick={() => onOpenQuoteModal(product.code)}
                        className="py-2 px-3.5 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                      >
                        <Send className="h-3 w-3" /> Quote
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom View Full Catalog Button */}
        <div className="text-center pt-8">
          <button
            onClick={() => {
              navigate('/products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-800 text-white text-sm sm:text-base font-bold shadow-lg hover:bg-emerald-900 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            Explore Complete Product Catalog (30+ PPT Products)
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
