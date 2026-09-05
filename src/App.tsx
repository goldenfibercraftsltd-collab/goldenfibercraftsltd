import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { QualityControlPage } from './pages/QualityControlPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { TermsPage } from './pages/TermsPage';
import { FaqPage } from './pages/FaqPage';
import { QuoteModal } from './components/QuoteModal';
import { InfoModal } from './components/InfoModal';

// Context Providers
import { CartProvider } from './context/CartContext';
import { UserAuthProvider } from './context/UserAuthContext';

// Admin Pages
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminProductForm } from './pages/admin/AdminProductForm';
import { AdminCategories } from './pages/admin/AdminCategories';
import { AdminClients } from './pages/admin/AdminClients';
import { AdminCertificates } from './pages/admin/AdminCertificates';
import { AdminBanners } from './pages/admin/AdminBanners';
import { AdminInquiries } from './pages/admin/AdminInquiries';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminPageSections } from './pages/admin/AdminPageSections';

import { initScrollReveal } from './utils/scrollReveal';
import { SmoothScrollProvider } from './components/SmoothScroll';
import { formatPageTitle, setPageTitle } from './utils/usePageTitle';

export const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Dynamic Browser Tab / Falcon Title Manager based on current page
  React.useEffect(() => {
    const p = location.pathname;
    if (p === '/') {
      setPageTitle('Home');
    } else if (p === '/about') {
      document.title = formatPageTitle('About Us');
    } else if (p === '/products') {
      document.title = formatPageTitle('Our Products');
    } else if (p === '/cart') {
      document.title = formatPageTitle('Inquiry Cart');
    } else if (p === '/materials' || p === '/handicrafts-material') {
      document.title = formatPageTitle('Raw Materials & Natural Fibers');
    } else if (p === '/infrastructure') {
      document.title = formatPageTitle('Manufacturing Infrastructure');
    } else if (p === '/sustainability') {
      document.title = formatPageTitle('Sustainability & Eco-Impact');
    } else if (p === '/quality') {
      document.title = formatPageTitle('Quality Control & Standards');
    } else if (p === '/clients') {
      document.title = formatPageTitle('Global Clients & Export');
    } else if (p === '/contact') {
      document.title = formatPageTitle('Contact Us');
    } else if (p === '/terms' || p === '/terms-conditions') {
      document.title = formatPageTitle('Terms & Conditions');
    } else if (p === '/faq') {
      document.title = formatPageTitle('Frequently Asked Questions');
    } else if (p === '/admin/login') {
      document.title = formatPageTitle('Admin Login');
    } else if (p === '/admin' || p === '/admin/dashboard') {
      document.title = formatPageTitle('Admin Dashboard');
    } else if (p === '/admin/products') {
      document.title = formatPageTitle('Manage Products - Admin');
    } else if (p === '/admin/products/new') {
      document.title = formatPageTitle('Add Product - Admin');
    } else if (p.startsWith('/admin/products/edit')) {
      document.title = formatPageTitle('Edit Product - Admin');
    } else if (p === '/admin/categories') {
      document.title = formatPageTitle('Manage Categories - Admin');
    } else if (p === '/admin/clients') {
      document.title = formatPageTitle('Manage Clients - Admin');
    } else if (p === '/admin/certificates') {
      document.title = formatPageTitle('Manage Certificates - Admin');
    } else if (p === '/admin/banners') {
      document.title = formatPageTitle('Banner Management - Admin');
    } else if (p === '/admin/inquiries') {
      document.title = formatPageTitle('Inquiries - Admin');
    } else if (p === '/admin/settings') {
      document.title = formatPageTitle('Admin Settings');
    }
  }, [location.pathname]);

  // Trigger high-performance scroll reveal on route change
  React.useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, [location.pathname]);

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductCode, setSelectedProductCode] = useState<string | undefined>(undefined);
  const [selectedQuoteData, setSelectedQuoteData] = useState<any>(undefined);

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState({ title: '', content: '' });

  const handleOpenQuoteModal = (productCodeOrData?: string | any) => {
    if (typeof productCodeOrData === 'object' && productCodeOrData !== null) {
      setSelectedQuoteData(productCodeOrData);
      setSelectedProductCode(productCodeOrData.productCode);
    } else {
      setSelectedProductCode(productCodeOrData);
      setSelectedQuoteData(productCodeOrData ? { productCode: productCodeOrData } : undefined);
    }
    setQuoteModalOpen(true);
  };

  const handleOpenInfoModal = (title: string, content: string) => {
    setInfoModalData({ title, content });
    setInfoModalOpen(true);
  };

  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/new" element={<AdminProductForm />} />
        <Route path="/admin/products/edit/:id" element={<AdminProductForm />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/certificates" element={<AdminCertificates />} />
        <Route path="/admin/banners" element={<AdminBanners />} />
        <Route path="/admin/sections" element={<AdminPageSections />} />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    );
  }

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
                onOpenInfoModal={handleOpenInfoModal}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/products"
            element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/categories/:categorySlug"
            element={<CategoryPage onOpenQuoteModal={() => handleOpenQuoteModal()} />}
          />
          <Route
            path="/products/:productSlug"
            element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/handicrafts-material" element={<MaterialsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/quality" element={<QualityControlPage />} />
          <Route path="/clients" element={<ClientsPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductCode={selectedProductCode}
        initialData={selectedQuoteData}
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

export const App: React.FC = () => {
  return (
    <UserAuthProvider>
      <CartProvider>
        <SmoothScrollProvider>
          <AppContent />
        </SmoothScrollProvider>
      </CartProvider>
    </UserAuthProvider>
  );
};

export default App;
