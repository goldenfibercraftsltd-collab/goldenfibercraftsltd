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
  X,
  Factory,
  Truck
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
    id: 'jute-bags',
    number: '01',
    productTitle: 'Handcrafted Eco Jute Bags',
    tagline: '100% Golden Jute • Eco Shopping & Totes • Artisanal Stitching',
    description:
      'Premium golden jute fibres are precision-tailored, reinforced and hand-stitched by skilled artisans into durable eco-friendly shopping bags, fashion totes, and promotional carriers.',
    image: '/infrastructure/jute_bags.jpg',
    imageAlt: 'Skilled Bangladeshi woman artisan stitching natural golden jute tote bags with cotton rope handles in workshop',
    highlights: ['A-Grade Golden Jute', 'Reinforced Padded Handles', 'Water-Resistant Coating'],
    categorySlug: 'jute',
    process: [
      {
        step: '1',
        title: 'Jute Fabric Selection',
        description: 'Sourcing dense, tightly woven A-grade natural burlap and laminated golden jute canvas.'
      },
      {
        step: '2',
        title: 'Precision Pattern Cutting',
        description: 'Manual pattern cutting aligned to international retail and OEM specifications.'
      },
      {
        step: '3',
        title: 'Eco Screen Printing',
        description: 'Applying AZO-free non-toxic vegetable dyes with sharp multi-color screen printing.'
      },
      {
        step: '4',
        title: 'Heavy-Duty Stitching',
        description: 'Artisan tailors assemble bag bodies with reinforced cross-box handle stitching for heavy loads.'
      },
      {
        step: '5',
        title: 'Tensile Load & Quality Check',
        description: 'Strict handle tensile testing up to 20kg, thread trimming, and moisture-controlled packaging.'
      }
    ]
  },
  {
    id: 'storage-baskets',
    number: '02',
    productTitle: 'Handwoven Natural Baskets',
    tagline: 'Kaisa Grass & Seagrass • Handwoven Coils • Sustainable Storage',
    description:
      'Artisans expertly coil and braid kaisa wild grass, seagrass, and jute into rigid, decorative, and heavy-duty laundry and storage baskets.',
    image: '/infrastructure/storage_baskets.jpg',
    imageAlt: 'Bangladeshi rural woman artisan handweaving coiled natural kaisa grass and seagrass storage basket',
    highlights: ['Natural Kaisa & Seagrass', 'Cotton Cord Wrapped Trim', 'Reinforced Load Handles'],
    categorySlug: 'seagrass',
    process: [
      {
        step: '1',
        title: 'Wild Grass Harvesting',
        description: 'Collecting mature wild kaisa grass and coastal seagrass from regional riverine wetlands.'
      },
      {
        step: '2',
        title: 'Sun-Curing & Braiding',
        description: 'Open-air sun curing followed by hand-braiding into uniform, high-flexibility structural cords.'
      },
      {
        step: '3',
        title: 'Spiral Coil Weaving',
        description: 'Artisans hand-bind dense spiral coils tightly using natural cotton cord wrapping.'
      },
      {
        step: '4',
        title: 'Handle & Lid Integration',
        description: 'Seamlessly weaving integrated sturdy side handles and custom-fitting flat or dome lids.'
      },
      {
        step: '5',
        title: 'Calibrated Finishing',
        description: 'Shape alignment, fiber singeing, strict mold-prevention treatment, and nested stack packing.'
      }
    ]
  },
  {
    id: 'planters-decor',
    number: '03',
    productTitle: 'Handcrafted Planters & Pot Covers',
    tagline: 'Seagrass & Jute • Indoor Plant Decor • Waterproof Lining',
    description:
      'Handcrafted natural fiber planter baskets and hanging macrame pot holders designed to elevate contemporary indoor greenery while ensuring plant health.',
    image: '/infrastructure/planters.jpg',
    imageAlt: 'Artisan hand-weaving natural seagrass indoor planter basket pot cover in workshop',
    highlights: ['Waterproof Internal Liner', 'Multi-Size Nestable Sets', 'Boho Organic Aesthetic'],
    categorySlug: 'seagrass',
    process: [
      {
        step: '1',
        title: 'Fiber & Cord Selection',
        description: 'Selecting flexible, moisture-resistant seagrass and unbleached cotton macrame cord.'
      },
      {
        step: '2',
        title: 'Hand Coiling on Molds',
        description: 'Artisans weave cylindrical and tapered pot basket bodies on calibrated circular molds.'
      },
      {
        step: '3',
        title: 'Waterproof Liner Fitting',
        description: 'Seamless insertion of protective clear PVC liners to prevent water seepage and soil staining.'
      },
      {
        step: '4',
        title: 'Macrame Hanger Crafting',
        description: 'Intricate hand-knotting of reinforced macrame hanging cradles with solid wooden rings.'
      },
      {
        step: '5',
        title: 'Stability & Export Packaging',
        description: 'Load weight stability check, dimensional tolerance verification, and master carton nesting.'
      }
    ]
  },
  {
    id: 'bamboo-crafts',
    number: '04',
    productTitle: 'Handcrafted Natural Bamboo Products',
    tagline: 'Sustainable Bamboo • Master Hand Carving • Eco Utility & Decor',
    description:
      'Seasoned natural bamboo culms are split, finely planed, and handwoven into durable utility baskets, trays, tableware, and minimalist home decor pieces.',
    image: '/infrastructure/bamboo_crafts.jpg',
    imageAlt: 'Skilled Bangladeshi craftsman artisan splitting and hand-weaving natural bamboo strips in workshop',
    highlights: ['100% Mature Bengal Bamboo', 'Chemical-Free Cure', 'Ultra-Durable & Lightweight'],
    categorySlug: 'bamboo',
    process: [
      {
        step: '1',
        title: 'Mature Bamboo Harvesting',
        description: 'Selecting seasoned 3-5 year old natural bamboo culms from sustainable rural Bengal plantations.'
      },
      {
        step: '2',
        title: 'Natural Water Curing',
        description: 'Eco-friendly water curing and solar drying to naturally prevent pests and mold growth.'
      },
      {
        step: '3',
        title: 'Precision Hand Splitting',
        description: 'Artisans hand-split canes into calibrated, ultra-flexible weaving strips and structural framing.'
      },
      {
        step: '4',
        title: 'Hand Interlacing & Assembly',
        description: 'Weaving dense twill, lattice, and ribbed geometric patterns over reinforced bamboo borders.'
      },
      {
        step: '5',
        title: 'Smooth Sanding & Inspection',
        description: 'Fine edge sanding, organic plant oil polishing, and rigorous moisture verification.'
      }
    ]
  },
  {
    id: 'jute-floor-mats',
    number: '05',
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
    number: '06',
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
    number: '07',
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
    number: '08',
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
                <Truck className="h-3 w-3 text-amber-300" /> 50 HQ Monthly Capacity
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
                className={`flex flex-col gap-6 lg:gap-10 items-start ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                
                {/* Visual Image Column with Directional Reveal (Top-Aligned with Title) */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="relative group rounded-3xl overflow-hidden bg-[#f0e8dc] border border-[#e4d6c4] shadow-lg hover:shadow-2xl transition-all duration-500 img-zoom-container">
                    
                    {/* Number Stamp */}
                    <div className="absolute top-4 left-4 z-20 bg-stone-950/80 backdrop-blur-md text-amber-300 font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md">
                      SECTION {section.number}
                    </div>

                    {/* Image Container with Top-Flush Alignment */}
                    <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] w-full overflow-hidden">
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
      {/* 2.5 Factory & Production Facilities (PDF Page 11 & 12) */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-white border-y border-stone-200/80">
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
                { title: 'On-Time Delivery', desc: 'Strict lead times with 50X40\' HQ containers/month' },
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
                <h4 className="font-serif text-sm font-extrabold text-black">15,000+ Artisans</h4>
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
                <h4 className="font-serif text-sm font-extrabold text-black">50X40' HQ / Month</h4>
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

