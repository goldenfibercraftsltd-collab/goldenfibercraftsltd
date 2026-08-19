import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, ChevronDown, ChevronRight,
  Phone, Mail, MessageCircle, ArrowRight, Sparkles,
  ShoppingBag, Package, Leaf, Layers, Grid, Feather,
  Compass, Flower2, TreeDeciduous, Tag
} from 'lucide-react';
import { CATEGORIES, TAGLINE } from '../data/products';

const getCategoryIcon = (catId: string) => {
  switch (catId) {
    case 'jute': return <Package className="h-3.5 w-3.5" />;
    case 'seagrass': return <Leaf className="h-3.5 w-3.5" />;
    case 'kans-grass': return <Feather className="h-3.5 w-3.5" />;
    case 'date-leaf': return <TreeDeciduous className="h-3.5 w-3.5" />;
    case 'rattan': return <Layers className="h-3.5 w-3.5" />;
    case 'bamboo': return <Layers className="h-3.5 w-3.5" />;
    case 'palm-fiber': return <Leaf className="h-3.5 w-3.5" />;
    case 'water-hyacinth': return <Sparkles className="h-3.5 w-3.5" />;
    case 'rugs': return <Grid className="h-3.5 w-3.5" />;
    case 'recycle-fabric': return <ShoppingBag className="h-3.5 w-3.5" />;
    default: return <Package className="h-3.5 w-3.5" />;
  }
};

