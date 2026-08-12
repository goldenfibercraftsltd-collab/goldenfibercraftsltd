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
        threshold: 0.08,
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
    document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask, [data-reveal]'
    ).forEach((el) => {
      el.classList.add('revealed');
    });
    return () => {};
  }

  const observer = getObserver();
  if (!observer) {
    // Fallback if IntersectionObserver is not supported
    document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask, [data-reveal]'
    ).forEach((el) => {
      el.classList.add('revealed');
    });
    return () => {};
  }

  const observeElements = () => {
    const elements = document.querySelectorAll(
      '.reveal:not(.revealed), .reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed), .reveal-mask:not(.revealed), [data-reveal]:not(.revealed)'
    );

    elements.forEach((el) => {
      observer.observe(el);
    });
  };

  // Immediate observation
  observeElements();

  // Short debounced second pass for dynamically rendered items
  const timer = setTimeout(observeElements, 100);

  return () => {
    clearTimeout(timer);
  };
}
