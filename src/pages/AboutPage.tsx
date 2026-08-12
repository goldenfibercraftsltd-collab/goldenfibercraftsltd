import React from 'react';
import { Award, CheckCircle2, Factory, Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface AboutPageProps {
  onOpenQuoteModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-amber-50/20 py-12 lg:py-20 animate-fadeIn font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header with reveal-up */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
              <Leaf className="h-3.5 w-3.5" />
              Corporate Heritage & Excellence
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
              About Golden Fiber Crafts Ltd.
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Bangladesh’s premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass handicrafts, and high-precision garment accessories & trims.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
            <img src="/logo.svg" alt="GF Logo" className="h-96 w-96 filter invert" />
          </div>
        </div>

        {/* Company Profile & Vision */}
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
              Founded with a mission to promote Bangladesh's rich golden fiber heritage globally, Golden Fiber Crafts Ltd. stands as a pioneer in sustainable manufacturing. From handwoven natural baskets to OEKO-TEX certified garment labels and trims, we bridge traditional craftsmanship with modern industrial technology.
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
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-8 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Empowerment & Craftsmanship</p>
                <h3 className="font-serif text-xl font-bold">Over 1,200 Artisans & Skilled Workforce</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Director Message with reveal-scale */}
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

        {/* Core Stats with Animated Counters & Middle-Outward Slide */}
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

        {/* CTA Banner with reveal-up */}
        <div className="reveal-up text-center bg-stone-900 rounded-3xl p-8 sm:p-12 text-white space-y-6 shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">Partner With a Proven Leader</h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto font-light">
            Whether you need custom apparel trims or eco-friendly handcrafted lifestyle products, our team is ready to support your supply chain.
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
