import React from 'react';
import { X, CheckCircle, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuoteModal: (productCode?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenQuoteModal }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-amber-900/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          
          {/* Image Column */}
          <div className="relative aspect-square md:aspect-auto w-full bg-stone-900">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 rounded-lg bg-amber-500 px-3 py-1 text-xs font-bold text-stone-950 shadow-md">
              Item Code: {product.itemCode}
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                {product.categoryLabel}
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h2>
              
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Technical Specifications List */}
              <div className="mt-6 space-y-3 rounded-2xl bg-amber-50/70 p-4 border border-amber-900/10">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Package className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Specification / Dimensions:</span>
                    <p className="text-stone-600">{product.specification}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Materials Used:</span>
                    <p className="text-stone-600">{product.materials}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Minimum Order Quantity (MOQ):</span>
                    <p className="text-stone-600">{product.moq}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(product.itemCode);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-800 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-amber-700 transition-all"
              >
                Inquire For This Product
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
