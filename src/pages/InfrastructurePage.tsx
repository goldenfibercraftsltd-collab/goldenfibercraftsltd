import React from 'react';
import { ProductionFacilities } from '../components/ProductionFacilities';
import { ProductionLine } from '../components/ProductionLine';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { Factory, Cog, ShieldCheck, Zap } from 'lucide-react';

interface InfrastructurePageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-amber-50/20 py-10 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-stone-950 via-emerald-950 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <Factory className="h-3.5 w-3.5" />
              State-of-the-Art Production Complex
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              Factory Infrastructure & Capacity
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Equipped with modern Swiss Mueller needle looms, high-speed offset printing presses, automatic ultrasonic cutting machinery, and artisan weaving centers.
            </p>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <Cog className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Modern Machinery</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              High-speed computerized Jacquard looms, offset & flexo printers, and automated laser cut & fold units.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80">
            <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">High Output Capacity</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Capable of producing 10+ million meters of woven tape & 5+ million printed labels per month.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md border border-stone-200/80">
            <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Compliance & Safety</h3>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Fire-safe modern industrial layout, environmental waste treatment, and ergonomic worker conditions.
            </p>
          </div>
        </div>

        {/* Production Facilities Overview */}
        <ProductionFacilities />

        {/* 3x3 Production Line Grid with Zoom Modal */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-stone-900">Factory Floor & Machine Outputs</h2>
          <ProductionLine products={PRODUCTS} onSelectProduct={onSelectProduct} />
        </div>

      </div>
    </div>
  );
};
