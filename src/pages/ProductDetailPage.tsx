import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, ProductItem } from '../data/products';
import { getAllActiveProducts, fetchLiveProducts, formatDbProductToItem } from '../utils/productStore';
import { ImageMagnifier } from '../components/ImageMagnifier';
import { useCart, CartItem } from '../context/CartContext';
import { Check, AlertTriangle, ChevronLeft, ChevronRight, Home, ArrowLeft, Send, FileText, ShoppingCart } from 'lucide-react';

export const PRODUCT_SEO_TITLES: Record<string, string> = {
  'GFC-KB-005': 'Wholesale Kaisa Grass Basket Bowl Exporter Storage Kans Grass Basket Manufacturer Handwoven Natural Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-015': 'Wholesale Seagrass Basket Exporter Storage Rectangular Seagrass Basket Manufacturer Handwoven Natural Fiber Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-025': 'Wholesale Seagrass Storage Basket Exporter Cotton Rope Handle Basket Manufacturer Eco-Friendly Home Decor Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-017': 'Wholesale Seagrass Laundry Basket Exporter Tall Storage Hamper Manufacturer Breathable Natural Weave Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-SP-0029': 'Wholesale Seagrass Planters Exporter Waterproof Lined Plant Pot Manufacturer Indoor Outdoor Garden Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-030': 'Wholesale Jute Basket Exporter Storage Jute Basket Manufacturer Colorful Jute Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-011': 'Wholesale Jute Shopping Bag Exporter Custom Printed Jute Bag Manufacturer Heavy Duty Golden Jute Tote Supplier - Golden Fiber Crafts Ltd',
  'GFC-TB-012': 'Wholesale Jute Tote Bag Exporter Daily Reusable Jute Bag Manufacturer Artisan Golden Fiber Tote Supplier - Golden Fiber Crafts Ltd',
  'GFC-PB-008': 'Wholesale Promotional Jute Bag Exporter Corporate Event Gift Bag Manufacturer Custom Printed Jute Bag Supplier - Golden Fiber Crafts Ltd',
  'GFC-WB-007': 'Wholesale Jute Wine Bag Exporter Bottle Packaging Jute Bag Manufacturer Luxury Cane Handle Jute Bag Supplier - Golden Fiber Crafts Ltd',
  'GFC-TM-004': 'Wholesale Jute Table Mat Exporter Dining Table Placemat Manufacturer Braided Jute & Cotton Tableware Supplier - Golden Fiber Crafts Ltd',
  'GFC-PH-008': 'Wholesale Macrame Plant Hanger Exporter Hanging Jute Plant Holder Manufacturer Hand-Knotted Bohemian Decor Supplier - Golden Fiber Crafts Ltd',
  'GFC-SB-024': 'Wholesale Water Hyacinth Basket Exporter Round Storage Hamper Manufacturer Hand-Braided Natural Fiber Basket Supplier - Golden Fiber Crafts Ltd',
  'GFC-PS-009': 'Wholesale Rattan Placemat Set Exporter Dining Table Mat Manufacturer Handcrafted Cane & Jute Tableware Supplier - Golden Fiber Crafts Ltd',
  'GFC-FM-017': 'Wholesale Jute Floor Rug Exporter Braided Living Room Area Mat Manufacturer Handwoven Golden Jute Carpet Supplier - Golden Fiber Crafts Ltd',
  'GFC-BP-007': 'Wholesale Bamboo Crafts Exporter Eco-Friendly Bamboo Products Manufacturer Handcrafted Bamboo Tableware Supplier - Golden Fiber Crafts Ltd',
  'GFC-WB-009': 'Wholesale Cotton Rope Hamper Exporter Laundry Storage Woven Basket Manufacturer Soft Coiled Cotton Basket Supplier - Golden Fiber Crafts Ltd',
};

export function getProductSeoTitle(product: ProductItem): string {
  const code = (product.code || product.id || '').toUpperCase();
  const name = product.name || 'Handicraft Item';
  const mat = product.material ? product.material.split(',')[0].trim() : (product.categoryName || 'Natural Fiber');
  
  if (code) {
    return `${name} (${code}) | Wholesale ${mat} - Golden Fiber Crafts Ltd`;
  }
  return `${name} | Wholesale ${mat} - Golden Fiber Crafts Ltd`;
}

interface ProductDetailPageProps {
  onOpenQuoteModal?: (productCodeOrData?: string | any) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [productsList, setProductsList] = useState<ProductItem[]>(() => getAllActiveProducts());

  useEffect(() => {
    // 1. Initial live fetch from Cloudflare D1
    fetchLiveProducts().then(list => {
      if (list && list.length > 0) setProductsList(list);
    });

    // 2. Listen for real-time admin edits/deletions
    const handleUpdate = () => {
      setProductsList(getAllActiveProducts());
    };

    window.addEventListener('gfcl_products_updated', handleUpdate);
    return () => window.removeEventListener('gfcl_products_updated', handleUpdate);
  }, []);