const getSubcategoryIcon = (subId: string) => {
  switch (subId) {
    case 'baskets': return <ShoppingBag className="h-3.5 w-3.5" />;
    case 'bags': return <ShoppingBag className="h-3.5 w-3.5" />;
    case 'planters': return <Flower2 className="h-3.5 w-3.5" />;
    case 'floor-mats': return <Grid className="h-3.5 w-3.5" />;
    case 'placemats': return <Compass className="h-3.5 w-3.5" />;
    case 'poufs': return <Package className="h-3.5 w-3.5" />;
    case 'macrames': return <Feather className="h-3.5 w-3.5" />;
    case 'trays': return <Layers className="h-3.5 w-3.5" />;
    case 'furnitures': return <Layers className="h-3.5 w-3.5" />;
    case 'mirrors': return <Sparkles className="h-3.5 w-3.5" />;
    case 'jute-rugs':
    case 'jhuta-rugs':
    case 'cotton-rugs':
      return <Grid className="h-3.5 w-3.5" />;
    default: return <Tag className="h-3.5 w-3.5" />;
  }
};

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
      
      {/* 1. Main Header Row: Large Official Logo, Golden Search Bar with Tagline, Quick Actions */}
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8">
          
          {/* Official Company Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.02] py-1"
            title="Golden Fiber Crafts Ltd. - Home"
          >
            <img
              src="/logo.png"
              alt="Golden Fiber Crafts Ltd."
              className="h-14 sm:h-[4.5rem] md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Search Bar with Golden Search Button & Official Tagline */}
          <div className="hidden md:flex flex-col flex-1 max-w-2xl mx-4 gap-1.5">
            <form onSubmit={handleSearchSubmit} className="flex w-full rounded-md border-2 border-amber-500 overflow-hidden shadow-xs">
              <input
                type="text"
                placeholder="Search Entire Here (e.g. GFC-SB-030, Planter, Bag)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-sm text-stone-800 focus:outline-none placeholder-stone-400 font-medium bg-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 px-7 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-200 shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-inner"
              >
                <Search className="h-4 w-4 text-stone-950 stroke-[2.5]" />
                <span className="font-extrabold text-stone-950">Search</span>
              </button>
            </form>

            {/* Official Company Tagline directly under search bar */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-serif italic text-stone-700 tracking-wide pl-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0" />
              <span className="font-bold text-[#14532d]">"{TAGLINE}"</span>
              <span className="text-stone-300">•</span>
              <span className="text-[11px] font-sans font-black text-amber-700 not-italic uppercase tracking-wider">100% Eco-Artisanal Handicrafts</span>
            </div>
          </div>

          {/* Action Controls: WhatsApp, Email & Request Quote */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/8801916183583?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20would%20like%20to%20know%20more%20about%20your%20handicraft%20products%20and%20export%20details."
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+8801916-183583)"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow transition-all duration-200 hover:scale-105"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.014-1.052zm12.355-6.529c-.073-.122-.268-.195-.561-.341-.293-.146-1.733-.855-2.002-.953-.269-.098-.464-.146-.659.146-.195.293-.756.953-.927 1.148-.171.195-.341.22-.635.073-1.066-.53-2.316-1.325-3.235-2.144-.716-.638-1.201-1.427-1.341-1.672-.14-.244-.015-.377.132-.524.133-.132.293-.341.44-.512.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.659-1.586-.903-2.172-.238-.57-.48-.492-.659-.501-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.269.293-1.025 1.001-1.025 2.441 0 1.44 1.05 2.83 1.196 3.025.146.195 2.067 3.158 5.009 4.428.7.303 1.247.484 1.673.62.703.224 1.343.193 1.849.117.564-.085 1.733-.708 1.977-1.392.244-.684.244-1.27.171-1.392z" />
              </svg>
            </a>

            {/* Email Direct Inquiry */}
            <a
              href="mailto:info@goldenfibercrafts.com?subject=Product%20Inquiry%20to%20Golden%20Fiber%20Crafts%20Ltd."
              title="Email info@goldenfibercrafts.com"
              className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 shadow-sm hover:shadow transition-all duration-200 hover:scale-105"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
            </a>

            {/* Request Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-1 rounded-full bg-[#0088FF] hover:bg-[#0077ee] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.03] cursor-pointer"
            >
              <span>Request Quote</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-stone-800" />}
            </button>
          </div>

        </div>

        {/* Search Bar & Tagline on Mobile */}
        <div className="mt-2 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex w-full rounded-md border-2 border-amber-500 overflow-hidden shadow-xs">
            <input
              type="text"
              placeholder="Search Entire Here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs text-stone-800 focus:outline-none placeholder-stone-400 font-medium bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 px-4 py-2 text-xs font-black uppercase transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Search className="h-3.5 w-3.5 text-stone-950 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </form>
          <div className="flex items-center justify-center gap-1 text-[11px] font-serif italic text-[#14532d] font-bold text-center mt-1.5">
            <Sparkles className="h-3 w-3 text-amber-600 shrink-0" />
            <span>"{TAGLINE}"</span>
          </div>
        </div>

      </div>

      {/* 2. Full Width Deep Luxury Green Navigation Bar with Radiant Golden Buttons */}
      <div className="bg-[#14532d] text-white shadow-lg border-t border-emerald-800/80">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between relative">
          
          <div className="flex items-center gap-1 sm:gap-2 w-full lg:w-auto">
            {/* Radiant Golden "PRODUCT BY CATEGORY ˅" Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 px-4 sm:px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 border-r border-amber-600/40 shadow-md focus:outline-none cursor-pointer group"
              >
                <Menu className="h-4 w-4 text-stone-950 group-hover:rotate-90 transition-transform duration-200" />
                <span className="font-black drop-shadow-xs text-stone-950">PRODUCT BY CATEGORY</span>
                <ChevronDown className={`h-4 w-4 text-stone-950 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Category Dropdown Mega Menu (Desktop) */}
              {categoryDropdownOpen && (
                <div
                  className="absolute left-0 top-full z-50 flex w-[640px] bg-white rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-stone-200/90 overflow-hidden text-stone-800 animate-megaMenuIn"
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                >
                  {/* Left Column: 10 Main Categories */}
                  <div className="w-56 bg-stone-50/95 border-r border-stone-200/80 py-2 max-h-[440px] overflow-y-auto scrollbar-thin shrink-0">
                    <div className="px-3.5 py-2.5 mb-1 border-b border-emerald-900/30 bg-gradient-to-r from-[#14532d] to-[#0f3e22] text-white flex items-center justify-between shadow-xs">
                      <span className="text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 text-amber-300">
                        <Layers className="h-3.5 w-3.5 text-amber-300" />
                        All Categories
                      </span>
                      <span className="text-[10px] bg-amber-400 text-stone-950 font-black px-1.5 py-0.5 rounded-full font-mono">
                        {CATEGORIES.length}
                      </span>
                    </div>

                    <div className="space-y-0.5 px-1.5">
                      {CATEGORIES.map((cat) => {
                        const isHovered = activeCategoryHover === cat.id;
                        return (
                          <div
                            key={cat.id}
                            onMouseEnter={() => setActiveCategoryHover(cat.id)}
                            onClick={() => handleCategorySelect(cat.id)}
                            className={`group w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition-all duration-200 cursor-pointer rounded-lg ${
                              isHovered
                                ? 'bg-gradient-to-r from-[#14532d] to-[#0f3e22] text-amber-300 font-extrabold shadow-sm translate-x-0.5'
                                : 'text-stone-700 hover:bg-emerald-50 hover:text-emerald-950'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className={`transition-colors ${isHovered ? 'text-amber-300' : 'text-stone-400 group-hover:text-emerald-700'}`}>
                                {getCategoryIcon(cat.id)}
                              </span>
                              <span className="truncate">{cat.name}</span>
                            </div>
                            <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isHovered ? 'text-amber-300 translate-x-0.5' : 'text-stone-300 group-hover:text-emerald-700'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Subcategories for Hovered Category */}
                  <div className="flex-1 p-4 bg-stone-50/40 overflow-y-auto scrollbar-thin">
                    {(() => {
                      const currentCat = CATEGORIES.find(c => c.id === activeCategoryHover) || CATEGORIES[0];
                      return (
                        <div key={currentCat.id} className="animate-subFadeIn">
                          {/* Subcategories Grid with Clean Interactive Cards */}
                          <div className="grid grid-cols-2 gap-2.5">
                            {currentCat.subcategories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleCategorySelect(currentCat.id, sub.id)}
                                className="group flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/90 hover:border-amber-500 hover:bg-amber-50/50 hover:shadow-xs transition-all duration-200 text-left cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#14532d] group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-200 shrink-0 shadow-2xs">
                                    {getSubcategoryIcon(sub.id)}
                                  </div>
                                  <span className="text-xs font-bold text-stone-800 group-hover:text-amber-950 transition-colors truncate">
                                    {sub.name}
                                  </span>
                                </div>
                                <ChevronRight className="h-3.5 w-3.5 text-stone-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Navigation Links - Rich Golden Buttons / Typography */}
            <nav className="hidden lg:flex items-center font-extrabold text-xs sm:text-sm">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`px-3.5 py-3 uppercase tracking-wider font-extrabold transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-[#0f3e22] text-amber-300 font-black border-b-2 border-amber-400 shadow-inner'
                        : 'text-amber-300 hover:text-white hover:bg-[#0f3e22]'
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
          <div className="flex items-center justify-around py-3 px-4 bg-stone-900 rounded-xl mb-4 text-xs font-semibold">
            <a
              href="https://wa.me/8801916183583"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="tel:+8801916183583"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200"
            >
              <Phone className="h-4 w-4" />
              <span>Direct Call</span>
            </a>
          </div>

          {/* Product By Category in Mobile Drawer */}
          <div className="mb-4 bg-[#14532d] rounded-xl overflow-hidden border border-amber-500/50 shadow-md">
            <button
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="w-full px-4 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-black text-xs uppercase flex items-center justify-between focus:outline-none shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Menu className="h-4 w-4 text-stone-950" />
                PRODUCT BY CATEGORY ({CATEGORIES.length})
              </span>
              <ChevronDown className={`h-4 w-4 text-stone-950 transition-transform duration-200 ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileCategoryOpen && (
              <div className="divide-y divide-emerald-800/60 max-h-72 overflow-y-auto animate-fadeIn">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3 bg-[#0d3b1f]">
                    <div
                      onClick={() => handleCategorySelect(cat.id)}
                      className="flex items-center justify-between text-xs font-bold text-white cursor-pointer hover:text-amber-300 py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-amber-300">{getCategoryIcon(cat.id)}</span>
                        {cat.name}
                      </span>
                      <span className="text-[10px] bg-amber-500 text-stone-950 font-black px-2.5 py-0.5 rounded-full">All Items</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleCategorySelect(cat.id, sub.id)}
                          className="flex items-center gap-1 text-[11px] bg-emerald-950/90 hover:bg-amber-600 text-stone-200 hover:text-white px-2.5 py-1 rounded-lg border border-emerald-700/50 transition-colors"
                        >
                          <span>{sub.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Navigation Pages in Mobile Drawer with Golden Accents */}
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-2 mb-1">Navigation Pages</span>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`rounded-lg px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${
                    active ? 'bg-[#14532d] text-amber-300 font-black border-l-4 border-amber-400' : 'text-amber-200 hover:bg-stone-800 hover:text-white'
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
