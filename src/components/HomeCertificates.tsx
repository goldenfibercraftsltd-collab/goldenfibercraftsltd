import React from 'react';
import { Award } from 'lucide-react';
import { ScrollTypingText } from './ScrollTypingText';

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  code: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 'iso-14001',
    title: 'ISO 14001',
    subtitle: 'Environmental Management System',
    image: '/certificates/cert1.png',
    code: 'Certified Green Facility'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001 : 2015',
    subtitle: 'Quality Management System',
    image: '/certificates/cert2.png',
    code: 'Zero-Defect Export Standard'
  },
  {
    id: 'bsci',
    title: 'BSCI Member',
    subtitle: 'Business Social Compliance Initiative',
    image: '/certificates/cert3.png',
    code: 'Ethical Workplace Audited'
  },
  {
    id: 'oeko-tex',
    title: 'OEKO-TEX®',
    subtitle: 'STANDARD 100 Certified',
    image: '/certificates/cert4.png',
    code: 'Non-Toxic Tested Textiles'
  }
];

export const HomeCertificates: React.FC = () => {
  return (
    <section id="certificates" className="bg-[#fcfbf9] py-12 sm:py-16 border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching PPT slide style */}
        <div className="text-center max-w-2xl mx-auto space-y-2 reveal-up">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/80 border border-amber-300 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-amber-950 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-amber-800" />
            <span>OFFICIAL COMPLIANCE</span>
          </div>
          
          <ScrollTypingText
            as="h2"
            text="Factory Certificates & Compliance"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight"
            speed={35}
          />
          
          <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">
            Authentic international quality, environmental, and social compliance certifications from Golden Fiber Crafts Ltd. corporate portfolio.
          </p>
          <div className="mx-auto h-1 w-16 rounded-full bg-amber-600 mt-2" />
        </div>

        {/* 4 Clean HD Certificate Cards in Exact PPT Slide Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {CERTIFICATES.map((cert, idx) => {
            const slideAnim =
              idx === 0
                ? 'card-slide-far-left stagger-2'
                : idx === 1
                ? 'card-slide-left stagger-1'
                : idx === 2
                ? 'card-slide-right stagger-1'
                : 'card-slide-far-right stagger-2';

            return (
              <div
                key={cert.id}
                className={`${slideAnim} hover-lift group rounded-2xl bg-white p-5 border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center`}
              >
                {/* Clean HD Image Container */}
                <div className="h-36 w-full rounded-xl bg-stone-50/80 border border-stone-100 flex items-center justify-center p-3 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Certificate Details */}
                <div className="mt-4 space-y-1 w-full">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    {cert.code}
                  </span>
                  <h3 className="font-serif text-base font-extrabold text-black pt-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-stone-900 font-semibold leading-snug">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomeCertificates;
