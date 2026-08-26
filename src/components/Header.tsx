import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, ChevronDown, ChevronRight,
  Phone, Mail, MessageCircle, ArrowRight, Sparkles,
  ShoppingBag, Package, Leaf, Layers, Grid, Feather,
  Compass, Flower2, TreeDeciduous, Tag
} from 'lucide-react';
import { CATEGORIES, TAGLINE } from '../data/products';
import { TopBar } from './TopBar';

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
  const [emailClientIndex, setEmailClientIndex] = useState(0);

  // Cycle email client icons every 1 second: 0 = Gmail, 1 = Outlook, 2 = Yahoo
  useEffect(() => {
    const timer = setInterval(() => {
      setEmailClientIndex((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* 0. Top Bar: Language Selector (Google Translate API + 20 Popular Languages + Search), Moving Marquee Banner, Bangladesh Waving Flag & 24/7 Service */}
      <TopBar />

      {/* 1. Main Header Row: Prominent Official Logo, Centered Search Bar with Tagline, Quick Actions */}
      <header className="relative z-30 w-full bg-white font-sans border-b border-stone-200/60 shadow-2xs">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-0.5 sm:py-1">
          <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8">
            
            {/* Official Company Logo (Clean, Crisp, Large & Unclipped - Zero Extra Top/Bottom Gap) */}
            <Link
              to="/"
              onClick={handleNavClick}
              className="shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.02] py-0 my-0"
              title="Golden Fiber Crafts Ltd. - Home"
            >
              <img
                src="/logo.png"
                alt="Golden Fiber Crafts Ltd."
                className="h-14 sm:h-16 md:h-[4.75rem] lg:h-[5.5rem] w-auto object-contain max-w-[280px] sm:max-w-[340px] md:max-w-[420px] select-none drop-shadow-xs"
              />
            </Link>

            {/* Desktop Search Bar with Wider Golden Search Button & Larger Official Tagline */}
            <div className="hidden md:flex flex-col items-center flex-1 max-w-[540px] lg:max-w-[650px] mx-auto gap-1.5 px-2">
              <form onSubmit={handleSearchSubmit} className="flex w-full rounded-lg border-2 border-amber-500 overflow-hidden shadow-xs focus-within:ring-2 focus-within:ring-amber-400/40 transition-all">
                <input
                  type="text"
                  placeholder="Search products (e.g. GFC-SB-030, Planters)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-[14px] text-stone-800 focus:outline-none placeholder-stone-400 font-medium bg-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 px-8 sm:px-11 py-2.5 sm:py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-inner min-w-[130px] sm:min-w-[150px]"
                >
                  <Search className="h-4 sm:h-4.5 w-4 sm:w-4.5 text-stone-950 stroke-[2.5]" />
                  <span className="font-extrabold text-stone-950 tracking-wider">Search</span>
                </button>
              </form>

              {/* Official Company Tagline (Enlarged & Prominent) */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-[14px] font-serif italic text-stone-700 tracking-wide text-center pt-0.5">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-600 shrink-0" />
                <span className="font-black text-[#14532d] font-serif italic">"{TAGLINE}"</span>
              </div>
            </div>

            {/* Action Controls: Animated Multi-Client Email, WhatsApp & Request Quote */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Rotating Official Email Client Button: 1s Gmail -> 1s Outlook -> 1s Yahoo Mail */}
              <a
                href="mailto:info@goldenfibercraftsltd.com?subject=Export%20Inquiry%20-%20Golden%20Fiber%20Crafts%20Ltd&body=Dear%20Golden%20Fiber%20Crafts%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20your%20handicraft%20products."
                title={`Email Us: info@goldenfibercraftsltd.com (${emailClientIndex === 0 ? 'Gmail' : emailClientIndex === 1 ? 'Outlook' : 'Yahoo Mail'})`}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-amber-400 text-stone-800 shadow-sm hover:shadow transition-all duration-200 hover:scale-105 relative overflow-hidden group cursor-pointer"
              >
                <div className="relative flex items-center justify-center h-full w-full">
                  {emailClientIndex === 0 && (
                    <div className="transition-all duration-200 transform scale-100 opacity-100 flex items-center justify-center" title="Gmail">
                      {/* Gmail Official Multi-Color Icon */}
                      <svg viewBox="0 0 48 48" className="h-5 w-5 sm:h-5.5 sm:w-5.5">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C8.132,7.553,5.647,8.403,5.034,10.495L3,12.298z"/>
                        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341c1.744-1.306,4.229-0.456,4.842,1.636L45,12.298z"/>
                      </svg>
                    </div>
                  )}
                  {emailClientIndex === 1 && (
                    <div className="transition-all duration-200 transform scale-100 opacity-100 flex items-center justify-center" title="Microsoft Outlook">
                      {/* Outlook Official Icon */}
                      <svg viewBox="0 0 48 48" className="h-5 w-5 sm:h-5.5 sm:w-5.5">
                        <path fill="#0288d1" d="M41,40H17c-1.657,0-3-1.343-3-3V11c0-1.657,1.343-3,3-3h24c1.657,0,3,1.343,3,3v26C44,38.657,42.657,40,41,40z"/>
                        <path fill="#29b6f6" d="M41,8H17c-1.657,0-3,1.343-3,3v1l15,10l15-10v-1C44,9.343,42.657,8,41,8z"/>
                        <path fill="#01579b" d="M29,22L14,12v25c0,1.657,1.343,3,3,3h3L29,22z"/>
                        <path fill="#0277bd" d="M29,22l9,18h3c1.657,0,3-1.343,3-3V12L29,22z"/>
                        <rect width="18" height="18" x="5" y="15" fill="#0288d1" rx="3"/>
                        <path fill="#fff" d="M14,30.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S17.584,30.5,14,30.5z M14,20.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S15.93,20.5,14,20.5z"/>
                      </svg>
                    </div>
                  )}
                  {emailClientIndex === 2 && (
                    <div className="transition-all duration-200 transform scale-100 opacity-100 flex items-center justify-center" title="Yahoo! Mail">
                      {/* Yahoo Mail Official Icon */}
                      <svg viewBox="0 0 48 48" className="h-5 w-5 sm:h-5.5 sm:w-5.5">
                        <rect width="44" height="44" x="2" y="2" fill="#6001d2" rx="10"/>
                        <path fill="#fff" d="M13 14l6.5 11v8.5h5V25l6.5-11h-4.8l-4.2 8-4.2-8H13zm20 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-2-15h4v7.5h-4V14z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </a>

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

        </div>
      </header>

      {/* 2. Deep Luxury Green Navigation Bar with Product by Category on Far Left */}
      <nav className="w-full bg-[#14532d] text-white shadow-lg border-t border-emerald-800/80">
        <div className="mx-auto max-w-7xl px-0 sm:px-2 lg:px-4 flex items-center justify-between relative">
          
          <div className="flex items-center w-full">
            {/* Radiant Golden "PRODUCT BY CATEGORY ˅" Button anchored to the far left */}
            <div className="relative shrink-0">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 px-3.5 sm:px-4 py-3 text-xs font-black uppercase tracking-wider transition-all duration-200 border-r border-amber-600/40 shadow-md focus:outline-none cursor-pointer group whitespace-nowrap"
              >
                <Menu className="h-4 w-4 text-stone-950 group-hover:rotate-90 transition-transform duration-200" />
                <span className="font-black drop-shadow-xs text-stone-950">PRODUCT BY CATEGORY</span>
                <ChevronDown className={`h-4 w-4 text-stone-950 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Category Dropdown Mega Menu (Desktop) */}
              {categoryDropdownOpen && (
                <div
                  className="absolute left-0 top-full z-50 flex bg-transparent overflow-visible text-stone-800 animate-megaMenuIn"
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                >
                  {/* Left Column: 10 Main Categories */}
                  <div className="w-52 bg-white rounded-b-xl shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-stone-200 overflow-hidden shrink-0 py-1">
                    {CATEGORIES.map((cat, idx) => {
                      const isHovered = activeCategoryHover === cat.id;
                      return (
                        <div
                          key={cat.id}
                          onMouseEnter={() => setActiveCategoryHover(cat.id)}
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`group w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold transition-all duration-150 cursor-pointer border-b border-stone-100 last:border-b-0 ${
                            isHovered
                              ? 'bg-emerald-50 text-emerald-800 font-extrabold'
                              : 'text-stone-700 hover:bg-stone-50 hover:text-emerald-950'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className={`transition-colors ${isHovered ? 'text-emerald-700' : 'text-stone-400 group-hover:text-emerald-700'}`}>
                              {getCategoryIcon(cat.id)}
                            </span>
                            <span className="truncate">{cat.name}</span>
                          </div>
                          <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform duration-150 ${isHovered ? 'text-emerald-700 translate-x-0.5' : 'text-stone-300 group-hover:text-emerald-700'}`} />
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Subcategories Flyout aligned directly with hovered category */}
                  {(() => {
                    const hoveredIndex = Math.max(0, CATEGORIES.findIndex(c => c.id === activeCategoryHover));
                    const currentCat = CATEGORIES[hoveredIndex] || CATEGORIES[0];
                    // Calculate top offset so subcategory menu starts exactly aligned across from the hovered category
                    const topOffset = Math.min(hoveredIndex * 37, Math.max(0, 370 - (currentCat.subcategories.length * 36 + 20)));

                    return (
                      <div 
                        className="w-56 ml-1 bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-stone-200 py-2.5 px-1 animate-subFadeIn shrink-0 self-start"
                        style={{ marginTop: `${topOffset}px` }}
                      >
                        <div className="flex flex-col gap-0.5">
                          {currentCat.subcategories.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleCategorySelect(currentCat.id, sub.id)}
                              className="group flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-bold text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 transition-all duration-150 text-left cursor-pointer"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-stone-400 group-hover:text-emerald-700 transition-colors">
                                  {getSubcategoryIcon(sub.id)}
                                </span>
                                <span className="truncate group-hover:font-extrabold">
                                  {sub.name}
                                </span>
                              </div>
                              <ChevronRight className="h-3 w-3 text-stone-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links - Single line with whitespace-nowrap */}
            <nav className="hidden lg:flex items-center font-extrabold text-[11px] xl:text-xs whitespace-nowrap ml-3 sm:ml-4 lg:ml-6 xl:ml-8 overflow-x-auto scrollbar-none">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`px-2 xl:px-3 py-3 uppercase tracking-wider font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white px-4 pb-6 pt-3 shadow-2xl animate-fadeIn border-t border-stone-800 max-h-[85vh] overflow-y-auto">
          
          {/* Quick Contact Bar in Mobile Drawer */}
          <div className="flex items-center justify-around py-3 px-3 bg-stone-900 rounded-xl mb-3 text-xs font-semibold">
            <a
              href="mailto:info@goldenfibercraftsltd.com"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300"
            >
              <div className="h-4 w-4 flex items-center justify-center">
                {emailClientIndex === 0 && <span className="text-[11px] font-black text-red-400">M</span>}
                {emailClientIndex === 1 && <span className="text-[11px] font-black text-blue-400">O</span>}
                {emailClientIndex === 2 && <span className="text-[11px] font-black text-purple-400">Y!</span>}
              </div>
              <span>{emailClientIndex === 0 ? 'Gmail' : emailClientIndex === 1 ? 'Outlook' : 'Yahoo'} Email</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href="https://wa.me/8801916183583"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href="tel:+8801916183583"
              className="flex items-center gap-1.5 text-stone-300 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>Direct Call</span>
            </a>
          </div>

          {/* Mobile Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex w-full rounded-lg border-2 border-amber-500 overflow-hidden shadow-xs mb-4">
            <input
              type="text"
              placeholder="Search products (e.g. Baskets, Mats)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 focus:outline-none placeholder-stone-400 font-medium bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 text-stone-950 px-5 sm:px-6 py-2.5 text-xs font-black uppercase tracking-wider shrink-0 flex items-center justify-center gap-1.5 cursor-pointer min-w-[85px]"
            >
              <Search className="h-3.5 w-3.5 text-stone-950 stroke-[2.5]" />
              <span className="font-extrabold text-stone-950">Search</span>
            </button>
          </form>

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

      </nav>
    </div>
  );
};
