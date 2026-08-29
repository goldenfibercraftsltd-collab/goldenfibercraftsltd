import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/usePageTitle';

export const TermsPage: React.FC = () => {
  usePageTitle('Terms & Conditions');

  return (
    <div className="bg-[#fcfbf9] min-h-screen py-8 sm:py-12 font-sans text-stone-800 animate-fadeIn">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] p-7 sm:p-9 text-white shadow-xl">
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} 
          />
          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <FileText className="h-3 w-3 text-emerald-300" />
              <span>Official Policy & Agreements</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Terms & Conditions
            </h1>
            <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
              International export standards, commercial terms, quality benchmarks, and Fair Trade manufacturing compliance for Golden Fiber Crafts Ltd.
            </p>
          </div>

          {/* Large Decorative Watermark in Background (Fully Visible) */}
          <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
            <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 object-contain filter invert drop-shadow-md" />
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-8 text-sm text-stone-700 leading-relaxed font-normal">
          
          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              1. Overview & Export Scope
            </h2>
            <p>
              Golden Fiber Crafts Ltd. is a premier manufacturer and direct exporter of eco-friendly jute, seagrass, kaisa grass, palm leaf, date leaf, and natural fiber handicrafts based in Dhaka, Bangladesh. By placing purchase orders, requesting custom samples, or interacting with our commercial export desk, global buyers agree to the following terms and trade practices.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              2. Minimum Order Quantity (MOQ) & Sampling
            </h2>
            <p>
              Due to hand-crafted artisanal production, standard MOQs vary by product category (typically 100 to 500 units per style/color). Custom prototypes and pre-production samples are developed upon buyer request. Sample development lead time is approximately 7–12 business days.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              3. Pricing, Invoicing & Commercial Terms
            </h2>
            <p>
              All formal commercial quotations are provided in US Dollars (USD) or Euros (EUR) on FOB Chittagong Port, CFR, or CIF delivery terms in accordance with Incoterms 2020. Price quotations remain valid for 30 days from date of issue unless raw fiber market conditions fluctuate drastically.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              4. Quality Assurance & Tolerance
            </h2>
            <p>
              Our items are 100% handcrafted using natural biodegradable plant fibers. Minor natural variations in shade, fiber grain, and ±3% size dimensions are inherent to organic artisanal craftwork and distinguish authentic handmade heritage. Rigorous 4-stage quality control is performed before final master carton packing.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              5. Shipping, Packaging & Fumigation
            </h2>
            <p>
              Export consignments are packaged in 5-ply heavy-duty corrugated export master cartons with silica gel desiccant packs to prevent transit humidity. Phytosanitary inspection and standard export fumigation certificates are provided with every seafreight container shipment.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              6. Ethical Fair Trade & Social Compliance
            </h2>
            <p>
              Golden Fiber Crafts Ltd. operates under strict Fair Trade guidelines, ensuring zero child labor, fair living wages, hygienic work conditions, and women empowerment across rural artisan weaving communities in Bangladesh.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-100 pb-2">
              7. Contact & Legal Entity
            </h2>
            <p>
              For legal inquiries, contract documentation, or commercial partnership queries:
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs sm:text-sm space-y-1">
              <p><span className="font-semibold text-stone-900">Company:</span> Golden Fiber Crafts Ltd.</p>
              <p><span className="font-semibold text-stone-900">Email:</span> shafiq@goldenfibercraftsltd.com</p>
              <p><span className="font-semibold text-stone-900">Corporate Office:</span> House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default TermsPage;
