import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { ArrowLeft, Save, Loader2, Plus, X } from 'lucide-react';

export const AdminProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    category_id: 1,
    item_code: '',
    name: '',
    description: '',
    material: '',
    size: '',
    color: '',
    moq: 'Flexible',
    price_range: 'FOB Chattogram / Negotiable',
    image_url: '',
    gallery_images: [] as string[],
    is_featured: true,
    is_active: true,
    display_order: 0,
  });

  const [galleryUrlInput, setGalleryUrlInput] = useState('');

  useEffect(() => {
    if (isEdit && id) {
      setLoading(true);
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.product) {
            const p = data.product;
            setFormData({
              category_id: p.category_id || 1,
              item_code: p.item_code || '',
              name: p.name || '',
              description: p.description || '',
              material: p.material || '',
              size: p.size || '',
              color: p.color || '',
              moq: p.moq || 'Flexible',
              price_range: p.price_range || '',
              image_url: p.image_url || p.image || '',
              gallery_images: typeof p.gallery_images === 'string' ? JSON.parse(p.gallery_images || '[]') : (p.gallery_images || []),
              is_featured: p.is_featured !== 0,
              is_active: p.is_active !== 0,
              display_order: p.display_order || 0,
            });
          }
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

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
        setError(data.error || 'Save failed');
      }
    } catch (err: any) {
      setError('Save error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const addGalleryImage = (url: string) => {
    if (url && !formData.gallery_images.includes(url)) {
      setFormData(prev => ({
        ...prev,
        gallery_images: [...prev.gallery_images, url]
      }));
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 text-emerald-500 animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/admin/products')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products List
          </button>
          <h1 className="font-serif text-xl font-extrabold text-white">
            {isEdit ? `Edit Product ${formData.item_code}` : 'Add New Product'}
          </h1>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-950 border border-rose-800 text-rose-300 text-xs font-bold">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Item Code */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Item Code (PPT Code) *</label>
              <input
                type="text"
                required
                value={formData.item_code}
                onChange={(e) => setFormData(prev => ({ ...prev, item_code: e.target.value }))}
                placeholder="e.g. GFC-SB-030"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Product Category *</label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData(prev => ({ ...prev, category_id: Number(e.target.value) }))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              >
                <option value={1}>1. Storage & Laundry Baskets</option>
                <option value={2}>2. Planters & Pots</option>
                <option value={3}>3. Jute Bags & Packaging</option>
                <option value={4}>4. Home Decor & Mats</option>
                <option value={5}>5. Bamboo Crafts</option>
              </select>
            </div>

            {/* Product Name */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Product Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Round Shape Jute Storage Basket"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            {/* Main Image Uploader */}
            <div className="md:col-span-2 space-y-2">
              <ImageUploader
                value={formData.image_url}
                onChange={(url) => setFormData(prev => ({ ...prev, image_url: url }))}
                folder="goldenfibercrafts/products"
                label="Product Main Photo (Cloudinary Direct)"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Product Description</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter detailed export specifications and product description..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            {/* Specs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Material</label>
              <input
                type="text"
                value={formData.material}
                onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
                placeholder="e.g. Seagrass, Cotton Rope, Jute"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Size & Dimension</label>
              <input
                type="text"
                value={formData.size}
                onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                placeholder="e.g. Diameter 20cm x High 18cm"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Color / Finishing</label>
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                placeholder="e.g. Natural / White Cotton Accent"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">MOQ (Minimum Order Quantity)</label>
              <input
                type="text"
                value={formData.moq}
                onChange={(e) => setFormData(prev => ({ ...prev, moq: e.target.value }))}
                placeholder="e.g. Flexible / 500 Pcs"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

          </div>

          {/* Gallery Images List */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Multi-Angle Gallery Photos ({formData.gallery_images.length})
            </label>

            <div className="flex items-center gap-3">
              <ImageUploader
                value=""
                onChange={(url) => { if (url) addGalleryImage(url); }}
                folder="goldenfibercrafts/gallery"
                label="Add Gallery View Angle"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {formData.gallery_images.map((img, idx) => (
                <div key={idx} className="relative group w-24 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 p-1">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="h-full w-full object-contain" />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="absolute top-1 right-1 bg-rose-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                className="rounded bg-slate-950 border-slate-800 text-emerald-600 focus:ring-emerald-500"
              />
              <span>Featured on Homepage</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                className="rounded bg-slate-950 border-slate-800 text-emerald-600 focus:ring-emerald-500"
              />
              <span>Active on Live Site</span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate('/admin/products')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              <span>{isEdit ? 'Update Product' : 'Save New Product'}</span>
            </button>
          </div>

        </form>

      </div>
    </AdminLayout>
  );
};
