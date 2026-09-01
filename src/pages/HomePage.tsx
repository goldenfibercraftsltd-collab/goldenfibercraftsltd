import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { ProductShowcase } from '../components/ProductShowcase';
import { GlobalClients } from '../components/GlobalClients';
import { HomeCertificates } from '../components/HomeCertificates';
import { PRODUCTS, TAGLINE } from '../data/products';
import { usePageTitle } from '../utils/usePageTitle';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onOpenInfoModal?: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
}) => {
  usePageTitle('Home', TAGLINE);

  return (
    <div className="space-y-12 pb-16">
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

