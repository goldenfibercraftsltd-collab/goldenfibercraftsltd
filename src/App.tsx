import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductionFacilities } from './components/ProductionFacilities';
import { ProductionLine } from './components/ProductionLine';
import { TopProductsShowcase } from './components/TopProductsShowcase';
import { ProductCategories } from './components/ProductCategories';
import { CategoryFilter } from './components/CategoryFilter';
import { Sustainability } from './components/Sustainability';
import { QualityControl } from './components/QualityControl';
import { GlobalClients } from './components/GlobalClients';
import { FloatingContact } from './components/FloatingContact';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product } from './types/product';
import { X } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProductCode, setQuoteProductCode] = useState<string>('');
  const [activeSection, setActiveSection] = useState('home');

  // Filter state for catalog
  const [catalogCategory, setCatalogCategory] = useState<string>('all');
  const [catalogQuery, setCatalogQuery] = useState<string>('');

  // Generic info modal state
  const [infoModal, setInfoModal] = useState<{ title: string; content: string } | null>(null);

  const handleOpenQuoteModal = (productCode?: string) => {
    setQuoteProductCode(productCode || '');
    setQuoteModalOpen(true);
  };

  const handleExploreProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromGrid = (catId: string, query?: string) => {
    setCatalogCategory(catId);
    setCatalogQuery(query || '');
  };

  // ScrollSpy active section tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'infrastructure', 'sustainability', 'quality', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-stone-800 font-sans selection:bg-amber-700 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreProducts={handleExploreProducts}
        />

        {/* 2. Features Grid (Global Clients, MD Message, Company Profile, Vision) */}
        <Features
          onOpenModal={(title, content) => setInfoModal({ title, content })}
        />

        {/* 3. Infrastructure & Production Facilities */}
        <ProductionFacilities />

        {/* 4. Production Line (3x3 Grid with Zoom overlay) */}
        <ProductionLine
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 5. Top 10 Products Showcase Carousel */}
        <TopProductsShowcase
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* 6. Product Categories Grid (Interactive Hover Reveal matching TrimsArt design) */}
        <ProductCategories
          products={PRODUCTS}
          onSelectCategory={handleSelectCategoryFromGrid}
        />

        {/* 7. Full Product Collection Catalog & Category Filter */}
        <CategoryFilter
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          selectedCategory={catalogCategory}
          onCategoryChange={setCatalogCategory}
          searchQuery={catalogQuery}
          onSearchChange={setCatalogQuery}
        />

        {/* 7. Sustainability & Social Impact */}
        <Sustainability />

        {/* 8. Quality Control & Assurance */}
        <QualityControl />

        {/* 9. Global Clients & Export Reach */}
        <GlobalClients />

      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Contact Widget */}
      <FloatingContact onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductCode={quoteProductCode}
      />

      {/* Info Detail Modal */}
      {infoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-amber-900/10">
            <button
              onClick={() => setInfoModal(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-serif text-xl font-bold text-amber-950 uppercase">{infoModal.title}</h3>
            <div className="mt-2 h-0.5 w-12 bg-amber-600 rounded-full" />
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">{infoModal.content}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setInfoModal(null)}
                className="rounded-xl bg-amber-800 px-5 py-2.5 text-xs font-semibold text-white shadow hover:bg-amber-700"
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
