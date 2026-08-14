import React, { useState, useEffect } from 'react';
import {
  Network,
  Tag,
  Award,
  Boxes,
  Truck,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap,
  Mail,
  Search,
  ShieldCheck
} from 'lucide-react';

interface HubItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  shadowColor: string;
  angleDeg: number; // 0 is top (12 o'clock), clockwise
}

const HUB_ITEMS: HubItem[] = [
  {
    id: 'sourcing',
    title: 'Strong sourcing network',
    icon: <Network className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#ef4444]', // Red
    colorBorder: 'border-red-200',
    colorText: 'text-red-600',
    shadowColor: 'shadow-red-500/20',
    angleDeg: 0 // 12 o'clock (Top)
  },
  {
    id: 'pricing',
    title: 'Competitive pricing',
    icon: <Tag className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#f97316]', // Orange
    colorBorder: 'border-orange-200',
    colorText: 'text-orange-600',
    shadowColor: 'shadow-orange-500/20',
    angleDeg: 60 // 2 o'clock (Top Right)
  },
  {
    id: 'export',
    title: 'Export-ready production',
    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#eab308]', // Gold / Yellow
    colorBorder: 'border-amber-200',
    colorText: 'text-amber-600',
    shadowColor: 'shadow-amber-500/20',
    angleDeg: 120 // 4 o'clock (Bottom Right)
  },
  {
    id: 'moq',
    title: 'Flexible MOQ',
    icon: <Boxes className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#10b981]', // Emerald / Green
    colorBorder: 'border-emerald-200',
    colorText: 'text-emerald-600',
    shadowColor: 'shadow-emerald-500/20',
    angleDeg: 180 // 6 o'clock (Bottom)
  },
  {
    id: 'delivery',
    title: 'Fast delivery system',
    icon: <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#3b82f6]', // Vibrant Blue
    colorBorder: 'border-blue-200',
    colorText: 'text-blue-600',
    shadowColor: 'shadow-blue-500/20',
    angleDeg: 240 // 8 o'clock (Bottom Left)
  },
  {
    id: 'solution',
    title: 'One-stop solution provider',
    icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2.2]" />,
    colorBg: 'bg-[#a855f7]', // Purple
    colorBorder: 'border-purple-200',
    colorText: 'text-purple-600',
    shadowColor: 'shadow-purple-500/20',
    angleDeg: 300 // 10 o'clock (Top Left)
  }
];

