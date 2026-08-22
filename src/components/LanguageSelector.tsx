import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, Check, ChevronDown, X, Sparkles } from 'lucide-react';

export interface LanguageItem {
  code: string;
  name: string; // English name
  nativeName: string; // Native name
  displayName: string; // Combined display name e.g. "Bangla / বাংলা" or "Turkish / Türkçe"
  countryCode: string; // 2-letter ISO country code for real flag
  region: string; // Country / Region
}

export const POPULAR_LANGUAGES: LanguageItem[] = [
  { code: 'en', name: 'English', nativeName: 'English', displayName: 'English', countryCode: 'gb', region: 'Global / UK / USA' },
  { code: 'bn', name: 'Bangla', nativeName: 'বাংলা', displayName: 'Bangla / বাংলা', countryCode: 'bd', region: 'Bangladesh' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', displayName: 'Turkish / Türkçe', countryCode: 'tr', region: 'Turkey' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', displayName: 'Arabic / العربية', countryCode: 'sa', region: 'Middle East / UAE / KSA' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '简体中文', displayName: 'Chinese / 简体中文', countryCode: 'cn', region: 'China' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', displayName: 'Spanish / Español', countryCode: 'es', region: 'Spain / Latin America' },
  { code: 'fr', name: 'French', nativeName: 'Français', displayName: 'French / Français', countryCode: 'fr', region: 'France / EU' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', displayName: 'German / Deutsch', countryCode: 'de', region: 'Germany / EU' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', displayName: 'Japanese / 日本語', countryCode: 'jp', region: 'Japan' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', displayName: 'Korean / 한국어', countryCode: 'kr', region: 'South Korea' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', displayName: 'Italian / Italiano', countryCode: 'it', region: 'Italy / EU' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', displayName: 'Dutch / Nederlands', countryCode: 'nl', region: 'Netherlands / EU' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', displayName: 'Russian / Русский', countryCode: 'ru', region: 'Russia' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', displayName: 'Portuguese / Português', countryCode: 'pt', region: 'Portugal / Brazil' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', displayName: 'Hindi / हिन्दी', countryCode: 'in', region: 'India' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', displayName: 'Vietnamese / Tiếng Việt', countryCode: 'vn', region: 'Vietnam' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', displayName: 'Polish / Polski', countryCode: 'pl', region: 'Poland / EU' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', displayName: 'Swedish / Svenska', countryCode: 'se', region: 'Sweden / Nordics' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', displayName: 'Indonesian / Bahasa Indonesia', countryCode: 'id', region: 'Indonesia' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', displayName: 'Thai / ไทย', countryCode: 'th', region: 'Thailand' },
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLangCode, setCurrentLangCode] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize and detect current active language from cookie or localStorage
  useEffect(() => {
    const detectCurrentLanguage = () => {
      const savedLang = localStorage.getItem('gfc_selected_lang');
      if (savedLang) {
        setCurrentLangCode(savedLang);
        return;
      }
      // Check googtrans cookie
      const match = document.cookie.match(/googtrans=\/[^/]+\/([a-zA-Z-]+)/);
      if (match && match[1]) {
        setCurrentLangCode(match[1]);
      }
    };

    detectCurrentLanguage();

    // Close on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Close on Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto focus search input when dropdown opens on desktop
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (window.innerWidth >= 640) {
          searchInputRef.current?.focus();
        }
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Handle language selection with Google Translate integration
  const handleSelectLanguage = (lang: LanguageItem) => {
    setCurrentLangCode(lang.code);
    localStorage.setItem('gfc_selected_lang', lang.code);
    setIsOpen(false);

    // Set cookies for Google Translate with domain and root path
    const hostname = window.location.hostname;
    const isIpOrLocal = hostname === 'localhost' || hostname === '127.0.0.1';
    const domainStr = isIpOrLocal ? '' : `domain=.${hostname};`;

    // Standard google translate cookies
    document.cookie = `googtrans=/en/${lang.code}; path=/; ${domainStr}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    document.cookie = `googtrans=/auto/${lang.code}; path=/; ${domainStr}`;
    document.cookie = `googtrans=/auto/${lang.code}; path=/;`;

    // If Google Translate select is rendered on page, trigger it directly
    const googleSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = lang.code;
      googleSelect.dispatchEvent(new Event('change'));
    } else {
      // Reload page to trigger Google Translate initialization if select isn't directly bound
      window.location.reload();
    }
  };

  const currentLang = POPULAR_LANGUAGES.find((l) => l.code === currentLangCode) || POPULAR_LANGUAGES[0];

  // Filter languages by search query (checks name, nativeName, displayName, code, region)
  const filteredLanguages = POPULAR_LANGUAGES.filter((lang) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.displayName.toLowerCase().includes(q) ||
      lang.region.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q)
    );
  });

  return (
    <div 
      className="relative inline-block text-left notranslate" 
      translate="no" 
      ref={dropdownRef}
    >
      {/* Trigger Button - Protected from Google Translate auto-translation */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="notranslate flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-stone-200 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-700/40 transition-all duration-200 text-xs font-semibold focus:outline-none cursor-pointer group shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Website Language (Powered by Google Translate)"
        translate="no"
      >
        <Globe className="h-3.5 w-3.5 text-amber-400 group-hover:rotate-45 transition-transform duration-300 shrink-0" />
        
        {/* Real Country Flag */}
        <img
          src={`https://flagcdn.com/w40/${currentLang.countryCode}.png`}
          srcSet={`https://flagcdn.com/w80/${currentLang.countryCode}.png 2x`}
          alt={currentLang.name}
          className="w-4.5 h-3 object-cover rounded-xs border border-white/20 shadow-2xs shrink-0"
          loading="eager"
        />

        <span className="font-bold tracking-wide text-white text-[11px] sm:text-xs notranslate" translate="no">
          {currentLang.displayName}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-stone-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-amber-400' : 'group-hover:text-amber-300'
          }`}
        />
      </button>

      {/* Language Modal / Dropdown with Live Search */}
      {isOpen && (
        <>
          {/* Mobile Backdrop to easily close and prevent background touches */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 sm:hidden animate-fadeIn"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container with Lenis Scroll Prevention so mouse wheel scrolling works natively */}
          <div
            className="notranslate fixed inset-x-3 top-12 sm:absolute sm:inset-x-auto sm:left-0 sm:top-full sm:mt-1.5 z-50 w-auto sm:w-84 max-w-[calc(100vw-24px)] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-stone-200/90 overflow-hidden text-stone-800 animate-megaMenuIn flex flex-col"
            translate="no"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            style={{ maxHeight: 'calc(100vh - 70px)' }}
          >
            {/* Header & Live Search Bar */}
            <div className="p-3 bg-gradient-to-br from-[#14532d] via-[#0d3b1f] to-[#082815] text-white shrink-0 notranslate" translate="no">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider notranslate" translate="no">
                  <Globe className="h-3.5 w-3.5 text-amber-400" />
                  <span>Select Language</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded-full font-mono">
                    {POPULAR_LANGUAGES.length}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close language selector"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Instant Search Input */}
              <div className="relative notranslate" translate="no">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search language or country..."
                  className="notranslate w-full pl-8 pr-7 py-1.5 text-xs bg-white text-stone-900 rounded-lg placeholder-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                  translate="no"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Languages Grid / List with Guaranteed Mouse Scroll & Touch Scrolling */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="notranslate overflow-y-auto p-2 divide-y divide-stone-100 flex-1 overscroll-contain scrollbar-thin"
              translate="no"
              style={{
                maxHeight: 'min(320px, 60vh)',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
              }}
            >
              {filteredLanguages.length > 0 ? (
                <div className="grid grid-cols-1 gap-1 notranslate" translate="no">
                  {filteredLanguages.map((lang) => {
                    const isSelected = lang.code === currentLangCode;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang)}
                        className={`notranslate w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                            : 'hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-transparent'
                        }`}
                        translate="no"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 notranslate" translate="no">
                          {/* Real Graphic Country Flag */}
                          <img
                            src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                            srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
                            alt={`${lang.name} flag`}
                            className="w-5 h-3.5 object-cover rounded-xs border border-stone-200 shadow-2xs shrink-0"
                            loading="lazy"
                          />

                          <div className="truncate notranslate" translate="no">
                            <div className="flex items-center gap-1.5 notranslate" translate="no">
                              <span className="text-xs font-black text-stone-900 notranslate" translate="no">
                                {lang.displayName}
                              </span>
                            </div>
                            <div className="text-[10px] text-stone-400 truncate notranslate" translate="no">
                              {lang.region}
                            </div>
                          </div>
                        </div>

                        {isSelected ? (
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white shrink-0 shadow-2xs">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        ) : (
                          <span className="text-[10px] text-stone-400 uppercase font-mono shrink-0 font-semibold notranslate" translate="no">
                            {lang.countryCode.toUpperCase()}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-stone-400 notranslate" translate="no">
                  No language found matching "{searchQuery}"
                </div>
              )}
            </div>

            {/* Footer Note */}
            <div className="notranslate px-3 py-2 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-[10px] text-stone-500 font-medium shrink-0" translate="no">
              <span className="flex items-center gap-1 notranslate" translate="no">
                <Sparkles className="h-3 w-3 text-amber-500" />
                <span>Instant Website Translation</span>
              </span>
              <span className="font-semibold text-stone-400 notranslate" translate="no">Google API</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
