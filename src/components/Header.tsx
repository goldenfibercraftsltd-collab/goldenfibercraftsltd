import React, { useState } from 'react';
import { Menu, X, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'quality', label: 'Quality' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="border-b border-amber-900/10 bg-amber-950/95 text-amber-50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-20 lg:px-8">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-stone-900 font-bold shadow-lg shadow-amber-900/40 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-amber-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                GOLDEN FIBER CRAFTS LTD.
              </span>
              <span className="text-[10px] sm:text-xs text-amber-300/80 tracking-widest font-medium uppercase">
                Nature Woven into Every Creation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:text-amber-400 ${
                  activeSection === item.id ? 'text-amber-400 font-semibold' : 'text-stone-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-amber-400 animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Icons & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Email Icon */}
            <a
              href="mailto:info@goldenfibercrafts.com"
              title="Email Us"
              className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-900/40 text-amber-300 hover:bg-amber-800/60 hover:text-white transition-all hover:scale-110 border border-amber-700/30"
            >
              <Mail className="h-4 w-4" />
            </a>

            {/* WhatsApp / Phone Icon */}
            <a
              href="https://wa.me/8801831806948"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-400 hover:bg-emerald-800/60 hover:text-white transition-all hover:scale-110 border border-emerald-700/30"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Request Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-amber-900/30 hover:from-amber-500 hover:to-amber-600 transition-all hover:scale-105 active:scale-95"
            >
              Request Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-amber-200 hover:bg-amber-900/40 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-amber-900/20 bg-amber-950/98 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-900/50 text-amber-300 font-semibold'
                    : 'text-stone-300 hover:bg-amber-900/30 hover:text-amber-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-3 border-t border-amber-900/40">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber-600 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/40"
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
