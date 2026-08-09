import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

interface FloatingContactProps {
  onOpenQuoteModal: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Quick Link */}
      <a
        href="https://wa.me/8801831806948 text=Hello%20Golden%20Fiber%20Crafts,%20I%20am%20interested%20in%20your%20handicraft%20products."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 hover:scale-110 transition-all active:scale-95 border-2 border-white"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Quick RFQ Button */}
      <button
        onClick={onOpenQuoteModal}
        title="Request Quote"
        className="flex h-12 items-center gap-2 rounded-full bg-amber-800 px-4 text-xs font-bold text-white shadow-xl hover:bg-amber-700 hover:scale-105 transition-all active:scale-95 border-2 border-amber-500"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">Request RFQ</span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/80 text-white shadow-lg backdrop-blur-md hover:bg-stone-900 transition-all hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
