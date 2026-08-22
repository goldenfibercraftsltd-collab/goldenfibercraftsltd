import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Tag, ArrowRight } from 'lucide-react';

interface BannerItem {
  id: number | string;
  title?: string;
  subtitle?: string;
  image_url: string;
  link_url?: string;
  display_order?: number;
  category_slug?: string;
  category_name?: string;
  show_category_badge?: number | boolean;
}

interface HeroBannerCarouselProps {
  onOpenQuoteModal?: () => void;
}

const DEFAULT_BANNERS: BannerItem[] = [
  {
    id: 1,
    image_url: '/banners/banner1.png',
    title: 'Handcrafted Jute & Seagrass Collection',
    category_slug: 'jute',
    category_name: 'Jute',
    show_category_badge: false,
    link_url: '/products?category=jute'
  },
  {
    id: 3,
    image_url: '/banners/banner3.png',
    title: 'Worldwide Sustainable Manufacturing',
    category_slug: 'recycle-fabric',
    category_name: 'Recycle Fabric',
    show_category_badge: false,
    link_url: '/products'
  },
  {
    id: 5,
    image_url: '/banners/banner5.png',
    title: 'Eco-Living & Modern Natural Home Decor',
    category_slug: 'rugs',
    category_name: 'Rugs & Mats',
    show_category_badge: false,
    link_url: '/products?category=rugs'
  }
];

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = () => {
  const [banners, setBanners] = useState<BannerItem[]>(DEFAULT_BANNERS);
  // Infinite track uses currentIndex starting at 1 (representing banners[0])
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const navigate = useNavigate();

  // Touch & Swipe gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    fetch('/api/banners')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.banners) && data.banners.length > 0) {
          setBanners(data.banners);
        }
      })
      .catch(() => {});
  }, []);

  // Build extended slides for seamless infinite loop: [lastClone, ...banners, firstClone]
  const extendedSlides: BannerItem[] = banners.length > 1
    ? [banners[banners.length - 1], ...banners, banners[0]]
    : banners;

  const totalExtended = extendedSlides.length;

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (banners.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [banners.length]);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (banners.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [banners.length]);

  // Smooth Auto-Slide every 4.5 seconds (always continuously sliding leftward)
  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length, isPaused, nextSlide]);

  // Seamless Infinite Loop Reset on Transition End
  const handleTransitionEnd = () => {
    if (banners.length <= 1) return;

    if (currentIndex >= totalExtended - 1) {
      // Reached the clone of the first slide at the far right -> silently jump to real first slide (index 1)
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // Reached the clone of the last slide at the far left -> silently jump to real last slide
      setIsTransitioning(false);
      setCurrentIndex(banners.length);
    }
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    if (touchStartX.current !== null && Math.abs(touchStartX.current - e.targetTouches[0].clientX) > 10) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 45) {
        nextSlide();
      } else if (distance < -45) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  const handleBannerClick = (banner: BannerItem) => {
    if (isDragging.current) return;
    if (banner.link_url) {
      if (banner.link_url.startsWith('http')) {
        window.open(banner.link_url, '_blank');
      } else {
        navigate(banner.link_url);
      }
    }
  };

  // Compute active real index (0 to banners.length - 1) for indicators
  const activeRealIndex = banners.length > 0
    ? (currentIndex - 1 + banners.length) % banners.length
    : 0;

  return (
    <div
      className="relative w-full overflow-hidden bg-stone-950 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track - Continuous Infinite Leftward Slide */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex w-full h-[320px] sm:h-[440px] md:h-[500px] lg:h-[580px] will-change-transform ${
          isTransitioning
            ? 'transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]'
            : 'transition-none'
        }`}
        style={{
          transform: banners.length > 1
            ? `translate3d(-${currentIndex * 100}%, 0, 0)`
            : 'translate3d(0, 0, 0)'
        }}
      >
        {extendedSlides.map((banner, idx) => {
          // Check if this slide in extended track corresponds to current view
          const isCurrentInView = idx === currentIndex;
          const showBadge = Boolean(banner.show_category_badge && (banner.category_name || banner.category_slug));

          return (
            <div
              key={`slide-${banner.id || idx}-${idx}`}
              onClick={() => handleBannerClick(banner)}
              className="relative h-full w-full flex-shrink-0 cursor-pointer overflow-hidden bg-stone-900"
            >
              {/* Crisp High-Res Banner Image with Subtle Active Zoom */}
              <img
                src={banner.image_url}
                alt={banner.title || banner.category_name || 'Golden Fiber Crafts Banner'}
                className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out select-none pointer-events-none ${
                  isCurrentInView ? 'scale-105' : 'scale-100'
                }`}
                loading={idx <= 2 ? 'eager' : 'lazy'}
                draggable={false}
              />

              {/* Ambient lighting subtle top/bottom gradients for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/20 pointer-events-none" />

              {/* Optional Category Badge on Top-Left */}
              {showBadge && (
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                  <Link
                    to={`/products?category=${banner.category_slug || ''}`}
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 hover:bg-emerald-700/90 text-emerald-300 hover:text-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md border border-emerald-500/40 shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    <Tag className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{banner.category_name || banner.category_slug}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-900/60 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-900/60 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </>
      )}

      {/* Bottom Indicator Dots Pill */}
      {banners.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/70 backdrop-blur-md border border-white/15 shadow-xl">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setIsTransitioning(true);
                setCurrentIndex(idx + 1);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === activeRealIndex
                  ? 'w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
