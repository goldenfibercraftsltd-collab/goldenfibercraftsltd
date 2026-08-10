import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, ShoppingBag, ChevronDown, Mail, Phone,
  Package, Tag, Scissors, Layers, ShieldCheck, Leaf, Sparkles, ChevronRight
} from 'lucide-react';
import { TAGLINE, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const { cart, totalCartItemsCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [activeCategoryHover, setActiveCategoryHover] = useState<string | null>(CATEGORIES[0]?.id || 'jute');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/materials', label: 'MATERIALS INFO' },
    { path: '/infrastructure', label: 'INFRASTRUCTURE' },
    { path: '/sustainability', label: 'SUSTAINABILITY' },
    { path: '/quality', label: 'QUALITY' },
    { path: '/clients', label: 'CLIENTS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string, subCatId?: string) => {
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
    if (subCatId) {
      navigate(`/products?category=${catId}&subCategory=${subCatId}`);
    } else {
      navigate(`/products?category=${catId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="relative z-30 w-full bg-white shadow-md font-sans">
      
      {/* 1. Dark Teal Top Bar (Currency, Language & 24/7 Support) */}
      <div className="bg-[#093843] text-white text-[11px] py-1.5 px-4 border-b border-teal-900/60">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Left: Currency & Language Selectors */}
          <div className="flex items-center gap-4 text-stone-200">
            <span className="cursor-pointer hover:text-white flex items-center gap-1 font-semibold">
              Currency <ChevronDown className="h-3 w-3" />
            </span>
            <span className="cursor-pointer hover:text-white flex items-center gap-1 font-semibold">
              Language <ChevronDown className="h-3 w-3" />
            </span>
            <span className="hidden sm:inline text-amber-300 font-serif italic text-xs border-l border-teal-800 pl-3">
              "{TAGLINE}"
            </span>
          </div>

          {/* Right: Red Live Circle + Customer Support Number */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-600 inline-block shrink-0 animate-ping" />
            <span className="font-bold text-xs tracking-wide">
              24/7 Export Service: <a href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details." target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-300 font-extrabold">+880-1617-778488</a>
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main Row: Logo, Search Bar, Cart/Quote */}
      <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo Section */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 shrink-0 group">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lime-600 to-emerald-700 text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src="/favicon.svg" alt="GF Icon" className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-extrabold tracking-tight text-lime-800 leading-tight group-hover:text-emerald-700 transition-colors">
                Golden Fiber Crafts Ltd.
              </span>
              <span className="text-[10px] sm:text-xs text-stone-600 font-serif italic tracking-wide">
                "{TAGLINE}"
              </span>
            </div>
          </Link>

          {/* Search Bar Section (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <form onSubmit={handleSearchSubmit} className="flex w-full rounded-md border-2 border-[#65a30d] overflow-hidden shadow-xs">
              <input
                type="text"
                placeholder="Search Item Code or Product Name (e.g. GFC-SB-030)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none placeholder-stone-400"
              />
              <button
                type="submit"
                className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white px-6 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick Action Controls: WhatsApp, Email/Outlook & Request Quote */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 1. WhatsApp Icon Button */}
            <a
              href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details."
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+8801617778488)"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.014-1.052zm12.355-6.529c-.073-.122-.268-.195-.561-.341-.293-.146-1.733-.855-2.002-.953-.269-.098-.464-.146-.659.146-.195.293-.756.953-.927 1.148-.171.195-.341.22-.635.073-1.066-.53-2.316-1.325-3.235-2.144-.716-.638-1.201-1.427-1.341-1.672-.14-.244-.015-.377.132-.524.133-.132.293-.341.44-.512.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.659-1.586-.903-2.172-.238-.57-.48-.492-.659-.501-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.269.293-1.025 1.001-1.025 2.441 0 1.44 1.05 2.83 1.196 3.025.146.195 2.067 3.158 5.009 4.428.7.303 1.247.484 1.673.62.703.224 1.343.193 1.849.117.564-.085 1.733-.708 1.977-1.392.244-.684.244-1.27.171-1.392z" />
              </svg>
            </a>

            {/* 2. Gmail / Email Icon Button */}
            <a
              href="mailto:goldenfibercraftsltd@gmail.com?subject=Inquiry%20to%20Golden%20Fiber%20Crafts%20Ltd.&body=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20handicraft%20products%20and%20export%20details."
              title="Send Email via Gmail (goldenfibercraftsltd@gmail.com)"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white hover:bg-red-50 border border-stone-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              <svg className="h-5 w-5 sm:h-5.5 sm:w-5.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 6.5V17.5C2 18.6 2.9 19.5 4 19.5H6.5V10.8L2 7.4V6.5Z"
                  fill="#4285F4"
                />
                <path
                  d="M22 6.5V17.5C22 18.6 21.1 19.5 20 19.5H17.5V10.8L22 7.4V6.5Z"
                  fill="#34A853"
                />
                <path
                  d="M17.5 5.5L12 9.6L6.5 5.5H4C2.9 5.5 2 6.4 2 7.5V8.5L12 16L22 8.5V7.5C22 6.4 21.1 5.5 20 5.5H17.5Z"
                  fill="#EA4335"
                />
                <path
                  d="M2 6.5C2 5.9 2.3 5.5 2.8 5.2L6.5 8V10.8L2 7.4V6.5Z"
                  fill="#FBBC04"
                />
                <path
                  d="M22 6.5C22 5.9 21.7 5.5 21.2 5.2L17.5 8V10.8L22 7.4V6.5Z"
                  fill="#FBBC04"
                />
              </svg>
            </a>

            {/* 3. Request Quote Pill Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#0088FF] hover:bg-[#0077ee] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              <span>Request Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Search Bar Section (Mobile Layout) */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex w-full rounded-md border-2 border-[#65a30d] overflow-hidden shadow-xs">
            <input
              type="text"
              placeholder="Search Code or Product Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 text-xs text-stone-800 focus:outline-none placeholder-stone-400"
            />
            <button
              type="submit"
              className="bg-[#65a30d] text-white px-4 py-1.5 text-xs font-bold uppercase transition-colors shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Announcement Ticker Text */}
        <div className="mt-2 text-[11px] font-bold text-red-600 tracking-wide text-center">
          <span>
            Golden Fiber Crafts Ltd. offers quality products, competitive prices & on-time delivery worldwide.
          </span>
        </div>

      </div>

      {/* 3. Green Primary Navigation Bar + Dark Teal "SHOP BY CATEGORY ˅" Box */}
      <div className="bg-[#65a30d] text-white shadow-inner">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-2 lg:gap-4 relative">
          
          {/* Dark Teal "SHOP BY CATEGORY ˅" Box */}
          <div className="relative">
            <button
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className="flex items-center gap-2.5 bg-[#093843] hover:bg-[#062931] text-white px-4 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors border-2 border-white/20 focus:outline-none shadow-md"
            >
              <Menu className="h-4 w-4 text-white" />
              <span>SHOP BY CATEGORY</span>
              <ChevronDown className={`h-4 w-4 text-white transition-transform duration-300 ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Category Dropdown Content - Flyout Mega Menu */}
            {categoryDropdownOpen && (
              <div className="absolute left-0 top-full z-50 flex w-[550px] bg-white rounded-b-2xl shadow-2xl border border-stone-200 overflow-hidden animate-fadeIn text-stone-800">
                
                {/* Left Column: 12 Main Categories */}
                <div className="w-56 bg-stone-50 border-r border-stone-200 py-2 max-h-[420px] overflow-y-auto">
                  <div className="px-4 py-2 border-b border-stone-200/80 bg-[#093843] text-white flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider">All Categories</span>
                    <span className="text-[10px] text-amber-300 font-serif">12</span>
                  </div>
                  {CATEGORIES.map((cat) => {
                    const isHovered = activeCategoryHover === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onMouseEnter={() => setActiveCategoryHover(cat.id)}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer border-b border-stone-100 last:border-0 ${
                          isHovered ? 'bg-[#65a30d] text-white font-extrabold' : 'text-stone-700 hover:bg-lime-100 hover:text-lime-900'
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <ChevronRight className={`h-3.5 w-3.5 ${isHovered ? 'text-white' : 'text-stone-400'}`} />
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Subcategories for Hovered Category */}
                <div className="flex-1 p-4 bg-white max-h-[420px] overflow-y-auto">
                  {(() => {
                    const currentCat = CATEGORIES.find(c => c.id === activeCategoryHover) || CATEGORIES[0];
                    return (
                      <div>
                        <div className="pb-3 mb-3 border-b border-stone-100 flex items-center justify-between">
                          <div>
                            <h4 className="font-serif text-sm font-extrabold text-[#093843]">
                              {currentCat.name}
                            </h4>
                            <p className="text-[11px] text-stone-500 font-light line-clamp-1">
                              {currentCat.description}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCategorySelect(currentCat.id)}
                            className="text-[11px] font-bold text-[#65a30d] hover:underline shrink-0"
                          >
                            View All ➔
                          </button>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Subcategories</span>
                          <div className="grid grid-cols-1 gap-1 pt-1">
                            {currentCat.subcategories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleCategorySelect(currentCat.id, sub.id)}
                                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg text-stone-700 hover:bg-lime-50 hover:text-lime-900 transition-colors text-left group"
                              >
                                <span>{sub.name}</span>
                                <span className="text-[10px] text-stone-400 group-hover:text-lime-700 font-normal">Explore</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

              </div>
            )}
          </div>

          {/* Main Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-bold text-xs sm:text-sm">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`px-3.5 py-3 transition-colors hover:bg-[#4d7c0f] hover:text-amber-200 uppercase tracking-wider ${
                    active ? 'bg-[#4d7c0f] text-amber-300 font-extrabold border-b-2 border-amber-300' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

        </div>
      </div>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white px-4 pb-6 pt-3 shadow-2xl animate-fadeIn border-t border-stone-800 max-h-[85vh] overflow-y-auto">
          
          {/* Shop By Category in Mobile Drawer */}
          <div className="mb-4 bg-[#093843] rounded-xl overflow-hidden border border-teal-700">
            <div className="px-4 py-2.5 bg-[#062931] text-amber-300 font-extrabold text-xs uppercase flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                SHOP BY CATEGORY (12)
              </span>
            </div>
            <div className="divide-y divide-teal-800/60 max-h-72 overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2.5 bg-[#07333d]">
                  <div
                    onClick={() => handleCategorySelect(cat.id)}
                    className="flex items-center justify-between text-xs font-bold text-white cursor-pointer hover:text-amber-300"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] bg-lime-700 px-2 py-0.5 rounded text-white font-mono">View All</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5 pl-2">
                    {cat.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleCategorySelect(cat.id, sub.id)}
                        className="text-[11px] bg-teal-900/80 hover:bg-lime-700 text-stone-200 hover:text-white px-2 py-1 rounded transition-colors"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Navigation Pages */}
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2">Navigation Pages</span>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    active ? 'bg-[#65a30d] text-white' : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

        </div>
      )}

    </header>
  );
};
