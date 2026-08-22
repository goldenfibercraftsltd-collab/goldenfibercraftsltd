import React from 'react';
import { Phone, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { BangladeshWavingFlag } from './BangladeshWavingFlag';

export const TopBar: React.FC = () => {
  const tickerText =
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

          {/* Right: Bangladesh Waving Flag Animation & 24/7 Customer Service */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Waving Bangladesh Flag with Realistic Cloth Ripple */}
            <div className="flex items-center gap-1.5 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60 shadow-inner">
              <BangladeshWavingFlag size="sm" showPole={true} />
              <span className="hidden sm:inline text-[10px] font-bold text-emerald-300 tracking-wider uppercase">
                BD
              </span>
            </div>

            {/* 24/7 Customer Service Phone & WhatsApp Quick Access */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-stone-300">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] text-stone-400 uppercase tracking-wider font-bold">24/7 Export Desk</span>
                  <a
                    href="tel:+8801916183583"
                    className="font-bold text-amber-300 hover:text-amber-200 hover:underline tracking-tight text-[11px] sm:text-xs transition-colors"
                  >
                    +880 1916-183583
                  </a>
                </div>
              </div>
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
