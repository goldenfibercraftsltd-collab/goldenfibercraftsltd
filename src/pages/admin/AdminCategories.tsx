import React, { useEffect, useState, useMemo } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CATEGORIES } from '../../data/products';
import {
  getAllActiveCategories,
  saveCategoryLocally,
  markCategoryDeletedLocally
} from '../../utils/productStore';
import {
  Folders,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  Package,
  Leaf,
  ShoppingBag,
  Sparkles,
  Trees,
  X,
  Search,
  Check,
  AlertTriangle,
  Layers,
  ArrowUpDown,
  Tag,
  RefreshCw,
  Eye
} from 'lucide-react';

interface SubCategoryItem {
  id: string;
  name: string;
  slug: string;
}

interface CategoryData {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  iconName?: string;
  image_url?: string;
  display_order?: number;
  is_active?: number;
  subcategories: SubCategoryItem[];
}

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

const AVAILABLE_ICONS = [
  { name: 'Package', icon: Package, label: 'Package / Box' },
  { name: 'Leaf', icon: Leaf, label: 'Leaf / Plant' },
  { name: 'ShoppingBag', icon: ShoppingBag, label: 'Shopping Bag' },
  { name: 'Sparkles', icon: Sparkles, label: 'Sparkles / Art' },
  { name: 'Trees', icon: Trees, label: 'Trees / Bamboo' },
  { name: 'Folders', icon: Folders, label: 'Folders / Multi' },
];

