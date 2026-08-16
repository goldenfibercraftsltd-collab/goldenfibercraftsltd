import React, { useState, useRef } from 'react';
import { ZoomIn, X, Maximize2, Sparkles } from 'lucide-react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  alt,
  zoomLevel = 3.2,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [xy, setXY] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImgWidth(width);
      setImgHeight(height);
      setShowMagnifier(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imgRef.current) {
      const { left, top } = imgRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setXY({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  // Increased lens size for crystal clear macro view
  const magnifierSize = 280;

  return (
    <>
      {/* Main Image Container with Magnifier Hover */}
      <div
        className="relative h-full w-full overflow-hidden rounded-3xl bg-white border border-stone-200/90 shadow-sm cursor-crosshair group flex items-center justify-center p-3 sm:p-6 select-none min-h-[350px] sm:min-h-[480px]"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="h-full w-full max-h-[450px] sm:max-h-[520px] object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-[1.01] image-render-sharp"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* Hover Hint Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm flex items-center gap-1.5 text-[11px] font-extrabold text-stone-700 pointer-events-none group-hover:opacity-0 transition-opacity z-10">
          <ZoomIn className="h-3.5 w-3.5 text-[#166534]" /> Hover to Magnify Ultra-High Res Texture
        </div>

        {/* Click for Lightbox Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(true);
          }}
          className="absolute bottom-4 right-4 bg-[#166534] hover:bg-[#14532d] text-white p-3 rounded-2xl shadow-md transition-all hover:scale-105 z-20 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          title="Open Fullscreen High-Res Photo View"
        >
          <Maximize2 className="h-4 w-4" />
          <span className="hidden sm:inline">Fullscreen</span>
        </button>

        {/* Magnifier Glass Circle Lens - Large & Crisp */}
        {showMagnifier && (
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              height: `${magnifierSize}px`,
              width: `${magnifierSize}px`,
              top: `${xy.y - magnifierSize / 2}px`,
              left: `${xy.x - magnifierSize / 2}px`,
              opacity: 1,
              border: '4px solid #166534',
              borderRadius: '50%',
              backgroundColor: 'white',
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
              backgroundPositionX: `${-xy.x * zoomLevel + magnifierSize / 2}px`,
              backgroundPositionY: `${-xy.y * zoomLevel + magnifierSize / 2}px`,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 0 2px rgba(255, 255, 255, 0.6), inset 0 0 25px rgba(0,0,0,0.15)',
              zIndex: 30,
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        )}
      </div>

      {/* Mobile-Friendly High-Contrast Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          
          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl border border-stone-200 w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-between relative space-y-4 overflow-hidden">
            
            {/* Header with Title and Close Button */}
            <div className="w-full flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2 pr-8">
                <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
                <h3 className="font-serif text-sm sm:text-lg font-extrabold text-stone-900 truncate">
                  {alt}
                </h3>
              </div>
              
              <button
                onClick={() => setLightboxOpen(false)}
                className="bg-stone-100 hover:bg-rose-100 hover:text-rose-700 text-stone-700 p-2 sm:p-2.5 rounded-full transition-all cursor-pointer shrink-0"
                title="Close Fullscreen View"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* High Resolution Product Image inside Clean White Card */}
            <div className="w-full flex-1 flex items-center justify-center min-h-0 py-2 bg-stone-50/50 rounded-2xl border border-stone-100 p-2 sm:p-4">
              <img
                src={src}
                alt={alt}
                className="max-h-[65vh] sm:max-h-[72vh] max-w-full object-contain filter drop-shadow-xl transition-transform hover:scale-[1.02]"
              />
            </div>

            {/* Footer Badge & Instructions */}
            <div className="w-full pt-2 flex items-center justify-between text-[11px] font-bold text-stone-900">
              <span>Golden Fiber Crafts Ltd. • Export Quality Photo</span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="text-emerald-800 hover:underline font-black"
              >
                Press Esc or Close
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
};
