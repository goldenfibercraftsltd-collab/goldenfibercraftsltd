import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#fcfbf9] min-h-screen py-8 sm:py-12 font-sans text-stone-800 animate-fadeIn">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] p-8 sm:p-10 text-white shadow-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold uppercase tracking-widest text-emerald-200 border border-white/20">
            <FileText className="h-3.5 w-3.5" />
            <span>Official Policy & Agreements</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Terms & Conditions
          </h1>
          <p className="text-emerald-100 text-sm font-normal max-w-2xl leading-relaxed">
            International export standards, commercial terms, quality benchmarks, and Fair Trade manufacturing compliance for Golden Fiber Crafts Ltd.
          </p>
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
              <p><span className="font-semibold text-stone-900">Email:</span> shafiq@goldenfibercraftsltd.com / info@goldenfibercraftsltd.com</p>
              <p><span className="font-semibold text-stone-900">Corporate Office:</span> House# 78, Road# 16, Sector# 11, Uttara, Dhaka, Bangladesh</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default TermsPage;
