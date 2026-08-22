import React, { useState, useEffect } from 'react';
import {
  Leaf,
  Globe2,
  Sparkles,
  Tag,
  Boxes,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface HubPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorBg: string;
  colorBorder: string;
  colorText: string;
}

const PILLARS: HubPillar[] = [
  {
    id: 'eco-friendly',
    title: '100% Eco-Friendly & Sustainable Products',
    subtitle: 'Renewable natural jute, seagrass, kaisa grass & chemical-free dyes.',
    icon: <Leaf className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-emerald-600',
    colorBorder: 'border-emerald-200',
    colorText: 'text-emerald-700'
  },
  {
    id: 'export-capability',
    title: 'Worldwide Export Capability',
    subtitle: 'Supplying retail giants across Europe, North America, Australia & Japan.',
    icon: <Globe2 className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-teal-600',
    colorBorder: 'border-teal-200',
    colorText: 'text-teal-700'
  },
  {
    id: 'design-team',
    title: 'Experienced Design & Development Team',
    subtitle: 'Continuous trend innovation, custom prototyping & CAD spec sheets.',
    icon: <Sparkles className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-amber-600',
    colorBorder: 'border-amber-200',
    colorText: 'text-amber-700'
  },
  {
    id: 'competitive-pricing',
    title: 'Competitive Pricing',
    subtitle: 'Direct factory pricing with unmatched value and transparent costing.',
    icon: <Tag className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-orange-600',
    colorBorder: 'border-orange-200',
    colorText: 'text-orange-700'
  },
  {
    id: 'flexible-moq',
    title: 'Flexible MOQ',
    subtitle: 'Accommodating trial programs, custom collections & bulk container shipments.',
    icon: <Boxes className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-blue-600',
    colorBorder: 'border-blue-200',
    colorText: 'text-blue-700'
  },
  {
    id: 'skilled-workforce',
    title: 'Skilled Artisan Workforce',
    subtitle: '10,000+ rural artisans preserving heritage handweaving traditions.',
    icon: <Users className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-emerald-700',
    colorBorder: 'border-emerald-200',
    colorText: 'text-emerald-800'
  },
  {
    id: 'reliable-leadtime',
    title: 'Reliable Lead Times',
    subtitle: 'Proactive planning, 70-90 days on-time production & sea freight dispatch.',
    icon: <Clock className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-indigo-600',
    colorBorder: 'border-indigo-200',
    colorText: 'text-indigo-700'
  },
  {
    id: 'strict-qc',
    title: 'Strict Quality Control',
    subtitle: 'Multi-stage inspection from raw fiber tensile to AQL pre-shipment audit.',
    icon: <ShieldCheck className="h-5 w-5 text-white stroke-[2.2]" />,
    colorBg: 'bg-green-700',
    colorBorder: 'border-green-200',
    colorText: 'text-green-800'
  }
];

export const WhyChooseUsHub: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [autoRotateIndex, setAutoRotateIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotateIndex((prev) => (prev + 1) % PILLARS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-stone-50 via-white to-emerald-50/30 p-6 sm:p-10 md:p-12 border border-emerald-900/15 shadow-xl space-y-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-emerald-950 bg-emerald-100 border border-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-800" />
          <span>8 Core Pillars of Excellence</span>
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Why Choose <span className="text-emerald-800">Golden Fiber Crafts Ltd.</span>
        </h3>
        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal max-w-2xl mx-auto">
          We combine quality, innovation, sustainability, and skilled craftsmanship to deliver products that create lasting value. Our commitment to responsible sourcing, natural materials, eco-friendly solutions, and customer satisfaction ensures reliable products and trusted service.
        </p>
        <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
      </div>

      {/* 8 Pillars Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
        {PILLARS.map((pillar, idx) => {
          const isActive = activeItem === pillar.id || (!activeItem && autoRotateIndex === idx);
          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActiveItem(pillar.id)}
              onMouseLeave={() => setActiveItem(null)}
              className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white shadow-xl -translate-y-1.5 border-emerald-500 ring-2 ring-emerald-400/30'
                  : 'bg-white/90 hover:bg-white shadow-sm hover:shadow-md border-stone-200/80 hover:-translate-y-0.5'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`h-11 w-11 rounded-xl ${pillar.colorBg} flex items-center justify-center shadow-md`}>
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold text-stone-400">0{idx + 1}</span>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {pillar.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Value Ribbon footer */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Building Long-Term Global Partnerships
          </p>
          <p className="text-xs text-stone-300 font-light">
            With a focus on excellence and continuous improvement, we create a positive impact on people and the planet.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md shrink-0">
          <span>Explore Catalog</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHub;
