import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, ProductItem } from '../data/products';
import { ImageMagnifier } from '../components/ImageMagnifier';
import { useCart, CartItem } from '../context/CartContext';
import { ArrowLeft, CheckCircle2, ShoppingBag, ShieldCheck, Phone, Home, Sparkles, ChevronRight, AlertTriangle, Check, Layers, FileText, Info } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by slug or id
  const product: ProductItem = PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug) || PRODUCTS[0];
  const currentCategory = CATEGORIES.find((c) => c.slug === product.categorySlug || c.id === product.category) || CATEGORIES[0];

  // Get products ONLY in the same category
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === currentCategory.slug || p.category === currentCategory.id);

  // Specs & Carton/CBM defaults based on product or BDCreation spec standards
  const setPerCarton = product.setPerCarton || 2;
  const cbmPerCarton = product.cbmPerCarton || 0.06;
  const nwPerCtn = product.nwPerCtn || 3;
  const gwPerCtn = product.gwPerCtn || 4;
  const unit = product.unit || 'S/3';

  // Calculator states
  const [orderQty, setOrderQty] = useState<number>(setPerCarton * 10); // default 20 pcs
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Selected gallery image
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  useEffect(() => {
    setSelectedImage(product.image);
    setOrderQty(setPerCarton * 10);
    setAddedSuccess(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productSlug, product, setPerCarton]);

  // Dynamic calculations
  const totalCartons = Math.ceil(orderQty / setPerCarton);
  const totalCbm = Number((totalCartons * cbmPerCarton).toFixed(3));
  const totalNw = Number((totalCartons * nwPerCtn).toFixed(2));
  const totalGw = Number((totalCartons * gwPerCtn).toFixed(2));

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: selectedImage || product.image,
      artNo: product.id,
      categoryName: product.categoryName,
      material: product.material || 'Natural Fiber',
      color: product.color || 'Multicolor',
      unit,
      cbmPerCarton,
      setPerCarton,
      nwPerCtn,
      gwPerCtn,
      orderQty,
      totalCartons,
      totalCbm,
      totalNw,
      totalGw,
    };

    addToCart(cartItem);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
  };

  // Combine images (main image + distinct gallery images)
  const allImages = Array.from(
    new Set([
      product.image,
      ...(product.galleryImages || []).filter((img) => img !== product.image)
    ])
  );

  return (
    <div className="bg-stone-50 min-h-screen py-4 sm:py-10 font-sans animate-fadeIn">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 overflow-x-auto pb-1">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 shrink-0">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="shrink-0">/</span>
          <Link to="/products" className="hover:text-emerald-700 shrink-0">Products</Link>
          <span className="shrink-0">/</span>
          <Link to={`/categories/${currentCategory.slug}`} className="hover:text-emerald-700 shrink-0">{currentCategory.name}</Link>
          <span className="shrink-0">/</span>
          <span className="text-stone-900 font-bold truncate">{product.name}</span>
        </nav>

        {/* Back Button */}
        <div className="flex items-center justify-between">
          <Link
            to={`/categories/${currentCategory.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl border border-emerald-200/80 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {currentCategory.name} ({categoryProducts.length} Items)
          </Link>
        </div>

        {/* Main 2-Column Detail Layout: Mobile Optimized Order */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          
          {/* MAIN CONTENT AREA FIRST ON MOBILE (order-1 lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-3 bg-white rounded-3xl p-4 sm:p-10 shadow-sm border border-stone-200/90 space-y-6 sm:space-y-8">
            
            {/* Title Header */}
            <div className="space-y-2 border-b border-stone-100 pb-4 sm:pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-700 text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  ART NO: {product.id}
                </span>
                <span className="bg-stone-100 text-stone-700 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border border-stone-200">
                  Category: {product.categoryName}
                </span>
              </div>
              <h1 className="font-serif text-xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {product.name}
              </h1>
            </div>

            {/* PRODUCT PHOTO WITH RESPONSIVE LENS MAGNIFIER */}
            <div className="space-y-4">
              <div className="h-[340px] sm:h-[480px] lg:h-[540px] w-full">
                <ImageMagnifier src={selectedImage} alt={product.name} zoomLevel={2.5} />
              </div>

              {/* Multi-Angle Gallery Thumbnails matching Screenshot 2 */}
              {allImages.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-extrabold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="h-4 w-4 text-emerald-600" />
                      Product Gallery & High-Res Views ({allImages.length} Photos)
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">Click photo to change</span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                    {allImages.map((img, idx) => {
                      const isSelected = selectedImage === img;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className={`relative h-16 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 p-1 transition-all bg-white shrink-0 shadow-xs cursor-pointer ${
                            isSelected
                              ? 'border-emerald-600 ring-2 ring-emerald-500/50 scale-[1.02] bg-emerald-50/20'
                              : 'border-stone-200 hover:border-emerald-400 opacity-85 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`${product.name} Angle ${idx + 1}`} className="h-full w-full object-contain filter drop-shadow-xs" />
                          {isSelected && (
                            <div className="absolute top-1 right-1 bg-emerald-600 text-white rounded-full p-0.5 shadow-sm">
                              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* B2B EXPORT SPECIFICATIONS TABLE */}
            <div className="space-y-4 pt-4 sm:pt-6 border-t border-stone-200">
              <h3 className="font-serif text-base sm:text-lg font-extrabold text-stone-900 border-b border-stone-100 pb-2">
                Export Technical & Carton Specifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs text-stone-800 font-medium">
                
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Art No:</span>
                  <span className="font-bold text-emerald-800 font-mono text-sm">{product.id}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Description:</span>
                  <span className="font-semibold text-stone-900 truncate max-w-xs">{product.name}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Material:</span>
                  <span className="font-semibold text-stone-900">{product.material || 'Natural Jute & Fiber'}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Color:</span>
                  <span className="font-semibold text-stone-900">{product.color || 'Multicolor / Natural'}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Unit:</span>
                  <span className="font-bold text-stone-900">{unit}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">CBM/Carton:</span>
                  <span className="font-bold text-stone-900 font-mono">{cbmPerCarton}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">Set/Carton:</span>
                  <span className="font-bold text-emerald-700 font-mono">{setPerCarton}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">N.W/CTN (KG):</span>
                  <span className="font-bold text-stone-900 font-mono">{nwPerCtn}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="font-bold text-stone-600">G.W/CTN (KG):</span>
                  <span className="font-bold text-stone-900 font-mono">{gwPerCtn}</span>
                </div>

              </div>

              {/* DYNAMIC CARTON & CBM/WEIGHT CALCULATOR FORM */}
              <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200 space-y-4 mt-6">
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  
                  <div className="space-y-1">
                    <label className="block text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider">Total N.W (KG)</label>
                    <input
                      type="text"
                      readOnly
                      value={totalNw.toFixed(2)}
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-900 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider">Total G.W (KG)</label>
                    <input
                      type="text"
                      readOnly
                      value={totalGw.toFixed(2)}
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-900 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider">Total Carton</label>
                    <input
                      type="text"
                      readOnly
                      value={totalCartons}
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-emerald-800 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider">Total CBM</label>
                    <input
                      type="text"
                      readOnly
                      value={totalCbm.toFixed(3)}
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-900 font-mono"
                    />
                  </div>

                </div>

                {/* Order Quantity Input & Add To Cart Row */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  <div className="w-full sm:w-48 space-y-1">
                    <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">Order Qty (Pcs)</label>
                    <input
                      type="number"
                      min={setPerCarton}
                      step={setPerCarton}
                      value={orderQty}
                      onChange={(e) => setOrderQty(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-3 bg-white border-2 border-emerald-600 focus:border-emerald-700 rounded-xl text-sm font-extrabold text-emerald-950 font-mono outline-none shadow-xs"
                    />
                  </div>

                  <div className="w-full sm:flex-1 sm:pt-5">
                    <button
                      onClick={handleAddToCart}
                      className="w-full py-3.5 px-8 rounded-xl bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-extrabold text-sm tracking-wide shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {addedSuccess ? (
                        <>
                          <Check className="h-5 w-5" />
                          <span>Added to Cart Successfully!</span>
                        </>
                      ) : (
                        <>
                          <span>+ Add To Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Carton Alert Message */}
                <div className="p-3.5 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 text-xs font-semibold flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span>There will be <strong>{setPerCarton} products in 1 cartoon</strong>. So you must give <strong>{setPerCarton} times</strong> the product of the cartoon.</span>
                  </div>
                </div>

              </div>

            </div>

            {/* UNIQUE RICH PRODUCT DESCRIPTION & CRAFTSMANSHIP DETAILS */}
            <div className="space-y-6 pt-6 sm:pt-8 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <h2 className="font-serif text-lg sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                  Detailed Product Craftsmanship & B2B Overview
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Box 1: Product Overview */}
                <div className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-2 sm:space-y-3 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    <span>Product Overview & Design</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {product.longDescription?.overview || product.description}
                  </p>
                </div>

                {/* Box 2: Artisanal Craftsmanship */}
                <div className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-2 sm:space-y-3 hover:border-amber-200 transition-colors">
                  <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs uppercase tracking-wider">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span>Artisanal Craftsmanship</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {product.longDescription?.craftsmanship || 'Handcrafted by skilled traditional artisans in Bangladesh using sustainable natural fibers harvested from coastal and river communities.'}
                  </p>
                </div>

                {/* Box 3: Export & Quality Control */}
                <div className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-2 sm:space-y-3 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-2 text-blue-800 font-extrabold text-xs uppercase tracking-wider">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <span>Export Standards & Quality Control</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {product.longDescription?.exportDetails || 'Strictly quality controlled for moisture content (<12%), fumigation treatment, mold protection, and 5-ply export master box packing.'}
                  </p>
                </div>

                {/* Box 4: Care Instructions */}
                <div className="bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200/80 space-y-2 sm:space-y-3 hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-2 text-purple-800 font-extrabold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    <span>Care & Maintenance</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                    {product.longDescription?.careInstructions || 'Spot clean with dry soft brush or slightly damp cloth. Avoid prolonged water soaking. Keep in dry, well-ventilated indoor spaces.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Quote Button for Direct Inquiry */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Fair Trade Certified • 100% Sustainable Packaging</span>
              </div>
              <button
                onClick={() => onOpenQuoteModal(product.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-7 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                Direct OEM Phone Inquiry
              </button>
            </div>

          </div>

          {/* LEFT SIDEBAR SECOND ON MOBILE (order-2 lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-1 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-4 sticky top-6">
            <div className="border-b border-stone-100 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Category Items
                </span>
                <span className="text-xs font-extrabold text-stone-600">{categoryProducts.length} Products</span>
              </div>
              <h3 className="font-serif text-base font-extrabold text-stone-900 mt-1 tracking-tight">
                {currentCategory.name}
              </h3>
            </div>

            {/* List of Same Category Products */}
            <div className="flex flex-col gap-2 max-h-[480px] sm:max-h-[540px] overflow-y-auto pr-1 custom-scrollbar">
              {categoryProducts.map((catProd) => {
                const isActive = catProd.id === product.id;
                return (
                  <Link
                    key={catProd.id}
                    to={`/products/${catProd.slug}`}
                    className={`p-2.5 rounded-xl transition-all text-left flex items-center gap-3 border ${
                      isActive
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-md transform scale-[1.01]'
                        : 'bg-stone-50 text-stone-800 border-stone-100 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-950'
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-lg shrink-0 overflow-hidden border p-0.5 flex items-center justify-center ${
                      isActive ? 'bg-white/10 border-white/30' : 'bg-white border-stone-200'
                    }`}>
                      <img src={catProd.image} alt={catProd.name} className="h-full w-full object-contain filter drop-shadow-xs" />
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${isActive ? 'text-amber-300' : 'text-emerald-700'}`}>
                        {catProd.id}
                      </span>
                      <span className="text-xs font-bold truncate leading-tight mt-0.5">{catProd.name}</span>
                    </div>

                    <ChevronRight className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-stone-100">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-900">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider block">OEM & Export Inquiry</span>
                </div>
                <p className="text-[11px] text-stone-600 font-normal leading-relaxed">
                  Request custom specs or wholesale factory prices directly.
                </p>
                <div className="pt-1 text-xs font-extrabold flex items-center gap-1.5 text-amber-900">
                  <Phone className="h-3.5 w-3.5 text-amber-700" />
                  <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noopener noreferrer" className="hover:underline">+880-1617-778488</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
