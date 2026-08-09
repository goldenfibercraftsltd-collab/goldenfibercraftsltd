import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 border-t border-amber-900/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-bold">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg font-bold text-white">
                GOLDEN FIBER CRAFTS LTD.
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Nature Woven into Every Creation. Premier manufacturer and exporter of eco-friendly jute, seagrass, kaisa grass, rattan & bamboo handicrafts from Bangladesh.
            </p>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center rounded-xl bg-amber-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-amber-600 transition-colors"
            >
              Request Quote
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-amber-400 uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Company</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Product Catalog</a></li>
              <li><a href="#infrastructure" className="hover:text-amber-400 transition-colors">Infrastructure</a></li>
              <li><a href="#sustainability" className="hover:text-amber-400 transition-colors">Sustainability & Ethics</a></li>
              <li><a href="#quality" className="hover:text-amber-400 transition-colors">Quality Control</a></li>
              <li><a href="#clients" className="hover:text-amber-400 transition-colors">Global Clients</a></li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-amber-400 uppercase">
              Product Categories
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-medium text-stone-400">
              <li>Storage & Laundry Baskets</li>
              <li>Seagrass & Jute Planters</li>
              <li>Jute Shopping & Tote Bags</li>
              <li>Placemats & Floor Rugs</li>
              <li>Wall Decor & Macrame</li>
              <li>Bamboo Utility Crafts</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-wider text-amber-400 uppercase">
              Corporate Office
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@goldenfibercrafts.com" className="hover:text-amber-400 transition-colors">
                  info@goldenfibercrafts.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:+8801831806948" className="hover:text-amber-400 transition-colors">
                  +880-1831-806948
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-amber-500" />
                <span>Worldwide Export Service</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Golden Fiber Crafts Ltd. All rights reserved.</p>
          <p className="text-[11px]">Designed with luxury TrimsArt aesthetics for Bangladesh Sustainable Exports.</p>
        </div>

      </div>
    </footer>
  );
};
