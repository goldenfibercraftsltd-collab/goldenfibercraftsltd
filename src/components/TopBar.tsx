import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { BangladeshWavingFlag } from './BangladeshWavingFlag';
import { 
  SiteSettingsData, 
  DEFAULT_SITE_SETTINGS, 
  getLocalSiteSettings, 
  fetchLiveSiteSettings 
} from '../utils/siteContentStore';

export const TopBar: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettingsData>(() => getLocalSiteSettings());

  useEffect(() => {
    fetchLiveSiteSettings().then(data => { if (data) setSettings(data); });

    const handleUpdated = (e: any) => {
      if (e.detail) setSettings(e.detail);
      else setSettings(getLocalSiteSettings());
    };

    window.addEventListener('gfcl_settings_updated', handleUpdated);
    return () => window.removeEventListener('gfcl_settings_updated', handleUpdated);
  }, []);

  const tickerText = settings.announcement_bar ||
    'Bangladesh’s premier manufacturer & global exporter of sustainable, 100% natural fiber handicrafts.';

  return (
    <div className="w-full bg-[#052818] border-b border-emerald-900/80 text-stone-200 text-xs select-none relative z-40 shadow-xs">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-9 sm:h-10">
          
          {/* Left: Language Selector (with search & Google Translate API) */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSelector />
          </div>

          {/* Middle: Slow Moving Right-to-Left Ticker Banner */}
          <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden mx-2 lg:mx-6 relative h-full">
            {/* Subtle Gradient Fade on edges for cinematic smooth look */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#052818] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#052818] to-transparent z-10 pointer-events-none" />

            {/* Seamless Slow Moving Text Marquee */}
            <div className="flex items-center whitespace-nowrap overflow-hidden w-full group">
              <div className="inline-flex items-center gap-8 animate-topbar-ticker group-hover:[animation-play-state:paused] cursor-default">
                {/* Repetition 1 */}
                <div className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-[11px] lg:text-xs font-medium tracking-wide">
                  <Sparkles className="h-3 w-3 text-amber-400 shrink-0 animate-pulse" />
                  <span className="font-semibold text-amber-200/90">{tickerText}</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80 mx-1" />
                </div>

                {/* Repetition 2 */}
                <div className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-[11px] lg:text-xs font-medium tracking-wide">
                  <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-amber-200/90">{tickerText}</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80 mx-1" />
                </div>

                {/* Repetition 3 */}
                <div className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-[11px] lg:text-xs font-medium tracking-wide">
                  <Sparkles className="h-3 w-3 text-amber-400 shrink-0 animate-pulse" />
                  <span className="font-semibold text-amber-200/90">{tickerText}</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80 mx-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bangladesh Waving Flag Animation */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center p-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 shadow-inner">
              <BangladeshWavingFlag size="sm" showPole={true} />
            </div>
          </div>

        </div>

        {/* Mobile View: Clean Sub-bar for Marquee so it's readable on small devices */}
        <div className="md:hidden py-1 border-t border-emerald-900/40 overflow-hidden relative">
          <div className="flex items-center whitespace-nowrap overflow-hidden w-full">
            <div className="inline-flex items-center gap-6 animate-topbar-ticker text-[10.5px] font-medium text-amber-200/90">
              <span className="flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5 text-amber-400 shrink-0" />
                {tickerText}
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5 text-amber-400 shrink-0" />
                {tickerText}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
