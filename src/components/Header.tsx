import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/infrastructure', label: 'Infrastructure' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/quality', label: 'Quality' },
    { path: '/clients', label: 'Clients' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-md">
      <div className="border-b border-emerald-900/10 bg-amber-950/95 text-amber-50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-20 lg:px-8">
          
          {/* Official Brand Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform duration-300 border border-emerald-500/30">
              <img src="/favicon.svg" alt="GF Icon" className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                GOLDEN FIBER CRAFTS LTD.
              </span>
              <span className="text-[10px] sm:text-xs text-emerald-300/90 tracking-widest font-semibold uppercase">
                Eco-Friendly Jute & Garment Accessories
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-semibold transition-all hover:text-emerald-400 ${
                    active ? 'text-emerald-400 font-bold' : 'text-stone-300'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Icons & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:info@goldenfibercrafts.com"
              title="Email Us"
              className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60 hover:text-white transition-all hover:scale-110 border border-emerald-700/30"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/8801831806948"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-400 hover:bg-emerald-800/60 hover:text-white transition-all hover:scale-110 border border-emerald-700/30"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-950/40 hover:from-emerald-500 hover:to-green-600 transition-all hover:scale-105 active:scale-95"
            >
              Request Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-emerald-200 hover:bg-emerald-900/40 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-emerald-900/20 bg-amber-950/98 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-emerald-900/60 text-emerald-300 font-bold'
                      : 'text-stone-300 hover:bg-emerald-900/30 hover:text-emerald-200'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3 pt-3 border-t border-emerald-900/40">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/40"
              >
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
