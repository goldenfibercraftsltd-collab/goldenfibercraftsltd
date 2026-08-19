import React from 'react';
import {
  Award,
  CheckCircle2,
  Factory,
  Leaf,
  Users,
  ShieldCheck,
  ArrowRight,
  Clock,
  MessageSquare,
  DollarSign,
  Star,
  Truck,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Search,
  Settings,
  Mail,
  Quote,
  Eye,
  Target,
  HeartHandshake,
  Globe2,
  Boxes,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollTypingText } from '../components/ScrollTypingText';
import { WhyChooseUsHub } from '../components/WhyChooseUsHub';
import { TAGLINE, SUB_TAGLINE, KEY_LEADERSHIP, TECHNICAL_INFORMATION } from '../data/products';

interface AboutPageProps {
  onOpenQuoteModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-amber-50/20 py-8 lg:py-12 animate-fadeIn font-sans space-y-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Page Banner Header */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 p-6 sm:p-8 text-white shadow-xl border border-emerald-800/40">
          <div className="relative z-10 max-w-3xl space-y-3">
            <ScrollTypingText
              as="h1"
              text="About Golden Fiber Crafts Ltd."
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
              speed={35}
            />
            <p className="text-amber-300 font-serif italic text-sm sm:text-base">
              "{TAGLINE}"
            </p>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-normal">
              Bangladesh’s premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass handicrafts, storage baskets, planters, and natural home decor.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
            <img src="/logo.svg" alt="GF Logo" className="h-96 w-96 filter invert" />
          </div>
        </div>

