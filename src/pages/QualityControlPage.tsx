import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Clock,
  FileCheck,
  Sparkles,
  Search,
  Maximize2,
  X,
  ArrowRight,
  Package,
  Layers,
  Check,
  AlertCircle,
  ThermometerSnowflake,
  Sun,
  Scale,
  BadgeCheck
} from 'lucide-react';
import { ScrollTypingText } from '../components/ScrollTypingText';

interface QualitySection {
  id: string;
  number: string;
  badge: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: { label: string; value: string }[];
  guarantees: string[];
}

const QUALITY_SECTIONS: QualitySection[] = [
  {
    id: 'raw-fiber-testing',
    number: '01',
    badge: 'Raw Material Verification',
    title: 'Raw Fiber Purity & Tensile Strength Testing',
    quote: 'Only top-grade natural golden tossa jute, sun-cured coastal seagrass, and flexible date palm fronds are admitted into our weaving lines.',
    description:
      'Every incoming batch of raw natural fiber undergoes tensile load testing, color consistency matching, and fiber strand length verification. We reject brittle or chemically treated strands to ensure our handwoven products withstand heavy daily use and international retail handling.',
    image: '/quality/quality_tensile_test.png',
    imageAlt: 'Artisan inspecting golden jute fiber tensile strength with calibrated measuring instruments in laboratory',
    metrics: [
      { label: 'Tensile Endurance', value: '>45 kgf' },
      { label: 'Synthetic Content', value: '0.0% Pure' },
      { label: 'Natural Fiber Yield', value: 'Grade-A Only' }
    ],
    guarantees: [
      '100% Natural Golden Jute & Wild Coastal Seagrass',
      'No synthetic nylon or polyester core threads',
      'Non-toxic, azo-free and heavy metal free vegetable colorings'
    ]
  },
  {
    id: 'artisan-precision-audit',
    number: '02',
    badge: 'In-Line Weaving Inspection',
    title: 'Workstation Craftsmanship & Dimensional Precision',
    quote: 'Our master craftswomen inspect every weave interval, knot security, and frame alignment in realtime during production.',
    description:
      'Unlike automated machines that cannot account for natural fiber variations, our skilled artisans use generation-old tactile expertise combined with steel template jigs. Each basket, rug, and placemat is checked for uniform wall thickness, balanced handles, and exact geometric symmetry.',
    image: '/infrastructure/seagrass_baskets.png',
    imageAlt: 'Master artisan precision weaving seagrass basket with structural check',
    metrics: [
      { label: 'Size Tolerance', value: '±1.5% Strict' },
      { label: 'Structure Check', value: 'Rigid Frame' },
      { label: 'Handle Capacity', value: '15-20 kg' }
    ],
    guarantees: [
      'Zero loose ends, unraveling coils, or jagged edges',
      'Reinforced double-wrapped load bearing handles',
      'Flat laying base guarantee for all mats and rugs'
    ]
  },
  {
    id: 'moisture-mold-control',
    number: '03',
    badge: 'Climate & Mold Defense',
    title: 'Digital Moisture Metering & Anti-Mold Guarantee',
    quote: 'We guarantee 100% mold-free delivery through climate-controlled drying chambers and digital moisture metering.',
    description:
      'Moisture is the primary risk during international maritime container transit. Golden Fiber Crafts Ltd enforces a strict protocol: all products undergo heated dehumidification chambers, digital pin hygrometer tests ensuring moisture stays strictly between 8% and 12%, followed by certified fumigation and silica gel pouch inclusion.',
    image: '/quality/quality_inspection.png',
    imageAlt: 'Quality control officer testing handcrafted seagrass basket with digital moisture meter hygrometer',
    metrics: [
      { label: 'Moisture Level', value: '8% - 12%' },
      { label: 'Mold Protection', value: '100% Guaranteed' },
      { label: 'Fumigation', value: 'Govt. Certified' }
    ],
    guarantees: [
      'Digital hygrometer testing of every production batch',
      'Official Phytosanitary & Export Fumigation certificates provided',
      'Heavy-duty desiccants placed inside every master carton'
    ]
  },
  {
    id: 'export-packaging-logistics',
    number: '04',
    badge: 'Packaging & Container Safety',
    title: '5-Ply Export Master Cartons & Barcode Compliance',
    quote: 'Robust export packaging engineered for maximum container CBM space and zero shipping transit damage.',
    description:
      'Our packaging line utilizes heavy-duty 5-ply double-wall corrugated master cartons, reinforced edge taping, and precision nestable stacking. Every carton is labeled with buyer-specific GS1/EAN barcodes, drop-tested according to ISTA 1A standards, and sealed with moisture-barrier liners.',
    image: '/quality/quality_export_packaging.png',
    imageAlt: 'Export warehouse workers packing handcrafted storage baskets in 5-ply cartons with barcodes',
    metrics: [
      { label: 'Carton Standard', value: '5-Ply Heavy Duty' },
      { label: 'Drop Test Standard', value: 'ISTA 1A Passed' },
      { label: 'Barcode Scanning', value: '100% Verified' }
    ],
    guarantees: [
      'High-bursting strength cartons (>18 kg/cm² burst factor)',
      'Custom buyer private labeling, hangtags, and SKU barcodes',
      'Optimized palletization and container space maximization'
    ]
  }
];

