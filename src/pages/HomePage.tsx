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
      <h1 className="sr-only">Golden Fiber Crafts Ltd. | Jute &amp; Natural Fiber Handicraft Manufacturer</h1>

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
