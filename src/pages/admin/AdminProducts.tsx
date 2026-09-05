import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PRODUCTS } from '../../data/products';
import { getAllActiveProducts, markProductDeletedLocally, formatDbProductToItem, setLiveCachedProducts } from '../../utils/productStore';
import { Plus, Search, Edit3, Trash2, ExternalLink, Image as ImageIcon, CheckCircle, XCircle } from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';

export const AdminProducts: React.FC = () => {
  usePageTitle('Manage Products - Admin');
  const [products, setProducts] = useState<any[]>(() => getAllActiveProducts());
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products?active_only=false');
      const data = await res.json();
      if (data && data.success && Array.isArray(data.products)) {
        // Direct authoritative database products from Cloudflare D1
        setProducts(data.products);
        // Also keep live store in sync
        const activeItems = data.products
          .filter((p: any) => p.is_active !== false && p.is_active !== 0)
          .map(formatDbProductToItem);
        setLiveCachedProducts(activeItems);
        return;
      }
    } catch (err) {
      console.warn('Network error loading DB products, fallback to local', err);
    } finally {
      setLoading(false);
    }
    setProducts(getAllActiveProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (item: any) => {
    const displayName = item.name || item.item_code || 'Product';
    const displayCode = item.item_code || item.code || item.id;
    const dbId = item.id;

    if (!window.confirm(`Are you sure you want to permanently delete "${displayName}" (${displayCode}) from the Database?`)) {
      return;
    }

    setDeletingId(String(dbId || displayCode));
    const token = localStorage.getItem('gfcl_admin_token') || '';

    try {
      const targetParam = dbId || displayCode;
      const res = await fetch(`/api/products/${encodeURIComponent(targetParam)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok && res.status !== 404) {
        throw new Error(data.error || `Server responded with status ${res.status}`);
      }

      // Mark deleted locally across all identifiers
      markProductDeletedLocally(dbId, displayCode, item.item_code, item.code, item.slug);

      // Remove immediately from UI state
      setProducts(prev => prev.filter(p => 
        p.id !== dbId && 
        p.item_code !== displayCode && 
        p.code !== displayCode
      ));

      alert(`Product "${displayName}" (${displayCode}) permanently deleted.`);
    } catch (err: any) {
      alert(`Delete failed: ${err.message}. Please check your login session.`);
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = products.filter(p => {
    const codeStr = (p.item_code || p.code || p.id || '').toString().toLowerCase();
    const nameStr = (p.name || '').toString().toLowerCase();
    const q = search.toLowerCase();

    const matchesSearch = !q || nameStr.includes(q) || codeStr.includes(q);
    const matchesCat = !selectedCat || p.category_id === selectedCat || p.categorySlug === selectedCat || p.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">Direct DB Products Management</h1>
            <p className="text-xs text-slate-400 mt-1">Add or permanently delete products directly to/from Cloudflare D1 Database</p>
          </div>

          <RouterLink
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-md shrink-0"
          >
            <Plus className="h-4 w-4" /> Add Product to DB
          </RouterLink>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by Art Code, Item Code, or Product Name..."
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
            <option value="jute">Jute Handicrafts</option>
            <option value="rugs">Jhuta & Jute Rugs</option>
            <option value="seagrass">Seagrass Baskets & Mats</option>
            <option value="rattan">Rattan Furniture & Mirrors</option>
            <option value="bamboo">Bamboo Baskets & Crafts</option>
            <option value="water-hyacinth">Water Hyacinth Baskets</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">Image</th>
                  <th className="px-5 py-3.5">Art Code / Item Code</th>
                  <th className="px-5 py-3.5">Product Name</th>
                  <th className="px-5 py-3.5">Category</th>
                  <th className="px-5 py-3.5 text-center">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {filtered.map((item) => {
                  const itemId = item.id || item.item_code || item.code;
                  return (
                    <tr key={itemId} className="hover:bg-slate-800/40 transition-colors">
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
                        {item.item_code || item.code || item.id}
                      </td>

                      <td className="px-5 py-3 font-bold text-white max-w-xs truncate">
                        {item.name}
                      </td>

                      <td className="px-5 py-3 text-slate-400">
                        {item.category_name || item.categoryName || item.category_id || item.category}
                      </td>

                      <td className="px-5 py-3 text-center">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                          item.is_active !== false && item.is_active !== 0
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}>
                          {item.is_active !== false && item.is_active !== 0 ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                          {item.is_active !== false && item.is_active !== 0 ? 'Active' : 'Inactive'}
                        </span>
                      </td>

                      <td className="px-5 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <RouterLink
                            to={`/products/${item.slug || itemId}`}
                            target="_blank"
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                            title="View on site"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </RouterLink>

                          <RouterLink
                            to={`/admin/products/edit/${encodeURIComponent(item.id || item.item_code || item.code)}`}
                            className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 transition-colors"
                            title="Edit Product"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                          </RouterLink>

                          <button
                            onClick={() => handleDelete(item)}
                            disabled={deletingId === String(item.id || item.item_code || item.code)}
                            className="p-2 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors disabled:opacity-50 cursor-pointer"
                            title="Delete Permanently from DB"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-slate-500">
                      No products found. Add a new product to Database using the button above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
