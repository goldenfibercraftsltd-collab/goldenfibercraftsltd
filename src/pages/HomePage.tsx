import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { ProductShowcase } from '../components/ProductShowcase';
import { GlobalClients } from '../components/GlobalClients';
import { HomeCertificates } from '../components/HomeCertificates';
import { PRODUCTS } from '../data/products';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onOpenInfoModal?: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Auto 3-Second Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Clean 1:1 Interactive Filterable Product Showcase */}
      <ProductShowcase
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 3. Global Clients */}
      <GlobalClients />

      {/* 4. Factory Certificates & Compliance (Authentic PPT Slide) */}
      <HomeCertificates />
    </div>
  );
};