export const WhyChooseUsHub: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [autoRotateIndex, setAutoRotateIndex] = useState<number>(0);

  // Gentle auto highlight loop every 3 seconds if not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotateIndex((prev) => (prev + 1) % HUB_ITEMS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50/80 via-white to-sky-50/30 p-4 sm:p-8 md:p-12 border border-slate-200/80 shadow-xl">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative text-center max-w-2xl mx-auto mb-6 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-100/70 border border-sky-200 mb-3">
          <ShieldCheck className="h-3.5 w-3.5" />
          Our Core Strengths
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Why <span className="text-blue-600">Choose Us</span>
        </h3>
        <p className="mt-2.5 text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Delivering exceptional handcrafted manufacturing, prompt global shipping, and certified compliance.
        </p>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP & TABLET: Circular Radial Infographic Layout     */}
      {/* ========================================================= */}
      <div className="hidden md:block relative w-full max-w-[760px] h-[580px] mx-auto">
        {/* Concentric Circular Decorative Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer dotted orbit ring */}
          <div className="w-[480px] h-[480px] rounded-full border border-sky-200/80 border-dashed animate-[spin_60s_linear_infinite]" />
          {/* Main blue circle border matching the reference screenshot */}
          <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-sky-300/80 shadow-[0_0_40px_rgba(56,189,248,0.12)]" />
          {/* Inner subtle glow ring */}
          <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-blue-500/10 via-sky-300/15 to-transparent blur-md" />
        </div>

        {/* SVG Radial Dashed Connecting Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 760 580"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center coordinate: cx=380, cy=290 */}
          {/* 1. Top (12 o'clock): 380, 80 */}
          <line
            x1="380"
            y1="290"
            x2="380"
            y2="75"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
          {/* 2. Top-Right (2 o'clock): 580, 160 */}
          <line
            x1="380"
            y1="290"
            x2="560"
            y2="175"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
          {/* 3. Bottom-Right (4 o'clock): 580, 420 */}
          <line
            x1="380"
            y1="290"
            x2="560"
            y2="405"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
          {/* 4. Bottom (6 o'clock): 380, 500 */}
          <line
            x1="380"
            y1="290"
            x2="380"
            y2="505"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
          {/* 5. Bottom-Left (8 o'clock): 180, 420 */}
          <line
            x1="380"
            y1="290"
            x2="200"
            y2="405"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
          {/* 6. Top-Left (10 o'clock): 180, 160 */}
          <line
            x1="380"
            y1="290"
            x2="200"
            y2="175"
            stroke="#93c5fd"
            strokeWidth="1.8"
            strokeDasharray="4 5"
          />
        </svg>

        {/* ---------------- CENTER HUB ---------------- */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ width: '220px', height: '110px' }}
        >
          <div className="w-full h-full rounded-[30px] bg-white border-2 border-sky-300 shadow-[0_12px_35px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105">
            <h4 className="font-serif text-xl font-bold text-stone-900 leading-tight">
              Why
            </h4>
            <p className="font-serif text-2xl font-extrabold text-blue-600 leading-tight">
              Choose Us
            </p>
          </div>
        </div>

        {/* ---------------- 6 ORBITAL CARDS ---------------- */}

        {/* 1. TOP (12 o'clock) - Strong Sourcing Network */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
          onMouseEnter={() => setActiveItem('sourcing')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'sourcing' || (!activeItem && autoRotateIndex === 0)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(239,68,68,0.18)] ring-2 ring-red-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#ef4444] text-white flex items-center justify-center shadow-md shrink-0">
              <Network className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              Strong sourcing network
            </span>
          </div>
        </div>

        {/* 2. TOP-RIGHT (2 o'clock) - Competitive Pricing */}
        <div
          className="absolute top-[135px] right-2 z-20"
          onMouseEnter={() => setActiveItem('pricing')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'pricing' || (!activeItem && autoRotateIndex === 1)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(249,115,22,0.18)] ring-2 ring-orange-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#f97316] text-white flex items-center justify-center shadow-md shrink-0">
              <Tag className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              Competitive pricing
            </span>
          </div>
        </div>

        {/* 3. BOTTOM-RIGHT (4 o'clock) - Export-ready production */}
        <div
          className="absolute bottom-[135px] right-2 z-20"
          onMouseEnter={() => setActiveItem('export')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'export' || (!activeItem && autoRotateIndex === 2)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(234,179,8,0.22)] ring-2 ring-amber-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#eab308] text-white flex items-center justify-center shadow-md shrink-0">
              <Award className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              Export-ready production
            </span>
          </div>
        </div>

        {/* 4. BOTTOM (6 o'clock) - Flexible MOQ */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20"
          onMouseEnter={() => setActiveItem('moq')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'moq' || (!activeItem && autoRotateIndex === 3)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(16,185,129,0.18)] ring-2 ring-emerald-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#10b981] text-white flex items-center justify-center shadow-md shrink-0">
              <Boxes className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              Flexible MOQ
            </span>
          </div>
        </div>

        {/* 5. BOTTOM-LEFT (8 o'clock) - Fast delivery system */}
        <div
          className="absolute bottom-[135px] left-2 z-20"
          onMouseEnter={() => setActiveItem('delivery')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'delivery' || (!activeItem && autoRotateIndex === 4)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(59,130,246,0.18)] ring-2 ring-blue-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#3b82f6] text-white flex items-center justify-center shadow-md shrink-0">
              <Truck className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              Fast delivery system
            </span>
          </div>
        </div>

        {/* 6. TOP-LEFT (10 o'clock) - One-stop solution provider */}
        <div
          className="absolute top-[135px] left-2 z-20"
          onMouseEnter={() => setActiveItem('solution')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`transition-all duration-300 rounded-2xl bg-white p-3.5 pr-6 flex items-center gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 cursor-pointer ${
              activeItem === 'solution' || (!activeItem && autoRotateIndex === 5)
                ? '-translate-y-1.5 shadow-[0_15px_30px_rgba(168,85,247,0.18)] ring-2 ring-purple-300'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            <div className="h-12 w-12 rounded-xl bg-[#a855f7] text-white flex items-center justify-center shadow-md shrink-0">
              <Sparkles className="h-6 w-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-stone-800 text-sm whitespace-nowrap">
              One-stop solution provider
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE RESPONSIVE LAYOUT (< md screen)                   */}
      {/* ========================================================= */}
      <div className="block md:hidden space-y-4">
        {/* Center Title Pill for Mobile */}
        <div className="mx-auto w-full max-w-[260px] rounded-2xl bg-white border-2 border-sky-300 p-4 text-center shadow-md mb-6">
          <h4 className="font-serif text-lg font-bold text-stone-900 leading-tight">Why</h4>
          <p className="font-serif text-2xl font-extrabold text-blue-600 leading-tight">Choose Us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {HUB_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className={`h-11 w-11 rounded-xl ${item.colorBg} flex items-center justify-center text-white shadow-sm shrink-0`}>
                {item.icon}
              </div>
              <span className="font-bold text-stone-800 text-xs sm:text-sm">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Core Values Strip */}
      <div className="mt-10 sm:mt-14 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
        <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm border border-stone-200/70 hover:border-sky-300 transition-colors">
          <Zap className="h-3.5 w-3.5 text-sky-600" />
          <span>Innovation</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm border border-stone-200/70 hover:border-blue-300 transition-colors">
          <Mail className="h-3.5 w-3.5 text-blue-600" />
          <span>Quality First</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm border border-stone-200/70 hover:border-sky-300 transition-colors">
          <TrendingUp className="h-3.5 w-3.5 text-sky-500" />
          <span>Integrity & Transparency</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm border border-stone-200/70 hover:border-sky-300 transition-colors">
          <Search className="h-3.5 w-3.5 text-sky-600" />
          <span>Customer Satisfaction</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm border border-stone-200/70 hover:border-emerald-300 transition-colors">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>Sustainability & On-Time Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHub;
