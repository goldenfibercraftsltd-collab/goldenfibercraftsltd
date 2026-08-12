import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, FileCheck, Sparkles } from 'lucide-react';

export const QualityControl: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Raw Fiber Inspection',
      desc: 'Rigorous selection of premium golden jute, dried seagrass & kaisa grass to ensure high tensile strength and color uniformity before weaving.'
    },
    {
      num: '02',
      title: 'Precision Weaving Audit',
      desc: 'In-line inspection at every artisan workstation. Frame structural integrity, weave density, and dimensional accuracy checked against OEM specs.'
    },
    {
      num: '03',
      title: 'Moisture & Anti-Mold Control',
      desc: 'Heat-dry chamber treatment keeping moisture content strictly below 12%, preventing mold growth during long-haul sea freight shipment.'
    },
    {
      num: '04',
      title: 'Pre-Shipment QA & Packaging',
      desc: 'Final AQL 2.5 sampling inspection, drop tests, master carton barcode labelling, and moisture desiccant pouch inclusion.'
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

        {/* 4-Stage Quality Process with Staggered Reveals */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const staggerClass = `stagger-${idx + 1}`;
            return (
              <div
                key={idx}
                className={`reveal-up ${staggerClass} hover-lift relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md border border-amber-900/10 hover:shadow-xl transition-all`}
              >
                <div>
                  <span className="font-serif text-3xl font-extrabold text-amber-600/30">{step.num}</span>
                  <h3 className="mt-2 font-serif text-lg font-bold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed font-light">{step.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-amber-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" /> Passed Stage
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Card with reveal-scale */}
        <div className="reveal-scale mt-12 rounded-3xl bg-white p-8 shadow-xl border border-amber-900/10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
              <Award className="h-4 w-4" /> Global Compliance & Testing
            </div>
            <h3 className="mt-2 font-serif text-2xl font-bold text-stone-900">
              Export Grade Guarantee for Global Retail Chains
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Golden Fiber Crafts Ltd adheres to stringent global buyer requirements. We provide complete transparency with pre-shipment sample testing, material compliance datasheets, and custom barcoded packaging.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-lg bg-amber-100/80 px-3 py-1.5 text-xs font-bold text-amber-900 border border-amber-800/20">
                BSCI Compliant Standards
              </div>
              <div className="rounded-lg bg-amber-100/80 px-3 py-1.5 text-xs font-bold text-amber-900 border border-amber-800/20">
                SEDEX Ethical Supply
              </div>
              <div className="rounded-lg bg-amber-100/80 px-3 py-1.5 text-xs font-bold text-amber-900 border border-amber-800/20">
                REACH Chemical Safe
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-amber-950 p-6 text-white space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-400 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Quality Checklist Highlights
            </h4>
            <div className="space-y-2">
              {specsList.map((spec, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs text-stone-200">
                  <FileCheck className="h-4 w-4 shrink-0 text-amber-400" />
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
