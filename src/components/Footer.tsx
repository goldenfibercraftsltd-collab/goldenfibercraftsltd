import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-emerald-900/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold border border-emerald-400/30">
                <img src="/favicon.svg" alt="GF Icon" className="h-6 w-6" />
              </div>
              <span className="font-serif text-lg font-bold text-white">
                GOLDEN FIBER CRAFTS LTD.
              </span>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Nature Woven into Every Creation. Premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass, garment trims & accessories from Bangladesh.
            </p>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-600 transition-colors"
            >
              Request Quote
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-emerald-400 uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-medium">
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">About Company</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Product Catalog</Link></li>
              <li><Link to="/infrastructure" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Infrastructure</Link></li>
              <li><Link to="/sustainability" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Sustainability & Ethics</Link></li>
              <li><Link to="/quality" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Quality Control</Link></li>
              <li><Link to="/clients" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Global Clients</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-emerald-400 uppercase">
              Product Categories
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-medium text-stone-400">
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Woven & Printed Labels</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Hangtags & Additional Tags</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Twill Tape, Satin & Elastic</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Security & Alarm Tags</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Jute & Seagrass Baskets</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="hover:text-emerald-400">Handicrafts & Decor</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-emerald-400 uppercase">
              Corporate Office
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                <a href="mailto:info@goldenfibercrafts.com" className="hover:text-emerald-400 transition-colors">
                  info@goldenfibercrafts.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                <a href="tel:+8801831806948" className="hover:text-emerald-400 transition-colors">
                  +880-1831-806948
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>Worldwide Export Service</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Golden Fiber Crafts Ltd. All rights reserved.</p>
          <p className="text-[11px]">Innovative Trims & Sustainable Handicrafts — Trusted Worldwide.</p>
        </div>

      </div>
    </footer>
  );
};