export const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Modals state
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<CategoryData | null>(null);
  const [deleteModalCategory, setDeleteModalCategory] = useState<CategoryData | null>(null);

  // Form state
  const [formName, setFormName] = useState<string>('');
  const [formSlug, setFormSlug] = useState<string>('');
  const [formDescription, setFormDescription] = useState<string>('');
  const [formIcon, setFormIcon] = useState<string>('Package');
  const [formDisplayOrder, setFormDisplayOrder] = useState<number>(1);
  const [formSubcategories, setFormSubcategories] = useState<SubCategoryItem[]>([]);
  const [newSubcatName, setNewSubcatName] = useState<string>('');

  // Quick subcategory add on card
  const [quickSubcatCatId, setQuickSubcatCatId] = useState<string | number | null>(null);
  const [quickSubcatName, setQuickSubcatName] = useState<string>('');

  const showToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4200);
  };

  const loadCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success && Array.isArray(data.categories) && data.categories.length > 0) {
        const mapped: CategoryData[] = data.categories.map((c: any) => {
          let subs = c.subcategories || [];
          if (typeof subs === 'string') {
            try { subs = JSON.parse(subs); } catch { subs = []; }
          }
          return {
            id: c.id,
            name: c.name,
            slug: c.slug,
            description: c.description || '',
            icon: c.icon || 'Package',
            display_order: c.display_order ?? 0,
            is_active: c.is_active ?? 1,
            subcategories: Array.isArray(subs) ? subs : []
          };
        });
        setCategories(mapped);
      } else {
        // Fallback to local store
        const fallback = getAllActiveCategories();
        setCategories(fallback);
      }
    } catch {
      const fallback = getAllActiveCategories();
      setCategories(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.toLowerCase().trim();
    return categories.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.slug.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.subcategories.some(s => s.name.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q))
    );
  }, [categories, searchQuery]);

  const openAddCategoryModal = () => {
    setEditingCategory(null);
    setFormName('');
    setFormSlug('');
    setFormDescription('');
    setFormIcon('Package');
    setFormDisplayOrder(categories.length + 1);
    setFormSubcategories([]);
    setNewSubcatName('');
    setIsCategoryModalOpen(true);
  };

  const openEditCategoryModal = (cat: CategoryData) => {
    setEditingCategory(cat);
    setFormName(cat.name);
    setFormSlug(cat.slug);
    setFormDescription(cat.description);
    setFormIcon(cat.icon || cat.iconName || 'Package');
    setFormDisplayOrder(cat.display_order ?? 1);
    setFormSubcategories([...(cat.subcategories || [])]);
    setNewSubcatName('');
    setIsCategoryModalOpen(true);
  };

  const handleNameChange = (val: string) => {
    setFormName(val);
    if (!editingCategory) {
      setFormSlug(val.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'));
    }
  };

  const handleAddSubcatToForm = () => {
    if (!newSubcatName.trim()) return;
    const cleanName = newSubcatName.trim();
    const id = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const slug = `${formSlug || 'cat'}-${id}`;
    
    if (formSubcategories.some(s => s.id === id)) {
      showToast('error', 'Duplicate Subcategory', `Subcategory "${cleanName}" already exists.`);
      return;
    }

    setFormSubcategories(prev => [...prev, { id, name: cleanName, slug }]);
    setNewSubcatName('');
  };

  const handleRemoveSubcatFromForm = (subId: string) => {
    setFormSubcategories(prev => prev.filter(s => s.id !== subId));
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formSlug.trim()) {
      showToast('error', 'Validation Error', 'Category Name and Slug are required.');
      return;
    }

    setSaving(true);
    const categoryPayload = {
      name: formName.trim(),
      slug: formSlug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description: formDescription.trim(),
      icon: formIcon,
      display_order: Number(formDisplayOrder),
      subcategories: formSubcategories,
      is_active: 1
    };

    try {
      const isEdit = !!editingCategory;
      const url = isEdit ? `/api/categories/${editingCategory.id}` : '/api/categories';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoryPayload)
      });

      const data = await res.json().catch(() => ({}));

      // Update local storage store
      saveCategoryLocally({
        id: isEdit ? editingCategory.id : (data.id || categoryPayload.slug),
        ...categoryPayload
      });

      if (isEdit) {
        setCategories(prev => prev.map(c => 
          c.id === editingCategory.id ? { ...c, ...categoryPayload } : c
        ));
        showToast('success', 'Category Updated', `✨ "${categoryPayload.name}" updated successfully in Live D1 Database!`);
      } else {
        const newCat: CategoryData = {
          id: data.id || Date.now(),
          ...categoryPayload
        };
        setCategories(prev => [...prev, newCat]);
        showToast('success', 'Category Created', `🎉 "${categoryPayload.name}" added to Live Database!`);
      }

      setIsCategoryModalOpen(false);
    } catch {
      // Offline / local fallback save
      saveCategoryLocally(categoryPayload);
      loadCategories();
      showToast('success', 'Saved Locally', `Category "${categoryPayload.name}" saved!`);
      setIsCategoryModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCategory = async () => {
    if (!deleteModalCategory) return;
    setSaving(true);

    try {
      const res = await fetch(`/api/categories/${deleteModalCategory.id}`, {
        method: 'DELETE'
      });
      const data = await res.json().catch(() => ({}));

      if (data.error) {
        showToast('error', 'Cannot Delete', data.error);
        setSaving(false);
        setDeleteModalCategory(null);
        return;
      }

      markCategoryDeletedLocally(String(deleteModalCategory.id));
      markCategoryDeletedLocally(deleteModalCategory.slug);
      setCategories(prev => prev.filter(c => c.id !== deleteModalCategory.id));

      showToast('success', 'Category Deleted', `🗑️ "${deleteModalCategory.name}" removed from database.`);
    } catch {
      markCategoryDeletedLocally(String(deleteModalCategory.id));
      setCategories(prev => prev.filter(c => c.id !== deleteModalCategory.id));
      showToast('info', 'Deleted Locally', `Category "${deleteModalCategory.name}" removed.`);
    } finally {
      setSaving(false);
      setDeleteModalCategory(null);
    }
  };

  // Quick inline add subcategory
  const handleQuickAddSubcategory = async (cat: CategoryData) => {
    if (!quickSubcatName.trim()) return;
    const cleanName = quickSubcatName.trim();
    const id = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const slug = `${cat.slug}-${id}`;

    if (cat.subcategories.some(s => s.id === id)) {
      showToast('error', 'Duplicate Subcategory', `Subcategory "${cleanName}" already exists in ${cat.name}.`);
      return;
    }

    const updatedSubcategories = [...cat.subcategories, { id, name: cleanName, slug }];
    const updatedCategory = { ...cat, subcategories: updatedSubcategories };

    try {
      await fetch(`/api/categories/${cat.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subcategories: updatedSubcategories })
      });

      saveCategoryLocally(updatedCategory);
      setCategories(prev => prev.map(c => c.id === cat.id ? updatedCategory : c));
      showToast('success', 'Subcategory Added', `✨ Added "${cleanName}" to ${cat.name}!`);
      setQuickSubcatCatId(null);
      setQuickSubcatName('');
    } catch {
      saveCategoryLocally(updatedCategory);
      setCategories(prev => prev.map(c => c.id === cat.id ? updatedCategory : c));
      showToast('info', 'Subcategory Added', `Added "${cleanName}" locally.`);
      setQuickSubcatCatId(null);
      setQuickSubcatName('');
    }
  };

  // Quick delete subcategory directly from card
  const handleQuickDeleteSubcategory = async (cat: CategoryData, subId: string, subName: string) => {
    const updatedSubcategories = cat.subcategories.filter(s => s.id !== subId);
    const updatedCategory = { ...cat, subcategories: updatedSubcategories };

    try {
      await fetch(`/api/categories/${cat.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subcategories: updatedSubcategories })
      });

      saveCategoryLocally(updatedCategory);
      setCategories(prev => prev.map(c => c.id === cat.id ? updatedCategory : c));
      showToast('info', 'Subcategory Removed', `Subcategory "${subName}" removed from ${cat.name}.`);
    } catch {
      saveCategoryLocally(updatedCategory);
      setCategories(prev => prev.map(c => c.id === cat.id ? updatedCategory : c));
      showToast('info', 'Subcategory Removed', `Removed "${subName}" locally.`);
    }
  };

  const getIconComponent = (iconName?: string) => {
    const found = AVAILABLE_ICONS.find(i => i.name.toLowerCase() === (iconName || '').toLowerCase());
    return found ? found.icon : Package;
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
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Folders className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Product Categories & Subcategories
                </h1>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                  <span>Official PPT categories for Golden Fiber Crafts Ltd.</span>
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
              onClick={loadCategories}
              disabled={loading}
              title="Refresh categories"
              className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
            <button
              onClick={openAddCategoryModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <Plus className="h-4 w-4 stroke-[3]" />
              <span>Add Category</span>
            </button>
          </div>
        </div>

        {/* 2. Search & Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search category or subcategory..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs rounded-2xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              Total Categories: <strong className="text-white font-mono">{categories.length}</strong>
            </span>
            <span className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              Total Subcategories: <strong className="text-emerald-400 font-mono">
                {categories.reduce((acc, c) => acc + (c.subcategories?.length || 0), 0)}
              </strong>
            </span>
          </div>
        </div>

        {/* 3. Categories Grid */}
        {loading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3 bg-slate-900/50 rounded-3xl border border-slate-800 text-center">
            <RefreshCw className="h-8 w-8 text-emerald-400 animate-spin" />
            <p className="text-xs text-slate-400">Loading categories from Cloudflare D1 database...</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="p-16 bg-slate-900/50 rounded-3xl border border-slate-800 text-center space-y-3">
            <Folders className="h-10 w-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No categories found</h3>
            <p className="text-xs text-slate-400">Try searching with another keyword or create a new category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => {
              const IconComp = getIconComponent(cat.icon || cat.iconName);
              const isAddingSubcat = quickSubcatCatId === cat.id;

              return (
                <div
                  key={cat.id || cat.slug || idx}
                  className="group relative flex flex-col justify-between bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 space-y-5"
                >
                  <div className="space-y-4">
                    
                    {/* Top Row: Icon, Slug, Order */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950/80 px-2.5 py-0.5 rounded-lg border border-emerald-800/80">
                            {cat.slug}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] text-slate-500 font-extrabold bg-slate-800/80 px-2.5 py-1 rounded-xl border border-slate-700/50">
                        Order #{cat.display_order ?? (idx + 1)}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-serif text-lg font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                        {cat.description || 'Eco-friendly natural handcrafted product category.'}
                      </p>
                    </div>

                    {/* Subcategories Chip List */}
                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Layers className="h-3 w-3 text-emerald-400" />
                          Subcategories ({cat.subcategories?.length || 0})
                        </span>
                        <button
                          onClick={() => {
                            if (isAddingSubcat) {
                              setQuickSubcatCatId(null);
                            } else {
                              setQuickSubcatCatId(cat.id);
                              setQuickSubcatName('');
                            }
                          }}
                          className="text-[10px] font-bold text-teal-400 hover:text-teal-300 flex items-center gap-0.5 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                          <span>Add Sub</span>
                        </button>
                      </div>

                      {/* Quick Add Subcategory Input Box */}
                      {isAddingSubcat && (
                        <div className="flex items-center gap-1.5 pt-1 animate-fadeIn">
                          <input
                            type="text"
                            placeholder="e.g. Planters, Baskets..."
                            value={quickSubcatName}
                            autoFocus
                            onChange={e => setQuickSubcatName(e.target.value)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') handleQuickAddSubcategory(cat);
                              if (e.key === 'Escape') setQuickSubcatCatId(null);
                            }}
                            className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-slate-950 border border-teal-500/50 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                          />
                          <button
                            onClick={() => handleQuickAddSubcategory(cat)}
                            className="p-1.5 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold transition-all"
                            title="Save subcategory"
                          >
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </button>
                          <button
                            onClick={() => setQuickSubcatCatId(null)}
                            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all"
                            title="Cancel"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Subcategories Badges */}
                      <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                        {cat.subcategories && cat.subcategories.length > 0 ? (
                          cat.subcategories.map(sub => (
                            <span
                              key={sub.id}
                              className="group/sub inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                            >
                              <Tag className="h-2.5 w-2.5 text-emerald-400/80" />
                              <span>{sub.name}</span>
                              <button
                                onClick={() => handleQuickDeleteSubcategory(cat, sub.id, sub.name)}
                                title={`Delete ${sub.name}`}
                                className="opacity-40 group-hover/sub:opacity-100 hover:text-rose-400 ml-0.5 transition-opacity"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))
                        ) : (
                          <span className="text-[11px] text-slate-500 italic">No subcategories yet.</span>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <a
                      href={`/products?category=${cat.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View on site</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditCategoryModal(cat)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 hover:border-teal-500/40 transition-all"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => setDeleteModalCategory(cat)}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-800 transition-all"
                        title="Delete Category"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* 4. Add / Edit Category Modal */}
        {/* ---------------------------------------------------- */}
        {isCategoryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 p-6 sm:p-8 animate-scaleUp">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {editingCategory ? <Edit3 className="h-5 w-5" /> : <Plus className="h-5 w-5 stroke-[3]" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-extrabold text-white">
                      {editingCategory ? `Edit Category: ${editingCategory.name}` : 'Add New Category'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {editingCategory ? 'Update category details and manage its subcategories.' : 'Create a new handicraft product category.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveCategory} className="space-y-5">
                
                {/* Category Name & Slug */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Category Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pineapple Fiber"
                      value={formName}
                      onChange={e => handleNameChange(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Category Slug <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. pineapple-fiber"
                      value={formSlug}
                      onChange={e => setFormSlug(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Icon Selection & Display Order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Icon
                    </label>
                    <select
                      value={formIcon}
                      onChange={e => setFormIcon(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                    >
                      {AVAILABLE_ICONS.map(icon => (
                        <option key={icon.name} value={icon.name}>
                          {icon.label} ({icon.name})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Display Order
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

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Short description of products in this category..."
                    value={formDescription}
                    onChange={e => setFormDescription(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 leading-relaxed"
                  />
                </div>

                {/* Subcategories Manager inside Modal */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-emerald-400" />
                      Subcategories ({formSubcategories.length})
                    </label>
                    <span className="text-[11px] text-slate-500">Add subcategories for item filtering</span>
                  </div>

                  {/* Add subcategory input */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add subcategory (e.g. Storage Baskets, Placemats)..."
                      value={newSubcatName}
                      onChange={e => setNewSubcatName(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSubcatToForm();
                        }
                      }}
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddSubcatToForm}
                      className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 transition-all"
                    >
                      <Plus className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Add</span>
                    </button>
                  </div>

                  {/* Subcategories Badges list */}
                  <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 min-h-[60px] max-h-40 overflow-y-auto">
                    {formSubcategories.length > 0 ? (
                      formSubcategories.map(sub => (
                        <div
                          key={sub.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-medium"
                        >
                          <Tag className="h-3 w-3 text-emerald-400" />
                          <span>{sub.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">({sub.id})</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSubcatFromForm(sub.id)}
                            className="text-slate-400 hover:text-rose-400 ml-1 transition-colors"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-slate-500 italic flex items-center justify-center w-full">
                        No subcategories added yet. Type a name above and click "Add".
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCategoryModalOpen(false)}
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
                    <span>{editingCategory ? 'Save Changes' : 'Create Category'}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* 5. Delete Confirmation Modal */}
        {/* ---------------------------------------------------- */}
        {deleteModalCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-rose-900/50 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl animate-scaleUp text-center">
              <div className="h-14 w-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
                <Trash2 className="h-7 w-7" />
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-extrabold text-white">
                  Delete Category "{deleteModalCategory.name}"?
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Are you sure you want to delete this category from the Live Cloudflare D1 database? All its subcategories will also be removed.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteModalCategory(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={handleDeleteCategory}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-900/40 transition-all hover:scale-105"
                >
                  {saving && <RefreshCw className="h-4 w-4 animate-spin" />}
                  <span>Delete Category</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};
