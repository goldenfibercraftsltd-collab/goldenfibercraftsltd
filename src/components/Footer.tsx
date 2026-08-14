import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUp, MessageCircle, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';
import { TAGLINE } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#064e3b] text-emerald-100 font-sans border-t-4 border-emerald-500 shadow-2xl">
      
      {/* 1. Brand Hero Top Bar */}
      <div className="bg-[#043e2f] py-6 px-4 border-b border-emerald-800/80 reveal-up">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-extrabold text-xl shadow-lg border border-emerald-400/30">
              <Leaf className="h-6 w-6 text-emerald-100" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white">
                Golden Fiber Crafts Ltd.
              </h3>
              <p className="text-amber-300 font-serif italic text-xs sm:text-sm">"{TAGLINE}"</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-200">
            <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
            <span>Fair Trade • BSCI • Sedex • OEKO-TEX Standard 100 Certified Manufacturer</span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About / Branding */}
          <div className="space-y-4 reveal-up stagger-1">
            <div className="bg-white rounded-xl p-3 inline-block shadow-md">
              <img
                src="/logo.png"
                alt="Golden Fiber Crafts Ltd."
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
              Manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass handicrafts, storage baskets, planters, and natural lifestyle goods from Bangladesh.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
              <HeartHandshake className="h-4 w-4" />
              <span>Partnered with Global Retail Giants</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-4 reveal-up stagger-2">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-emerald-700/60 pb-2">
              Categories
            </h4>
            <ul className="space-y-2 text-xs font-medium text-emerald-100">
              <li>
                <Link to="/products?category=jute" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Jute Crafts & Baskets
                </Link>
              </li>
              <li>
                <Link to="/products?category=seagrass" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Seagrass & Planters
                </Link>
              </li>
              <li>
                <Link to="/products?category=rugs" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Natural Fiber Rugs
                </Link>
              </li>
              <li>
                <Link to="/products?category=rattan" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Rattan & Cane Decor
                </Link>
              </li>
              <li>
                <Link to="/products?category=bamboo" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Bamboo & Utility Crafts
                </Link>
              </li>
              <li>
                <Link to="/products?category=recycle-fabric" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">
                  Recycle Fabric Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4 reveal-up stagger-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-emerald-700/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-emerald-100">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Products
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Clients & Buyers
                </Link>
              </li>
              <li>
                <Link to="/sustainability" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/materials" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-emerald-400">➔</span> Materials Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact With Us */}
          <div className="space-y-4 reveal-up stagger-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-emerald-700/60 pb-2">
              Contact With Us
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="mailto:goldenfibercraftsltd@gmail.com" className="hover:underline text-amber-200 font-medium">goldenfibercraftsltd@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noreferrer" className="hover:underline text-amber-200 font-medium">+880-1617-778488</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-300 shrink-0" />
                <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-200 font-medium">WhatsApp: +880-1617-778488</a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Dhaka Industrial Zone, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Globe className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="https://goldenfibercraftsltd.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-200 font-medium">goldenfibercraftsltd.pages.dev</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Strip */}
      <div className="bg-[#032e23] py-4 px-4 text-center text-xs text-emerald-300/80 border-t border-emerald-900/80 reveal-up">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Golden Fiber Crafts Ltd. All rights reserved.</span>
          <span className="text-emerald-200 font-serif italic">"{TAGLINE}"</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors btn-interactive"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
};
