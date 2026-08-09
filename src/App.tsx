import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './types/product';
import { X } from 'lucide-react';

// Distinct Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { QualityControlPage } from './pages/QualityControlPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProductCode, setQuoteProductCode] = useState<string>('');
  const [infoModal, setInfoModal] = useState<{ title: string; content: string } | null>(null);

  const handleOpenQuoteModal = (productCode?: string) => {
    setQuoteProductCode(productCode || '');
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-stone-800 font-sans selection:bg-emerald-700 selection:text-white">
      
      {/* Header with Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectProduct={setSelectedProduct}
                onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                onSelectProduct={setSelectedProduct}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/infrastructure"
            element={
              <InfrastructurePage
                onSelectProduct={setSelectedProduct}
                onOpenQuoteModal={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/quality" element={<QualityControlPage />} />
          <Route
            path="/clients"
            element={<ClientsPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectProduct={setSelectedProduct}
                onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating WhatsApp Contact */}
      <FloatingContact onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductCode={quoteProductCode}
      />

      {/* Generic Info Detail Modal */}
      {infoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-emerald-900/10">
            <button
              onClick={() => setInfoModal(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-serif text-xl font-bold text-emerald-950 uppercase">{infoModal.title}</h3>
            <div className="mt-2 h-0.5 w-12 bg-emerald-600 rounded-full" />
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">{infoModal.content}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setInfoModal(null)}
                className="rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-semibold text-white shadow hover:bg-emerald-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
