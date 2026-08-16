import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { ProductShowcase } from '../components/ProductShowcase';
import { GlobalClients } from '../components/GlobalClients';
import { PRODUCTS } from '../data/products';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onSelectProduct: (product: any) => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  onSelectProduct,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Auto 3-Second Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Clean 1:1 Interactive Filterable Product Showcase */}
      <ProductShowcase
        products={PRODUCTS}
        onSelectProduct={onSelectProduct}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 3. Global Clients */}
      <GlobalClients />
    </div>
  );
};
