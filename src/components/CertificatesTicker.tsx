import React from 'react';

// Authentic Official Certification Logos matching industrial export standards
const FscLogo: React.FC = () => (
  <div className="flex items-center gap-1.5 shrink-0">
    <svg className="h-10 w-auto" viewBox="0 0 110 80" fill="none">
      {/* FSC Tree Logo */}
      <path
        d="M26 12C21 21 15 32 10 40l-7-7-3 8 15 15c7-9 15-22 21-31l-10-13z"
        fill="#1b4d3e"
      />
      <path
        d="M25 45c-2-2-6-3-9-3-6 0-10 3-10 7 0 5 4 7 9 8 6 1 11 4 11 9 0 7-6 10-13 10-5 0-10-2-12-5l3-4c2 3 6 4 9 4 4 0 7-2 7-5 0-4-4-6-9-7-6-2-11-4-11-10 0-6 5-9 13-9 4 0 9 1 11 3l-1 5z"
        fill="#1b4d3e"
      />
      {/* Official Text Typography */}
      <text x="36" y="32" fill="#1b4d3e" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5">FSC</text>
      <text x="36" y="47" fill="#4b5563" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="9">www.fsc.org</text>
      <text x="36" y="60" fill="#6b7280" fontFamily="Arial, Helvetica, sans-serif" fontWeight="500" fontSize="8">FSC-C154820</text>
    </svg>
  </div>
);

const ForestryLogo: React.FC = () => (
  <div className="flex items-center gap-2 shrink-0">
    <div className="flex flex-col items-center">
      <span className="text-[7.5px] font-bold text-stone-500 uppercase tracking-tight -mb-0.5">The mark of responsible forestry</span>
      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-emerald-600/50 bg-emerald-50/60 shadow-2xs">
        <svg className="h-7 w-7 shrink-0" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2.2" fill="#f0fdf4" />
          <path d="M20 7l5 7h-3l4 7h-4l5 8H10l5-8h-4l4-7h-3l5-7z" fill="#15803d" />
          <circle cx="20" cy="20" r="13" stroke="#15803d" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        </svg>
        <div className="text-left leading-none pr-1">
          <span className="block text-[8px] font-black text-emerald-900 tracking-wider">CERTIFIED</span>
          <span className="block text-[6.5px] font-bold text-emerald-700">SCS GLOBAL</span>
        </div>
      </div>
    </div>
  </div>
);

const OekoTexLogo: React.FC = () => (
  <div className="flex items-center justify-center shrink-0">
    <svg className="h-10 w-10 sm:h-11 sm:w-11" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="27" stroke="#0d9488" strokeWidth="2.5" fill="#f0fdfa" />
      <circle cx="30" cy="30" r="23" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 2" />
      <text x="30" y="23" textAnchor="middle" fill="#0f766e" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="7.5" letterSpacing="0.8">OEKO</text>
      <text x="30" y="31" textAnchor="middle" fill="#0f766e" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="7.5" letterSpacing="0.8">TEX ®</text>
      <rect x="13" y="35" width="34" height="11" rx="3.5" fill="#0d9488" />
      <text x="30" y="43" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="6">STANDARD 100</text>
    </svg>
  </div>
);

const GclLogo: React.FC = () => (
  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-[#004b93] text-white p-1 shadow-xs border border-blue-900 shrink-0">
    <div className="text-center leading-tight">
      <span className="block font-black text-xs sm:text-sm tracking-wider">GCL</span>
      <span className="block text-[5.5px] font-bold tracking-widest text-blue-200 uppercase">International</span>
    </div>
  </div>
);

const ClLogo: React.FC = () => (
  <div className="flex h-10 items-center justify-center px-3 py-1 rounded-lg bg-stone-900 text-white shadow-xs border border-stone-800 shrink-0">
    <span className="font-black text-sm sm:text-base tracking-wider text-amber-400">CL</span>
    <span className="ml-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-stone-200 uppercase">International</span>
  </div>
);

export const CertificatesTicker: React.FC = () => {
  const certItems = [
    {
      component: <ClLogo />,
      name: 'CL International',
      sub: 'Export Verification Standard'
    },
    {
      component: <FscLogo />,
      name: 'FSC® Certified',
      sub: 'Chain of Custody (FSC-C154820)'
    },
    {
      component: <ForestryLogo />,
      name: 'Responsible Forestry',
      sub: 'SCS Global Services Certified'
    },
    {
      component: <OekoTexLogo />,
      name: 'OEKO-TEX® Standard 100',
      sub: 'Confidence in Tested Textiles'
    },
    {
      component: <GclLogo />,
      name: 'GCL International',
      sub: 'Accredited Compliance Partner'
    }
  ];

  return (
    <section className="w-full bg-white py-5 sm:py-6 border-y border-stone-300/80 overflow-hidden font-sans select-none shadow-xs">
      <div className="relative w-full overflow-hidden">
        
        {/* Continuous Slow Marquee Scrolling Row */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap">
          {[...certItems, ...certItems, ...certItems, ...certItems, ...certItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 sm:gap-4 py-1.5 px-3 rounded-xl hover:bg-stone-100/80 transition-colors"
            >
              {/* Real Official Badge Icon */}
              {item.component}

              {/* Title & Sub */}
              <div className="text-left">
                <span className="block font-serif text-sm sm:text-base font-bold text-stone-900 tracking-tight">
                  {item.name}
                </span>
                <span className="block text-[10.5px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