        {/* 2. Company History & Overview (Page 2 of Corporate Profile) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-950 px-3.5 py-1 text-xs font-black uppercase tracking-wider">
              <Leaf className="h-3.5 w-3.5 text-amber-800" />
              Company History & Overview
            </div>
            <ScrollTypingText
              as="h2"
              text="Showcasing Bangladesh's Natural Fibers to the Global Marketplace"
              className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight"
              speed={30}
            />
            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal">
              <strong>Golden Fiber Crafts Ltd.</strong> was established with a vision to showcase the beauty, versatility, and sustainability of Bangladesh's natural fibers to the global marketplace. Inspired by the country's rich tradition of handicrafts and its reputation as the home of the world's finest jute—known as the <em>"Golden Fiber"</em>—the company was founded to create a high-quality diverse range of eco-friendly products, including jute bags, home décor, storage solutions, gift items, and handcrafted accessories.
            </p>
            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal">
              Over the years, we have continuously invested in product innovation, quality management, and sustainable manufacturing practices. Our commitment to excellence has enabled us to build strong relationships with customers across <strong>Europe, North America, Australia, Japan,</strong> and other international markets.
            </p>
            <p className="text-stone-800 text-sm leading-relaxed font-normal">
              Today, Golden Fiber Crafts Ltd. is recognized as a reliable manufacturer and exporter of eco-friendly handicrafts and natural fiber products. Guided by our core values of quality, integrity, innovation, and sustainability, we remain dedicated to promoting environmentally responsible products while supporting local artisans and contributing to Bangladesh's growing handicraft industry.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="hover-lift-sm flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/60">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-black text-sm">100% Eco-Friendly</h4>
                  <p className="text-xs text-stone-700 font-medium">Biodegradable natural fibers & plastic-free materials.</p>
                </div>
              </div>
              <div className="hover-lift-sm flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/60">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-black text-sm">International Compliance</h4>
                  <p className="text-xs text-stone-700 font-medium">BSCI, ISO 14001, ISO 9001:2015 & OEKO-TEX.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white img-zoom-container">
            <img
              src="/about/authentic_artisans_circle.png"
              alt="Golden Fiber Crafts Rural Artisan Workforce Handweaving"
              className="w-full h-[450px] object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex items-end p-8 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Empowerment & Heritage Craft</p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Over 15,000 Skilled Artisans Workforce</h3>
                <p className="text-xs text-stone-300 mt-1 font-light">
                  Decentralized rural artisan clusters across Bangladesh creating authentic woven handicrafts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Vision, Our Mission & 6 Core Values (Page 4 of Profile) */}
        <div className="space-y-8 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/80 reveal-up">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">OUR GUIDING PRINCIPLES</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-black">
              Vision, Mission & Core Values
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Vision Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 p-7 text-white shadow-lg space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30 shadow-xs">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-300">Our Vision</h3>
                <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                  "To become a globally trusted leader in sustainable jute, natural fiber, and handicraft products, transforming Bangladesh's rich natural resources and traditional craftsmanship into innovative, high-quality solutions for a greener world."
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                <Sparkles className="h-4 w-4" />
                <span>Transforming Natural Resources into Global Quality</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-stone-50 p-7 border border-stone-200/80 shadow-md space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shadow-xs">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">Our Mission</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Promote sustainable living through eco-friendly products</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Manufacture premium-quality jute and handicraft items</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Support local artisans and skilled craftsmen</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Build long-term partnerships with customers worldwide</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Contribute to reducing plastic pollution through natural fiber alternatives</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 6 Core Values Grid */}
          <div className="pt-6 border-t border-stone-100 space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 text-center">Our 6 Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: 'Sustainability', desc: '100% renewable & plastic-free fibers', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                { title: 'Quality Excellence', desc: 'Zero defect export precision', color: 'bg-amber-50 text-amber-900 border-amber-200' },
                { title: 'Safety Commitment', desc: 'Safe & dignified workspaces', color: 'bg-teal-50 text-teal-800 border-teal-200' },
                { title: 'Innovation', desc: 'Contemporary designs for global buyers', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                { title: 'Customer Focus', desc: 'Flexible MOQ & timely delivery', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
                { title: 'Social Responsibility', desc: 'Artisan welfare & fair trade wages', color: 'bg-purple-50 text-purple-800 border-purple-200' },
              ].map((val, idx) => (
                <div key={idx} className={`rounded-xl p-4 border ${val.color} text-center space-y-1 hover-lift-sm transition-all`}>
                  <h4 className="font-bold text-xs sm:text-sm">{val.title}</h4>
                  <p className="text-[11px] opacity-85 leading-snug">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Leadership Messages: Both MD & Senior Director (Page 3 of Corporate Profile) */}
        <div className="space-y-8 reveal-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">EXECUTIVE LEADERSHIP</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-black">
              Messages From Our Leadership
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Managing Director Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 p-6 sm:p-8 text-white shadow-xl border border-emerald-700/40 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src="/about/md_safiqul_islam.png"
                    alt={KEY_LEADERSHIP.managingDirector.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-amber-400/80 shadow-lg shrink-0"
                  />
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/30 mb-1">
                      {KEY_LEADERSHIP.managingDirector.title}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {KEY_LEADERSHIP.managingDirector.name}
                    </h3>
                    <p className="text-xs text-stone-300">Message From Managing Director</p>
                    <a href="tel:+8801916183583" className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 mt-1 font-semibold">
                      <Phone className="h-3 w-3" /> +8801916-183583
                    </a>
                  </div>
                </div>

                <blockquote className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light italic border-l-2 border-amber-400 pl-4 py-1">
                  "{KEY_LEADERSHIP.managingDirector.message}"
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300">
                <span>Golden Fiber Crafts Ltd.</span>
                <span className="font-serif italic font-bold text-amber-300">Sustainable Excellence</span>
              </div>
            </div>

            {/* Senior Director Card */}
            <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-950 p-6 sm:p-8 text-white shadow-xl border border-emerald-700/40 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src="/about/md_nazrul_islam_uzzal.png"
                    alt={KEY_LEADERSHIP.seniorDirector.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-emerald-400/80 shadow-lg shrink-0"
                  />
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 mb-1">
                      {KEY_LEADERSHIP.seniorDirector.title}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {KEY_LEADERSHIP.seniorDirector.name}
                    </h3>
                    <p className="text-xs text-stone-300">Message From Senior Director</p>
                    <a href="tel:+8801721994082" className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 mt-1 font-semibold">
                      <Phone className="h-3 w-3" /> +8801721-994082
                    </a>
                  </div>
                </div>

                <blockquote className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light italic border-l-2 border-emerald-400 pl-4 py-1">
                  "{KEY_LEADERSHIP.seniorDirector.message}"
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300">
                <span>Golden Fiber Crafts Ltd.</span>
                <span className="font-serif italic font-bold text-amber-300">Empowering Artisans</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Technical Information Section (Page 12 of Profile) */}
        <div className="reveal-up rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">OPERATIONAL CAPACITIES</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-wide">
              Technical Information
            </h3>
            <p className="text-xs text-stone-700 font-medium">Official factory metrics and export capacity specifications.</p>
            <div className="mx-auto h-1 w-20 rounded-full bg-black" />
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-stone-200">
            <table className="min-w-full divide-y divide-stone-200 text-left">
              <tbody className="divide-y divide-stone-100 bg-white">
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-black w-1/3">
                    Office Staff
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.officeStaff}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-black">
                    Artisans
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.artisans}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-black">
                    Production Capacity / Month
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.productionCapacityMonth}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-black">
                    Production Lead Time
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.productionLeadTime}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-black">
                    Payment Term
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.paymentTerms}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-black">
                    Annual Turnover
                  </td>
                  <td className="px-6 py-4 text-sm text-black font-bold">
                    : <span className="font-extrabold text-black">{TECHNICAL_INFORMATION.annualTurnover}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. "Why Choose Us" Hub (Page 5 of Corporate Profile) */}
        <div className="reveal-up">
          <WhyChooseUsHub />
        </div>

        {/* 7. Future Goals & Expansion Plan (Page 20 of Corporate Profile) */}
        <div className="reveal-up rounded-3xl bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 p-8 sm:p-12 text-white shadow-2xl border border-emerald-500/30 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-1.5">
              <TrendingUp className="h-4 w-4" />
              LONG-TERM VISION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Future Goals & Expansion Plan
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              At Golden Fiber Crafts Ltd., we are focused on sustainable growth, global expansion, and continuous innovation. Our long-term vision is to strengthen our position as a trusted global manufacturer and exporter of eco-friendly handicrafts and natural-fiber products.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-4">
            {[
              { title: 'Global Expansion', icon: Globe2 },
              { title: 'Capacity Growth', icon: Boxes },
              { title: 'Product Diversification', icon: Layers },
              { title: 'Faster Delivery', icon: Truck },
              { title: 'Cost Optimization', icon: DollarSign },
              { title: 'Sustainable Practices', icon: Leaf },
              { title: 'Strategic Partnerships', icon: HeartHandshake },
            ].map((goal, idx) => {
              const IconComp = goal.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 text-center space-y-2 border border-white/10 hover:bg-white/15 transition-all flex flex-col items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-xs text-white leading-tight">{goal.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. Core Stats with Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="card-slide-far-left stagger-2 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={15} suffix="K+" />
            </p>
            <p className="mt-1 text-xs text-black font-bold uppercase">Skilled Artisans</p>
          </div>
          <div className="card-slide-left stagger-1 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={50} suffix=" HQ" />
            </p>
            <p className="mt-1 text-xs text-black font-bold uppercase">Monthly Containers</p>
          </div>
          <div className="card-slide-right stagger-1 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={5} suffix="M USD" />
            </p>
            <p className="mt-1 text-xs text-black font-bold uppercase">Annual Turnover</p>
          </div>
          <div className="card-slide-far-right stagger-2 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-black font-bold uppercase">Eco & Compliant</p>
          </div>
        </div>

      </div>
    </div>
  );
};

