import React from 'react';
import { HeroBannerCarousel } from '../components/HeroBannerCarousel';
import { Features } from '../components/Features';
import { ProductCategories } from '../components/ProductCategories';
import { ProductShowcase } from '../components/ProductShowcase';
import { TopProductsShowcase } from '../components/TopProductsShowcase';
import { ProductionFacilities } from '../components/ProductionFacilities';
import { GlobalClients } from '../components/GlobalClients';
import { Sustainability } from '../components/Sustainability';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onOpenQuoteModal: (productCode?: string) => void;
  onSelectProduct: (product: any) => void;
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
      {/* 1. Header Auto 3-Second Banner Carousel */}
      <HeroBannerCarousel onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Key Corporate Highlights */}
      <Features onOpenModal={onOpenInfoModal} />

      {/* 3. Product Categories Breakdown */}
      <ProductCategories
        products={PRODUCTS}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Interactive Filterable Product Showcase (Matching Reference Design) */}
      <ProductShowcase
        products={PRODUCTS}
        onSelectProduct={onSelectProduct}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 5. Top 10 Showcase */}
      <TopProductsShowcase
        products={PRODUCTS}
        onSelectProduct={onSelectProduct}
      />

      {/* 6. Production Facilities */}
      <ProductionFacilities />

      {/* 7. Sustainability & Compliance */}
      <Sustainability />

      {/* 8. Global Clients */}
      <GlobalClients />
    </div>
  );
};
