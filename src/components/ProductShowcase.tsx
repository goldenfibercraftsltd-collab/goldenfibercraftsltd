import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../data/products';
import { getAllActiveProducts, fetchLiveProducts } from '../utils/productStore';
import { ArrowRight } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';
import { getDynamicCardAnimation, initScrollReveal } from '../utils/scrollReveal';

interface ProductShowcaseProps {
  products?: ProductItem[];
  onSelectProduct?: (product: any) => void;
  onOpenQuoteModal?: (productCode?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products: initialProducts,
  onSelectProduct,
  onOpenQuoteModal
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [productsList, setProductsList] = useState<ProductItem[]>(() => {
    if (initialProducts && initialProducts.length > 0) return initialProducts;
    return getAllActiveProducts();
  });

  React.useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      setProductsList(initialProducts);
      return;
    }

    fetchLiveProducts().then(list => {
      if (list && list.length > 0) setProductsList(list);
    });

    const handleUpdate = () => {
      setProductsList(getAllActiveProducts());
    };

    window.addEventListener('gfcl_products_updated', handleUpdate);
    return () => window.removeEventListener('gfcl_products_updated', handleUpdate);
  }, [initialProducts]);

  const allActiveProducts = productsList;

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

  // Filtered Products (Curating 1-3 diverse products per category & subcategory for 'all' tab)
  const filteredProducts = useMemo(() => {
    if (selectedCategory !== 'all') {
      return allActiveProducts.filter(p => 
        p.category === selectedCategory || 
        p.categorySlug === selectedCategory || 
        (p as any).category_slug === selectedCategory ||
        (p as any).category_id === selectedCategory
      );
    }

    // Curate a vibrant diverse showcase across all major categories & subcategories
    const categoryOrder = [
      'jute',
      'seagrass',
      'kans-grass',
      'water-hyacinth',
      'date-leaf',
      'rugs',
      'recycle-fabric',
      'bamboo',
      'palm-fiber',
      'rattan'
    ];

    const curated: ProductItem[] = [];
    const seenIds = new Set<string>();

    categoryOrder.forEach(catKey => {
      // Find all products in this category
      const catProducts = allActiveProducts.filter(p => 
        p.category === catKey || 
        p.categorySlug === catKey || 
        (p as any).category_slug === catKey ||
        (p as any).category_id === catKey
      );

      if (catProducts.length === 0) return;

      // Group products in this category by subcategory
      const subcatMap = new Map<string, ProductItem[]>();
      catProducts.forEach(p => {
        const sub = p.subCategory || (p as any).sub_category || 'baskets';
        if (!subcatMap.has(sub)) subcatMap.set(sub, []);
        subcatMap.get(sub)!.push(p);
      });

      let addedForThisCat = 0;
      const maxForCat = 2; // 2 items per category = 15-20 balanced showcase items

      // Take 1 item from each subcategory starting with the earliest/initial items
      for (const [_, subItems] of subcatMap.entries()) {
        if (addedForThisCat >= maxForCat) break;
        const item = subItems.find(i => !seenIds.has(i.id) && !seenIds.has(i.code));
        if (item) {
          curated.push(item);
          seenIds.add(item.id);
          seenIds.add(item.code);
          addedForThisCat++;
        }
      }

      // If category didn't fill from subcategories, pick from general category products
      if (addedForThisCat < maxForCat) {
        for (const item of catProducts) {
          if (addedForThisCat >= maxForCat) break;
          if (!seenIds.has(item.id) && !seenIds.has(item.code)) {
            curated.push(item);
            seenIds.add(item.id);
            seenIds.add(item.code);
            addedForThisCat++;
          }
        }
      }
    });

    // If less than 15 items, fill with remaining items
    if (curated.length < 15) {
      for (const p of allActiveProducts) {
        if (curated.length >= 20) break;
        if (!seenIds.has(p.id) && !seenIds.has(p.code)) {
          curated.push(p);
          seenIds.add(p.id);
          seenIds.add(p.code);
        }
      }
    }

    return curated;
  }, [allActiveProducts, selectedCategory]);

  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => {
      if (cleanup) cleanup();
    };
  }, [filteredProducts, selectedCategory]);

  return (
    <section className="py-14 bg-white font-sans border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Header with classic Serif typography matching reference */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 reveal-up">
          <ScrollTypingText
            as="h2"
            text="PRODUCT SHOWCASE"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase"
            speed={40}
          />
          <p className="text-stone-900 text-xs sm:text-sm font-medium leading-relaxed">
            Filter by category and explore our full range of eco-friendly jute, seagrass, and natural handicraft collections.
          </p>
          <div className="mx-auto h-1 w-16 bg-[#166534] mt-2 rounded-full" />
        </div>

        {/* 2. Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 reveal-up">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0284c7] text-white shadow-sm ring-2 ring-[#0284c7]/30 scale-105'
                    : 'bg-white text-stone-950 border border-stone-300 hover:bg-stone-50 hover:border-stone-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3. Product Cards Grid with 1:1 Aspect Ratio (5 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-4">
          {filteredProducts.map((product, idx) => {
            return (
              <div
                key={product.id || idx}
                onClick={() => {
                  if (onSelectProduct) onSelectProduct(product);
                  else navigate(`/products/${product.slug || product.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group relative rounded-2xl bg-white border border-stone-200/90 hover:border-stone-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover-lift-sm ${getDynamicCardAnimation(idx)}`}
              >
                {/* 1:1 Square Image Container */}
                <div className="relative aspect-square w-full bg-stone-50/60 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading={idx < 5 ? "eager" : "lazy"}
                    decoding="async"
                  />

                  {/* Clean Subtle Art No Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-black text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-md border border-stone-300 shadow-2xs">
                    {product.code || product.id}
                  </div>
                </div>

                {/* Content Area: Category Label & Product Name */}
                <div className="p-5 border-t border-stone-100 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <span className="block text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-emerald-900">
                      {product.categoryName ? `ALL TYPES OF ${product.categoryName.toUpperCase()}` : 'HANDICRAFTS'}
                    </span>
                    <h3 className="mt-1 font-sans text-sm sm:text-base font-extrabold text-black group-hover:text-[#0284c7] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom View All Products Button (Modern Design) */}
        <div className="text-center pt-8 reveal-up">
          <button
            onClick={() => {
              navigate('/products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#14532d] via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-[#14532d] text-white text-sm sm:text-base font-extrabold tracking-wide shadow-[0_10px_25px_rgba(20,83,45,0.25)] hover:shadow-[0_15px_35px_rgba(20,83,45,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer border border-emerald-600/40"
          >
            <span className="font-extrabold">View All Products</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-stone-950 group-hover:bg-amber-300 transition-colors shadow-xs">
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
