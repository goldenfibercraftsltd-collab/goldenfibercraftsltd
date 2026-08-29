import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Maximize2,
  X,
  ArrowRight,
  Package,
  Check,
  Scale,
  Leaf,
  Users,
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { usePageTitle } from '../utils/usePageTitle';
import {
  PageSectionItem,
  getLocalSections,
  fetchLiveSections
} from '../utils/pageSectionsStore';

export const QualityControlPage: React.FC = () => {
  usePageTitle('Quality Control & Standards');
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sections, setSections] = useState<PageSectionItem[]>(() => getLocalSections('quality'));

  useEffect(() => {
    fetchLiveSections('quality').then(data => {
      if (data && data.length > 0) setSections(data);
    });

    const handleUpdated = (e: any) => {
      if (e.detail?.type === 'quality' || !e.detail?.type) {
        setSections(getLocalSections('quality'));
      }
    };

    window.addEventListener('gfcl_sections_updated', handleUpdated);
    return () => window.removeEventListener('gfcl_sections_updated', handleUpdated);
  }, []);

  return (
    <div className="bg-[#fcfbf9] text-stone-900 font-sans min-h-screen pb-12 animate-fadeIn space-y-6 sm:space-y-8">
      
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

      {/* 1. Hero Page Banner */}
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
              <ShieldCheck className="h-3 w-3 text-emerald-300" />
              Quality Assurance & Compliance
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              International Export Quality Control
            </h1>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              From raw fiber selection to final container loading, our stringent 4-stage inspection protocol ensures 100% defect-free, mold-resistant, compliant natural handicraft export.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                <Sparkles className="h-3 w-3 text-amber-300" /> AQL 2.5 Standard
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                Moisture: 8% - 12%
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                100% Fumigated
              </span>
            </div>
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
        </div>
      </div>

      {/* 2. Alternating Dynamic Quality Pillar Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {sections.filter(s => s.is_active !== 0 && s.is_active !== false).map((section, idx) => {
          const isEven = idx % 2 === 1;
          const img = section.image_url || section.image || '/quality/quality_tensile_test.png';
          const imgAlt = section.image_alt || section.imageAlt || section.title;
          const guarantees = section.guarantees || section.points || [];
          const metrics = section.metrics || [];

          return (
            <section key={section.id || idx} id={section.section_key || `section-${section.id || idx}`} className="scroll-mt-24">
              <div
                className={`flex flex-col gap-10 lg:gap-14 items-start ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Visual Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-500">
                    
                    <div className="absolute top-4 left-4 z-20 bg-stone-950/85 backdrop-blur-md text-amber-300 font-mono text-xs font-black px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md">
                      STAGE {section.number || (idx + 1).toString().padStart(2, '0')} {section.badge ? `• ${section.badge}` : ''}
                    </div>

                    <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden">
                      <img
                        src={img}
                        alt={imgAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    </div>

                    <button
                      onClick={() => setSelectedImage(img)}
                      className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-950/85 hover:bg-emerald-700 text-white text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>View Inspection Photo</span>
                    </button>

                    {/* Metrics Badges floating on image */}
                    {metrics.length > 0 && (
                      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 max-w-[80%]">
                        {metrics.map((m, i) => (
                          <div
                            key={i}
                            className="bg-stone-950/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-left shadow-md"
                          >
                            <span className="block text-[9px] text-amber-300 font-medium uppercase">{m.label}</span>
                            <strong className="block text-xs font-extrabold text-white">{m.value}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

                {/* Content & Quality Checklist Column */}
                <div className="w-full lg:w-1/2 space-y-5">
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-800 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-700" />
                      <span>GUARANTEED EXPORT PROTOCOL</span>
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  {section.quote && (
                    <div className="relative pl-4 border-l-4 border-emerald-700 bg-emerald-50/40 p-4 rounded-r-2xl border border-emerald-100">
                      <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-serif font-bold italic">
                        "{section.quote}"
                      </p>
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                    {section.description}
                  </p>

                  {/* Guaranteed Points Checklist */}
                  {guarantees.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-stone-900">
                        Export Quality Guarantee Points:
                      </h4>
                      {guarantees.map((item, idx2) => (
                        <div
                          key={idx2}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-emerald-300 transition-colors"
                        >
                          <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-stone-800 font-bold leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Quality Assurance & PDCA Framework (PDF Page 16) */}
      <section className="bg-white py-14 sm:py-20 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-emerald-950 bg-emerald-100 border border-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-800" />
                <span>SYSTEMATIC QUALITY ASSURANCE</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950 leading-tight">
                Embedded Quality Throughout Production
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
                At <strong className="text-stone-950">Golden Fiber Crafts Ltd.</strong>, quality is embedded throughout our entire production process. From raw-material selection to final shipment, our quality team applies systematic controls to ensure consistency, workmanship, product integrity, and compliance with agreed customer specifications.
              </p>
              <p className="text-stone-700 text-sm leading-relaxed font-medium">
                Our quality assurance approach combines preventive controls, in-process monitoring, final inspection, and shipment verification. This enables us to identify potential issues at an early stage, maintain consistent production quality, and deliver products that meet customer expectations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Raw Material Inspection',
                  'In-Process Quality Checks',
                  'Final Product Inspection',
                  'Packing Verification',
                  'Pre-Shipment Inspection'
                ].map((qcItem, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-xs font-bold text-stone-900">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{qcItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-stone-50 rounded-3xl border border-stone-200 shadow-sm">
              <div className="relative max-w-md w-full">
                <img
                  src="/quality/pdca_cycle.png"
                  alt="Quality Assurance PDCA Cycle - Plan Do Check Act"
                  className="w-full h-auto object-contain filter drop-shadow-md"
                />
                <p className="text-center text-xs font-bold text-stone-800 mt-4 uppercase tracking-wider">
                  Plan • Do • Check • Act (Continuous Quality Cycle)
                </p>
              </div>
            </div>
          </div>

          {/* 7-Stage Quality Control Process (Pages 17-18) */}
          <div className="space-y-8 pt-8 border-t border-stone-100">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-900">
                OFFICIAL 7-STAGE PIPELINE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
                Comprehensive Quality Control Process
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                At Golden Fiber Crafts Ltd., quality is built into every stage of production—from raw material selection to final shipment.
              </p>
              <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: '01',
                  title: 'Raw Material Inspection',
                  points: ['Selection of premium quality natural materials', 'Check for color, strength, moisture, cleanliness and defects', 'Supplier evaluation and approval']
                },
                {
                  step: '02',
                  title: 'Production Quality Control',
                  points: ['Artisans follow standardized production guidelines', 'In-process inspection at every stage', 'Monitoring of workmanship, dimensions & structural integrity']
                },
                {
                  step: '03',
                  title: 'Finishing Inspection',
                  points: ['Verify size and dimensions against spec sheets', 'Check color, appearance and smooth finishing', 'Strong stitching and secure handles', 'No loose fibers or sharp edges & proper labeling']
                },
                {
                  step: '04',
                  title: 'Functional Testing',
                  points: ['Load-bearing capacity testing', 'Handle tensile strength test', 'Stitch durability & shape retention', 'Moisture resistance & overall usability']
                },
                {
                  step: '05',
                  title: 'Packaging Quality Control',
                  points: ['Clean and moisture-protected packaging materials', 'Individual inspection before packing', 'Barcode, labels and shipping marks verified', 'Export cartons checked for strength and sealing']
                },
                {
                  step: '06',
                  title: 'Final Quality Audit',
                  points: ['Compliance with purchase order specifications', 'Quantity verification & random AQL sampling', 'Packaging integrity check', 'Export documentation accuracy']
                },
                {
                  step: '07',
                  title: 'Approved for Shipment',
                  points: ['All international quality standards met', 'Products approved for container loading', 'Safe and on-time delivery to global customers']
                },
                {
                  step: '08',
                  title: 'Customer Satisfaction',
                  points: ['Dedicated customer support desk', 'Continuous quality feedback loop', 'Repeat program reliability & trust']
                }
              ].map((stage, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-emerald-400 transition-colors">
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-serif font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      STAGE {stage.step}
                    </span>
                    <h4 className="font-serif text-sm font-black text-stone-900 leading-snug">{stage.title}</h4>
                    <ul className="space-y-1.5 text-xs text-stone-700 font-semibold">
                      {stage.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* 5 Pillars of Quality & Customer Satisfaction */}
            <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 p-6 sm:p-8 text-white shadow-xl space-y-4 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                OUR COMMITMENT TO EXCELLENCE IN EVERY HANDCRAFTED PRODUCT
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
                {[
                  { title: 'Sustainable Materials', icon: Leaf },
                  { title: 'Skilled Artisans', icon: Users },
                  { title: 'Consistent Quality', icon: Award },
                  { title: 'Eco-Friendly Production', icon: Sparkles },
                  { title: 'Customer Trust', icon: HeartHandshake }
                ].map((pillar, pIdx) => {
                  const IconC = pillar.icon;
                  return (
                    <div key={pIdx} className="p-3 bg-white/10 rounded-2xl border border-white/10 space-y-1.5 flex flex-col items-center justify-center">
                      <div className="h-9 w-9 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center">
                        <IconC className="h-4 w-4" />
                      </div>
                      <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. AQL 2.5 Inspection & Compliance Matrix */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-900">
            AUDIT MATRIX & SPECIFICATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950">
            Comprehensive Quality Control Checklist
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
            Every production lot is audited by certified internal inspectors before external SGS/Intertek audits or shipping container loading.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-emerald-700 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-stone-950">1. Dimension & Shape Testing</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              Calibrated against master approved samples. Height, diameter, taper angles, and nestable stack tolerance checked.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-stone-900 font-bold">
              <li className="flex items-center gap-1.5 text-emerald-800">✓ Within ±1.5% deviation</li>
              <li className="flex items-center gap-1.5 text-emerald-800">✓ S/2, S/3, S/4 nesting verified</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-stone-950">2. Strength & Safety Testing</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              Handles and frames undergo static pull testing up to 20kg. Chemical testing ensures non-heavy metal eco pigments.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-stone-900 font-bold">
              <li className="flex items-center gap-1.5 text-emerald-800">✓ Static handle pull &gt;20kg</li>
              <li className="flex items-center gap-1.5 text-emerald-800">✓ OEKO-TEX color dye safe</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center font-bold">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-stone-950">3. Transit & Packaging Audit</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              Finished master boxes undergo ISTA 1A drop testing, moisture absorbent placement, and 100% scannable barcode verification.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-stone-900 font-bold">
              <li className="flex items-center gap-1.5 text-emerald-800">✓ 5-Ply export cartons standard</li>
              <li className="flex items-center gap-1.5 text-emerald-800">✓ Pre-shipment report with photos</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

