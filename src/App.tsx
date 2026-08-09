import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { QualityControlPage } from './pages/QualityControlPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { InfoModal } from './components/InfoModal';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductCode, setSelectedProductCode] = useState<string | undefined>(undefined);

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState({ title: '', content: '' });

  const handleOpenQuoteModal = (productCode?: string) => {
    setSelectedProductCode(productCode);
    setQuoteModalOpen(true);
  };

  const handleOpenInfoModal = (title: string, content: string) => {
    setInfoModalData({ title, content });
    setInfoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Navigation Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content View with React Router */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectProduct={(p) => handleOpenQuoteModal(p.id)}
                onOpenInfoModal={handleOpenInfoModal}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/products"
            element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          {/* Distinct Category Page matching Screenshot 1 */}
          <Route
            path="/categories/:categorySlug"
            element={<CategoryPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          {/* Distinct Product Detail Page matching Screenshot 2 */}
          <Route
            path="/products/:productSlug"
            element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/quality" element={<QualityControlPage />} />
          <Route
            path="/clients"
            element={<ClientsPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductCode={selectedProductCode}
      />
      
      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        title={infoModalData.title}
        content={infoModalData.content}
      />

    </div>
  );
};

export default App;
