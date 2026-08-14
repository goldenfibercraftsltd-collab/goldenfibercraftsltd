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
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface AboutPageProps {
  onOpenQuoteModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-amber-50/20 py-12 lg:py-20 animate-fadeIn font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Page Banner Header */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 p-8 sm:p-12 text-white shadow-2xl border border-emerald-800/40">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <Leaf className="h-3.5 w-3.5" />
              Corporate Heritage & Excellence
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              About Golden Fiber Crafts Ltd.
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Bangladesh’s premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass handicrafts, storage baskets, planters, and natural home decor.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
            <img src="/logo.svg" alt="GF Logo" className="h-96 w-96 filter invert" />
          </div>
        </div>

        {/* 2. Company Profile & Vision (Who We Are) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              <Factory className="h-3.5 w-3.5" />
              Who We Are
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Weaving Sustainability & Global Quality Standards
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded with a mission to promote Bangladesh's rich golden fiber heritage globally, Golden Fiber Crafts Ltd. stands as a pioneer in sustainable manufacturing. From handwoven natural baskets to certified eco-friendly home decor, we bridge traditional craftsmanship with modern export standards.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="hover-lift-sm flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/60">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">100% Eco-Friendly</h4>
                  <p className="text-xs text-stone-500">Biodegradable natural fibers & non-toxic dyes.</p>
                </div>
              </div>
              <div className="hover-lift-sm flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-200/60">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Global Compliance</h4>
                  <p className="text-xs text-stone-500">BSCI, Sedex & OEKO-TEX Standard 100.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white img-zoom-container">
            <img
              src="/products/image1.jpeg"
              alt="Golden Fiber Crafts Facility"
              className="w-full h-[400px] object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex items-end p-8 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Empowerment & Craftsmanship</p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Over 1,200 Artisans & Skilled Workforce</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 4 Highlight Value Cards (Customer Satisfaction, In Time Delivery, Competitive Price, Quality Product) */}
        <div className="reveal-up space-y-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Our Core Commitments
            </h3>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-emerald-600" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            {/* Card 1: Customer Satisfaction */}
            <div className="rounded-2xl bg-white overflow-hidden shadow-lg border border-stone-200/80 hover-lift-sm flex flex-col transition-all">
              <div className="bg-[#881337] p-6 text-white text-center relative">
                <div className="mx-auto -mt-10 mb-3 h-14 w-14 rounded-full bg-[#881337] border-4 border-white flex items-center justify-center shadow-md">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-base uppercase tracking-wider">
                  Customer Satisfaction
                </h4>
              </div>
              <div className="p-6 flex-1 flex items-center justify-center bg-white text-center">
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  Golden Fiber Crafts Ltd. promises to deliver premium natural handicrafts and exceed customer satisfaction.
                </p>
              </div>
            </div>

            {/* Card 2: In Time Delivery */}
            <div className="rounded-2xl bg-white overflow-hidden shadow-lg border border-stone-200/80 hover-lift-sm flex flex-col transition-all">
              <div className="bg-[#ea580c] p-6 text-white text-center relative">
                <div className="mx-auto -mt-10 mb-3 h-14 w-14 rounded-full bg-[#ea580c] border-4 border-white flex items-center justify-center shadow-md">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-base uppercase tracking-wider">
                  In Time Delivery
                </h4>
              </div>
              <div className="p-6 flex-1 flex items-center justify-center bg-white text-center">
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  Our factory is like a friendly environment. Proper machine, worker, air and freshness — all are so good.
                </p>
              </div>
            </div>

            {/* Card 3: Competitive Price */}
            <div className="rounded-2xl bg-white overflow-hidden shadow-lg border border-stone-200/80 hover-lift-sm flex flex-col transition-all">
              <div className="bg-[#d97706] p-6 text-white text-center relative">
                <div className="mx-auto -mt-10 mb-3 h-14 w-14 rounded-full bg-[#d97706] border-4 border-white flex items-center justify-center shadow-md">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-base uppercase tracking-wider">
                  Competitive Price
                </h4>
              </div>
              <div className="p-6 flex-1 flex items-center justify-center bg-white text-center">
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  After successfully delivering the product with good quality, we hope you will contact us again. That's why quality is our main pull.
                </p>
              </div>
            </div>

            {/* Card 4: Quality Product */}
            <div className="rounded-2xl bg-white overflow-hidden shadow-lg border border-stone-200/80 hover-lift-sm flex flex-col transition-all">
              <div className="bg-[#dc2626] p-6 text-white text-center relative">
                <div className="mx-auto -mt-10 mb-3 h-14 w-14 rounded-full bg-[#dc2626] border-4 border-white flex items-center justify-center shadow-md">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-base uppercase tracking-wider">
                  Quality Product
                </h4>
              </div>
              <div className="p-6 flex-1 flex items-center justify-center bg-white text-center">
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  We offer top quality garments services. Our team has expert knowledge and skills required to ensure professional work for your next order.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Technical Information Section */}
        <div className="reveal-up rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 uppercase tracking-wide">
              Technical Information
            </h3>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-emerald-600" />
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-stone-200">
            <table className="min-w-full divide-y divide-stone-200 text-left">
              <tbody className="divide-y divide-stone-100 bg-white">
                <tr className="hover:bg-emerald-50/40 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900 w-1/3">
                    Office Staff
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span className="font-semibold text-emerald-800">50</span>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/40 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Artisans
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span className="font-semibold text-emerald-800">Approximate 50,000 pcs per month</span>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/40 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Production Capacity / Month
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span className="font-semibold text-emerald-800">50 x 40’ HQ Containers</span>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/40 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Production Lead Time
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span className="font-semibold text-emerald-800">70-90 days</span>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/40 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Payment Term
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span>L/C @ Sight or TT (30 % Deposit and 70% against copy of shipping documents)</span>
                  </td>
                </tr>
                <tr className="hover:bg-emerald-50/40 transition-colors bg-stone-50/40">
                  <td className="px-6 py-4 text-sm font-bold text-stone-900">
                    Annual Turnover
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-700 font-medium">
                    : <span className="font-bold text-emerald-700">5 million USD</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. "Why Choose Us" Interactive Diagram & Features Badges */}
        <div className="reveal-up rounded-3xl bg-gradient-to-b from-white via-sky-50/30 to-white p-8 sm:p-12 shadow-xl border border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Why <span className="text-sky-600">Choose Us</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-500">
              Delivering exceptional manufacturing, prompt global shipping, and certified compliance.
            </p>
          </div>

          {/* Radial / Connecting Feature Grid */}
          <div className="max-w-4xl mx-auto py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Left Column Items */}
              <div className="space-y-6">
                <div className="hover-lift-sm flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-stone-100">
                  <div className="h-12 w-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">One-stop solution provider</h4>
                    <p className="text-xs text-stone-500">From fiber sourcing to finished export packaging</p>
                  </div>
                </div>

                <div className="hover-lift-sm flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-stone-100">
                  <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Fast delivery system</h4>
                    <p className="text-xs text-stone-500">On-time scheduled worldwide cargo dispatch</p>
                  </div>
                </div>
              </div>

              {/* Center Hub */}
              <div className="text-center flex flex-col items-center justify-center p-6 rounded-3xl bg-white shadow-xl border-2 border-sky-200 ring-8 ring-sky-50 my-4 md:my-0">
                <div className="h-16 w-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg mb-3">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-stone-900">Why</h4>
                <p className="font-serif text-2xl font-extrabold text-sky-600">Choose Us</p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Trusted Global Partner</span>
                </div>
              </div>

              {/* Right Column Items */}
              <div className="space-y-6">
                <div className="hover-lift-sm flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-stone-100">
                  <div className="h-12 w-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Competitive pricing</h4>
                    <p className="text-xs text-stone-500">Direct factory rates with high profit margins for buyers</p>
                  </div>
                </div>

                <div className="hover-lift-sm flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-stone-100">
                  <div className="h-12 w-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Export-ready production</h4>
                    <p className="text-xs text-stone-500">Compliant with US, EU, and global standards</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Centered Item: Flexible MOQ */}
            <div className="mt-6 max-w-sm mx-auto">
              <div className="hover-lift-sm flex items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-stone-100 text-center">
                <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-stone-900 text-sm">Flexible MOQ</h4>
                  <p className="text-xs text-stone-500">Custom orders tailored to brand requirements</p>
                </div>
              </div>
            </div>

            {/* Bottom Badges Strip (Innovation, Quality First, Integrity & Transparency, Customer Satisfaction, Sustainability & On-Time Delivery) */}
            <div className="mt-10 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-800 shadow-sm border border-stone-200">
                <Zap className="h-4 w-4 text-sky-600" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-800 shadow-sm border border-stone-200">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>Quality First</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-800 shadow-sm border border-stone-200">
                <TrendingUp className="h-4 w-4 text-sky-500" />
                <span>Integrity & Transparency</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-800 shadow-sm border border-stone-200">
                <Search className="h-4 w-4 text-sky-600" />
                <span>Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-800 shadow-sm border border-stone-200">
                <Settings className="h-4 w-4 text-blue-600" />
                <span>Sustainability & On-Time Delivery</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6. Managing Director Message */}
        <div className="reveal-scale rounded-3xl bg-gradient-to-br from-amber-900/10 via-white to-emerald-900/10 p-8 sm:p-12 border border-amber-900/15 shadow-xl">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-md">
                MD
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Managing Director's Message</h3>
                <p className="text-xs text-stone-500 font-semibold">Golden Fiber Crafts Ltd.</p>
              </div>
            </div>
            <blockquote className="italic text-stone-700 text-base sm:text-lg leading-relaxed font-serif border-l-4 border-emerald-600 pl-6 py-2">
              "Our commitment is rooted in two core principles: uncompromised product quality and total environmental responsibility. As global fashion and home decor markets shift towards sustainable supply chains, Golden Fiber Crafts Ltd. provides world-class retail brands with certified eco-friendly solutions produced with dignity, passion, and precision."
            </blockquote>
          </div>
        </div>

        {/* 7. Core Stats with Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="card-slide-far-left stagger-2 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={15} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-stone-600 font-medium uppercase">Years Experience</p>
          </div>
          <div className="card-slide-left stagger-1 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={35} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-stone-600 font-medium uppercase">Export Destinations</p>
          </div>
          <div className="card-slide-right stagger-1 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={5} suffix="M+" />
            </p>
            <p className="mt-1 text-xs text-stone-600 font-medium uppercase">Annual Unit Capacity</p>
          </div>
          <div className="card-slide-far-right stagger-2 hover-lift-sm rounded-2xl bg-white p-6 shadow-md border border-stone-100">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-700">
              <AnimatedCounter target={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-stone-600 font-medium uppercase">Quality Guarantee</p>
          </div>
        </div>

        {/* 8. CTA Banner */}
        <div className="reveal-up text-center bg-stone-900 rounded-3xl p-8 sm:p-12 text-white space-y-6 shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">Partner With a Proven Leader</h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto font-light">
            Whether you need custom basket designs or eco-friendly handcrafted lifestyle products, our team is ready to support your supply chain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-all btn-interactive"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-4 w-4 btn-arrow" />
            </button>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-6 py-3 text-sm font-bold text-stone-200 hover:bg-stone-700 transition-all btn-interactive"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
