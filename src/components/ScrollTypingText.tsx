import React, { useState, useEffect, useRef } from 'react';

interface ScrollTypingTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  speed?: number; // ms per character (default 40ms)
  delay?: number; // ms before start (default 200ms)
  showCursor?: boolean;
  once?: boolean;
}

export const ScrollTypingText: React.FC<ScrollTypingTextProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  speed = 40,
  delay = 200,
  showCursor = true,
  once = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, once]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let index = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);

      return interval;
    };

    timeoutId = setTimeout(() => {
      const intervalId = startTyping();
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [hasStarted, text, speed, delay]);

  return (
    <div ref={elementRef} className="inline-block">
      <Component className={className}>
        {displayedText || (hasStarted ? '' : ' ')}
        {showCursor && !isDone && hasStarted && (
          <span className="inline-block w-[2px] h-[1em] ml-0.5 align-middle bg-current animate-pulse" />
        )}
      </Component>
    </div>
  );
};

export default ScrollTypingText;
