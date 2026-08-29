import React, { useState, useEffect } from 'react';
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
import { usePageTitle } from '../utils/usePageTitle';
import {
  PageSectionItem,
  getLocalSections,
  fetchLiveSections
} from '../utils/pageSectionsStore';

export const SustainabilityPage: React.FC = () => {
  usePageTitle('Sustainability & Eco-Impact');
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sections, setSections] = useState<PageSectionItem[]>(() => getLocalSections('sustainability'));

  useEffect(() => {
    fetchLiveSections('sustainability').then(data => {
      if (data && data.length > 0) setSections(data);
    });

    const handleUpdated = (e: any) => {
      if (e.detail?.type === 'sustainability' || !e.detail?.type) {
        setSections(getLocalSections('sustainability'));
      }
    };

    window.addEventListener('gfcl_sections_updated', handleUpdated);
    return () => window.removeEventListener('gfcl_sections_updated', handleUpdated);
  }, []);

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
              <Leaf className="h-3 w-3 text-emerald-300" />
              Eco-System & Social Responsibility
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Sustainability & Fair Trade Manufacturing
            </h1>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              Crafting 100% natural, biodegradable handicraft solutions while empowering rural Bangladeshi women artisans with fair living wages and safe working environments.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                <Sparkles className="h-3 w-3 text-amber-300" /> 100% Biodegradable Fibers
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                Fair Trade Practices
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold text-emerald-100">
                Zero Plastic Packaging
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
      {/* 2. Alternating Dynamic Sustainability Pillars */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-8">
        {sections.filter(s => s.is_active !== 0 && s.is_active !== false).map((section, idx) => {
          const isEven = idx % 2 === 1;
          const img = section.image_url || section.image || '/sustainability/sustainability_harvest.png';
          const imgAlt = section.image_alt || section.imageAlt || section.title;
          const impactPoints = section.impactPoints || section.points || [];
          const metrics = section.metrics || [];

          return (
            <section key={section.id || idx} id={section.section_key || `section-${section.id || idx}`} className="scroll-mt-24">
              <div
                className={`flex flex-col gap-10 lg:gap-16 items-start ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Visual Image Column */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'reveal-right' : 'reveal-left'}`}>
                  <div className="relative group rounded-3xl overflow-hidden bg-[#edf4ee] border border-[#d6e5d8] shadow-xl hover:shadow-2xl transition-all duration-500 img-zoom-container">
                    
                    <div className="absolute top-4 left-4 z-20 bg-emerald-950/85 backdrop-blur-md text-emerald-300 font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-emerald-500/30 shadow-md">
                      PILLAR {section.number || (idx + 1).toString().padStart(2, '0')} {section.badge ? `• ${section.badge}` : ''}
                    </div>

                    <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden">
                      <img
                        src={img}
                        alt={imgAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>

                    <button
                      onClick={() => setSelectedImage(img)}
                      className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-950/80 hover:bg-emerald-700 text-white text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 btn-interactive"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>View Photo</span>
                    </button>

                    {/* Metrics Badges floating on image */}
                    {metrics.length > 0 && (
                      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 max-w-[80%]">
                        {metrics.map((m, i) => (
                          <div
                            key={i}
                            className="bg-stone-950/85 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-xl text-left shadow-md"
                          >
                            <span className="block text-[9px] text-emerald-400 font-medium uppercase">{m.label}</span>
                            <strong className="block text-xs font-extrabold text-white">{m.value}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

                {/* Content & Impact Points Column */}
                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'reveal-left' : 'reveal-right'}`}>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-black flex items-center gap-1.5">
                      <Leaf className="h-4 w-4 text-emerald-700" />
                      <span>PLANET &amp; COMMUNITY COMMITMENT</span>
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
                      {section.title}
                    </h2>
                  </div>

                  {section.quote && (
                    <div className="relative pl-4 border-l-4 border-emerald-700 bg-[#edf5ef] p-4 rounded-r-2xl border-y border-r border-[#d8e8da]">
                      <p className="text-sm sm:text-base text-black leading-relaxed font-serif font-bold italic">
                        "{section.quote}"
                      </p>
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-medium">
                    {section.description}
                  </p>

                  {/* Impact Points Checklist with Staggered Entrance */}
                  {impactPoints.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-black">
                        Measurable Sustainability Impact:
                      </h4>
                      {impactPoints.map((item, idx2) => {
                        const pStagger = `stagger-${idx2 + 1}`;
                        return (
                          <div
                            key={idx2}
                            className={`reveal-up ${pStagger} hover-lift-sm flex items-start gap-3 p-3 rounded-xl bg-white border border-[#d6e5d8] shadow-xs`}
                          >
                            <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-xs font-bold text-black">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2.5 Environmental & Social Responsibility (PDF Page 21 & 22) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-white py-12 sm:py-16 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 reveal-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-black">
              Sustainability & Social Responsibility
            </h2>
            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal">
              At Golden Fiber Crafts Ltd., sustainability is an integral part of how we develop products, manage our operations, and build long-term relationships. We are committed to creating high-quality handcrafted products that combine natural materials, responsible practices, skilled craftsmanship, and thoughtful design.
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          {/* Environmental Responsibility vs Social Responsibility 2-Col Grid */}
          <div className="grid md:grid-cols-2 gap-8 reveal-up">
            
            {/* Environmental Responsibility Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950 p-7 sm:p-8 text-white shadow-xl space-y-5 border border-emerald-500/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-300">Environmental Responsibility</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-100 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Use of renewable and biodegradable natural fibers such as jute, seagrass, water hyacinth, cotton, cane, and bamboo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Promotion of environmentally friendly production processes with minimal waste.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Preference for recyclable and plastic-free packaging materials.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Efficient use of natural resources to reduce environmental impact.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Continuous efforts to minimize carbon footprint throughout our operations.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-emerald-800/60 text-xs text-emerald-300 font-serif italic">
                Protecting our planet with every handcrafted creation.
              </div>
            </div>

            {/* Social Responsibility Card - Exact Same Design and Color */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950 p-7 sm:p-8 text-white shadow-xl space-y-5 border border-emerald-500/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-300">Social Responsibility</h3>
                <p className="text-xs text-stone-200 leading-relaxed font-normal">
                  Our commitment to sustainability extends beyond the environment. We value the skills, knowledge, and craftsmanship of local artisans and communities that contribute to our products.
                </p>
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-200">We aim to support:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-100 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Local craftsmanship and artisan skills development</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Responsible employment & fair living wages</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Community-based economic opportunities for rural mothers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Preservation of traditional Bengali handicraft techniques</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Safe and respectful working environments</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Long-term sustainable development within our supply chain</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-emerald-800/60 text-xs text-emerald-300 font-serif italic">
                Better Materials. Responsible Production. Empowered Communities.
              </div>
            </div>

          </div>

          {/* 4 Pillars of Sustainable Growth Ribbon (Page 22 & 23) */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 p-6 sm:p-10 text-white shadow-xl space-y-6 text-center reveal-up">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                OUR SUSTAINABILITY COMMITMENT
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                "GOOD FOR NATURE • GOOD FOR PEOPLE • GOOD FOR THE FUTURE"
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 text-left">
              {[
                { title: 'SUSTAINABLE MATERIALS', desc: 'We use natural, renewable, and eco-friendly fibers.' },
                { title: 'ETHICAL PRODUCTION', desc: 'Our products are made responsibly with fair labor practices.' },
                { title: 'QUALITY CRAFTSMANSHIP', desc: 'Each product is crafted with care ensuring durability and excellence.' },
                { title: 'RECYCLABLE & BIODEGRADABLE', desc: 'Our designs are recyclable and biodegradable for a greener tomorrow.' },
                { title: 'ECO-FRIENDLY PACKAGING', desc: 'We use sustainable packaging to reduce waste and protect our planet.' }
              ].map((pil, idx) => (
                <div key={idx} className="p-4 bg-white/15 backdrop-blur-xs rounded-2xl border border-white/20 space-y-1.5 flex flex-col justify-between shadow-xs">
                  <h4 className="text-xs font-bold text-amber-300 leading-snug">{pil.title}</h4>
                  <p className="text-xs text-stone-100 font-medium leading-relaxed">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. UN Sustainable Development Goals (SDG) Alignment */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-b from-[#eef6f0] to-[#fcfbf9] py-16 border-y border-stone-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-900">
              GLOBAL ALIGNMENT
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-black">
              Contributing to the UN Sustainable Development Goals
            </h2>
            <p className="text-sm text-stone-900 leading-relaxed font-medium">
              Our business model actively aligns with international sustainable targets to foster inclusive economic development and ecological preservation.
            </p>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-emerald-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card-slide-far-left stagger-2 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-950 flex items-center justify-center font-bold text-xs font-mono">
                SDG 5
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">Gender Equality</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Providing hundreds of rural women with direct bank accounts, technical skills, and leadership roles in their villages.
              </p>
            </div>

            <div className="card-slide-left stagger-1 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold text-xs font-mono">
                SDG 8
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">Decent Work & Growth</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Guaranteeing fair trade living wages, clean ergonomic workspaces, and zero child labor in our supply chains.
              </p>
            </div>

            <div className="card-slide-right stagger-1 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center font-bold text-xs font-mono">
                SDG 12
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">Responsible Consumption</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Manufacturing 100% biodegradable products that replace petroleum-based plastic bins and synthetic home furnishings.
              </p>
            </div>

            <div className="card-slide-far-right stagger-2 hover-lift bg-white rounded-3xl p-6 border border-[#d8e8da] shadow-xs space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold text-xs font-mono">
                SDG 13
              </div>
              <h3 className="font-serif text-base font-extrabold text-black">Climate Action</h3>
              <p className="text-xs text-stone-900 leading-relaxed font-medium">
                Cultivating carbon-negative plant fibers that act as natural carbon sinks and solar drying with zero fossil fuel.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Sustainability Impact Metrics (Before Footer) */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-white/70 border-t border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-black shadow-xs">
              <Leaf className="h-4 w-4 text-emerald-800" />
              <span>Measurable Impact Commitments</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-black">
              Our Core Sustainability Commitments
            </h3>
            <p className="text-xs sm:text-sm text-stone-900 font-medium">
              Creating measurable ecological and social impact across rural artisan communities in Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="card-slide-far-left stagger-2 hover-lift-sm p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-2">
                <Sprout className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">100% Renewable</h4>
              <p className="text-xs text-stone-900 font-semibold">Plant-based raw fibers</p>
            </div>

            <div className="card-slide-left stagger-1 hover-lift-sm p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-2">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">85%+ Women Artisans</h4>
              <p className="text-xs text-stone-900 font-semibold">Ethical fair-trade wages</p>
            </div>

            <div className="card-slide-right stagger-1 hover-lift-sm p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-teal-100 text-teal-950 flex items-center justify-center font-bold mb-2">
                <Recycle className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">Zero Plastic</h4>
              <p className="text-xs text-stone-900 font-semibold">100% Biodegradable</p>
            </div>

            <div className="card-slide-far-right stagger-2 hover-lift-sm p-4 rounded-2xl bg-white border border-emerald-200/80 shadow-xs">
              <div className="h-9 w-9 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center font-bold mb-2">
                <Globe2 className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-sm font-extrabold text-black">UN SDG Aligned</h4>
              <p className="text-xs text-stone-900 font-semibold">Global climate action</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

