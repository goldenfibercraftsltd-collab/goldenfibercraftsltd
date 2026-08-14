import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, ProductItem } from '../data/products';
import { getAllActiveProducts } from '../utils/productStore';
import { ImageMagnifier } from '../components/ImageMagnifier';
import { useCart, CartItem } from '../context/CartContext';
import { Check, AlertTriangle, ChevronLeft, ChevronRight, Home, ArrowLeft } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenQuoteModal?: (productCode?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const allActiveProducts = useMemo(() => getAllActiveProducts(), []);

  // Find product by slug or id or code
  const product: ProductItem =
    allActiveProducts.find((p) => p.slug === productSlug || p.id === productSlug || p.code === productSlug) ||
    allActiveProducts[0];

  const currentCategory =
    CATEGORIES.find((c) => c.slug === product.categorySlug || c.id === product.category || c.id === product.categorySlug) ||
    CATEGORIES[0];

  // Specs & Carton/CBM defaults based on product data
  const setPerCarton = product.setPerCarton || 1;
  const cbmPerCarton = product.cbmPerCarton || 0.074;
  const nwPerCtn = product.nwPerCtn || 3;
  const gwPerCtn = product.gwPerCtn || 4;
  const unit = product.unit || 'S/3';
  const material = product.material || 'Jute';
  const color = product.color || 'Multicolor';

  // Calculator states
  const [orderQty, setOrderQty] = useState<number>(setPerCarton);
  const [receivedQty, setReceivedQty] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  // Reset when product changes
  useEffect(() => {
    setSelectedImage(product.image);
    setOrderQty(setPerCarton);
    setReceivedQty('');
    setAddedSuccess(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productSlug, product, setPerCarton]);

  // Dynamic calculations
  const totalCartons = Math.max(1, Math.ceil(orderQty / setPerCarton));
  const totalCbm = (totalCartons * cbmPerCarton).toFixed(3);
  const totalGw = (totalCartons * gwPerCtn).toString();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: selectedImage || product.image,
      artNo: product.code || product.id,
      categoryName: product.categoryName,
      material,
      color,
      unit,
      cbmPerCarton,
      setPerCarton,
      nwPerCtn,
      gwPerCtn,
      orderQty,
      totalCartons,
      totalCbm: Number(totalCbm),
      totalNw: Number((totalCartons * nwPerCtn).toFixed(2)),
      totalGw: Number(totalGw),
    };

    addToCart(cartItem);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
  };

  // Build 15 Related Products (same category first, filled with other catalog items)
  const fifteenRelatedProducts = useMemo(() => {
    const sameCat = allActiveProducts.filter(p => p.id !== product.id && (p.categorySlug === product.categorySlug || p.category === product.category));
    const otherCats = allActiveProducts.filter(p => p.id !== product.id && p.categorySlug !== product.categorySlug && p.category !== product.category);
    const combined = [...sameCat, ...otherCats];
    return combined.slice(0, 15);
  }, [allActiveProducts, product]);

  // 3-Second Auto Sliding Logic for 15 Related Products
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef<boolean>(false);

  const itemsPerView = 6; // Display 6 items at once on wide screens
  const maxSlideIndex = Math.max(0, fifteenRelatedProducts.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredRef.current && fifteenRelatedProducts.length > 0) {
        setSliderIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
      }
    }, 3000); // Exactly 3 seconds sliding

    return () => clearInterval(interval);
  }, [maxSlideIndex, fifteenRelatedProducts.length]);

  // Scroll to active index
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      if (scrollWidth > 0 && maxSlideIndex > 0) {
        const targetScroll = (sliderIndex / maxSlideIndex) * scrollWidth;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [sliderIndex, maxSlideIndex]);

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10 font-sans animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 pb-2 border-b border-stone-100">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-700">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${currentCategory.id || currentCategory.slug}`} className="hover:text-emerald-700">
            {currentCategory.name}
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold truncate">{product.code || product.id}</span>
        </nav>

        {/* TOP SECTION: Single Product Specifications & Calculator (Exact match to User Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-4 sm:p-8 rounded-2xl">
          
          {/* Left Column: Product Image with Zoom & Gallery */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[460px] h-[360px] sm:h-[420px] flex items-center justify-center p-4 bg-white rounded-2xl">
              <ImageMagnifier src={selectedImage} alt={product.name} zoomLevel={2.2} />
            </div>

            {/* Gallery Thumbnails if available */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 max-w-full">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-16 w-16 p-1 rounded-lg border-2 bg-white shrink-0 transition-all cursor-pointer ${
                      selectedImage === img ? 'border-emerald-600 ring-2 ring-emerald-500/40' : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Exact Specification Rows & Calculation Inputs (Image 1) */}
          <div className="lg:col-span-7 space-y-3 text-stone-800 text-sm">
            
            {/* Table / Key-Value Spec Grid */}
            <div className="space-y-2.5">
              
              {/* Art No */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Art No:</span>
                <span className="col-span-8 font-semibold text-stone-900">{product.code || product.id}</span>
              </div>

              {/* Description */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Description:</span>
                <span className="col-span-8 font-medium text-stone-900">{product.name}</span>
              </div>

              {/* Material */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Material:</span>
                <span className="col-span-8 font-medium text-stone-900">{material}</span>
              </div>

              {/* Color */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Color:</span>
                <span className="col-span-8 font-medium text-stone-900">{color}</span>
              </div>

              {/* Unit */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Unit:</span>
                <span className="col-span-8 font-medium text-stone-900">{unit}</span>
              </div>

              {/* CBM/Carton */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">CBM/Carton:</span>
                <span className="col-span-8 font-medium text-stone-900 font-mono">{cbmPerCarton}</span>
              </div>

              {/* Set/Carton */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Set/Carton:</span>
                <span className="col-span-8 font-medium text-stone-900 font-mono">{setPerCarton}</span>
              </div>

              {/* N.W/CTN(KG) */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">N.W/CTN(KG):</span>
                <span className="col-span-8 font-medium text-stone-900 font-mono">{nwPerCtn}</span>
              </div>

              {/* G.W/CTN(KG) */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">G.W/CTN(KG):</span>
                <span className="col-span-8 font-medium text-stone-900 font-mono">{gwPerCtn}</span>
              </div>

              {/* Total G.W(KG) Box */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Total G.W(KG):</span>
                <div className="col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalGw}
                    className="w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-sm text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Total Carton Box */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Total Carton:</span>
                <div className="col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalCartons}
                    className="w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-sm text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Total CBM Box */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-stone-700 font-medium">Total CBM:</span>
                <div className="col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalCbm}
                    className="w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-sm text-stone-900 font-mono"
                  />
                </div>
              </div>

              {/* Received Qty Box */}
              <div className="grid grid-cols-12 items-center py-1.5">
                <span className="col-span-4 font-bold text-[#65a30d]">Received Qty:</span>
                <div className="col-span-8">
                  <input
                    type="text"
                    value={receivedQty}
                    onChange={(e) => setReceivedQty(e.target.value)}
                    className="w-48 px-3 py-1.5 bg-white border-2 border-[#65a30d] rounded-sm text-sm text-stone-900 font-mono outline-hidden"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Order Qty + Add To Cart Row */}
              <div className="grid grid-cols-12 items-center py-2">
                <span className="col-span-4 font-bold text-stone-900">Order Qty</span>
                <div className="col-span-8 flex items-center gap-3">
                  <input
                    type="number"
                    min={setPerCarton}
                    step={setPerCarton}
                    value={orderQty}
                    onChange={(e) => setOrderQty(Math.max(1, Number(e.target.value)))}
                    className="w-44 px-3 py-2 bg-white border-2 border-[#65a30d] rounded-sm text-sm font-bold text-stone-900 font-mono outline-hidden"
                  />
                  <button
                    onClick={handleAddToCart}
                    className="px-6 py-2 rounded-sm border-2 border-[#65a30d] text-[#65a30d] hover:bg-[#65a30d] hover:text-white font-bold text-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="h-4 w-4" /> Added
                      </>
                    ) : (
                      '+ Add To Cart'
                    )}
                  </button>
                </div>
              </div>

              {/* Green Alert Notification Box (Exact match to Image 1) */}
              <div className="mt-4 p-3 rounded-md bg-[#dcfce7] border border-[#86efac] text-[#14532d] text-xs flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#166534] shrink-0" />
                <span>
                  There will be {setPerCarton} products in 1 cartoon. So you must give {setPerCarton} times the product of the cartoon.
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: RELATED PRODUCTS AUTO-SLIDING CAROUSEL (Exact match to User Image 2) */}
        <div 
          className="pt-8 border-t border-stone-200 space-y-6"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          
          {/* Header: RELATED PRODUCTS with Green Underline */}
          <div className="text-center">
            <h2 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wider text-stone-900">
              RELATED PRODUCTS
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-28 bg-[#65a30d]" />
          </div>

          {/* 15 Products Auto-Sliding Row */}
          <div className="relative overflow-hidden group">
            
            {/* Scroll Container */}
            <div
              ref={sliderRef}
              className="flex items-center gap-0 overflow-x-auto no-scrollbar scroll-smooth py-4"
            >
              {fifteenRelatedProducts.map((relProd, idx) => {
                return (
                  <div
                    key={relProd.id || idx}
                    onClick={() => {
                      navigate(`/products/${relProd.slug || relProd.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 py-2 text-center cursor-pointer border-r border-stone-200 last:border-r-0 hover:bg-stone-50/80 transition-all duration-300 group/card"
                  >
                    {/* Clean Product Image */}
                    <div className="h-32 sm:h-36 w-full flex items-center justify-center p-2">
                      <img
                        src={relProd.image}
                        alt={relProd.name}
                        className="h-full w-full object-contain group-hover/card:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Art No in bold Green (Image 2) */}
                    <div className="mt-3 text-xs sm:text-sm font-bold text-[#65a30d] group-hover/card:text-[#4d7c0f] transition-colors">
                      Art No: {relProd.code || relProd.id}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left & Right Controls (Visible on hover) */}
            <button
              onClick={() => setSliderIndex((prev) => Math.max(0, prev - 1))}
              className="absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 shadow-md border border-stone-200 text-stone-700 hover:bg-white hover:text-emerald-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setSliderIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1))}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 shadow-md border border-stone-200 text-stone-700 hover:bg-white hover:text-emerald-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

          {/* Dot Pagination Indicator (15 Dots, exactly like Image 2) */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {fifteenRelatedProducts.map((_, dotIdx) => {
              const isActive = dotIdx === sliderIndex || (dotIdx === Math.min(sliderIndex, fifteenRelatedProducts.length - 1));
              return (
                <button
                  key={dotIdx}
                  onClick={() => setSliderIndex(Math.min(dotIdx, maxSlideIndex))}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-4 bg-[#65a30d]'
                      : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Slide ${dotIdx + 1}`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
