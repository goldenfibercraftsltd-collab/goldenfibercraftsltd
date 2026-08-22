import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, Check, ChevronDown, X, Sparkles } from 'lucide-react';

export interface LanguageItem {
  code: string;
  name: string; // English name
  nativeName: string; // Native name
  flag: string; // Country flag emoji
  flagSvg?: string; // Optional custom SVG
  region: string; // Country / Region
}

export const POPULAR_LANGUAGES: LanguageItem[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', region: 'Global / UK / USA' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', region: 'Bangladesh / India' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', region: 'Middle East / UAE / KSA' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳', region: 'China / East Asia' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', region: 'Spain / Latin America' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', region: 'France / Canada / EU' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', region: 'Germany / Austria / EU' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', region: 'Japan' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', region: 'Russia / CIS' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', region: 'Brazil / Portugal' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', region: 'Italy / EU' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', region: 'Netherlands / Belgium' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', region: 'South Korea' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', region: 'Turkey / Middle East' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', region: 'India' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', region: 'Vietnam / SE Asia' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', region: 'Poland / EU' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', region: 'Sweden / Nordics' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Indonesia / SE Asia' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', region: 'Thailand / SE Asia' },
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLangCode, setCurrentLangCode] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Auto focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
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

  // Filter languages by search query (checks name, nativeName, code, region)
  const filteredLanguages = POPULAR_LANGUAGES.filter((lang) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.region.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-stone-200 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-700/40 transition-all duration-200 text-xs font-semibold focus:outline-none cursor-pointer group shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Website Language (Powered by Google Translate)"
      >
        <Globe className="h-3.5 w-3.5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="font-bold tracking-wide text-white text-[11px] sm:text-xs">
          {currentLang.nativeName}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-stone-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-amber-400' : 'group-hover:text-amber-300'
          }`}
        />
      </button>

      {/* Language Modal / Dropdown with Live Search */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 z-50 w-72 sm:w-80 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-stone-200/90 overflow-hidden text-stone-800 animate-megaMenuIn">
          {/* Header & Live Search Bar */}
          <div className="p-3 bg-gradient-to-br from-[#14532d] via-[#0d3b1f] to-[#082815] text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <Globe className="h-3.5 w-3.5 text-amber-400" />
                <span>Select Language</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded-full font-mono">
                  20
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close language selector"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Instant Search Input */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language or country..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-white text-stone-900 rounded-lg placeholder-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Languages Grid / List */}
          <div className="max-h-64 sm:max-h-72 overflow-y-auto p-2 divide-y divide-stone-100 scrollbar-thin">
            {filteredLanguages.length > 0 ? (
              <div className="grid grid-cols-1 gap-1">
                {filteredLanguages.map((lang) => {
                  const isSelected = lang.code === currentLangCode;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelectLanguage(lang)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs'
                          : 'hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-lg leading-none shrink-0 drop-shadow-xs">
                          {lang.flag}
                        </span>
                        <div className="truncate">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-stone-900">
                              {lang.nativeName}
                            </span>
                            <span className="text-[11px] font-medium text-stone-500 truncate">
                              ({lang.name})
                            </span>
                          </div>
                          <div className="text-[10px] text-stone-400 truncate">
                            {lang.region}
                          </div>
                        </div>
                      </div>

                      {isSelected ? (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white shrink-0 shadow-2xs">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-[10px] text-stone-300 uppercase font-mono shrink-0">
                          {lang.code}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-stone-400">
                No language found matching "{searchQuery}"
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="px-3 py-2 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between text-[10px] text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-500" />
              <span>Instant Website Translation</span>
            </span>
            <span className="font-semibold text-stone-400">Google API</span>
          </div>
        </div>
      )}
    </div>
  );
};
