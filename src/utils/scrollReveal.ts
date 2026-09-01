/**
 * High-Performance Single-Instance Scroll Reveal Observer
 * 
 * Rules strictly followed:
 * 1. IntersectionObserver based viewport detection (zero continuous scroll event listeners).
 * 2. One-shot trigger: once an element is revealed, it remains revealed forever.
 * 3. Scrolling up never reverses or replays animation.
 * 4. Respects `prefers-reduced-motion` accessibility settings.
 */

let observerInstance: IntersectionObserver | null = null;

const REVEAL_SELECTORS = [
  '.reveal',
  '.reveal-up',
  '.reveal-left',
  '.reveal-right',
  '.reveal-scale',
  '.reveal-mask',
  '.card-slide-mid',
  '.card-slide-left',
  '.card-slide-right',
  '.card-slide-far-left',
  '.card-slide-far-right',
  '.card-reveal-up',
  '.card-reveal-left',
  '.card-reveal-right',
  '.card-reveal-pop',
  '.card-reveal-tilt',
  '[data-reveal]'
].join(', ');

const NOT_REVEALED_SELECTORS = [
  '.reveal:not(.revealed)',
  '.reveal-up:not(.revealed)',
  '.reveal-left:not(.revealed)',
  '.reveal-right:not(.revealed)',
  '.reveal-scale:not(.revealed)',
  '.reveal-mask:not(.revealed)',
  '.card-slide-mid:not(.revealed)',
  '.card-slide-left:not(.revealed)',
  '.card-slide-right:not(.revealed)',
  '.card-slide-far-left:not(.revealed)',
  '.card-slide-far-right:not(.revealed)',
  '.card-reveal-up:not(.revealed)',
  '.card-reveal-left:not(.revealed)',
  '.card-reveal-right:not(.revealed)',
  '.card-reveal-pop:not(.revealed)',
  '.card-reveal-tilt:not(.revealed)',
  '[data-reveal]:not(.revealed)'
].join(', ');

/**
 * Generates an alternating / dynamic combination of 5 modern WOW animations with smooth staggered timing
 */
export function getDynamicCardAnimation(index: number, pattern: 'varied' | 'directional' = 'varied'): string {
  const animStyles = [
    'card-reveal-up',
    'card-reveal-left',
    'card-reveal-right',
    'card-reveal-pop',
    'card-reveal-tilt'
  ];
  
  const stagger = `stagger-${(index % 6) + 1}`;
  const anim = animStyles[index % animStyles.length];
  return `${anim} ${stagger}`;
}

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  if (!observerInstance) {
    observerInstance = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('revealed');
            observer.unobserve(target); // Unobserve immediately: One-shot guarantee!
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -20px 0px'
      }
    );
  }

  return observerInstance;
}

export function initScrollReveal(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
      el.classList.add('revealed');
    });
    return () => {};
  }

  const observer = getObserver();
  if (!observer) {
    // Fallback if IntersectionObserver is not supported
    document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
      el.classList.add('revealed');
    });
    return () => {};
  }

  const observeElements = () => {
    const elements = document.querySelectorAll(NOT_REVEALED_SELECTORS);

    elements.forEach((el) => {
      observer.observe(el);
    });
  };

  // Immediate observation
  observeElements();

  // Short debounced passes for dynamically rendered items
  const timer1 = setTimeout(observeElements, 40);
  const timer2 = setTimeout(observeElements, 150);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}
