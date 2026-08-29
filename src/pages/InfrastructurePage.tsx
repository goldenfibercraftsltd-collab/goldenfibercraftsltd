import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Sparkles,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  Award,
  Users,
  Sun,
  Eye,
  Maximize2,
  X,
  Factory,
  Truck
} from 'lucide-react';
import { ScrollTypingText } from '../components/ScrollTypingText';
import { usePageTitle } from '../utils/usePageTitle';

interface InfrastructurePageProps {
  onSelectProduct?: (product: any) => void;
  onOpenQuoteModal?: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onOpenQuoteModal,
}) => {
  usePageTitle('Manufacturing Infrastructure & Facilities');
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#fcfbf9] text-stone-800 font-sans min-h-screen animate-fadeIn">
      
      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fadeIn cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-stone-700 bg-stone-950">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-emerald-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedImage}
              alt="Artisan Craftsmanship Detail"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 1. Breadcrumb Navigation & Hero Page Banner */}
      {/* ---------------------------------------------------- */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] text-white">
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:py-9 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <Factory className="h-3 w-3 text-emerald-300" />
              Manufacturing & Artisan Infrastructure
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Artisan Infrastructure & Production Facilities
            </h1>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              From rural artisan cottage clusters across Bangladesh to centralized export finishing warehouses, exploring our end-to-end sustainable handicraft production ecosystem.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                <Truck className="h-3 w-3 text-amber-300" /> 40 HQ Monthly Capacity
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                100% Handcrafted
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                Ethical Rural Ecosystem
              </span>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. Factory & Production Facilities (PDF Page 11 & 12) */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 reveal-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-emerald-950 bg-emerald-100 border border-emerald-300">
              <Factory className="h-3.5 w-3.5 text-emerald-800" />
              <span>Multi-Unit Export Facility</span>
            </span>
            <ScrollTypingText
              as="h2"
              text="Factory and Production Facilities"
              className="font-serif text-3xl sm:text-4xl font-extrabold text-black"
              speed={35}
            />
            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal">
              Golden Fiber Crafts Ltd. operates an export-oriented manufacturing facility dedicated to producing high-quality, eco-friendly products while maintaining strong standards of quality, efficiency, and responsible manufacturing.
            </p>
            <p className="text-emerald-800 font-serif font-bold text-sm sm:text-base italic">
              "Precision Manufacturing. Sustainable Innovation. Global Quality."
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          {/* Real Factory Machinery & Facility Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-stone-50 hover-lift flex flex-col">
              <div className="h-56 overflow-hidden bg-stone-900">
                <img
                  src="/infrastructure/factory_machine_1.png"
                  alt="Precision Weaving & Processing Machine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  Fiber Processing Line
                </span>
                <h4 className="font-serif text-base font-bold text-stone-950">Modern Production Techniques</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  Combining skilled traditional craftsmanship with modern production machinery for consistent tensile and fiber uniformity.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-stone-50 hover-lift flex flex-col">
              <div className="h-56 overflow-hidden bg-stone-900">
                <img
                  src="/infrastructure/factory_machine_2.png"
                  alt="Automated Material Preparation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                  Calibrated Finishing
                </span>
                <h4 className="font-serif text-base font-bold text-stone-950">Bulk Export Capabilities</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  Flexible manufacturing designed to handle bulk container export orders, repeat programs, and bespoke buyer specifications.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-stone-50 hover-lift flex flex-col">
              <div className="h-56 overflow-hidden bg-stone-900">
                <img
                  src="/infrastructure/factory_warehouse_3.png"
                  alt="Quality Control and Master Carton Packing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1.5 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded-md">
                  Moisture-Controlled Packing
                </span>
                <h4 className="font-serif text-base font-bold text-stone-950">Dedicated Packaging Warehouse</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  Pre-shipment inspection, humidity control (&lt;12% moisture), barcode tagging, and export carton master loading.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Manufacturing Strengths */}
          <div className="rounded-3xl bg-emerald-950 py-5 px-5 sm:py-6 sm:px-8 text-white shadow-xl space-y-4 border border-emerald-800/60">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-amber-300">
                Our Manufacturing Strength
              </h3>
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                "We transform Bangladesh's natural fibers and traditional craftsmanship into thoughtfully designed products for the global market."
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
              {[
                { title: 'Craftsmanship', desc: 'Generation-old tactile handweaving excellence' },
                { title: 'Consistent Quality', desc: 'Zero-defect tolerance and ISO standards' },
                { title: 'Flexible Production', desc: 'Custom dimensions, colors, and design lines' },
                { title: 'Product Innovation', desc: 'Eco-friendly blends & contemporary aesthetics' },
                { title: 'Responsible Manufacturing', desc: 'Ethical wages, safe workspaces, zero child labor' },
                { title: 'On-Time Delivery', desc: 'Strict lead times with 40X40\' HQ containers/month' },
              ].map((str, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-xs p-3 sm:p-3.5 rounded-2xl border border-white/20 text-center space-y-1 hover:bg-white/25 transition-all shadow-xs">
                  <h4 className="font-black text-xs sm:text-sm text-amber-300">{str.title}</h4>
                  <p className="text-xs text-white font-semibold leading-snug">{str.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Manufacturing Process */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-900">STAGE-BY-STAGE EXECUTION</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-black">
                Manufacturing Process
              </h3>
              <p className="text-xs text-stone-700 font-medium">From raw natural fiber sourcing to global shipment delivery.</p>
              <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: '01',
                  title: 'Product Design & Development',
                  points: ['Market trend analysis & buyer reviews', 'Concept creation by design team', 'Prototype development & approval', 'Technical specifications & counter samples']
                },
                {
                  step: '02',
                  title: 'Raw Material Procurement',
                  points: ['Selection of premium jute, seagrass, kaisa, cotton & bamboo', 'Procurement from audited suppliers', 'Inspection for tensile, moisture & color consistency']
                },
                {
                  step: '03',
                  title: 'Material Preparation',
                  points: ['Cleaning, sorting & drying', 'Moisture control under digital hygrometers', 'Cutting, dyeing, braiding & treatment', 'Hardware, accessories & handles preparation']
                },
                {
                  step: '04',
                  title: 'Handcraft Production',
                  points: ['Artisans weave, braid, stitch & assemble', 'Standardized master production templates', 'Continuous supervision & in-process checks']
                },
                {
                  step: '05',
                  title: 'Finishing',
                  points: ['Trimming loose fibers & threads', 'Surface cleaning & smooth polishing', 'Attachment of handles, labels, logos & hardware', 'Final shaping & appearance enhancement']
                },
                {
                  step: '06',
                  title: 'Quality Inspection',
                  points: ['Dimensions & specification verification', 'Stitching & structural tensile test', 'Color consistency & functional performance', 'Zero-defect clearance before packaging']
                },
                {
                  step: '07',
                  title: 'Packaging',
                  points: ['Individual product cleaning & dust proofing', 'Eco-friendly protective wrapping', 'Barcode, labels & shipping marks verification', '5-Ply export cartons with moisture barriers']
                },
                {
                  step: '08',
                  title: 'Storage & Shipment',
                  points: ['Clean, dry warehouse storage', 'Pre-shipment audit & container loading', 'Customs clearance & export documentation', 'Timely delivery to international ports']
                }
              ].map((proc, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200 shadow-sm hover-lift space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="inline-block text-base font-serif font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg">
                      {proc.step}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">{proc.title}</h4>
                    <ul className="space-y-1.5 text-[11px] text-stone-700 font-medium">
                      {proc.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Flow Ribbon */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-4 text-white text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Our Value Chain Flow</p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold">
                <span>DESIGN</span>
                <span className="text-amber-400">➔</span>
                <span>NATURAL FIBERS</span>
                <span className="text-amber-400">➔</span>
                <span>QUALITY CRAFTSMANSHIP</span>
                <span className="text-amber-400">➔</span>
                <span>RESPONSIBLE PACKAGING</span>
                <span className="text-amber-400">➔</span>
                <span>GLOBAL DELIVERY</span>
                <span className="text-amber-400">➔</span>
                <span className="text-emerald-300 font-bold">CUSTOMER SATISFACTION</span>
              </div>
            </div>
          </div>

          {/* Supply Chain & Logistics (Page 19) */}
          <div className="grid lg:grid-cols-2 gap-8 items-start bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider text-teal-900 bg-teal-100 border border-teal-300">
                <Truck className="h-3.5 w-3.5 text-teal-800" />
                Global Logistics & Supply Chain
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Seamless Freight & Export Execution
              </h3>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                At Golden Fiber Crafts Ltd., our supply chain and logistics system is strategically designed to ensure efficiency, reliability, flexibility, and seamless coordination across every stage of our operations.
              </p>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
                We maintain a strong and well-established sourcing network, connecting sourcing, procurement, production, quality control, packaging, and distribution into a coordinated workflow, enabling efficient lead times and dependable product quality.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                  <strong className="block text-emerald-900">Sea Freight FCL / LCL</strong>
                  <span className="text-stone-600">Chittagong Port to global destinations</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                  <strong className="block text-emerald-900">Air Cargo Express</strong>
                  <span className="text-stone-600">Dhaka DAC Airport for urgent programs</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src="/infrastructure/logistics_freight.png"
                alt="Golden Fiber Crafts Supply Chain & Container Logistics"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. Facility Quality & Compliance Infrastructure */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-b from-[#f5eee6] to-[#fcfbf9] py-10 sm:py-12 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 reveal-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-900">
              EXPORT ASSURANCE & CAPACITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-black">
              International Export Standards
            </h2>
            <p className="text-sm text-stone-900 leading-relaxed font-medium">
              Every shipment is produced under rigorous environmental compliance, pest-free certification, and strict moisture control parameters.
            </p>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-emerald-700" />
          </div>

          {/* Trust Value Badges Grid (Moved to Marked Section) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-2">
            <div className="card-slide-far-left stagger-2 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-black">10,000+ Artisans</h4>
                <p className="text-xs text-stone-900 font-semibold">Skilled rural workforce</p>
              </div>
            </div>

            <div className="card-slide-left stagger-1 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center shrink-0">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-black">100% Natural</h4>
                <p className="text-xs text-stone-900 font-semibold">Plant-based fibres</p>
              </div>
            </div>

            <div className="card-slide-right stagger-1 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-black">Fair Trade & Audit</h4>
                <p className="text-xs text-stone-900 font-semibold">BSCI & ISO Certified</p>
              </div>
            </div>

            <div className="card-slide-far-right stagger-2 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 text-stone-950 flex items-center justify-center shrink-0">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-black">40X40' HQ / Month</h4>
                <p className="text-xs text-stone-900 font-semibold">Container Capacity</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="card-slide-left stagger-2 hover-lift bg-white rounded-3xl p-5 sm:p-6 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-11 w-11 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center shadow-xs">
                <Sun className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">
                Moisture & Mold Protection
              </h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                All raw materials and finished handicrafts undergo controlled drying and digital hygrometer inspection ensuring moisture stays below 12%, guaranteed mold-free during maritime container voyages.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-amber-950">
                <CheckCircle2 className="h-4 w-4" />
                <span>Export Fumigation Certified</span>
              </div>
            </div>

            <div className="card-slide-mid stagger-1 hover-lift bg-white rounded-3xl p-5 sm:p-6 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-11 w-11 rounded-2xl bg-emerald-100 text-emerald-950 flex items-center justify-center shadow-xs">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">
                Ethical & Fair Trade Workspaces
              </h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Our cooperative production hubs across Bangladesh guarantee fair living wages, safe ergonomic ventilation, zero child labor, and continuous technical weaving masterclasses for rural women.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                <CheckCircle2 className="h-4 w-4" />
                <span>BSCI & ISO Audited</span>
              </div>
            </div>

            <div className="card-slide-right stagger-2 hover-lift bg-white rounded-3xl p-5 sm:p-6 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-11 w-11 rounded-2xl bg-teal-100 text-teal-950 flex items-center justify-center shadow-xs">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">
                5-Ply Master Carton Packaging
              </h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Nestable basket packaging, silica gel desiccants, heavy-duty 5-ply export master cartons, and shrink-wrapped palletization custom tailored for high container volume CBM efficiency.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-teal-950">
                <CheckCircle2 className="h-4 w-4" />
                <span>FCL & LCL Export Ready</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

