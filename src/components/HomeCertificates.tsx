import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  sub: string;
  code: string;
  image: string;
}

const OFFICIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015',
    sub: 'Environmental Management System',
    code: 'Certified Green Facility',
    image: '/certificates/cert1.png'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    sub: 'Quality Management System',
    code: 'Zero-Defect Export Standard',
    image: '/certificates/cert2.png'
  },
  {
    id: 'bsci',
    title: 'amfori BSCI Member',
    sub: 'Business Social Compliance Initiative',
    code: 'Ethical Workplace Audited',
    image: '/certificates/cert3.png'
  },
  {
    id: 'oeko-tex',
    title: 'OEKO-TEX® Standard 100',
    sub: 'Tested for Harmful Substances',
    code: 'Non-Toxic Tested Textiles',
    image: '/certificates/cert4.png'
  }
];

export const HomeCertificates: React.FC = () => {
  // Multiply the 4 authentic certificates for seamless infinite scrolling loop
  const tickerItems = [
    ...OFFICIAL_CERTIFICATES,
    ...OFFICIAL_CERTIFICATES,
    ...OFFICIAL_CERTIFICATES,
    ...OFFICIAL_CERTIFICATES,
    ...OFFICIAL_CERTIFICATES
  ];

  return (
    <section id="certificates" className="bg-[#fcfbf9] py-12 sm:py-16 border-t border-stone-200/80 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/80 border border-amber-300 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-amber-950 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-amber-800" />
            <span>OFFICIAL COMPLIANCE</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight">
            Factory Certificates & Compliance
          </h2>
          
          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
            Internationally verified environmental, social, and quality certifications guaranteed for global export shipments.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-amber-600 mt-2" />
        </div>

      </div>

      {/* Infinite Right-to-Left Continuous Single-Line Certificates Marquee Track */}
      <div className="relative w-full mt-10 overflow-hidden py-4">
        
        {/* Subtle Gradient Fade on Left & Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#fcfbf9] via-[#fcfbf9]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#fcfbf9] via-[#fcfbf9]/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Smooth Ticker */}
        <div className="flex items-center w-full overflow-hidden group">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2">
            {tickerItems.map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                className="w-[260px] sm:w-[290px] shrink-0 rounded-2xl bg-white p-5 border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col items-center text-center group/card cursor-pointer"
              >
                {/* Certificate Authentic Image Frame */}
                <div className="h-44 sm:h-48 w-full rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-center p-3 overflow-hidden shadow-2xs group-hover/card:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="mt-4 space-y-1 w-full">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    {cert.code}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-extrabold text-black pt-1 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-semibold truncate">
                    {cert.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default HomeCertificates;
