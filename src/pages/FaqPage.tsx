import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../utils/usePageTitle';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Ordering & MOQ',
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'Our standard MOQ typically ranges from 100 to 500 pieces per style/size depending on the complexity of the craftsmanship. We also support trial orders for newly developing brands and multi-category combined container shipments (LCL / FCL).'
  },
  {
    category: 'Ordering & MOQ',
    question: 'How do I request a custom sample or prototype?',
    answer: 'You can request samples by contacting our export desk at shafiq@goldenfibercraftsltd.com or via WhatsApp at +8801916-183583. Provide your technical sketches, dimensions, or reference pictures. Sample production generally takes 7 to 12 business days.'
  },
  {
    category: 'Materials & Sustainability',
    question: 'What natural raw materials do you use?',
    answer: 'We exclusively work with 100% biodegradable and renewable natural plant fibers indigenous to Bangladesh, including Golden Jute, Wild Seagrass, Kaisa Grass, Date Palm Leaf, Hogla (Water Hyacinth), Rattan Cane, Bamboo, and Recycled Cotton Fabric.'
  },
  {
    category: 'Materials & Sustainability',
    question: 'Are your products chemical-free and eco-friendly?',
    answer: 'Yes. We utilize azo-free natural dyes, sun-drying techniques, and non-toxic water-based finishes. Our processes comply with REACH, OEKO-TEX Standard 100, and European environmental regulations.'
  },
  {
    category: 'Production & Shipping',
    question: 'What is your standard production lead time for container orders?',
    answer: 'Standard lead times for a 20ft / 40ft High Cube container shipment are 30 to 45 days after deposit confirmation and sample approval.'
  },
  {
    category: 'Production & Shipping',
    question: 'Which ports do you export from?',
    answer: 'We ship primarily via Chittagong Seaport (Chattogram), Bangladesh for seafreight cargo, and Hazrat Shahjalal International Airport (Dhaka) for urgent air shipments.'
  },
  {
    category: 'Compliance & Quality',
    question: 'What quality control standards do you maintain?',
    answer: 'We operate under ISO 9001:2015 Quality Management and ISO 14001 Environmental Management frameworks. Each product batch undergoes strict 4-stage inspection: Raw fiber grade audit, weaving integrity inspection, dimensional checks, and pre-shipment master carton check.'
  },
  {
    category: 'Compliance & Quality',
    question: 'Can you provide private label / OEM branding?',
    answer: 'Yes, we provide full OEM / ODM customization including custom embossed leatherette/jute logo tags, woven brand labels, barcode hangtags, custom packaging boxes, and bespoke buyer specifications.'
  }
];

export const FaqPage: React.FC = () => {
  usePageTitle('Frequently Asked Questions');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Ordering & MOQ', 'Materials & Sustainability', 'Production & Shipping', 'Compliance & Quality'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="bg-[#fcfbf9] min-h-screen py-8 sm:py-12 font-sans text-stone-800 animate-fadeIn">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner */}
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857] p-7 sm:p-9 text-white shadow-xl">
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} 
          />
          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-black uppercase tracking-widest text-emerald-200 border border-white/20">
              <HelpCircle className="h-3 w-3 text-emerald-300" />
              <span>Help Center & FAQ</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
              Find answers to common questions about our export ordering process, materials, sampling, container delivery, and Fair Trade manufacturing.
            </p>
          </div>

          {/* Large Decorative Watermark in Background (Fully Visible) */}
          <div className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
            <img src="/logo-icon.png" alt="Golden Fiber Crafts Ltd." className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 object-contain filter invert drop-shadow-md" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#14532d] text-amber-300 shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-stone-50/80 cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-stone-100 text-stone-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-stone-600 font-normal leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 to-emerald-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-500/20">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-white">Have a specific question or custom inquiry?</h3>
            <p className="text-stone-300 text-xs sm:text-sm font-normal">Our direct export management team will assist you immediately.</p>
          </div>
          <a
            href="https://wa.me/8801916183583?text=Hi%20Golden%20Fiber%20Crafts%20Ltd.,%20I%20have%20an%20inquiry%20regarding%20export%20orders."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default FaqPage;
