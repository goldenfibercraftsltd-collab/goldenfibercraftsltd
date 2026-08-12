import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, ChevronDown, ChevronRight,
  Phone, Mail, MessageCircle
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [activeCategoryHover, setActiveCategoryHover] = useState<string | null>(CATEGORIES[0]?.id || 'jute');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
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
      setMobileMenuOpen(false);
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
    <header className="relative z-40 w-full bg-white shadow-md font-sans">
      
      {/* 1. Main Header Row: Large Official Logo, Search Bar, Quick Actions */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8">
          
          {/* Official Company Logo - Prominent & Crisp with Transparent Background */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.02] py-1"
            title="Golden Fiber Crafts Ltd. - Home"
          >
            <img
              src="/logo.png"
              alt="Golden Fiber Crafts Ltd."
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Search Bar (BD Creation Style) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearchSubmit} className="flex w-full rounded border-2 border-[#65a30d] overflow-hidden shadow-xs">
              <input
                type="text"
                placeholder="Search Entire Here (e.g. GFC-SB-030, Planter, Bag)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-sm text-stone-800 focus:outline-none placeholder-stone-400"
              />
              <button
                type="submit"
                className="bg-[#65a30d] hover:bg-[#52840a] text-white px-7 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </form>
          </div>

          {/* Action Controls: WhatsApp, Email & Request Quote (Cart Option Removed) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/8801617778488?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details."
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+8801617778488)"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow transition-all duration-200 hover:scale-105"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.014-1.052zm12.355-6.529c-.073-.122-.268-.195-.561-.341-.293-.146-1.733-.855-2.002-.953-.269-.098-.464-.146-.659.146-.195.293-.756.953-.927 1.148-.171.195-.341.22-.635.073-1.066-.53-2.316-1.325-3.235-2.144-.716-.638-1.201-1.427-1.341-1.672-.14-.244-.015-.377.132-.524.133-.132.293-.341.44-.512.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.659-1.586-.903-2.172-.238-.57-.48-.492-.659-.501-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.269.293-1.025 1.001-1.025 2.441 0 1.44 1.05 2.83 1.196 3.025.146.195 2.067 3.158 5.009 4.428.7.303 1.247.484 1.673.62.703.224 1.343.193 1.849.117.564-.085 1.733-.708 1.977-1.392.244-.684.244-1.27.171-1.392z" />
              </svg>
            </a>

            {/* Email Direct Inquiry */}
            <a
              href="mailto:goldenfibercraftsltd@gmail.com?subject=Product%20Inquiry%20to%20Golden%20Fiber%20Crafts%20Ltd."
              title="Email goldenfibercraftsltd@gmail.com"
              className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 shadow-sm hover:shadow transition-all duration-200 hover:scale-105"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
            </a>

            {/* Request Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-1 rounded-full bg-[#0088FF] hover:bg-[#0077ee] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.03]"
            >
              <span>Request Quote</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-stone-800" />}
            </button>
          </div>

        </div>

        {/* Search Bar on Mobile */}
        <div className="mt-2 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex w-full rounded border-2 border-[#65a30d] overflow-hidden shadow-xs">
            <input
              type="text"
              placeholder="Search Entire Here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-800 focus:outline-none placeholder-stone-400"
            />
            <button
              type="submit"
              className="bg-[#65a30d] hover:bg-[#52840a] text-white px-4 py-2 text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
            </button>
          </form>
        </div>

      </div>

      {/* 2. Full Width Green Navigation Bar (BD Creation Style) */}
      <div className="bg-[#65a30d] text-white shadow-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between relative">
          
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Dark Teal "SHOP BY CATEGORY ˅" Button */}
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-2 bg-[#093843] hover:bg-[#062931] text-white px-4 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-colors border-r border-teal-700/50 focus:outline-none cursor-pointer"
              >
                <Menu className="h-4 w-4 text-white" />
                <span>SHOP BY CATEGORY</span>
                <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Category Dropdown Mega Menu (Desktop) */}
              {categoryDropdownOpen && (
                <div
                  className="absolute left-0 top-full z-50 flex w-[580px] bg-white rounded-b-xl shadow-2xl border border-stone-200 overflow-hidden text-stone-800 animate-fadeIn"
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                >
                  {/* Left Column: 12 Main Categories */}
                  <div className="w-56 bg-stone-50 border-r border-stone-200 py-2 max-h-[420px] overflow-y-auto">
                    <div className="px-4 py-2 border-b border-stone-200/80 bg-[#093843] text-white flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider">All Categories</span>
                      <span className="text-[10px] text-amber-300 font-mono font-bold">{CATEGORIES.length}</span>
                    </div>
                    {CATEGORIES.map((cat) => {
                      const isHovered = activeCategoryHover === cat.id;
                      return (
                        <div
                          key={cat.id}
                          onMouseEnter={() => setActiveCategoryHover(cat.id)}
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer border-b border-stone-100 last:border-0 ${
                            isHovered ? 'bg-[#65a30d] text-white font-extrabold' : 'text-stone-700 hover:bg-lime-50 hover:text-lime-900'
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
                                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded text-stone-700 hover:bg-lime-50 hover:text-lime-900 transition-colors text-left group"
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center font-bold text-xs sm:text-sm">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`px-3.5 py-3 transition-colors hover:bg-[#52840a] hover:text-amber-200 uppercase tracking-wider ${
                      active ? 'bg-[#52840a] text-amber-300 font-extrabold border-b-2 border-amber-300' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white px-4 pb-6 pt-3 shadow-2xl animate-fadeIn border-t border-stone-800 max-h-[85vh] overflow-y-auto">
          
          {/* Quick Contact Bar in Mobile Drawer */}
          <div className="mb-4 p-3 bg-stone-800 rounded-xl flex items-center justify-around border border-stone-700 text-xs font-semibold">
            <a
              href="https://wa.me/8801617778488"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="tel:+8801617778488"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200"
            >
              <Phone className="h-4 w-4" />
              <span>Direct Call</span>
            </a>
          </div>

          {/* Shop By Category in Mobile Drawer */}
          <div className="mb-4 bg-[#093843] rounded-xl overflow-hidden border border-teal-700">
            <button
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="w-full px-4 py-3 bg-[#062931] text-amber-300 font-extrabold text-xs uppercase flex items-center justify-between focus:outline-none"
            >
              <span className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                SHOP BY CATEGORY (12)
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileCategoryOpen && (
              <div className="divide-y divide-teal-800/60 max-h-72 overflow-y-auto animate-fadeIn">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-2.5 bg-[#07333d]">
                    <div
                      onClick={() => handleCategorySelect(cat.id)}
                      className="flex items-center justify-between text-xs font-bold text-white cursor-pointer hover:text-amber-300 py-1"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] bg-lime-700 px-2 py-0.5 rounded text-white font-mono">View All</span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5 pl-2">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleCategorySelect(cat.id, sub.id)}
                          className="text-[11px] bg-teal-900/90 hover:bg-lime-700 text-stone-200 hover:text-white px-2 py-1 rounded transition-colors"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Navigation Pages in Mobile Drawer */}
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2 mb-1">Navigation Pages</span>
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
