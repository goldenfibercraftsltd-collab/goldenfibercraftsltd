import React, { useState, useRef } from 'react';
import { ZoomIn, X, Maximize2 } from 'lucide-react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  alt,
  zoomLevel = 2.5,
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
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setXY({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const magnifierSize = 160;

  return (
    <>
      {/* Main Image Container with Magnifier Hover */}
      <div
        className="relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200 shadow-inner cursor-crosshair group flex items-center justify-center p-4 select-none"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Hover Hint Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-xs flex items-center gap-1.5 text-[11px] font-bold text-stone-700 pointer-events-none group-hover:opacity-0 transition-opacity">
          <ZoomIn className="h-3.5 w-3.5 text-emerald-700" /> Hover to Magnify Texture
        </div>

        {/* Click for Lightbox Button */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-4 right-4 bg-emerald-700 hover:bg-emerald-800 text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 z-20"
          title="Open Fullscreen Lightbox View"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Magnifier Glass Circle Lens */}
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
              border: '3px solid #65a30d',
              borderRadius: '50%',
              backgroundColor: 'white',
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
              backgroundPositionX: `${-xy.x * zoomLevel + magnifierSize / 2}px`,
              backgroundPositionY: `${-xy.y * zoomLevel + magnifierSize / 2}px`,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(0,0,0,0.1)',
              zIndex: 30,
            }}
          />
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-full object-contain filter drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
