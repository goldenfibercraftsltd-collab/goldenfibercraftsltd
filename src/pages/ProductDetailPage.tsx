import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ArrowLeft, CheckCircle2, ShoppingBag, ShieldCheck, Mail, Phone, Home } from 'lucide-react';

interface ProductDetailPageProps {
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();

  // Find product by slug or id
  const product = PRODUCTS.find((p) => p.slug === productSlug || p.id === productSlug) || PRODUCTS[0];
  const currentCategory = CATEGORIES.find((c) => c.slug === product.categorySlug || c.id === product.category) || CATEGORIES[0];

  return (
    <div className="bg-stone-50 min-h-screen py-8 font-sans animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb matching Screenshot 2 */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to={`/categories/${currentCategory.slug}`} className="hover:text-emerald-700">
            {currentCategory.name}
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-bold">{product.name}</span>
        </nav>

        {/* Back to Category Link matching Screenshot 2 */}
        <div>
          <Link
            to={`/categories/${currentCategory.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {currentCategory.name}
          </Link>
        </div>

        {/* Main 2-Column Detail Layout matching Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Categories Menu matching Screenshot 2 */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-5 shadow-sm border border-stone-200 space-y-3">
            <div className="border-b border-stone-100 pb-2">
              <h3 className="font-serif text-sm font-extrabold text-stone-900 uppercase tracking-wider">
                Product Categories
              </h3>
            </div>
            <div className="flex flex-col gap-1.5">
              {CATEGORIES.map((cat) => {
                const isActive = cat.slug === currentCategory.slug;
                return (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.slug}`}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-stone-50 text-stone-700 hover:bg-emerald-50 hover:text-emerald-900'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">➔</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact Widget */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider block text-amber-900">Direct Export Inquiry</span>
              <p className="text-xs font-light">Contact our sales engineering team for OEM samples & prices.</p>
              <div className="pt-1 text-xs font-bold flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-amber-700" />
                <a href="tel:+8801831806948" className="hover:underline">+880-1831-806948</a>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA: Hero Image, Specs & Details matching Screenshot 2 */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
            
            {/* Product H1 Title & Code */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Item Code: {product.id}
                </span>
                <span className="text-xs text-stone-500 font-semibold">
                  Category: {product.categoryName}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {product.name}
              </h1>
            </div>

            {/* Big Hero Image View Container matching Screenshot 2 */}
            <div className="relative w-full h-80 sm:h-[450px] overflow-hidden rounded-2xl bg-stone-100 flex items-center justify-center p-6 border border-stone-200/80 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-stone-900">Product Description</h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Specifications Table matching PPT Data */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">Technical Specifications</h3>
              <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-xs">
                <table className="w-full text-left text-xs font-medium text-stone-700">
                  <tbody className="divide-y divide-stone-200">
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-stone-50/60' : 'bg-white'}>
                        <td className="px-4 py-3 font-bold text-stone-900 w-1/3 bg-stone-100/50">
                          {spec.key}
                        </td>
                        <td className="px-4 py-3 text-stone-800 font-semibold">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">Key Quality Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-stone-800 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Quote Button */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Fair Trade & BSCI Certified Export Standard</span>
              </div>
              <button
                onClick={() => onOpenQuoteModal(product.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
              >
                <ShoppingBag className="h-4 w-4" />
                Request Quote for {product.id}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