export const QualityControlPage: React.FC = () => {
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
              alt="Quality Control Detail"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 1. Hero Header with reveal-up */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5eee6] via-[#faf6f0] to-[#fcfbf9] pt-12 pb-20 border-b border-stone-200/80">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <nav className="reveal-up flex items-center gap-2 text-xs font-bold text-stone-800">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-extrabold">Quality Assurance</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-300/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-xs">
              <ShieldCheck className="h-4 w-4 text-amber-800" />
              <span>International Export Grade Guarantee</span>
            </div>

            <ScrollTypingText
              as="h1"
              text="Quality Assurance & Standards"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15]"
              speed={40}
            />

            <p className="font-serif text-lg sm:text-xl text-black italic font-bold">
              Where ancestral artisan mastery meets modern export quality control.
            </p>

            <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-medium max-w-2xl mx-auto pt-1">
              At Golden Fiber Crafts Ltd, every handcrafted item is created by highly experienced traditional artisans and inspected under strict international AQL 2.5 compliance standards before global shipment.
            </p>
          </div>

          {/* 4 Trust Metrics with Middle-Outward Card Slide */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4">
            <div className="card-slide-far-left stagger-2 hover-lift-sm p-4 rounded-2xl bg-white/90 border border-[#e8ded1] shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-2">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">AQL 2.5 Standard</h4>
              <p className="text-xs text-stone-900 font-semibold">Zero-defect sampling</p>
            </div>

            <div className="card-slide-left stagger-1 hover-lift-sm p-4 rounded-2xl bg-white/90 border border-[#e8ded1] shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-2">
                <ThermometerSnowflake className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">Moisture &lt;12%</h4>
              <p className="text-xs text-stone-900 font-semibold">100% mold-free guarantee</p>
            </div>

            <div className="card-slide-right stagger-1 hover-lift-sm p-4 rounded-2xl bg-white/90 border border-[#e8ded1] shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center font-bold mb-2">
                <FileCheck className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">Fumigation Passed</h4>
              <p className="text-xs text-stone-900 font-semibold">Official phytosanitary cert</p>
            </div>

            <div className="card-slide-far-right stagger-2 hover-lift-sm p-4 rounded-2xl bg-white/90 border border-[#e8ded1] shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center font-bold mb-2">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">BSCI &amp; Sedex</h4>
              <p className="text-xs text-stone-900 font-semibold">Ethical audit verified</p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. Four Alternating Quality Pillar Sections */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {QUALITY_SECTIONS.map((section, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Visual Image Column */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="relative group rounded-3xl overflow-hidden bg-[#f0e8dc] border border-[#e4d6c4] shadow-xl hover:shadow-2xl transition-all duration-500 img-zoom-container">
                    
                    <div className="absolute top-4 left-4 z-20 bg-stone-950/80 backdrop-blur-md text-amber-300 font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md">
                      STAGE {section.number} • {section.badge}
                    </div>

                    <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>

                    <button
                      onClick={() => setSelectedImage(section.image)}
                      className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-950/80 hover:bg-emerald-700 text-white text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 btn-interactive"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>View Inspection Photo</span>
                    </button>

                    {/* Metrics Badges floating on image */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 max-w-[80%]">
                      {section.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-stone-950/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-left shadow-md"
                        >
                          <span className="block text-[9px] text-amber-300 font-medium uppercase">{m.label}</span>
                          <strong className="block text-xs font-extrabold text-white">{m.value}</strong>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Content & Quality Checklist Column */}
                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-black flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-700" />
                      <span>GUARANTEED EXPORT PROTOCOL</span>
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="relative pl-4 border-l-4 border-emerald-700 bg-[#f7f2ea] p-4 rounded-r-2xl border-y border-r border-[#e8ded1]">
                    <p className="text-sm sm:text-base text-black leading-relaxed font-serif font-bold italic">
                      "{section.quote}"
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-medium">
                    {section.description}
                  </p>

                  {/* Guaranteed Points Checklist with Staggered Entrance */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-black">
                      Export Quality Guarantee Points:
                    </h4>
                    {section.guarantees.map((item, idx2) => {
                      const gStagger = `stagger-${idx2 + 1}`;
                      return (
                        <div
                          key={idx2}
                          className={`reveal-up ${gStagger} hover-lift-sm flex items-start gap-3 p-3 rounded-xl bg-white border border-[#eae0d2] shadow-xs`}
                        >
                          <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <span className="text-xs font-bold text-black">{item}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. AQL 2.5 Inspection & Compliance Matrix */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-b from-[#f5eee6] to-[#fcfbf9] py-16 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-900">
              AUDIT MATRIX & SPECIFICATIONS
            </span>
            <ScrollTypingText
              as="h2"
              text="Comprehensive Quality Control Checklist"
              className="font-serif text-2xl sm:text-4xl font-extrabold text-black"
              speed={35}
            />
            <p className="text-sm text-stone-900 leading-relaxed font-medium">
              Every production lot is audited by certified internal inspectors before external SGS/Intertek audits or shipping container loading.
            </p>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-emerald-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="card-slide-left stagger-2 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">1. Dimension & Shape Testing</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Calibrated against master approved samples. Height, diameter, taper angles, and nestable stack tolerance checked.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-black font-semibold">
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ Within ±1.5% deviation</li>
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ S/2, S/3, S/4 nesting verified</li>
              </ul>
            </div>

            <div className="card-slide-mid stagger-1 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">2. Strength & Safety Testing</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Handles and frames undergo static pull testing up to 20kg. Chemical testing ensures non-heavy metal eco pigments.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-black font-semibold">
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ Static handle pull &gt;20kg</li>
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ OEKO-TEX color dye safe</li>
              </ul>
            </div>

            <div className="card-slide-right stagger-2 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center font-bold">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">3. Transit & Packaging Audit</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Finished master boxes undergo ISTA 1A drop testing, moisture absorbent placement, and 100% scannable barcode verification.
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-black font-semibold">
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ 5-Ply export cartons standard</li>
                <li className="flex items-center gap-1.5 text-emerald-900 font-bold">✓ Pre-shipment report with photos</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. Call to Action with reveal-up */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#081c15] p-8 sm:p-14 text-white shadow-2xl space-y-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                <Award className="h-3.5 w-3.5 text-emerald-400" />
                Guaranteed Quality & Reliability
              </span>
              <ScrollTypingText
                as="h2"
                text="Order Certified Export Handicrafts"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
                speed={35}
              />
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
                Request physical master samples, inspection certificates, or custom OEM production quotes for your brand today.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all duration-200 btn-interactive"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-4 w-4 btn-arrow" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 text-xs font-bold backdrop-blur-md border border-white/20 transition-all duration-200 btn-interactive"
              >
                <span>Contact QA Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
