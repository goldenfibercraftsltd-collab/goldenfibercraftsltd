import React from 'react';
import { Globe, Mail, BarChart3, Rocket, ChevronRight } from 'lucide-react';

interface FeaturesProps {
  onOpenModal: (title: string, content: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenModal }) => {
  const features = [
    {
      icon: Globe,
      title: 'GLOBAL CLIENTS',
      description: 'Trusted by leading retail brands, wholesalers, and buying houses across Europe, Americas, Australia, and Asia.',
      detail: 'Golden Fiber Crafts Ltd. exports premium sustainable natural fiber crafts to over 20+ countries, complying with strict international eco-compliance standards.'
    },
    {
      icon: Mail,
      title: 'MESSAGE FROM MD',
      description: 'We are committed to quality, ethical artisan empowerment, and long-term transparent partnerships with every buyer.',
      detail: 'Our mission is to bridge traditional Bangladeshi craftsmanship with contemporary global design, delivering top quality while maintaining sustainable rural livelihoods.'
    },
    {
      icon: BarChart3,
      title: 'COMPANY PROFILE',
      description: 'A 1-stop eco solution — baskets, planters, jute bags, placemats, and bamboo crafts under one manufacturing umbrella.',
      detail: 'Equipped with dedicated artisan clusters, quality inspection units, and eco-friendly dye houses, we guarantee high capacity with zero compromise on quality.'
    },
    {
      icon: Rocket,
      title: 'VISION & MISSION',
      description: 'To be Bangladesh’s premier sustainable crafts exporter — driven by innovation, artisan dignity, and customer success.',
      detail: 'We strive to innovate in natural fiber weaving, reduce carbon footprint, and provide customizable OEM/ODM production for global markets.'
    }
  ];

  return (
    <section id="about" className="bg-amber-100/40 py-16 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">About Us</span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-stone-900 uppercase">
            GOLDEN FIBER CRAFTS LTD.
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-amber-600" />
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-amber-900/10"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold tracking-wider text-stone-900 uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenModal(item.title, item.detail)}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900 group-hover:translate-x-1 transition-all"
                >
                  Read more <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
