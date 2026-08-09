import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PRODUCTS, ProductItem } from '../../data/products';
import { Plus, Search, Edit3, Trash2, ExternalLink, Image as ImageIcon, CheckCircle, XCircle } from 'lucide-react';

export const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>(PRODUCTS);
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchProducts = () => {
    setLoading(true);
    fetch('/api/products?active_only=false')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.products?.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}" (${id})? This will also remove its image from Cloudinary.`)) return;

    setDeletingId(id);
    const token = localStorage.getItem('gfcl_admin_token') || '';

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.filter(p => p.id !== id));
      } else {
        alert(data.error || 'Failed to delete product');
      }
    } catch (err: any) {
      alert('Delete error: ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = products.filter(p => {
    const matchesSearch = (p.name || '').toLowerCase().includes(search.toLowerCase()) ||
                          (p.item_code || p.id || '').toLowerCase().includes(search.toLowerCase());
    const matchesCat = !selectedCat || p.category_slug === selectedCat || p.categorySlug === selectedCat || p.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">Products Management</h1>
            <p className="text-xs text-slate-400 mt-1">Add, edit, or remove products and their Cloudinary photos in real-time D1</p>
          </div>

          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-md shrink-0"
          >
            <Plus className="h-4 w-4" /> Add Product
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by Item Code or Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
            />
          </div>

          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
          >
            <option value="">All Categories</option>
            <option value="storage-laundry-baskets">Storage & Laundry Baskets</option>
            <option value="planters-pots">Planters & Pots</option>
            <option value="jute-bags-packaging">Jute Bags & Packaging</option>
            <option value="home-decor-mats">Home Decor & Mats</option>
            <option value="bamboo-crafts">Bamboo Crafts</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">Image</th>
                  <th className="px-5 py-3.5">Item Code</th>
                  <th className="px-5 py-3.5">Product Name</th>
                  <th className="px-5 py-3.5">Category</th>
                  <th className="px-5 py-3.5 text-center">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-3">
                      <div className="h-12 w-12 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center overflow-hidden">
                        {item.image_url || item.image ? (
                          <img src={item.image_url || item.image} alt={item.name} className="h-full w-full object-contain" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-slate-600" />
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-3 font-mono font-bold text-amber-400">
                      {item.item_code || item.id}
                    </td>

                    <td className="px-5 py-3 font-bold text-white max-w-xs truncate">
                      {item.name}
                    </td>

                    <td className="px-5 py-3 text-slate-400">
                      {item.category_name || item.categoryName || item.category}
                    </td>

                    <td className="px-5 py-3 text-center">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                        item.is_active !== 0
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}>
                        {item.is_active !== 0 ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                        {item.is_active !== 0 ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/products/${item.slug || item.id}`}
                          target="_blank"
                          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                          title="View on site"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                          to={`/admin/products/edit/${item.id}`}
                          className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 transition-colors"
                          title="Edit Product"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </Link>

                        <button
                          onClick={() => handleDelete(item.id, item.name)}
                          disabled={deletingId === item.id}
                          className="p-2 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors disabled:opacity-50"
                          title="Delete Product"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};
