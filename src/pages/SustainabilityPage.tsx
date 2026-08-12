import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Sun,
  Recycle,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  Globe2,
  Users,
  Sprout,
  CheckCircle2,
  Award,
  TreePine,
  Droplets
} from 'lucide-react';

interface SustainabilitySection {
  id: string;
  number: string;
  badge: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: { label: string; value: string }[];
  impactPoints: string[];
}

const SUSTAINABILITY_SECTIONS: SustainabilitySection[] = [
  {
    id: 'carbon-negative-harvest',
    number: '01',
    badge: 'Eco-Cultivation & Climate Sinks',
    title: '100% Natural, Carbon-Negative Fiber Harvesting',
    quote: 'Jute and wild grasses act as powerful carbon sinks, absorbing over 15 tonnes of CO2 per hectare during their rapid 120-day growth cycle.',
    description:
      'Our primary raw materials — golden jute, wild riverbed seagrass, date palm leaves, and kans grass — are rapidly renewable botanical fibers that require zero synthetic chemical fertilizers or pesticides. Cultivated in rain-fed alluvial river basins in Bangladesh, they naturally replenish soil fertility and leave zero synthetic residue upon return to the earth.',
    image: '/sustainability/sustainability_harvest.png',
    imageAlt: 'Lush green sustainable jute fields and river harvesting in rural Bangladesh with golden fibers drying',
    metrics: [
      { label: 'CO2 Absorption', value: '15 T/Hectare' },
      { label: 'Chemical Fertilizers', value: '0% Needed' },
      { label: 'Biodegradability', value: '100% Organic' }
    ],
    impactPoints: [
      'Rapid 120-day natural crop regeneration without artificial irrigation',
      'Naturally enriches agricultural soil nutrients for seasonal crop rotation',
      'Completely compostable back into organic mulch in 60 to 90 days'
    ]
  },
  {
    id: 'artisan-empowerment',
    number: '02',
    badge: 'Social Impact & Gender Equality',
    title: 'Empowering Rural Women & Ethical Livelihoods',
    quote: 'Over 85% of our weaving workforce comprises skilled rural women craftswomen earning fair-trade living wages.',
    description:
      'Handicraft production is a transformative social catalyst in rural Bangladesh. Golden Fiber Crafts Ltd operates decentralized, well-ventilated village artisan centers that allow mothers and women artisans to work with dignity, receive healthcare stipends, finance their children’s education, and achieve financial self-reliance within their local communities.',
    image: '/sustainability/sustainability_empowerment.png',
    imageAlt: 'Smiling Bangladeshi women artisans proudly holding handcrafted eco baskets in sunlit community workshop',
    metrics: [
      { label: 'Female Workforce', value: '>85% Women' },
      { label: 'Fair Trade Wage', value: '35% Above Local' },
      { label: 'Child Education Aid', value: '100% Supported' }
    ],
    impactPoints: [
      'Flexible home and community cluster workstations for mothers',
      'Zero child labor guarantee with mandatory school attendance programs',
      'Continuous masterclass training in traditional and modern export weaving'
    ]
  },
  {
    id: 'circular-zerowaste',
    number: '03',
    badge: 'Closed-Loop Manufacturing',
    title: 'Circular Economy & Zero-Waste Upcycling',
    quote: 'We champion closed-loop production by blending virgin plant fibers with upcycled organic textile off-cuts.',
    description:
      'In our Recycle Fabric product line, we divert clean organic cotton and linen scraps from garment factories, hand-coiling them with natural golden jute into vibrant, durable eco-hampers and baskets. Furthermore, 100% of organic fiber trim generated during production is collected and composted into nutrient-rich bio-mulch for local agriculture.',
    image: '/sustainability/sustainability_zerowaste.png',
    imageAlt: 'Artisan hand-coiling upcycled cotton fabric scraps and golden jute cords into colorful zero-waste storage basket',
    metrics: [
      { label: 'Landfill Waste', value: '0.0% Zero Waste' },
      { label: 'Upcycled Material', value: 'Cotton Scraps' },
      { label: 'Organic Bio-Mulch', value: '100% Composted' }
    ],
    impactPoints: [
      'Eliminates textile landfill burden through artisanal braided upcycling',
      'Closed-loop water and organic trimming recycling in every workshop',
      'Plastic-free packaging with 100% recyclable FSC master cartons'
    ]
  },
  {
    id: 'clean-dyes-water',
    number: '04',
    badge: 'Clean Water & Non-Toxic Coloring',
    title: 'Azo-Free Dyes & Water Table Protection',
    quote: 'All colors are created using azo-free, heavy-metal-free, plant-safe pigments that protect local rivers and indoor air quality.',
    description:
      'We respect Bangladesh’s life-giving waterways. Our dye houses utilize strictly certified REACH-compliant and OEKO-TEX certified colorants alongside natural vegetable extracts from tea leaves, turmeric, and indigo. Sun-curing eliminates the need for fossil-fuel dryers, resulting in clean, non-toxic products safe for babies, pets, and food storage.',
    image: '/infrastructure/jute_floor_mats.png',
    imageAlt: 'Natural golden jute fibers dyed with non-toxic eco pigments in artisan workshop',
    metrics: [
      { label: 'Azo Colorants', value: '0% Azo-Free' },
      { label: 'Drying Energy', value: '100% Solar Heat' },
      { label: 'Indoor Safety', value: 'Pet & Baby Safe' }
    ],
    impactPoints: [
      'Zero toxic wastewater discharge into rural village water bodies',
      'Heavy-metal free formulas safe for kitchen and pantry food storage',
      'Low carbon footprint solar air drying across our southern facilities'
    ]
  }
];

