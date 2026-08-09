import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, ProductItem } from '../data/products';
import { ArrowLeft, CheckCircle2, ShoppingBag, ShieldCheck, Phone, Home, Sparkles, ChevronRight, Layers, Tag, Eye } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();

  // Find product by slug or id
  const product: ProductItem = PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug) || PRODUCTS[0];
  const currentCategory = CATEGORIES.find((c) => c.slug === product.categorySlug || c.id === product.category) || CATEGORIES[0];

  // Get products ONLY in the same category
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === currentCategory.slug || p.category === currentCategory.id);

  // Gallery state
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  // Update selected image when product changes
  useEffect(() => {
    setSelectedImage(product.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productSlug, product]);

  // Combine main image + gallery images
  const allImages = [product.image, ...(product.galleryImages || [])];

  return (
    <div className="bg-stone-50 min-h-screen py-6 sm:py-10 font-sans animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500 overflow-x-auto pb-1">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1 shrink-0">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="shrink-0">/</span>
          <Link to="/products" className="hover:text-emerald-700 shrink-0">
            Products
          </Link>
          <span className="shrink-0">/</span>
          <Link to={`/categories/${currentCategory.slug}`} className="hover:text-emerald-700 shrink-0">
            {currentCategory.name}
          </Link>
          <span className="shrink-0">/</span>
          <span className="text-stone-900 font-bold truncate">{product.name}</span>
        </nav>

        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            to={`/categories/${currentCategory.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl border border-emerald-200/80 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {currentCategory.name} ({categoryProducts.length} Items)
          </Link>
        </div>

        {/* Main 2-Column Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT SIDEBAR: PRODUCTS IN THIS CATEGORY */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/90 space-y-4 sticky top-6">
            
            {/* Header: Category Name & Count */}
            <div className="border-b border-stone-100 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Category Products
                </span>
                <span className="text-xs font-extrabold text-stone-600">
                  {categoryProducts.length} Items
                </span>
              </div>
              <h3 className="font-serif text-base font-extrabold text-stone-900 mt-1 tracking-tight">
                {currentCategory.name}
              </h3>
            </div>

            {/* List of Products in SAME Category */}
            <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
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
                    {/* Thumbnail */}
                    <div className={`h-12 w-12 rounded-lg shrink-0 overflow-hidden border p-0.5 flex items-center justify-center ${
                      isActive ? 'bg-white/10 border-white/30' : 'bg-white border-stone-200'
                    }`}>
                      <img
                        src={catProd.image}
                        alt={catProd.name}
                        className="h-full w-full object-contain filter drop-shadow-xs"
                      />
                    </div>

                    {/* Code & Title */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                        isActive ? 'text-amber-300' : 'text-emerald-700'
                      }`}>
                        {catProd.id}
                      </span>
                      <span className="text-xs font-bold truncate leading-tight mt-0.5">
                        {catProd.name}
                      </span>
                    </div>

                    <ChevronRight className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact Widget */}
            <div className="pt-2 border-t border-stone-100">
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/80 border border-amber-200/80 text-amber-950 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-900">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider block">OEM & Export Inquiry</span>
                </div>
                <p className="text-[11px] text-stone-600 font-normal leading-relaxed">
                  Request custom specs or wholesale factory prices directly.
                </p>
                <div className="pt-1 text-xs font-extrabold flex items-center gap-1.5 text-amber-900">
                  <Phone className="h-3.5 w-3.5 text-amber-700" />
                  <a href="tel:+8801831806948" className="hover:underline">+880-1831-806948</a>
                </div>
              </div>
            </div>

          </div>

          {/* MAIN CONTENT AREA: Main Image + Interactive Multi-Angle Gallery + Specs */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/90 space-y-8">
            
            {/* Title & Metadata Header */}
            <div className="space-y-3 border-b border-stone-100 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  ITEM CODE: {product.id}
                </span>
                <span className="bg-stone-100 text-stone-700 text-xs font-bold px-3 py-1 rounded-full border border-stone-200">
                  Category: {product.categoryName}
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full border border-amber-200/80 flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-700" /> Certified Export Grade
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
                {product.name}
              </h1>
            </div>

            {/* PRODUCT PHOTO & GALLERY SECTION */}
            <div className="space-y-4">
              
              {/* Big Main Image Container */}
              <div className="relative w-full h-80 sm:h-[480px] overflow-hidden rounded-2xl bg-stone-50 flex items-center justify-center p-6 border border-stone-200/80 shadow-inner group">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />

                {/* View Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-xs flex items-center gap-1.5 text-[11px] font-bold text-stone-700">
                  <Eye className="h-3.5 w-3.5 text-emerald-700" /> Interactive Studio View
                </div>
              </div>

              {/* Multi-Angle Gallery Thumbnails */}
              {allImages.length > 1 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Product Gallery & Studio Angles ({allImages.length} Views)
                  </span>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden border-2 p-1.5 transition-all bg-white shrink-0 shadow-xs ${
                          selectedImage === img
                            ? 'border-emerald-600 ring-2 ring-emerald-400/50 scale-105'
                            : 'border-stone-200 hover:border-emerald-300 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} View ${idx + 1}`}
                          className="h-full w-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Description */}
            <div className="space-y-2 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/70">
              <h3 className="font-serif text-base font-bold text-stone-900 flex items-center gap-2">
                <Layers className="h-4 w-4 text-emerald-700" /> Description & Export Details
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-stone-900 flex items-center gap-2">
                <Tag className="h-4 w-4 text-emerald-700" /> Technical Specifications
              </h3>
              <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-xs">
                <table className="w-full text-left text-xs font-medium text-stone-700">
                  <tbody className="divide-y divide-stone-200">
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-stone-50/70' : 'bg-white'}>
                        <td className="px-5 py-3.5 font-bold text-stone-900 w-1/3 bg-stone-100/60 border-r border-stone-200/60">
                          {spec.key}
                        </td>
                        <td className="px-5 py-3.5 text-stone-800 font-semibold">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality Features List */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-stone-900">Export Quality Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-stone-800 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/80 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Call-To-Action */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-600">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Fair Trade Certified • 100% Eco Sustainable Packaging</span>
              </div>
              <button
                onClick={() => onOpenQuoteModal(product.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-lime-600 to-emerald-700 hover:from-lime-700 hover:to-emerald-800 text-white px-9 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                Request Quote for {product.id}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
