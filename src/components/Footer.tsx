import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, ArrowUp, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';
import { TAGLINE } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 font-sans border-t-4 border-[#65a30d]">
      
      {/* 1. Tagline & Brand Hero Bar with reveal-up */}
      <div className="bg-gradient-to-r from-[#093843] via-emerald-950 to-[#093843] py-8 px-4 border-b border-teal-900/60 reveal-up">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-lime-600 flex items-center justify-center text-white font-serif font-extrabold text-xl shadow-lg">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white">Golden Fiber Crafts Ltd.</h3>
              <p className="text-amber-300 font-serif italic text-xs sm:text-sm">"{TAGLINE}"</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-emerald-200">
            <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
            <span>Fair Trade • BSCI • Sedex • OEKO-TEX Certified Manufacturer</span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid with Staggered Entrance */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About */}
          <div className="space-y-4 reveal-up stagger-1">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Corporate Heritage
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Golden Fiber Crafts Ltd. is a premier Bangladesh manufacturer and global exporter of natural jute, seagrass, water hyacinth, and bamboo eco-crafts alongside certified garment trims and accessories.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <HeartHandshake className="h-4 w-4" />
              <span>Partnered with Global Retail Giants</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4 reveal-up stagger-2">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Corporate Profile
                </Link>
              </li>
              <li>
                <Link to="/materials" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Materials Info
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Factory Facilities
                </Link>
              </li>
              <li>
                <Link to="/sustainability" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Sustainability
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Buyers & Certificates
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 hover-lift-sm">
                  <span className="text-[#65a30d]">➔</span> Contact Export Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-4 reveal-up stagger-3">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/products?category=jute" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Jute Handicrafts</Link></li>
              <li><Link to="/products?category=rugs" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Jhuta & Jute Rugs</Link></li>
              <li><Link to="/products?category=seagrass" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Seagrass Baskets & Mats</Link></li>
              <li><Link to="/products?category=rattan" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Rattan Furniture & Mirrors</Link></li>
              <li><Link to="/products?category=bamboo" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Bamboo Baskets & Crafts</Link></li>
              <li><Link to="/products?category=water-hyacinth" onClick={scrollToTop} className="hover:text-amber-300 transition-colors block hover-lift-sm">Water Hyacinth Baskets</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory HQ */}
          <div className="space-y-4 reveal-up stagger-4">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Factory Contact
            </h4>
            <div className="space-y-3 text-xs font-light text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#65a30d] shrink-0 mt-0.5" />
                <span>Golden Fiber Crafts Ltd., Export Processing Facility, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#65a30d] shrink-0" />
                <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-300 font-bold">+880-1617-778488</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#65a30d] shrink-0" />
                <a href="mailto:goldenfibercraftsltd@gmail.com" className="hover:underline">goldenfibercraftsltd@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Strip with reveal-up */}
      <div className="bg-stone-900 py-4 px-4 text-center text-xs text-stone-500 border-t border-stone-800 reveal-up">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Golden Fiber Crafts Ltd. All rights reserved.</span>
          <span className="text-stone-400 font-serif italic">"{TAGLINE}"</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors btn-interactive"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
};
