import React from 'react';
import { Hero } from '../components/Hero';
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

  const handleExploreProducts = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string) => {
    navigate(`/products?category=${catId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16">
      <Hero
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onExploreProducts={handleExploreProducts}
      />
      <Features onOpenModal={onOpenInfoModal} />
      <ProductCategories
        products={PRODUCTS}
        onSelectCategory={handleSelectCategory}
      />
      <TopProductsShowcase
        products={PRODUCTS}
        onSelectProduct={onSelectProduct}
      />
      <ProductionFacilities />
      <Sustainability />
      <GlobalClients />
    </div>
  );
};
