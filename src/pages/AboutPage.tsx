import React from 'react';
import {
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Globe2,
  Boxes,
  Layers,
  Sparkles,
  Phone,
  Eye,
  Target,
  HeartHandshake,
  Truck,
  DollarSign,
  Award,
  Users
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { WhyChooseUsHub } from '../components/WhyChooseUsHub';
import { TAGLINE, KEY_LEADERSHIP, TECHNICAL_INFORMATION } from '../data/products';

interface AboutPageProps {
  onOpenQuoteModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-12 font-sans text-stone-900 animate-fadeIn space-y-6 sm:space-y-8">
      
      {/* 1. Page Banner Header */}
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
              Corporate Profile & Heritage
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              About Golden Fiber Crafts Ltd.
            </h1>
            <p className="text-amber-300 font-serif italic text-sm sm:text-base font-bold">
              "{TAGLINE}"
            </p>
            <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
              Bangladesh’s premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass handicrafts, storage baskets, planters, and sustainable home decor.
            </p>
          </div>
        </div>

        {/* Large Decorative Watermark in Background (Fully Visible) */}
        <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain filter invert drop-shadow-md" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">

        {/* 2. Company History & Overview (Page 2 of Corporate Profile) */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-950 px-3.5 py-1 text-xs font-black uppercase tracking-wider border border-emerald-200">
              <Leaf className="h-3.5 w-3.5 text-emerald-800" />
              Company History & Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950 leading-tight">
              Showcasing Bangladesh's Natural Fibers to the Global Marketplace
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
              <strong className="text-stone-950 font-bold">Golden Fiber Crafts Ltd.</strong> was established with a vision to showcase the beauty, versatility, and sustainability of Bangladesh's natural fibers to the global marketplace. Inspired by the country's rich tradition of handicrafts and its reputation as the home of the world's finest jute—known as the <em className="text-emerald-900 font-semibold">"Golden Fiber"</em>—the company was founded to create a high-quality diverse range of eco-friendly products, including jute bags, home décor, storage solutions, gift items, and handcrafted accessories.
            </p>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
              Over the years, we have continuously invested in product innovation, quality management, and sustainable manufacturing practices. Our commitment to excellence has enabled us to build strong relationships with customers across <strong className="text-stone-950 font-bold">Europe, North America, Australia, Japan,</strong> and other international markets.
            </p>
            <p className="text-stone-700 text-sm leading-relaxed font-medium">
              Today, Golden Fiber Crafts Ltd. is recognized as a reliable manufacturer and exporter of eco-friendly handicrafts and natural fiber products. Guided by our core values of quality, integrity, innovation, and sustainability, we remain dedicated to promoting environmentally responsible products while supporting local artisans and contributing to Bangladesh's growing handicraft industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/80">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-stone-950 text-sm">100% Eco-Friendly</h4>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">Biodegradable natural fibers & plastic-free materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/80">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-stone-950 text-sm">International Compliance</h4>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">BSCI, ISO 14001, ISO 9001:2015 & OEKO-TEX.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100 group">
            <img
              src="/about/authentic_artisans_circle.png"
              alt="Golden Fiber Crafts Rural Artisan Workforce Handweaving"
              className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex items-end p-8 text-white">
              <div className="space-y-1.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-widest border border-emerald-400/40">
                  Empowerment & Heritage Craft
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Over 10,000+ Skilled Artisans Workforce</h3>
                <p className="text-sm text-stone-100 font-medium leading-relaxed">
                  Decentralized rural artisan clusters across Bangladesh creating authentic woven handicrafts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Vision, Our Mission & 6 Core Values (Page 4 of Profile) */}
        <div className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-stone-200/80">
          <div className="text-center max-w-3xl mx-auto space-y-1.5 pt-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950">
              Vision, Mission & Core Values
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Vision Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950 p-7 text-white shadow-md space-y-4 flex flex-col justify-between border border-emerald-500/20">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-300">Our Vision</h3>
                <p className="text-stone-100 text-sm sm:text-base leading-relaxed font-medium">
                  "To become a globally trusted leader in sustainable jute, natural fiber, and handicraft products, transforming Bangladesh's rich natural resources and traditional craftsmanship into innovative, high-quality solutions for a greener world."
                </p>
              </div>
              <div className="pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300 font-bold">
                <Sparkles className="h-4 w-4" />
                <span>Transforming Natural Resources into Global Quality</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-stone-50 p-7 border border-stone-200/80 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
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

          {/* Core Values Grid */}
          <div className="pt-6 border-t border-stone-100 space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 text-center">Our Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: 'Sustainability', desc: '100% renewable & plastic-free fibers', color: 'bg-emerald-50 text-emerald-950 border-emerald-300' },
                { title: 'Quality Excellence', desc: 'Zero defect export precision', color: 'bg-amber-50 text-amber-950 border-amber-300' },
                { title: 'Safety Commitment', desc: 'Safe & dignified workspaces', color: 'bg-teal-50 text-teal-950 border-teal-300' },
                { title: 'Innovation', desc: 'Contemporary designs for global buyers', color: 'bg-blue-50 text-blue-950 border-blue-300' },
                { title: 'Customer Focus', desc: 'Flexible MOQ & timely delivery', color: 'bg-indigo-50 text-indigo-950 border-indigo-300' },
                { title: 'Social Responsibility', desc: 'Artisan welfare & fair trade wages', color: 'bg-purple-50 text-purple-950 border-purple-300' },
              ].map((val, idx) => (
                <div key={idx} className={`rounded-xl p-4 border ${val.color} text-center space-y-1 shadow-xs`}>
                  <h4 className="font-black text-xs sm:text-sm">{val.title}</h4>
                  <p className="text-xs font-semibold leading-snug">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Leadership Messages: Both MD & Senior Director (Page 3 of Corporate Profile) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">EXECUTIVE LEADERSHIP</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950">
              Messages From Our Leadership
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-emerald-600 mt-2" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Managing Director Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#064e3b] via-stone-900 to-stone-950 p-6 sm:p-8 text-white shadow-lg border border-emerald-600/40 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src="/about/md_safiqul_islam.png"
                    alt={KEY_LEADERSHIP.managingDirector.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-amber-400/80 shadow-lg shrink-0"
                  />
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/30 mb-1">
                      {KEY_LEADERSHIP.managingDirector.title}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {KEY_LEADERSHIP.managingDirector.name}
                    </h3>
                    <p className="text-xs text-stone-200 font-semibold">Message From Managing Director</p>
                    <a href="tel:+8801916183583" className="text-xs text-emerald-300 hover:underline inline-flex items-center gap-1 mt-1 font-bold">
                      <Phone className="h-3 w-3" /> +8801916-183583
                    </a>
                  </div>
                </div>

                <blockquote className="text-stone-100 text-xs sm:text-sm leading-relaxed font-medium italic border-l-2 border-amber-400 pl-4 py-1">
                  "{KEY_LEADERSHIP.managingDirector.message}"
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-bold">
                <span>Golden Fiber Crafts Ltd.</span>
                <span className="font-serif italic font-bold text-amber-300">Sustainable Excellence</span>
              </div>
            </div>

            {/* Senior Director Card */}
            <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-[#064e3b] to-stone-950 p-6 sm:p-8 text-white shadow-lg border border-emerald-600/40 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src="/about/md_nazrul_islam_uzzal.png"
                    alt={KEY_LEADERSHIP.seniorDirector.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-2 border-emerald-400/80 shadow-lg shrink-0"
                  />
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 mb-1">
                      {KEY_LEADERSHIP.seniorDirector.title}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {KEY_LEADERSHIP.seniorDirector.name}
                    </h3>
                    <p className="text-xs text-stone-200 font-semibold">Message From Senior Director</p>
                    <a href="tel:+8801721994082" className="text-xs text-emerald-300 hover:underline inline-flex items-center gap-1 mt-1 font-bold">
                      <Phone className="h-3 w-3" /> +8801721-994082
                    </a>
                  </div>
                </div>

                <blockquote className="text-stone-100 text-xs sm:text-sm leading-relaxed font-medium italic border-l-2 border-emerald-400 pl-4 py-1">
                  "{KEY_LEADERSHIP.seniorDirector.message}"
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-bold">
                <span>Golden Fiber Crafts Ltd.</span>
                <span className="font-serif italic font-bold text-amber-300">Empowering Artisans</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Technical Information Section (Page 12 of Profile) */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-900">OPERATIONAL CAPACITIES</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950 uppercase tracking-wide">
              Technical Information
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">Official factory metrics and export capacity specifications.</p>
            <div className="mx-auto h-1 w-20 rounded-full bg-emerald-700 mt-2" />
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-stone-200 shadow-xs">
            <table className="min-w-full divide-y divide-stone-200 text-left">
              <tbody className="divide-y divide-stone-100 bg-white">
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900 w-1/3">
                    Office Staff
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-stone-950">{TECHNICAL_INFORMATION.officeStaff} Professionals</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Artisans Workforce
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-stone-950">{TECHNICAL_INFORMATION.artisans}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Production Capacity
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-stone-950">{TECHNICAL_INFORMATION.productionCapacityMonth} / Month</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Production Lead Time
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-stone-950">{TECHNICAL_INFORMATION.productionLeadTime}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Payment Terms
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-stone-950">{TECHNICAL_INFORMATION.paymentTerms}</span>
                  </td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Annual Turnover
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-800 font-semibold">
                    : <span className="font-bold text-emerald-800">{TECHNICAL_INFORMATION.annualTurnover}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. "Why Choose Us" Hub (Page 5 of Corporate Profile) */}
        <div>
          <WhyChooseUsHub />
        </div>

        {/* 7. Future Goals & Expansion Plan (Page 20 of Corporate Profile) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-[#064e3b] to-stone-950 py-5 px-5 sm:py-6 sm:px-8 text-white shadow-xl border border-emerald-500/30 space-y-4">
          <div className="text-center max-w-3xl mx-auto space-y-1 relative z-10">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white">
              Future Goals & Expansion Plan
            </h2>
            <p className="text-stone-100 text-xs sm:text-sm font-medium leading-relaxed">
              At Golden Fiber Crafts Ltd., we are focused on sustainable growth, global expansion, and continuous innovation. Our long-term vision is to strengthen our position as a trusted global manufacturer and exporter of eco-friendly handicrafts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2 relative z-10">
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
                <div key={idx} className="bg-white/10 backdrop-blur-xs rounded-2xl p-3 text-center space-y-1.5 border border-white/15 hover:bg-white/20 transition-all flex flex-col items-center justify-center">
                  <div className="h-9 w-9 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center">
                    <IconComp className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-xs text-white leading-tight">{goal.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. Core Stats with Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <p className="font-serif text-3xl sm:text-4xl font-black text-emerald-800">
              <AnimatedCounter target={10} suffix="K+" />
            </p>
            <p className="mt-1 text-xs text-stone-800 font-black uppercase tracking-wider">Skilled Artisans</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <p className="font-serif text-3xl sm:text-4xl font-black text-emerald-800">
              <AnimatedCounter target={40} suffix=" HQ" />
            </p>
            <p className="mt-1 text-xs text-stone-800 font-black uppercase tracking-wider">Monthly Containers</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <p className="font-serif text-3xl sm:text-4xl font-black text-emerald-800">
              <AnimatedCounter target={5} suffix="M USD" />
            </p>
            <p className="mt-1 text-xs text-stone-800 font-black uppercase tracking-wider">Annual Turnover</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
            <p className="font-serif text-3xl sm:text-4xl font-black text-emerald-800">
              <AnimatedCounter target={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-stone-800 font-black uppercase tracking-wider">Eco & Compliant</p>
          </div>
        </div>

      </div>
    </div>
  );
};