  // Guarantee live fresh product data when navigating to a product
  useEffect(() => {
    if (!productSlug) return;
    const cleanSlug = productSlug.toLowerCase().trim();
    fetch(`/api/products/${encodeURIComponent(cleanSlug)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && data.product) {
          const formatted = formatDbProductToItem(data.product);
          setProductsList(prev => {
            const map = new Map(prev.map(p => [p.code || p.id, p]));
            map.set(formatted.code || formatted.id, formatted);
            return Array.from(map.values());
          });
        }
      })
      .catch(() => {});
  }, [productSlug]);

  const allActiveProducts = productsList;

  // Find product by slug or id or code (with case-insensitive fallback)
  const product: ProductItem = useMemo(() => {
    if (!productSlug) return productsList[0] || getAllActiveProducts()[0];
    const cleanSlug = productSlug.toLowerCase().trim();
    const found = productsList.find((p) => 
      p.slug === productSlug || 
      p.id === productSlug || 
      p.code === productSlug ||
      (p.slug && p.slug.toLowerCase() === cleanSlug) ||
      (p.id && p.id.toLowerCase() === cleanSlug) ||
      (p.code && p.code.toLowerCase() === cleanSlug)
    );
    return found || productsList[0] || getAllActiveProducts()[0];
  }, [productsList, productSlug]);

  const currentCategory = useMemo(() => {
    return (
      CATEGORIES.find((c) => c.slug === product.categorySlug || c.id === product.category || c.id === product.categorySlug) ||
      CATEGORIES[0]
    );
  }, [product]);

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

  const seoTitle = useMemo(() => getProductSeoTitle(product), [product]);

  // Reset when product changes
  useEffect(() => {
    setSelectedImage(product.image);
    setOrderQty(setPerCarton);
    setReceivedQty('');
    setAddedSuccess(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic document title for SEO
    document.title = `${seoTitle}`;
  }, [productSlug, product, setPerCarton, seoTitle]);

  // Dynamic calculations
  const totalCartons = Math.max(1, Math.ceil(orderQty / setPerCarton));
  const totalReceivedQty = totalCartons * setPerCarton;
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

  const handleRequestQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal({
        productCode: product.code || product.id,
        productName: product.name,
        quantity: orderQty,
        cartons: totalCartons,
        cbm: totalCbm,
        message: `Inquiry for ${product.name} (${product.code || product.id}). Order Quantity: ${orderQty} pcs, Total Cartons: ${totalCartons}, Total CBM: ${totalCbm} m³. Material: ${material}, Color: ${color}.`,
      });
    }
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Top Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-xs font-bold text-stone-800 pb-2 border-b border-stone-100">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 text-stone-800">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-700 text-stone-800">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${currentCategory.id || currentCategory.slug}`} className="hover:text-emerald-700 text-stone-800">
            {currentCategory.name}
          </Link>
          <span>/</span>
          <span className="text-black font-extrabold truncate">{product.code || product.id}</span>
        </nav>

        {/* Product SEO B2B Heading 1 (Placed exactly above product details as marked) */}
        <div className="py-2.5 px-3 sm:px-4 bg-gradient-to-r from-stone-50 via-lime-50/20 to-stone-50 rounded-xl border border-stone-200/70 shadow-2xs">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-black leading-relaxed tracking-tight">
            {seoTitle}
          </h1>
        </div>

        {/* TOP SECTION: Single Product Specifications & Calculator (Exact match to User Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-4 sm:p-8 rounded-2xl">
          
          {/* Left Column: Product Image with Zoom & Gallery */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[460px] h-[360px] sm:h-[420px] flex items-center justify-center p-4 bg-white rounded-2xl">
              <ImageMagnifier src={selectedImage} alt={seoTitle} title={seoTitle} zoomLevel={2.2} />
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
                    <img
                      src={img}
                      alt={`${product.name} (${product.code || product.id}) - View ${idx + 1}`}
                      title={`${product.name} (${product.code || product.id}) - View ${idx + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Exact Specification Rows & Calculation Inputs (Image 1) */}
          <div className="lg:col-span-7 space-y-3 text-black text-sm">
            
            {/* Table / Key-Value Spec Grid */}
            <div className="space-y-2.5">
              
              {/* Art No */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Art No:</span>
                <span className="col-span-8 font-black text-black">{product.code || product.id}</span>
              </div>

              {/* Description */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Description:</span>
                <span className="col-span-8 font-bold text-black">{product.name}</span>
              </div>

              {/* Material */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Material:</span>
                <span className="col-span-8 font-bold text-black">{material}</span>
              </div>

              {/* Color */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Color:</span>
                <span className="col-span-8 font-bold text-black">{color}</span>
              </div>

              {/* Unit */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Unit:</span>
                <span className="col-span-8 font-bold text-black">{unit}</span>
              </div>

              {/* CBM/Carton */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">CBM/Carton:</span>
                <span className="col-span-8 font-extrabold text-black font-mono">{cbmPerCarton}</span>
              </div>

              {/* Set/Carton */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">Set/Carton:</span>
                <span className="col-span-8 font-extrabold text-black font-mono">{setPerCarton}</span>
              </div>

              {/* N.W/CTN(KG) */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">N.W/CTN(KG):</span>
                <span className="col-span-8 font-extrabold text-black font-mono">{nwPerCtn}</span>
              </div>

              {/* G.W/CTN(KG) */}
              <div className="grid grid-cols-12 items-center py-1">
                <span className="col-span-4 text-black font-bold">G.W/CTN(KG):</span>
                <span className="col-span-8 font-extrabold text-black font-mono">{gwPerCtn}</span>
              </div>

              {/* Total G.W(KG) Box */}
              <div className="grid grid-cols-12 items-center py-1 gap-2">
                <span className="col-span-5 sm:col-span-4 text-black font-bold text-xs sm:text-sm">Total G.W(KG):</span>
                <div className="col-span-7 sm:col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalGw}
                    className="w-full max-w-[190px] sm:w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-xs sm:text-sm text-black font-bold font-mono"
                  />
                </div>
              </div>

              {/* Total Carton Box */}
              <div className="grid grid-cols-12 items-center py-1 gap-2">
                <span className="col-span-5 sm:col-span-4 text-black font-bold text-xs sm:text-sm">Total Carton:</span>
                <div className="col-span-7 sm:col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalCartons}
                    className="w-full max-w-[190px] sm:w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-xs sm:text-sm text-black font-bold font-mono"
                  />
                </div>
              </div>

              {/* Total CBM Box */}
              <div className="grid grid-cols-12 items-center py-1 gap-2">
                <span className="col-span-5 sm:col-span-4 text-black font-bold text-xs sm:text-sm">Total CBM:</span>
                <div className="col-span-7 sm:col-span-8">
                  <input
                    type="text"
                    readOnly
                    value={totalCbm}
                    className="w-full max-w-[190px] sm:w-48 px-3 py-1.5 bg-white border border-stone-400 rounded-sm text-xs sm:text-sm text-black font-bold font-mono"
                  />
                </div>
              </div>

              {/* Received Qty Box (Auto-Calculated based on Full Cartons) */}
              <div className="grid grid-cols-12 items-center py-1.5 gap-2">
                <span className="col-span-5 sm:col-span-4 font-bold text-[#166534] text-xs sm:text-sm">Received Qty:</span>
                <div className="col-span-7 sm:col-span-8 flex items-center gap-1.5">
                  <input
                    type="text"
                    readOnly
                    value={totalReceivedQty}
                    className="w-full max-w-[190px] sm:w-48 px-3 py-1.5 bg-[#f0fdf4] border-2 border-[#166534] rounded-sm text-xs sm:text-sm text-[#14532d] font-bold font-mono outline-hidden shadow-2xs"
                    title="Exact shipped quantity based on full export cartons"
                  />
                  <span className="text-[10px] sm:text-xs text-stone-500 font-medium whitespace-nowrap">(Full Pcs)</span>
                </div>
              </div>

              {/* Order Qty + Request Quote Row */}
              <div className="grid grid-cols-12 items-start sm:items-center py-2 gap-2">
                <span className="col-span-5 sm:col-span-4 font-bold text-stone-900 text-xs sm:text-sm pt-2 sm:pt-0">Order Qty</span>
                <div className="col-span-7 sm:col-span-8 flex flex-wrap items-center gap-2.5">
                  <input
                    type="number"
                    min={setPerCarton}
                    step={setPerCarton}
                    value={orderQty}
                    onChange={(e) => setOrderQty(Math.max(1, Number(e.target.value)))}
                    className="w-full max-w-[190px] sm:w-44 px-3 py-2 bg-white border-2 border-[#166534] rounded-sm text-xs sm:text-sm font-bold text-stone-900 font-mono outline-hidden"
                  />
                  
                  {/* Primary Request Quote Button */}
                  <button
                    onClick={handleRequestQuote}
                    className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm bg-[#166534] hover:bg-[#14532d] border-2 border-[#166534] hover:border-[#14532d] text-white font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98]"
                    title="Request Official Factory Quote for this item"
                  >
                    <Send className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                    <span>Request Quote</span>
                  </button>

                  {/* Secondary Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-sm border border-stone-400 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-all duration-200 cursor-pointer flex items-center gap-1 shadow-2xs"
                    title="Add to multi-item inquiry cart"
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-700" /> <span className="text-emerald-800 font-black">Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-3.5 w-3.5 text-stone-600" />
                        <span>+ Cart</span>
                      </>
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
            <div className="mx-auto mt-2 h-0.5 w-28 bg-[#166534]" />
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
                        alt={`${relProd.name} (${relProd.code || relProd.id}) - Wholesale Eco-Friendly Jute Crafts Bangladesh - Golden Fiber Crafts Ltd.`}
                        title={`${relProd.name} (${relProd.code || relProd.id}) - Wholesale Eco-Friendly Jute Crafts Bangladesh - Golden Fiber Crafts Ltd.`}
                        className="h-full w-full object-contain group-hover/card:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Art No in bold Green (Image 2) */}
                    <div className="mt-3 text-xs sm:text-sm font-bold text-[#166534] group-hover/card:text-[#14532d] transition-colors">
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
                      ? 'w-4 bg-[#166534]'
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
