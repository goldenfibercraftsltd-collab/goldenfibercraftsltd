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
      {/* Primary SEO Heading for Google Crawlers & Accessibility */}
      <div className="sr-only">
        <h1>Golden Fiber Crafts Ltd</h1>
        <h2>Jute &amp; Natural Fiber Handicraft Manufacturer &amp; Exporter</h2>
        <p>Golden Fiber Crafts Ltd. (GFCL) is a Bangladesh-based manufacturer and exporter of natural, biodegradable, and sustainably crafted lifestyle products, specializing in jute, seagrass, hogla, water hyacinth, and other natural fibers. We develop beautiful, functional, and customizable products for international B2B buyers and private-label collections.</p>
      </div>

      {/* 1. Header Auto Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Clean 1:1 Interactive Filterable Product Showcase */}
      <ProductShowcase
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 3. Moving Right-to-Left Continuous Certificates Ticker */}
      <HomeCertificates />
    </div>
  );
};
