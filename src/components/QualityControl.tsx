import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, FileCheck, Sparkles } from 'lucide-react';

export const QualityControl: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Raw Fiber Inspection',
      desc: 'Rigorous selection of premium golden jute, dried seagrass & kaisa grass to ensure high tensile strength and color uniformity before weaving.',
      slideAnim: 'card-slide-far-left stagger-2'
    },
    {
      num: '02',
      title: 'Precision Weaving Audit',
      desc: 'In-line inspection at every artisan workstation. Frame structural integrity, weave density, and dimensional accuracy checked against OEM specs.',
      slideAnim: 'card-slide-left stagger-1'
    },
    {
      num: '03',
      title: 'Moisture & Anti-Mold Control',
      desc: 'Heat-dry chamber treatment keeping moisture content strictly below 12%, preventing mold growth during long-haul sea freight shipment.',
      slideAnim: 'card-slide-right stagger-1'
    },
    {
      num: '04',
      title: 'Pre-Shipment QA & Packaging',
      desc: 'Final AQL 2.5 sampling inspection, drop tests, master carton barcode labelling, and moisture desiccant pouch inclusion.',
      slideAnim: 'card-slide-far-right stagger-2'
    }
  ];

  const specsList = [
    'Strict AQL 2.5 Quality Standards',
    'Moisture level monitored under 12%',
    'Heavy-metal free, Azo-free color dyes',
    'Custom OEM/ODM sample delivery in 7-10 days',
    'FSC certified packaging cartons',
    '100% pre-export inspection reports provided'
  ];

  return (
    <section id="quality" className="bg-amber-50/60 py-20 border-b border-amber-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with reveal-up */}
        <div className="text-center reveal-up">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Standards & Audits</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-stone-900 uppercase">
            QUALITY ASSURANCE
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Our multi-stage quality control system ensures that every handicraft item shipped meets international retail compliance.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* 4-Stage Quality Process with Middle-Outward Card Slide */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className={`${step.slideAnim} hover-lift relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md border border-amber-900/10 hover:shadow-xl transition-all`}
              >
                <div>
                  <span className="font-serif text-3xl font-extrabold text-amber-600/30">
                    {step.num}
                  </span>
                  <h3 className="mt-2 font-serif text-base font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified Compliance
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance checklist card with reveal-scale */}
        <div className="reveal-scale mt-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                <Award className="h-3.5 w-3.5" />
                Guaranteed Quality Level
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Export Compliance Standards
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl font-light">
                We provide third-party inspection support (SGS, Intertek, Bureau Veritas) and comprehensive factory audit credentials for international buyers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 w-full lg:w-auto">
              {specsList.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-xs text-xs font-medium text-amber-100">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
