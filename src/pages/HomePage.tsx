import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { ProductShowcase } from '../components/ProductShowcase';
import { HomeCertificates } from '../components/HomeCertificates';
import { usePageTitle, DEFAULT_HOME_DESCRIPTION } from '../utils/usePageTitle';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onOpenInfoModal?: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
}) => {
  usePageTitle('Home', undefined, DEFAULT_HOME_DESCRIPTION);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Auto Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* Primary Brand Introduction & Crawlable Heading for Google Search */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Golden Fiber Crafts Ltd
        </h1>
        <h2 className="text-sm sm:text-base text-amber-800 font-medium mt-1">
          Jute &amp; Natural Fiber Handicraft Manufacturer &amp; Exporter
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-4xl mx-auto mt-2 leading-relaxed">
          Golden Fiber Crafts Ltd. (GFCL) is a Bangladesh-based manufacturer and exporter of natural, biodegradable, and sustainably crafted lifestyle products, specializing in jute, seagrass, hogla, water hyacinth, and other natural fibers. We develop beautiful, functional, and customizable products for international B2B buyers and private-label collections.
        </p>
      </section>

      {/* 2. Clean 1:1 Interactive Filterable Product Showcase */}
      <ProductShowcase
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 3. Moving Right-to-Left Continuous Certificates Ticker */}
      <HomeCertificates />
    </div>
  );
};
