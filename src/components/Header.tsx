import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, ShoppingBag, ChevronDown, Mail, Phone,
  Package, Tag, Scissors, Layers, ShieldCheck, Leaf, Sparkles
} from 'lucide-react';
import { TAGLINE } from '../data/products';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const { cart, totalCartItemsCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { id: 'baskets', label: 'Storage & Laundry Baskets', icon: Package },
    { id: 'planters', label: 'Planters & Pots', icon: Leaf },
    { id: 'bags', label: 'Jute Bags & Packaging', icon: ShoppingBag },
    { id: 'decor', label: 'Home Decor & Mats', icon: Sparkles },
    { id: 'bamboo', label: 'Bamboo Crafts', icon: Leaf },
  ];

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/products', label: 'PRODUCTS' },
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

  const handleCategorySelect = (catId: string) => {
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/products?category=${catId}`);
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
              24/7 Export Service: <a href="tel:+8801831806948" className="hover:underline text-amber-300 font-extrabold">+880-1831-806948</a>
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

          {/* Cart / Quote Bag Badge & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              to="/cart"
              title="View B2B Shopping Cart"
              className="flex items-center gap-2 group p-1.5 sm:px-3 sm:py-2 rounded-xl hover:bg-stone-50 transition-colors"
            >
              <div className="relative">
                <ShoppingBag className="h-7 w-7 text-[#65a30d] group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm">
                  {cart.length}
                </span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[11px] font-bold text-stone-500 uppercase leading-none">CART</span>
                <span className="text-xs font-extrabold text-stone-900">{cart.length} Items</span>
              </div>
            </Link>

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
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between relative">
          
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

            {/* Category Dropdown Content */}
            {categoryDropdownOpen && (
              <div className="absolute left-0 top-full z-50 w-72 sm:w-80 bg-white rounded-b-2xl shadow-2xl border border-stone-200 py-2 animate-fadeIn text-stone-800">
                <div className="px-4 py-2 border-b border-stone-100 bg-[#093843] text-white flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Golden Fiber Categories</span>
                  <span className="text-[10px] italic text-amber-300 font-serif">PPT Verified</span>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-stone-700 hover:bg-lime-50 hover:text-lime-900 transition-colors border-b border-stone-100/60 last:border-0 text-left"
                      >
                        <div className="h-7 w-7 rounded-lg bg-lime-100 text-lime-800 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="flex-1 truncate">{cat.label}</span>
                      </button>
                    );
                  })}
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

          {/* Quick Info Badge */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-amber-300 animate-ping" />
            <span>Certified Sustainable Exports</span>
          </div>

        </div>
      </div>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white px-4 pb-6 pt-3 shadow-2xl animate-fadeIn border-t border-stone-800">
          
          {/* Shop By Category in Mobile Drawer */}
          <div className="mb-4 bg-[#093843] rounded-xl overflow-hidden border border-teal-700">
            <div className="px-4 py-2.5 bg-[#062931] text-amber-300 font-extrabold text-xs uppercase flex items-center gap-2">
              <Menu className="h-4 w-4" />
              SHOP BY CATEGORY
            </div>
            <div className="divide-y divide-teal-800/60">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-stone-200 hover:bg-[#062931] text-left"
                >
                  <span>{cat.label}</span>
                  <span className="text-lime-400 font-bold">➔</span>
                </button>
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
