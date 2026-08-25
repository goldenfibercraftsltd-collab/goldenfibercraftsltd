import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

interface CertificateItem {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  code?: string;
}

const DEFAULT_CERTIFICATES: CertificateItem[] = [
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management System',
    image: '/certificates/cert1.png',
    code: 'Certified Green Facility'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    image: '/certificates/cert2.png',
    code: 'Zero-Defect Export Standard'
  },
  {
    id: 'bsci',
    title: 'amfori BSCI Member',
    subtitle: 'Business Social Compliance Initiative',
    image: '/certificates/cert3.png',
    code: 'Ethical Workplace Audited'
  },
  {
    id: 'oeko-tex',
    title: 'OEKO-TEX® Standard 100',
    subtitle: 'Tested for Harmful Substances',
    image: '/certificates/cert4.png',
    code: 'Non-Toxic Tested Textiles'
  },
  {
    id: 'fsc',
    title: 'FSC® Certified',
    subtitle: 'Chain of Custody (FSC-C154820)',
    image: '/certificates/cert1.png',
    code: 'Responsible Forest Sourcing'
  },
  {
    id: 'gcl',
    title: 'GCL International',
    subtitle: 'Accredited Compliance Partner',
    image: '/certificates/cert2.png',
    code: 'International Quality Audit'
  }
];

export const HomeCertificates: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateItem[]>(DEFAULT_CERTIFICATES);

  useEffect(() => {
    fetch('/api/certificates')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.certificates) && data.certificates.length > 0) {
          const loaded = data.certificates.map((c: any) => ({
            id: c.id,
            title: c.title || c.name,
            subtitle: c.issuer || c.subtitle || 'Quality & Compliance Standard',
            image: c.image_url || c.image || '/certificates/cert1.png',
            code: c.code || 'Export Certified Standard'
          }));
          setCertificates([...loaded, ...DEFAULT_CERTIFICATES.slice(loaded.length)]);
        }
      })
      .catch(() => {});
  }, []);

  // Multiply items for an endless, uninterrupted single-line ticker
  const tickerItems = [...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <section id="certificates" className="bg-[#fcfbf9] py-10 sm:py-14 border-t border-stone-200/80 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 reveal-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/80 border border-amber-300 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-amber-950 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-amber-800" />
            <span>OFFICIAL COMPLIANCE</span>
          </div>
          
          <ScrollTypingText
            as="h2"
            text="Factory Certificates & Compliance"
            className="font-serif text-2xl sm:text-3xl font-extrabold text-black tracking-tight"
            speed={35}
          />
          
          <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
            Internationally verified environmental, social, and quality certifications guaranteed for global export shipments.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-amber-600 mt-2" />
        </div>

      </div>

      {/* Infinite Right-to-Left Continuous Single-Line Certificates Marquee Track */}
      <div className="relative w-full mt-8 overflow-hidden py-3">
        
        {/* Subtle Gradient Fade on Left & Right Edges for Smooth Look */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#fcfbf9] via-[#fcfbf9]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#fcfbf9] via-[#fcfbf9]/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Smooth Ticker */}
        <div className="flex items-center w-full overflow-hidden group">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
            {tickerItems.map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                className="w-[250px] sm:w-[280px] shrink-0 rounded-2xl bg-white p-4 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-amber-500/60 transition-all duration-300 flex items-center gap-3.5 group/card cursor-pointer"
              >
                {/* Certificate Image Container */}
                <div className="h-16 w-16 shrink-0 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center p-2 overflow-hidden group-hover/card:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 space-y-0.5 text-left">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 truncate max-w-full">
                    {cert.code}
                  </span>
                  <h3 className="font-serif text-xs sm:text-sm font-extrabold text-black truncate pt-0.5">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-stone-600 font-medium truncate leading-tight">
                    {cert.subtitle}
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
