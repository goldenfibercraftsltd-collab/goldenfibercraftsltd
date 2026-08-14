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
      {/* 1. Hero Section (Warm, Natural & Earthy) */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5eee6] via-[#faf6f0] to-[#fcfbf9] pt-12 pb-20 border-b border-stone-200/80">
        
        {/* Subtle Decorative Background Pattern Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e2d5c3]/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="reveal-up flex items-center gap-2 text-xs font-semibold text-stone-500">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Infrastructure & Craftsmanship</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8ded1] border border-[#d6c7b5] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#6d4c2b] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#8c5836]" />
              <span>Authentic Handmade Production</span>
            </div>

            <ScrollTypingText
              as="h1"
              text="Infrastructure & Craftsmanship"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]"
              speed={40}
            />

            <p className="font-serif text-lg sm:text-xl text-[#7c5335] italic font-medium">
              Where natural materials meet skilled hands.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
              Our products are created through a combination of natural materials, traditional craftsmanship and careful attention to detail. Explore how our skilled artisans transform simple natural fibres into beautiful handmade products.
            </p>
          </div>

          {/* Trust Value Badges Grid with Middle-Outward Card Slide */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4">
            <div className="card-slide-far-left stagger-2 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-stone-900">500+ Artisans</h4>
                <p className="text-[11px] text-stone-500">Skilled rural women</p>
              </div>
            </div>

            <div className="card-slide-left stagger-1 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-stone-900">100% Natural</h4>
                <p className="text-[11px] text-stone-500">Plant-based fibres</p>
              </div>
            </div>

            <div className="card-slide-right stagger-1 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-stone-900">Fair Trade & Audit</h4>
                <p className="text-[11px] text-stone-500">BSCI & Sedex verified</p>
              </div>
            </div>

            <div className="card-slide-far-right stagger-2 hover-lift-sm flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#e8ded1] shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center shrink-0">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-extrabold text-stone-900">Global Export</h4>
                <p className="text-[11px] text-stone-500">35+ countries reached</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. Four Alternating Craftsmanship & Product Sections */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {CRAFT_SECTIONS.map((section, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <div
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                
                {/* Visual Image Column with Directional Reveal */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="relative group rounded-3xl overflow-hidden bg-[#f0e8dc] border border-[#e4d6c4] shadow-xl hover:shadow-2xl transition-all duration-500 img-zoom-container">
                    
                    {/* Number Stamp */}
                    <div className="absolute top-4 left-4 z-20 bg-stone-950/75 backdrop-blur-md text-amber-300 font-mono text-xs font-extrabold px-3 py-1 rounded-xl border border-white/20 shadow-md">
                      SECTION {section.number}
                    </div>

                    {/* Image Container with Subtle Hover Zoom */}
                    <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden">
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
                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  
                  {/* Category Tagline */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8c5836]">
                      {section.tagline}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                      {section.productTitle}
                    </h2>
                  </div>

                  {/* Core Description Quote */}
                  <div className="relative pl-4 border-l-4 border-[#8c5836] bg-[#f7f2ea] p-4 rounded-r-2xl border-y border-r border-[#e8ded1]">
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-serif italic">
                      "{section.description}"
                    </p>
                  </div>

                  {/* Production Step-by-Step Flow */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-emerald-700" />
                      <span>Handmade Production Process</span>
                    </h3>

                    <div className="space-y-2.5">
                      {section.process.map((item, pIdx) => {
                        const stepStagger = `stagger-${pIdx + 1}`;
                        return (
                          <div
                            key={item.step}
                            className={`reveal-up ${stepStagger} hover-lift-sm group/step flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-[#eae0d2] hover:border-emerald-600 hover:shadow-md transition-all duration-300`}
                          >
                            <div className="h-7 w-7 rounded-xl bg-[#f0e8dc] group-hover/step:bg-emerald-700 text-[#6d4c2b] group-hover/step:text-white flex items-center justify-center text-xs font-mono font-extrabold shrink-0 transition-colors shadow-xs">
                              {item.step}
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover/step:text-emerald-800 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed font-light">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Action Button for Category */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      onClick={() => navigate(`/products?category=${section.categorySlug}`)}
                      className="inline-flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 btn-interactive"
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
      <section className="bg-gradient-to-b from-[#f5eee6] to-[#fcfbf9] py-16 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-up">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              EXPORT ASSURANCE & CAPACITY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
              International Export Standards
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Every shipment is produced under rigorous environmental compliance, pest-free certification, and strict moisture control parameters.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-[#8c5836]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="card-slide-left stagger-2 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Moisture & Mold Protection
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                All raw materials and finished handicrafts undergo controlled drying and digital hygrometer inspection ensuring moisture stays below 12%, guaranteed mold-free during maritime container voyages.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-800">
                <CheckCircle2 className="h-4 w-4" />
                <span>Export Fumigation Certified</span>
              </div>
            </div>

            <div className="card-slide-mid stagger-1 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center shadow-xs">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Ethical & Fair Trade Workspaces
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Our cooperative production hubs across southern Bangladesh guarantee fair living wages, safe ergonomic ventilation, zero child labor, and continuous technical weaving masterclasses for rural women.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="h-4 w-4" />
                <span>BSCI & Sedex Audited</span>
              </div>
            </div>

            <div className="card-slide-right stagger-2 hover-lift bg-white rounded-3xl p-6 sm:p-8 border border-[#e8ded1] shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center shadow-xs">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                5-Ply Master Carton Packaging
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Nestable basket packaging, silica gel desiccants, heavy-duty 5-ply export master cartons, and shrink-wrapped palletization custom tailored for high container volume CBM efficiency.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-teal-800">
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
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#081c15] p-8 sm:p-14 text-white shadow-2xl space-y-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                Handcrafted in Bangladesh
              </span>
              <ScrollTypingText
                as="h2"
                text="Crafted by Hand. Made with Nature."
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
                speed={35}
              />
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
                Partner with Golden Fiber Crafts Ltd. for custom OEM handicraft manufacturing, bespoke sizing, private labeling, and sustainable container export shipments worldwide.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all duration-200 btn-interactive"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4 btn-arrow" />
              </button>

              {onOpenQuoteModal && (
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 text-xs font-bold backdrop-blur-md border border-white/20 transition-all duration-200 btn-interactive"
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
