import React, { useEffect, createContext, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollToTop: () => void;
  scrollTo: (target: string | HTMLElement | number, options?: any) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollToTop: () => {},
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if touch device / mobile screen
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);

    // On mobile devices, use 100% native smooth scrolling for flawless gesture responsiveness
    if (isTouchDevice) {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
      return () => {
        if (typeof document !== 'undefined') {
          document.documentElement.style.scrollBehavior = '';
        }
      };
    }

    // On Desktop: High-Performance Lenis with Dynamic Auto-Resize
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 0, // Never intercept touch
      syncTouch: false,
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Continuous ResizeObserver to eliminate any scroll freeze/false bottom limit
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Window load & resize events
    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as any).__lenis;
    };
  }, []);

  // Route change handler: immediate scrollTo top and recalculate document height
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      lenisRef.current.resize();

      // Trigger multi-pass resize to accommodate dynamic images/cards
      const t1 = setTimeout(() => lenisRef.current?.resize(), 100);
      const t2 = setTimeout(() => lenisRef.current?.resize(), 400);
      const t3 = setTimeout(() => lenisRef.current?.resize(), 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.5 });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollTo = (target: string | HTMLElement | number, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else if (typeof window !== 'undefined') {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollToTop, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
