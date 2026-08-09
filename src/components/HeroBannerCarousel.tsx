import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

interface HeroBannerCarouselProps {
  onOpenQuoteModal: () => void;
}

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: '/banners/banner1.png',
      badge: 'Natural Fiber & Eco Living',
      badgeIcon: Leaf,
      title: 'Handcrafted Jute & Seagrass Collection',
      subtitle: 'Premium handwoven storage baskets, planters, jute bags, floor mats, and artisan home decor crafted for global export.',
      primaryBtn: 'Explore Products',
      primaryAction: () => navigate('/products'),
      secondaryBtn: 'Request Quote',
      secondaryAction: () => onOpenQuoteModal(),
    },
    {
      id: 2,
      image: '/banners/banner2.png',
      badge: 'Garment Trims & Accessories',
      badgeIcon: Sparkles,
      title: 'High-Precision Woven Labels & Hangtags',
      subtitle: 'Damask neck labels, flexo printed care labels, FSC cardboard hangtags, twill tapes, and security tags with OEKO-TEX certification.',
      primaryBtn: 'View Garment Trims',
      primaryAction: () => navigate('/products?category=labels'),
      secondaryBtn: 'Request Quote',
      secondaryAction: () => onOpenQuoteModal(),
    },
    {
      id: 3,
      image: '/banners/banner3.png',
      badge: 'Global Compliance & Export',
      badgeIcon: ShieldCheck,
      title: 'Worldwide Sustainable Manufacturing',
      subtitle: 'Supplying leading fair trade buyers, boutique importers, and retail chains across 35+ countries with full BSCI & Sedex compliance.',
      primaryBtn: 'Our Infrastructure',
      primaryAction: () => navigate('/infrastructure'),
      secondaryBtn: 'Contact Export Team',
      secondaryAction: () => navigate('/contact'),
    },
  ];

  // Auto-switch slide every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-stone-950 font-sans shadow-2xl">
      
      {/* Slides Container */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full">
        {slides.map((slide, idx) => {
          const BadgeIcon = slide.badgeIcon;
          const isActive = idx === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-stone-950">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Dual Dark Gradient overlay for high text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              </div>

              {/* Banner Content Container */}
              <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-4 sm:space-y-6 text-white">
                  
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-300 backdrop-blur-md border border-emerald-400/30">
                    <BadgeIcon className="h-3.5 w-3.5 text-emerald-400" />
                    {slide.badge}
                  </span>

                  {/* Title */}
                  <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm lg:text-base text-stone-200 leading-relaxed font-light drop-shadow">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                    <button
                      onClick={slide.primaryAction}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95"
                    >
                      {slide.primaryBtn}
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      onClick={slide.secondaryAction}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-3 text-xs sm:text-sm font-bold text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
                    >
                      {slide.secondaryBtn}
                    </button>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-950/40 text-white backdrop-blur-md hover:bg-emerald-600 transition-colors border border-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-stone-950/40 text-white backdrop-blur-md hover:bg-emerald-600 transition-colors border border-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>
  );
};
