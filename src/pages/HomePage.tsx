import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { Features } from '../components/Features';
import { ProductCategories } from '../components/ProductCategories';
import { TopProductsShowcase } from '../components/TopProductsShowcase';
import { ProductionFacilities } from '../components/ProductionFacilities';
import { GlobalClients } from '../components/GlobalClients';
import { Sustainability } from '../components/Sustainability';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  onSelectProduct,
  onOpenInfoModal,
}) => {
  const navigate = useNavigate();

  const handleSelectCategory = (catId: string) => {
    navigate(`/products?category=${catId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Auto 5-Second Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Key Corporate Highlights */}
      <Features onOpenModal={onOpenInfoModal} />

      {/* 3. Product Categories Breakdown */}
      <ProductCategories
        products={PRODUCTS}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Top 10 Showcase */}
      <TopProductsShowcase
        products={PRODUCTS}
        onSelectProduct={onSelectProduct}
      />

      {/* 5. Production Facilities */}
      <ProductionFacilities />

      {/* 6. Sustainability & Compliance */}
      <Sustainability />

      {/* 7. Global Clients */}
      <GlobalClients />
    </div>
  );
};
