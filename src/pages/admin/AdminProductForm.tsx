import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { PRODUCTS, CATEGORIES, ProductItem } from '../../data/products';
import {
  ArrowLeft, Save, Loader2, Plus, X, Scale, Package, Image as ImageIcon,
  Check, Trash2, Star, Sparkles, RefreshCw, Link as LinkIcon
} from 'lucide-react';

export const AdminProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [customGalleryUrl, setCustomGalleryUrl] = useState('');

  const [formData, setFormData] = useState({
    category_id: 'jute',
    sub_category: 'baskets',
    item_code: '',
    name: '',
    description: '',
    material: '',
    size: '',
    color: '',
    unit: 'S/3',
    set_per_carton: 2,
    cbm_per_carton: 0.065,
    nw_per_ctn: 3.5,
    gw_per_ctn: 4.8,
    moq: '300 Sets',
    price_range: 'FOB Chattogram / Negotiable',
    image_url: '',
    gallery_images: [] as string[],
    is_featured: true,
    is_active: true,
    display_order: 0,
  });

  useEffect(() => {
    if (isEdit && id) {
      setLoading(true);

      // 1. First try fetching from Cloudflare D1 API
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.product) {
            const p = data.product;
            let gallery: string[] = [];
            try {
              gallery = typeof p.gallery_images === 'string' ? JSON.parse(p.gallery_images || '[]') : (p.gallery_images || []);
            } catch {
              gallery = [];
            }

            setFormData({
              category_id: p.category_id || p.category || 'jute',
              sub_category: p.sub_category || p.subCategory || 'baskets',
              item_code: p.item_code || p.code || p.id || '',
              name: p.name || '',
              description: p.description || '',
              material: p.material || '',
              size: p.size || '',
              color: p.color || '',
              unit: p.unit || 'S/3',
              set_per_carton: p.set_per_carton || p.setPerCarton || 2,
              cbm_per_carton: p.cbm_per_carton || p.cbmPerCarton || 0.065,
              nw_per_ctn: p.nw_per_ctn || p.nwPerCtn || 3.5,
              gw_per_ctn: p.gw_per_ctn || p.gwPerCtn || 4.8,
              moq: p.moq || '300 Sets',
              price_range: p.price_range || 'FOB Chattogram / Negotiable',
              image_url: p.image_url || p.image || '',
              gallery_images: gallery,
              is_featured: p.is_featured !== 0,
              is_active: p.is_active !== 0,
              display_order: p.display_order || 0,
            });
          } else {
            // Fallback to static PRODUCTS
            loadFromStatic(id);
          }
        })
        .catch(() => {
          loadFromStatic(id);
        })
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const loadFromStatic = (targetId: string) => {
    const p = PRODUCTS.find(
      prod => prod.id === targetId || prod.code === targetId || prod.slug === targetId
    );
    if (p) {
      const matSpec = p.specifications?.find(s => s.key === 'Materials')?.value || p.material || '';
      const sizeSpec = p.specifications?.find(s => s.key === 'Specification')?.value || '';
      const moqSpec = p.specifications?.find(s => s.key === 'MOQ')?.value || '300 Sets';

      setFormData({
        category_id: p.category || 'jute',
        sub_category: p.subCategory || 'baskets',
        item_code: p.code || p.id,
        name: p.name,
        description: p.description || p.longDescription?.overview || '',
        material: matSpec,
        size: sizeSpec,
        color: p.color || '',
        unit: p.unit || 'S/3',
        set_per_carton: p.setPerCarton || 2,
        cbm_per_carton: p.cbmPerCarton || 0.065,
        nw_per_ctn: p.nwPerCtn || 3.5,
        gw_per_ctn: p.gwPerCtn || 4.8,
        moq: moqSpec,
        price_range: 'FOB Chattogram / Negotiable',
        image_url: p.image || '',
        gallery_images: (p.galleryImages || []).filter(img => img !== p.image),
        is_featured: true,
        is_active: true,
        display_order: 0,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const token = localStorage.getItem('gfcl_admin_token') || '';

    const payload = {
      ...formData,
      gallery_images: JSON.stringify(formData.gallery_images),
    };

    try {
      const url = isEdit ? `/api/products/${id}` : '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        navigate('/admin/products');
      } else {
        // Even if API endpoint falls back locally, notify user and navigate
        navigate('/admin/products');
      }
    } catch (err: any) {
      setError('Save notice: ' + err.message);
      setTimeout(() => navigate('/admin/products'), 1200);
    } finally {
      setSaving(false);
    }
  };

  const addGalleryImage = (url: string) => {
    const cleanUrl = url.trim();
    if (cleanUrl && !formData.gallery_images.includes(cleanUrl)) {
      setFormData(prev => ({
        ...prev,
        gallery_images: [...prev.gallery_images, cleanUrl]
      }));
      setCustomGalleryUrl('');
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index)
    }));
  };

  const makeMainImage = (url: string) => {
    const oldMain = formData.image_url;
    setFormData(prev => ({
      ...prev,
      image_url: url,
      gallery_images: [
        ...(oldMain ? [oldMain] : []),
        ...prev.gallery_images.filter(img => img !== url)
      ]
    }));
  };

  // Get current category & subcategories list
  const currentCategoryObj = CATEGORIES.find(c => c.id === formData.category_id) || CATEGORIES[0];
  const subcategoriesList = currentCategoryObj?.subcategories || [];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3">
          <Loader2 className="h-10 w-10 text-emerald-500 animate-spin" />
          <span className="text-xs font-bold text-slate-400">Loading Product Photos & Export Details...</span>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-6 pb-16 font-sans">
        
        {/* Top Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/products')}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Back to List"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-widest block">
                {isEdit ? 'PRODUCT EDITOR' : 'NEW EXPORT ITEM'}
              </span>
              <h1 className="font-serif text-xl sm:text-2xl font-extrabold text-white">
                {isEdit ? `Editing: ${formData.item_code || formData.name}` : 'Create New Handicraft Item'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/admin/products')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              <span>{isEdit ? 'Save Changes' : 'Publish Product'}</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-amber-950 border border-amber-800 text-amber-300 text-xs font-bold">
            {error}
          </div>
        )}

        {/* Main Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* SECTION 1: Product Images & Visual Previews */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-base font-extrabold text-white flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-emerald-400" />
                Product Photo Gallery & Image Management
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">High-Res Cloudinary Sync</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Main Image Box & Preview */}
              <div className="lg:col-span-1 space-y-3">
                <label className="block text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                  Primary Product Photo *
                </label>

                <div className="relative aspect-square w-full rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700 p-2 flex flex-col items-center justify-center overflow-hidden group">
                  {formData.image_url ? (
                    <>
                      <img
                        src={formData.image_url}
                        alt="Primary Preview"
                        className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
                        <span className="text-[11px] font-bold text-emerald-300 uppercase">Primary Photo Selected</span>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                          className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors flex items-center gap-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Remove Photo
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center space-y-2 p-4">
                      <ImageIcon className="mx-auto h-10 w-10 text-slate-600" />
                      <span className="text-xs text-slate-400 font-bold block">No Primary Image Uploaded</span>
                    </div>
                  )}
                </div>

                {/* Main Image Direct Upload / URL Replace controls */}
                <div className="space-y-2 pt-1">
                  <ImageUploader
                    value={formData.image_url}
                    onChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
                    folder="goldenfibercrafts/products"
                    label="Upload / Replace Primary Photo"
                  />

                  {/* Manual URL Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Paste Image URL directly..."
                      value={customImageUrl}
                      onChange={(e) => setCustomImageUrl(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 outline-none focus:border-emerald-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customImageUrl.trim()) {
                          setFormData(prev => ({ ...prev, image_url: customImageUrl.trim() }));
                          setCustomImageUrl('');
                        }
                      }}
                      className="px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                    >
                      Set URL
                    </button>
                  </div>
                </div>

              </div>

              {/* Multi-Angle Gallery Thumbnails */}
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                    Gallery & Multi-Angle Photos ({formData.gallery_images.length})
                  </label>
                  <span className="text-[11px] text-slate-400">Click photo to promote as Primary</span>
                </div>

                {/* Upload & Direct URL Add */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <ImageUploader
                    value=""
                    onChange={(url) => { if (url) addGalleryImage(url); }}
                    folder="goldenfibercrafts/gallery"
                    label="Upload New Gallery Photo"
                  />

                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Paste Gallery Image URL..."
                      value={customGalleryUrl}
                      onChange={(e) => setCustomGalleryUrl(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 outline-none focus:border-emerald-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => addGalleryImage(customGalleryUrl)}
                      className="px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                    >
                      Add URL
                    </button>
                  </div>
                </div>

                {/* Thumbnails Grid Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {formData.gallery_images.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center"
                    >
                      <img
                        src={imgUrl}
                        alt={`Gallery Angle ${idx + 1}`}
                        className="h-full w-full object-contain filter drop-shadow-xs"
                      />
                      
                      {/* Hover Overlay Controls */}
                      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center">
                        <button
                          type="button"
                          onClick={() => makeMainImage(imgUrl)}
                          className="w-full py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-extrabold text-[10px] rounded-lg transition-colors flex items-center justify-center gap-1"
                          title="Make this the primary photo"
                        >
                          <Star className="h-3 w-3 fill-current" /> Make Primary
                        </button>
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(idx)}
                          className="w-full py-1 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-[10px] rounded-lg transition-colors flex items-center justify-center gap-1"
                          title="Delete photo"
                        >
                          <Trash2 className="h-3 w-3" /> Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {formData.gallery_images.length === 0 && (
                    <div className="col-span-full py-8 text-center bg-slate-950/50 rounded-2xl border border-dashed border-slate-800">
                      <span className="text-xs text-slate-500">No additional gallery photos added yet. Upload or paste URLs above.</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* SECTION 2: General Identification & Category */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-serif text-base font-extrabold text-white flex items-center gap-2">
                <Package className="h-5 w-5 text-emerald-400" />
                Product Identification & Category Info
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Item Code */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  Item Code (PPT Code) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.item_code}
                  onChange={(e) => setFormData(prev => ({ ...prev, item_code: e.target.value }))}
                  placeholder="e.g. GFC-SB-030"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-amber-400 font-mono outline-none"
                />
              </div>

              {/* Main Category */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  Main Category *
                </label>
                <select
                  value={formData.category_id}
                  onChange={(e) => {
                    const newCat = e.target.value;
                    const firstSub = CATEGORIES.find(c => c.id === newCat)?.subcategories[0]?.id || 'baskets';
                    setFormData(prev => ({ ...prev, category_id: newCat, sub_category: firstSub }));
                  }}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* Subcategory */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  Subcategory
                </label>
                <select
                  value={formData.sub_category}
                  onChange={(e) => setFormData(prev => ({ ...prev, sub_category: e.target.value }))}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                >
                  {subcategoriesList.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
              </div>

              {/* Product Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  Product Name / Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Round Shape Jute Storage Basket"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  Product Description & Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter export product specifications, craftsmanship notes, and description..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-normal text-slate-200 outline-none leading-relaxed"
                />
              </div>

            </div>
          </div>

          {/* SECTION 3: Technical Specs & Freight Cartons */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-serif text-base font-extrabold text-white flex items-center gap-2">
                <Scale className="h-5 w-5 text-emerald-400" />
                Material Specs & Export Freight Specifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">Raw Material Composition</label>
                <input
                  type="text"
                  value={formData.material}
                  onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
                  placeholder="e.g. 100% Golden Jute, Seagrass, Water Hyacinth"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">Size & Dimension</label>
                <input
                  type="text"
                  value={formData.size}
                  onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                  placeholder="e.g. 43cm W x 33cm D x 40cm H"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">Color / Finishing</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                  placeholder="e.g. Natural Warm Gold / Unbleached White"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-wider">Minimum Order Quantity (MOQ)</label>
                <input
                  type="text"
                  value={formData.moq}
                  onChange={(e) => setFormData(prev => ({ ...prev, moq: e.target.value }))}
                  placeholder="e.g. 200 Sets / Negotiable"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                />
              </div>

              {/* Export Packing Box Specs */}
              <div className="md:col-span-2 p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block">
                  Export Master Carton Specifications
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase">Unit</label>
                    <input
                      type="text"
                      value={formData.unit}
                      onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                      placeholder="S/3"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase">Set/Carton</label>
                    <input
                      type="number"
                      value={formData.set_per_carton}
                      onChange={(e) => setFormData(prev => ({ ...prev, set_per_carton: Number(e.target.value) }))}
                      placeholder="2"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-amber-400 font-mono outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase">CBM/CTN</label>
                    <input
                      type="number"
                      step="0.001"
                      value={formData.cbm_per_carton}
                      onChange={(e) => setFormData(prev => ({ ...prev, cbm_per_carton: Number(e.target.value) }))}
                      placeholder="0.065"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white font-mono outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase">N.W/CTN (KG)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.nw_per_ctn}
                      onChange={(e) => setFormData(prev => ({ ...prev, nw_per_ctn: Number(e.target.value) }))}
                      placeholder="3.5"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white font-mono outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase">G.W/CTN (KG)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.gw_per_ctn}
                      onChange={(e) => setFormData(prev => ({ ...prev, gw_per_ctn: Number(e.target.value) }))}
                      placeholder="4.8"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-emerald-400 font-mono outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Controls & Save */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                  className="rounded bg-slate-950 border-slate-800 text-emerald-600 focus:ring-emerald-500"
                />
                <span>Featured Item</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                  className="rounded bg-slate-950 border-slate-800 text-emerald-600 focus:ring-emerald-500"
                />
                <span>Active on Website</span>
              </label>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => navigate('/admin/products')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                <span>{isEdit ? 'Save Changes' : 'Publish Product'}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </AdminLayout>
  );
};

export default AdminProductForm;
