import React from 'react';

interface BangladeshWavingFlagProps {
  size?: 'sm' | 'md' | 'lg';
  showPole?: boolean;
  className?: string;
}

export const BangladeshWavingFlag: React.FC<BangladeshWavingFlagProps> = ({
  size = 'md',
  showPole = true,
  className = '',
}) => {
  // Dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 19, poleHeight: 25 },
    md: { width: 44, height: 26, poleHeight: 34 },
    lg: { width: 60, height: 36, poleHeight: 46 },
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-1 select-none ${className}`}
      title="Made in Bangladesh — Global Export Quality"
    >
      {/* Flag Mast / Pole */}
      {showPole && (
        <div className="flex flex-col items-center shrink-0 -mr-0.5 z-10">
          {/* Golden Finial Ball */}
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-100 shadow-[0_0_4px_rgba(251,191,36,0.8)]" />
          {/* Silver Mast */}
          <div
            className="w-[2px] bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 rounded-full shadow-xs"
            style={{ height: `${dimensions.poleHeight}px` }}
          />
        </div>
      )}

      {/* Realistic 3D Waving Cloth Flag Container */}
      <div
        className="relative overflow-hidden rounded-xs shadow-md bd-flag-wave-container"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      >
        {/* Official Bangladesh Flag Canvas (10:6 Ratio, Emerald Green #006a4e with Red Sun #f42a41 at 45%) */}
        <svg
          viewBox="0 0 100 60"
          className="w-full h-full block bd-flag-cloth"
          preserveAspectRatio="none"
        >
          {/* Deep Bottle Green Field */}
          <rect width="100" height="60" fill="#006a4e" />
          {/* Vibrant Red Sun (Circle radius 20, centered at X=45, Y=30) */}
          <circle cx="45" cy="30" r="20" fill="#f42a41" />
        </svg>

        {/* Dynamic Multi-Wave Light & Shadow Simulation Overlay */}
        <div className="absolute inset-0 pointer-events-none bd-flag-ripple-light" />
        <div className="absolute inset-0 pointer-events-none bd-flag-ripple-shadow" />

        {/* Left Hem / Grommet Border */}
        <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-black/25 pointer-events-none" />
      </div>
    </div>
  );
};