export const SustainabilityPage: React.FC = () => {
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
              alt="Sustainability Detail"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 1. Hero Header with reveal-up */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6f0] via-[#f7fbf8] to-[#fcfbf9] pt-12 pb-20 border-b border-stone-200/80">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <nav className="reveal-up flex items-center gap-2 text-xs font-semibold text-stone-500">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Sustainability</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-950 shadow-xs">
              <Leaf className="h-4 w-4 text-emerald-700" />
              <span>Planet First • People Always</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Sustainability & Social Responsibility
            </h1>

            <p className="font-serif text-lg sm:text-xl text-emerald-800 italic font-medium">
              Rooted in nature, crafted with dignity, committed to our planet.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto pt-1">
              At Golden Fiber Crafts Ltd, environmental stewardship is not an afterthought — it is the very foundation of our existence. Discover how our 100% natural, plastic-free handicrafts create positive ecological and social impact across Bangladesh.
            </p>
          </div>

          {/* 4 Impact Metric Badges with Staggered Entrance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4">
            <div className="reveal-up stagger-1 hover-lift-sm p-4 rounded-2xl bg-white/80 border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold mb-2">
                <Sprout className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-stone-900">100% Renewable</h4>
              <p className="text-[11px] text-stone-500">Plant-based raw fibers</p>
            </div>

            <div className="reveal-up stagger-2 hover-lift-sm p-4 rounded-2xl bg-white/80 border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-2">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-stone-900">85%+ Women Artisans</h4>
              <p className="text-[11px] text-stone-500">Ethical fair-trade wages</p>
            </div>

            <div className="reveal-up stagger-3 hover-lift-sm p-4 rounded-2xl bg-white/80 border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold mb-2">
                <Recycle className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-stone-900">Zero Plastic</h4>
              <p className="text-[11px] text-stone-500">100% Biodegradable</p>
            </div>

            <div className="reveal-up stagger-4 hover-lift-sm p-4 rounded-2xl bg-white/80 border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-2">
                <Globe2 className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-stone-900">UN SDG Aligned</h4>
              <p className="text-[11px] text-stone-500">Global climate action</p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. Four Alternating Sustainability Pillar Sections */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {SUSTAINABILITY_SECTIONS.map((section, idx) => {
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
                  <div className="relative group rounded-3xl overflow-hidden bg-[#edf4ee] border border-[#d6e5d8] shadow-xl hover:shadow-2xl transition-all duration-500 img-zoom-container">
                    
                    <div className="absolute top-4 left-4 z-20 bg-emerald-950/85 backdrop-blur-md text-emerald-300 font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-emerald-500/30 shadow-md">
                      PILLAR {section.number} • {section.badge}
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
                      <span>View Photo</span>
                    </button>

                    {/* Metrics Badges floating on image */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 max-w-[80%]">
                      {section.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-stone-950/85 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-xl text-left shadow-md"
                        >
                          <span className="block text-[9px] text-emerald-400 font-medium uppercase">{m.label}</span>
                          <strong className="block text-xs font-extrabold text-white">{m.value}</strong>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Content & Impact Points Column */}
                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 flex items-center gap-1.5">
                      <Leaf className="h-4 w-4 text-emerald-700" />
                      <span>PLANET &amp; COMMUNITY COMMITMENT</span>
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  <div className="relative pl-4 border-l-4 border-emerald-700 bg-[#edf5ef] p-4 rounded-r-2xl border-y border-r border-[#d8e8da]">
                    <p className="text-sm sm:text-base text-emerald-950 leading-relaxed font-serif italic">
                      "{section.quote}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {section.description}
                  </p>

                  {/* Impact Points Checklist with Staggered Entrance */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-400">
                      Measurable Sustainability Impact:
                    </h4>
                    {section.impactPoints.map((item, idx2) => {
                      const pStagger = `stagger-${idx2 + 1}`;
                      return (
                        <div
                          key={idx2}
                          className={`reveal-up ${pStagger} hover-lift-sm flex items-start gap-3 p-3 rounded-xl bg-white border border-[#d6e5d8] shadow-xs`}
                        >
                          <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-stone-800">{item}</span>
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
      {/* 3. UN Sustainable Development Goals (SDG) Alignment */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-b from-[#eef6f0] to-[#fcfbf9] py-16 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-up">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              GLOBAL ALIGNMENT
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-900">
              Contributing to the UN Sustainable Development Goals
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Our business model actively aligns with international sustainable targets to foster inclusive economic development and ecological preservation.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="reveal-scale stagger-1 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs font-mono">
                SDG 5
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900">Gender Equality</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Providing hundreds of rural women with direct bank accounts, technical skills, and leadership roles in their villages.
              </p>
            </div>

            <div className="reveal-scale stagger-2 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs font-mono">
                SDG 8
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900">Decent Work & Growth</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Guaranteeing fair trade living wages, clean ergonomic workspaces, and zero child labor in our supply chains.
              </p>
            </div>

            <div className="reveal-scale stagger-3 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs font-mono">
                SDG 12
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900">Responsible Consumption</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Manufacturing 100% biodegradable products that replace petroleum-based plastic bins and synthetic home furnishings.
              </p>
            </div>

            <div className="reveal-scale stagger-4 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs font-mono">
                SDG 13
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900">Climate Action</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Cultivating carbon-negative plant fibers that act as natural carbon sinks and solar drying with zero fossil fuel.
              </p>
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
                <Leaf className="h-3.5 w-3.5 text-emerald-400" />
                Build a Green Supply Chain
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Empower Artisans. Protect the Earth.
              </h2>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
                Join international retail brands sourcing certified sustainable natural fiber handicrafts from Golden Fiber Crafts Ltd.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all duration-200 btn-interactive"
              >
                <span>Browse Eco Products</span>
                <ArrowRight className="h-4 w-4 btn-arrow" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 text-xs font-bold backdrop-blur-md border border-white/20 transition-all duration-200 btn-interactive"
              >
                <span>Partner with Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
