import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Tag, ArrowRight } from 'lucide-react';

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
    id: 2,
    image_url: '/banners/banner2.png',
    title: 'Export Quality Garment Trims & Care Labels',
    category_slug: 'seagrass',
    category_name: 'Seagrass',
    show_category_badge: false,
    link_url: '/products?category=seagrass'
  },
  {
    id: 3,
    image_url: '/banners/banner3.png',
    title: 'Worldwide Sustainable Manufacturing',
    category_slug: 'recycle-fabric',
    category_name: 'Recycle Fabric',
    show_category_badge: false,
    link_url: '/products'
  }
];

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = () => {
  const [banners, setBanners] = useState<BannerItem[]>(DEFAULT_BANNERS);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const navigate = useNavigate();

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

  // Auto-rotate slide every 5.5 seconds
  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide(prev => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide(prev => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-stone-950 font-sans select-none">
      
      {/* Slides Container - Responsive Height */}
      <div className="relative h-[320px] sm:h-[440px] md:h-[500px] lg:h-[580px] w-full">
        {banners.map((banner, idx) => {
          const isActive = idx === currentSlide;
          const showBadge = Boolean(banner.show_category_badge && (banner.category_name || banner.category_slug));

          return (
            <div
              key={banner.id || idx}
              onClick={() => {
                if (banner.link_url) {
                  if (banner.link_url.startsWith('http')) {
                    window.open(banner.link_url, '_blank');
                  } else {
                    navigate(banner.link_url);
                  }
                }
              }}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Clean Crisp Full Banner Image (No Heavy Text Overlays) */}
              <div className="absolute inset-0 bg-stone-900">
                <img
                  src={banner.image_url}
                  alt={banner.title || banner.category_name || 'Golden Fiber Crafts Banner'}
                  className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>

              {/* Optional Small Category Badge on Top-Left (Only if Admin explicitly enables it) */}
              {showBadge && (
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-30 animate-fadeIn">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-900/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-900/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Indicator Dots Bar */}
      {banners.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/10 shadow-lg">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
};
