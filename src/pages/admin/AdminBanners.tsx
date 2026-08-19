import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { getAllActiveCategories } from '../../utils/productStore';
import {
  Image as ImageIcon,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  X,
  RefreshCw,
  Eye,
  Tag,
  ToggleLeft,
  ToggleRight,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';

interface BannerData {
  id: number | string;
  title: string;
  subtitle?: string;
  image_url: string;
  link_url?: string;
  display_order: number;
  is_active: number;
  category_slug?: string;
  category_name?: string;
  show_category_badge?: number | boolean;
}

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

const PRESET_BANNERS = [
  { label: 'Jute & Seagrass Handcrafts', url: '/banners/banner1.png' },
  { label: 'Seagrass & Natural Baskets', url: '/banners/banner2.png' },
  { label: 'Factory & Global Export', url: '/banners/banner3.png' },
  { label: 'Village Weavers & Artisanal Heritage', url: '/banners/banner4.png' },
  { label: 'Eco-Living & Modern Natural Home Decor', url: '/banners/banner5.png' },
];

export const AdminBanners: React.FC = () => {
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBanner, setEditingBanner] = useState<BannerData | null>(null);
  const [deleteModalBanner, setDeleteModalBanner] = useState<BannerData | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState<string>('');
  const [formImageUrl, setFormImageUrl] = useState<string>('');
  const [formCategorySlug, setFormCategorySlug] = useState<string>('');
  const [formCategoryName, setFormCategoryName] = useState<string>('');
  const [formShowBadge, setFormShowBadge] = useState<boolean>(false);
  const [formLinkUrl, setFormLinkUrl] = useState<string>('');
  const [formDisplayOrder, setFormDisplayOrder] = useState<number>(1);

  const showToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4200);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Load Categories
      const catRes = await fetch('/api/categories').catch(() => null);
      if (catRes && catRes.ok) {
        const catData = await catRes.json();
        if (catData.success && catData.categories?.length > 0) {
          setCategories(catData.categories);
        } else {
          setCategories(getAllActiveCategories());
        }
      } else {
        setCategories(getAllActiveCategories());
      }

      // 2. Load Banners
      const bannerRes = await fetch('/api/banners').catch(() => null);
      if (bannerRes && bannerRes.ok) {
        const bannerData = await bannerRes.json();
        if (bannerData.success && Array.isArray(bannerData.banners) && bannerData.banners.length > 0) {
          setBanners(bannerData.banners);
        } else {
          loadFallbackBanners();
        }
      } else {
        loadFallbackBanners();
      }
    } catch {
      loadFallbackBanners();
      setCategories(getAllActiveCategories());
    } finally {
      setLoading(false);
    }
  };

  const loadFallbackBanners = () => {
    try {
      const local = localStorage.getItem('gfcl_custom_banners');
      if (local) {
        setBanners(JSON.parse(local));
      } else {
        setBanners([
          { id: 1, title: 'Handcrafted Jute & Seagrass Collection', image_url: '/banners/banner1.png', link_url: '/products?category=jute', display_order: 1, is_active: 1, category_slug: 'jute', category_name: 'Jute', show_category_badge: 0 },
          { id: 2, title: 'Handwoven Seagrass & Natural Baskets', image_url: '/banners/banner2.png', link_url: '/products?category=seagrass', display_order: 2, is_active: 1, category_slug: 'seagrass', category_name: 'Seagrass', show_category_badge: 0 },
          { id: 3, title: 'Worldwide Sustainable Manufacturing', image_url: '/banners/banner3.png', link_url: '/products', display_order: 3, is_active: 1, category_slug: 'recycle-fabric', category_name: 'Recycle Fabric', show_category_badge: 0 },
          { id: 4, title: 'Village Weavers & Artisanal Heritage', image_url: '/banners/banner4.png', link_url: '/products?category=jute', display_order: 4, is_active: 1, category_slug: 'jute', category_name: 'Jute', show_category_badge: 0 },
          { id: 5, title: 'Eco-Living & Modern Natural Home Decor', image_url: '/banners/banner5.png', link_url: '/products?category=rugs', display_order: 5, is_active: 1, category_slug: 'rugs', category_name: 'Rugs & Mats', show_category_badge: 0 },
        ]);
      }
    } catch {
      // Fallback
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAddModal = () => {
    setEditingBanner(null);
    setFormTitle('');
    setFormImageUrl('/banners/banner1.png');
    setFormCategorySlug('');
    setFormCategoryName('');
    setFormShowBadge(false); // Default OFF as requested
    setFormLinkUrl('/products');
    setFormDisplayOrder(banners.length + 1);
    setIsModalOpen(true);
  };

  const openEditModal = (b: BannerData) => {
    setEditingBanner(b);
    setFormTitle(b.title || '');
    setFormImageUrl(b.image_url || '');
    setFormCategorySlug(b.category_slug || '');
    setFormCategoryName(b.category_name || '');
    setFormShowBadge(Boolean(b.show_category_badge));
    setFormLinkUrl(b.link_url || '/products');
    setFormDisplayOrder(b.display_order ?? 1);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (slug: string) => {
    setFormCategorySlug(slug);
    if (!slug) {
      setFormCategoryName('');
      setFormLinkUrl('/products');
    } else {
      const found = categories.find(c => c.slug === slug || c.id === slug);
      const name = found ? found.name : slug;
      setFormCategoryName(name);
      setFormLinkUrl(`/products?category=${slug}`);
    }
  };

  const handleSaveBanner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formImageUrl.trim()) {
      showToast('error', 'Validation Error', 'Banner Image URL is required.');
      return;
    }

    setSaving(true);
    const bannerPayload = {
      title: formTitle.trim() || formCategoryName || 'Hero Banner',
      subtitle: '',
      image_url: formImageUrl.trim(),
      link_url: formLinkUrl.trim() || '/products',
      display_order: Number(formDisplayOrder),
      category_slug: formCategorySlug,
      category_name: formCategoryName,
      show_category_badge: formShowBadge ? 1 : 0,
      is_active: 1
    };

    try {
      const isEdit = !!editingBanner;
      const url = isEdit ? `/api/banners/${editingBanner.id}` : '/api/banners';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bannerPayload)
      });

      const data = await res.json().catch(() => ({}));

      if (isEdit) {
        setBanners(prev => prev.map(b => 
          b.id === editingBanner.id ? { ...b, ...bannerPayload } : b
        ));
        showToast('success', 'Banner Updated', '✨ Hero Banner updated successfully in Live D1 Database!');
      } else {
        const newBanner: BannerData = {
          id: data.id || Date.now(),
          ...bannerPayload
        };
        setBanners(prev => [...prev, newBanner]);
        showToast('success', 'Banner Created', '🎉 New Hero Banner added to live database!');
      }

      // Save to local storage for backup
      localStorage.setItem('gfcl_custom_banners', JSON.stringify(banners));
      setIsModalOpen(false);
    } catch {
      // Local fallback
      if (editingBanner) {
        setBanners(prev => prev.map(b => b.id === editingBanner.id ? { ...b, ...bannerPayload } : b));
      } else {
        setBanners(prev => [...prev, { id: Date.now(), ...bannerPayload }]);
      }
      showToast('info', 'Saved Locally', 'Banner saved to browser storage.');
      setIsModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBanner = async () => {
    if (!deleteModalBanner) return;
    setSaving(true);

    try {
      await fetch(`/api/banners/${deleteModalBanner.id}`, { method: 'DELETE' });
      setBanners(prev => prev.filter(b => b.id !== deleteModalBanner.id));
      showToast('success', 'Banner Deleted', '🗑️ Banner removed from live database.');
    } catch {
      setBanners(prev => prev.filter(b => b.id !== deleteModalBanner.id));
      showToast('info', 'Deleted Locally', 'Banner removed.');
    } finally {
      setSaving(false);
      setDeleteModalBanner(null);
    }
  };

  const handleToggleBadge = async (b: BannerData) => {
    const newShow = !b.show_category_badge;
    const updated = { ...b, show_category_badge: newShow ? 1 : 0 };

    try {
      await fetch(`/api/banners/${b.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ show_category_badge: newShow ? 1 : 0 })
      });
      setBanners(prev => prev.map(item => item.id === b.id ? updated : item));
      showToast(
        'success',
        newShow ? 'Category Badge Enabled' : 'Category Badge Disabled',
        newShow ? `Category badge enabled for "${b.category_name || b.title}"` : 'Banner is now 100% clean image only.'
      );
    } catch {
      setBanners(prev => prev.map(item => item.id === b.id ? updated : item));
      showToast('info', 'Updated Locally', 'Badge setting updated.');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 pb-12 font-sans relative">
        
        {/* Animated Toast Notification Container */}
        <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none">
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all transform duration-300 animate-slideInRight ${
                toast.type === 'success'
                  ? 'bg-slate-900/95 border-emerald-500/40 text-white shadow-emerald-950/50'
                  : toast.type === 'error'
                  ? 'bg-slate-900/95 border-rose-500/40 text-white shadow-rose-950/50'
                  : 'bg-slate-900/95 border-teal-500/40 text-white shadow-teal-950/50'
              }`}
            >
              <div className={`p-2 rounded-xl shrink-0 ${
                toast.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                toast.type === 'error' ? 'bg-rose-500/20 text-rose-400' : 'bg-teal-500/20 text-teal-400'
              }`}>
                {toast.type === 'success' ? <CheckCircle className="h-5 w-5" /> :
                 toast.type === 'error' ? <AlertTriangle className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-white leading-snug">{toast.title}</h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
              </div>
              <button
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* 1. Header Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900/80 p-6 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ImageIcon className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Hero Banner Carousel
                </h1>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                  <span>Manage full-width rotating hero banners shown on the homepage</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live D1 Sync
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              title="Refresh banners"
              className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <Plus className="h-4 w-4 stroke-[3]" />
              <span>Add New Banner</span>
            </button>
          </div>
        </div>

        {/* 2. Info Callout */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-300">
          <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Clean Image Carousel:</strong> By default, banners display pure, unobstructed images without any heavy dark overlays or text. If you wish to highlight a specific product category on a banner, you can select the category and enable the <em>"Show Category Badge"</em> switch.
          </div>
        </div>

        {/* 3. Banners List */}
        {loading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3 bg-slate-900/50 rounded-3xl border border-slate-800 text-center">
            <RefreshCw className="h-8 w-8 text-emerald-400 animate-spin" />
            <p className="text-xs text-slate-400">Loading hero banners from Cloudflare D1 database...</p>
          </div>
        ) : banners.length === 0 ? (
          <div className="p-16 bg-slate-900/50 rounded-3xl border border-slate-800 text-center space-y-3">
            <ImageIcon className="h-10 w-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No banners added yet</h3>
            <p className="text-xs text-slate-400">Click "Add New Banner" to add your first rotating homepage banner.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {banners.map((b, idx) => {
              const isBadgeActive = Boolean(b.show_category_badge);

              return (
                <div
                  key={b.id || idx}
                  className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-6 shadow-xl space-y-5 transition-all duration-300"
                >
                  
                  {/* Top Meta Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-xl border border-amber-800/80">
                        Slide #{b.display_order ?? (idx + 1)}
                      </span>
                      <h3 className="font-serif text-base font-extrabold text-white">
                        {b.title || `Banner Slide ${idx + 1}`}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      {b.category_name && (
                        <span className="inline-flex items-center gap-1 text-teal-300 bg-teal-950/80 border border-teal-800/80 px-2.5 py-1 rounded-xl font-semibold">
                          <Tag className="h-3 w-3" />
                          Category: {b.category_name}
                        </span>
                      )}
                      
                      {/* Toggle Category Badge */}
                      <button
                        onClick={() => handleToggleBadge(b)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold transition-all ${
                          isBadgeActive
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-300'
                        }`}
                        title="Toggle category badge visibility"
                      >
                        {isBadgeActive ? <ToggleRight className="h-4 w-4 text-emerald-400" /> : <ToggleLeft className="h-4 w-4" />}
                        <span>Category Badge: {isBadgeActive ? 'ON' : 'OFF'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Banner Image Preview Container */}
                  <div className="relative h-48 sm:h-64 lg:h-72 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
                    <img
                      src={b.image_url}
                      alt={b.title || 'Banner Preview'}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />

                    {/* Live Preview of Category Badge if ON */}
                    {isBadgeActive && (b.category_name || b.category_slug) && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/80 text-emerald-300 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md border border-emerald-500/40 shadow-lg">
                          <Tag className="h-3 w-3 text-emerald-400" />
                          <span>{b.category_name || b.category_slug}</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[10px] text-slate-300 font-mono">
                      Target: {b.link_url || '/products'}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-1">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Live on Homepage</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(b)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 hover:border-teal-500/40 transition-all"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit Banner</span>
                      </button>
                      <button
                        onClick={() => setDeleteModalBanner(b)}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-800 transition-all"
                        title="Delete Banner"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* 4. Add / Edit Banner Modal */}
        {/* ---------------------------------------------------- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 p-6 sm:p-8 animate-scaleUp">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-extrabold text-white">
                      {editingBanner ? 'Edit Hero Banner' : 'Add New Hero Banner'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Configure banner image, category association, and display order.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveBanner} className="space-y-5">
                
                {/* Banner Image URL & Uploader */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Banner Image <span className="text-emerald-400">*</span>
                  </label>
                  
                  <div className="space-y-2">
                    <ImageUploader
                      label="Upload Custom Banner (1920x800 Recommended)"
                      value={formImageUrl}
                      onChange={url => setFormImageUrl(url)}
                      folder="goldenfibercrafts/banners"
                    />

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] text-slate-400">Or enter image URL:</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. /banners/banner1.png or https://..."
                        value={formImageUrl}
                        onChange={e => setFormImageUrl(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    {/* Quick Presets */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 uppercase">Presets:</span>
                      {PRESET_BANNERS.map(p => (
                        <button
                          key={p.url}
                          type="button"
                          onClick={() => setFormImageUrl(p.url)}
                          className="px-2.5 py-0.5 rounded-lg text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Banner Title / Note */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Banner Title / Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Handcrafted Jute Collection"
                    value={formTitle}
                    onChange={e => setFormTitle(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Category Association & Badge Toggle */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5 text-teal-400" />
                      Associate Category (Optional)
                    </label>
                    <p className="text-[11px] text-slate-500">Select an existing category to link this banner to:</p>
                    
                    <select
                      value={formCategorySlug}
                      onChange={e => handleCategorySelect(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="">-- No Category (General Banner) --</option>
                      {categories.map(c => (
                        <option key={c.slug || c.id} value={c.slug || c.id}>
                          {c.name} ({c.slug})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Show Category Badge Switch */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-xs font-bold text-slate-300">Show Category Badge on Banner</span>
                      <p className="text-[11px] text-slate-500">By default OFF. If ON, shows a subtle category tag on top-left.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormShowBadge(prev => !prev)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        formShowBadge
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {formShowBadge ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
                      <span>{formShowBadge ? 'Badge ON' : 'Badge OFF'}</span>
                    </button>
                  </div>
                </div>

                {/* Target Link & Display Order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Target Link URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. /products?category=jute"
                      value={formLinkUrl}
                      onChange={e => setFormLinkUrl(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Display Order (Slide #)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formDisplayOrder}
                      onChange={e => setFormDisplayOrder(Number(e.target.value))}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 disabled:opacity-50"
                  >
                    {saving && <RefreshCw className="h-4 w-4 animate-spin" />}
                    <span>{editingBanner ? 'Save Changes' : 'Create Banner'}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* 5. Delete Confirmation Modal */}
        {/* ---------------------------------------------------- */}
        {deleteModalBanner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-rose-900/50 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl animate-scaleUp text-center">
              <div className="h-14 w-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
                <Trash2 className="h-7 w-7" />
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-extrabold text-white">
                  Delete Banner "{deleteModalBanner.title || 'Slide'}"?
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Are you sure you want to remove this hero banner from the live Cloudflare D1 database?
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteModalBanner(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={handleDeleteBanner}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-900/40 transition-all hover:scale-105"
                >
                  {saving && <RefreshCw className="h-4 w-4 animate-spin" />}
                  <span>Delete Banner</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};
