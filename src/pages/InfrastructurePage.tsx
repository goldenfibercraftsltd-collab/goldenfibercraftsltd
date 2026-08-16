import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Sparkles,
  Leaf,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  Award,
  Users,
  Sun,
  Eye,
  Maximize2,
  X
} from 'lucide-react';
import { ScrollTypingText } from '../components/ScrollTypingText';

interface InfrastructurePageProps {
  onSelectProduct?: (product: any) => void;
  onOpenQuoteModal?: () => void;
}

interface CraftSection {
  id: string;
  number: string;
  productTitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  categorySlug: string;
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

const CRAFT_SECTIONS: CraftSection[] = [
  {
    id: 'jute-floor-mats',
    number: '01',
    productTitle: 'Handmade Jute Floor Mats',
    tagline: 'Natural Jute Fibre • Traditional Loom • Artisanal Weaving',
    description:
      'Natural jute fibres are carefully prepared, woven and finished by skilled artisans to create durable and eco-friendly floor mats.',
    image: '/infrastructure/jute_floor_mats.png',
    imageAlt: 'Skilled female artisans handweaving natural jute floor mats in rural Bangladesh workshop',
    highlights: ['100% Golden Tossa Jute', 'Handloom & Braided Weave', 'High-Traffic Durability'],
    categorySlug: 'jute',
    process: [
      {
        step: '1',
        title: 'Jute Fibre Selection',
        description: 'Careful sourcing of lustrous long-staple golden jute from the fertile Bengal river delta.'
      },
      {
        step: '2',
        title: 'Fibre Preparation',
        description: 'Sun-drying, hand-combing, and traditional spinning into high-tensile multi-ply yarn.'
      },
      {
        step: '3',
        title: 'Hand Weaving',
        description: 'Skilled women artisans weave dense geometric, ribbed, and ribbed patterns on frame looms.'
      },
      {
        step: '4',
        title: 'Shape & Edge Finishing',
        description: 'Hand-braided borders and precision manual edge stitching for long-lasting structural integrity.'
      },
      {
        step: '5',
        title: 'Quality Inspection',
        description: 'Thorough inspection for weave uniformity, surface softness, and strict moisture control under 12%.'
      }
    ]
  },
  {
    id: 'jute-rugs',
    number: '02',
    productTitle: 'Handmade Jute Rugs',
    tagline: 'Handcrafted • Natural Materials • Eco-Friendly',
    description:
      'Each jute rug is carefully handcrafted by skilled artisans using natural fibres, traditional techniques and detailed finishing.',
    image: '/infrastructure/jute_rugs.png',
    imageAlt: 'Artisans collaborating together on large round braided handmade jute area rugs in workshop',
    highlights: ['Artisan Braided Coils', 'Custom Geometric Motifs', 'Biodegradable & Non-Toxic'],
    categorySlug: 'rugs',
    process: [
      {
        step: '1',
        title: 'Natural Jute Preparation',
        description: 'Selecting premium unbleached golden fiber strands graded for maximum tensile strength.'
      },
      {
        step: '2',
        title: 'Hand Weaving',
        description: 'Artisans construct intricate center spirals and outer border cords using time-honored techniques.'
      },
      {
        step: '3',
        title: 'Pattern Formation',
        description: 'Meticulously binding concentric braids, openwork lace loops, and bespoke bohemian motifs.'
      },
      {
        step: '4',
        title: 'Edge Finishing',
        description: 'Tucking and double-locking fringes and borders to ensure flat laying without curled edges.'
      },
      {
        step: '5',
        title: 'Final Quality Check',
        description: 'Calibrated weight checks, dimensional tolerance tests, and international export fumigation.'
      }
    ]
  },
  {
    id: 'seagrass-baskets',
    number: '03',
    productTitle: 'Handwoven Seagrass Baskets',
    tagline: 'Natural Seagrass • Handmade • Sustainable',
    description:
      'Natural seagrass is carefully dried, prepared and handwoven by artisans into functional and decorative baskets.',
    image: '/infrastructure/seagrass_baskets.png',
    imageAlt: 'Artisan weaving natural coastal seagrass storage baskets by hand with raw grass bundles',
    highlights: ['Coastal Wild Seagrass', 'Reinforced Internal Frame', 'Moisture-Tolerant Fiber'],
    categorySlug: 'seagrass',
    process: [
      {
        step: '1',
        title: 'Seagrass Selection',
        description: 'Harvesting sustainable, thick salinity-resistant coastal and riverbed seagrass strands.'
      },
      {
        step: '2',
        title: 'Drying & Preparation',
        description: 'Open-air sun drying to develop natural two-tone hues and optimum fiber flexibility.'
      },
      {
        step: '3',
        title: 'Hand Weaving',
        description: 'Artisans weave tight spiral coils and lattice structures over heavy-duty natural cane molds.'
      },
      {
        step: '4',
        title: 'Shape Forming',
        description: 'Integrating ergonomic soft cotton or braided seagrass handles with reinforced anchor points.'
      },
      {
        step: '5',
        title: 'Finishing & Quality Inspection',
        description: 'Manual lint singeing, shape calibration, mold-free certification, and nestable stack packing.'
      }
    ]
  },
  {
    id: 'date-leaf-placemats',
    number: '04',
    productTitle: 'Handmade Date Leaf Placemats',
    tagline: 'Natural Fibre • Traditional Craft • Handmade',
    description:
      'Carefully prepared natural date leaves are handwoven into lightweight, durable and naturally textured placemats.',
    image: '/infrastructure/date_leaf_placemats.png',
    imageAlt: 'Artisan handweaving fine date palm leaf strips into round dining placemats on wooden workbench',
    highlights: ['Wild Date Palm Fronds', 'Heat Resistant Tableware', 'Ultra-Light Organic Texture'],
    categorySlug: 'date-leaf',
    process: [
      {
        step: '1',
        title: 'Date Leaf Selection',
        description: 'Ethically harvesting mature date palm fronds from sustainable rural Bengal village plantations.'
      },
      {
        step: '2',
        title: 'Cleaning & Drying',
        description: 'Pure water washing followed by gradual shade curing to preserve natural soft golden tones.'
      },
      {
        step: '3',
        title: 'Leaf Preparation',
        description: 'Hand-splitting leaves into uniform micro-ribbons calibrated for fine diagonal weaving.'
      },
      {
        step: '4',
        title: 'Hand Weaving',
        description: 'Artisans interweave overlapping spiral layers to create heat-resistant, flexible dining placemats.'
      },
      {
        step: '5',
        title: 'Final Shaping & Inspection',
        description: 'Smooth perimeter trimming, flat-press finishing, and moisture verification under 10%.'
      }
    ]
  }
];

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onOpenQuoteModal,
}) => {
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
      {/* 1. Breadcrumb Navigation & Header */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="reveal-up flex items-center gap-2 text-xs font-bold text-stone-800">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black font-extrabold">Infrastructure & Craftsmanship</span>
        </nav>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. Four Alternating Craftsmanship & Product Sections */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-12">
        {CRAFT_SECTIONS.map((section, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20 pb-8 border-b border-stone-200/70 last:border-b-0 last:pb-0"
            >
              <div
                className={`flex flex-col gap-6 lg:gap-10 items-center ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                
                {/* Visual Image Column with Directional Reveal */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="relative group rounded-3xl overflow-hidden bg-[#f0e8dc] border border-[#e4d6c4] shadow-lg hover:shadow-xl transition-all duration-500 img-zoom-container">
                    
                    {/* Number Stamp */}
                    <div className="absolute top-4 left-4 z-20 bg-stone-950/75 backdrop-blur-md text-amber-300 font-mono text-xs font-extrabold px-3 py-1 rounded-xl border border-white/20 shadow-md">
                      SECTION {section.number}
                    </div>

                    {/* Image Container with Subtle Hover Zoom */}
                    <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Gentle warm tint overlay on edges */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>

                    {/* Expand Details Lightbox Trigger Button */}
                    <button
                      onClick={() => setSelectedImage(section.image)}
                      className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/80 hover:bg-emerald-700 text-white text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 btn-interactive"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>View Photo</span>
                    </button>

                    {/* Feature Chips Floating Over Image Bottom Left */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1.5 max-w-[75%]">
                      {section.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="bg-stone-900/80 text-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-lg backdrop-blur-md border border-white/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Text & Production Process Column */}
                <div className={`w-full lg:w-1/2 space-y-4 ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  
                  {/* Category Tagline */}
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-black">
                      {section.tagline}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
                      {section.productTitle}
                    </h2>
                  </div>

                  {/* Core Description Quote */}
                  <div className="relative pl-3.5 border-l-4 border-emerald-700 bg-[#f7f2ea] p-3 rounded-r-2xl border-y border-r border-[#e8ded1]">
                    <p className="text-sm sm:text-base text-black leading-relaxed font-serif font-bold italic">
                      "{section.description}"
                    </p>
                  </div>

                  {/* Production Step-by-Step Flow */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-emerald-700" />
                      <span>Handmade Production Process</span>
                    </h3>

                    <div className="space-y-2">
                      {section.process.map((item, pIdx) => {
                        const stepStagger = `stagger-${pIdx + 1}`;
                        return (
                          <div
                            key={item.step}
                            className={`reveal-up ${stepStagger} hover-lift-sm group/step flex items-start gap-3 p-2.5 rounded-2xl bg-white border border-[#eae0d2] hover:border-emerald-600 hover:shadow-md transition-all duration-300`}
                          >
                            <div className="h-6 w-6 rounded-xl bg-[#f0e8dc] group-hover/step:bg-emerald-700 text-stone-950 group-hover/step:text-white flex items-center justify-center text-xs font-mono font-extrabold shrink-0 transition-colors shadow-xs">
                              {item.step}
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs sm:text-sm font-extrabold text-black group-hover/step:text-emerald-900 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Action Button for Category */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => navigate(`/products?category=${section.categorySlug}`)}
                      className="inline-flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white px-5 py-2 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 btn-interactive"
                    >
                      <span>Explore {section.productTitle}</span>
                      <ArrowRight className="h-3.5 w-3.5 btn-arrow" />
                    </button>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

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
                Our cooperative production hubs across southern Bangladesh guarantee fair living wages, safe ergonomic ventilation, zero child labor, and continuous technical weaving masterclasses for rural women.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                <CheckCircle2 className="h-4 w-4" />
                <span>BSCI & Sedex Audited</span>
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

      {/* ---------------------------------------------------- */}
      {/* 4. Elegant Call-To-Action (CTA) */}
      {/* ---------------------------------------------------- */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#081c15] p-6 sm:p-10 text-white shadow-xl space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                Handcrafted in Bangladesh
              </span>
              <ScrollTypingText
                as="h2"
                text="Crafted by Hand. Made with Nature."
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
                speed={35}
              />
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
                Partner with Golden Fiber Crafts Ltd. for custom OEM handicraft manufacturing, bespoke sizing, private labeling, and sustainable container export shipments worldwide.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 px-6 py-3 text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all duration-200 btn-interactive"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4 btn-arrow" />
              </button>

              {onOpenQuoteModal && (
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-xs font-bold backdrop-blur-md border border-white/20 transition-all duration-200 btn-interactive"
                >
                  <span>Request Wholesale Quote</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
