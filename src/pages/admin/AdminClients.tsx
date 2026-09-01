import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { 
  Users, 
  Plus, 
  Trash2, 
  Edit3, 
  Globe, 
  Save, 
  X, 
  Image as ImageIcon, 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw,
  Building
} from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';
import { 
  ClientItem, 
  DEFAULT_CLIENTS, 
  fetchLiveClients, 
  saveLocalClients 
} from '../../utils/siteContentStore';

export const AdminClients: React.FC = () => {
  usePageTitle('Manage Clients & Buyers - Admin');
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | string | null>(null);
  const [customLogoUrl, setCustomLogoUrl] = useState('');

  const [formData, setFormData] = useState<ClientItem>({
    name: '',
    logo_url: '',
    country: 'Bangladesh',
    category: 'Wholesale Partner',
    website: '',
    display_order: 1,
  });

  const loadClients = () => {
    setLoading(true);
    fetchLiveClients()
      .then((data) => {
        if (data && data.length > 0) {
          setClients(data);
        } else {
          setClients(DEFAULT_CLIENTS);
        }
      })
      .catch(() => setClients(DEFAULT_CLIENTS))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadClients();
  }, []);

  const openAddModal = () => {
    setEditingClient(null);
    setFormData({
      name: '',
      logo_url: '',
      country: 'USA / Canada',
      category: 'Wholesale Partner',
      website: '',
      display_order: clients.length + 1,
    });
    setCustomLogoUrl('');
    setIsModalOpen(true);
  };

  const openEditModal = (client: ClientItem) => {
    setEditingClient(client);
    setFormData({
      name: client.name || '',
      logo_url: client.logo_url || '',
      country: client.country || '',
      category: client.category || 'Wholesale Partner',
      website: client.website || '',
      display_order: client.display_order ?? 1,
    });
    setCustomLogoUrl('');
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Client/Buyer Name is required');
      return;
    }

    setSaving(true);
    const token = localStorage.getItem('gfcl_admin_token') || '';
    const payload = {
      ...formData,
      name: formData.name.trim(),
      country: formData.country.trim(),
      category: formData.category?.trim() || 'Wholesale Partner',
      display_order: Number(formData.display_order) || 1,
    };

    try {
      const isEdit = !!editingClient;
      const url = isEdit ? `/api/clients/${editingClient.id}` : '/api/clients';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const resData = await res.json().catch(() => ({}));

      let updatedList: ClientItem[];
      if (isEdit) {
        updatedList = clients.map(c => c.id === editingClient.id ? { ...c, ...payload } : c);
      } else {
        const newClient: ClientItem = {
          id: resData.id || Date.now(),
          ...payload,
        };
        updatedList = [...clients, newClient];
      }

      setClients(updatedList);
      saveLocalClients(updatedList);
      setIsModalOpen(false);
    } catch (err) {
      // Offline fallback
      let updatedList: ClientItem[];
      if (editingClient) {
        updatedList = clients.map(c => c.id === editingClient.id ? { ...c, ...payload } : c);
      } else {
        updatedList = [...clients, { id: Date.now(), ...payload }];
      }
      setClients(updatedList);
      saveLocalClients(updatedList);
      setIsModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number | string, name: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete buyer/client "${name}"?`)) return;

    setDeletingId(id);
    const token = localStorage.getItem('gfcl_admin_token') || '';

    try {
      await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const updated = clients.filter(c => c.id !== id);
      setClients(updated);
      saveLocalClients(updated);
    } catch {
      const updated = clients.filter(c => c.id !== id);
      setClients(updated);
      saveLocalClients(updated);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredClients = clients.filter(c => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      (c.name || '').toLowerCase().includes(q) ||
      (c.country || '').toLowerCase().includes(q) ||
      (c.category || '').toLowerCase().includes(q)
    );
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">Global Clients & Buyers Management</h1>
            <p className="text-xs text-slate-400 mt-1">Add, update, or remove international buyers, retailers, and fair-trade partners</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={loadClients}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reload from DB"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>

            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide shadow-md transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" /> Add New Client / Buyer
            </button>
          </div>
        </div>

        {/* Search Filter */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by buyer name, country, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
          />
        </div>

        {/* Grid of Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredClients.map((client) => (
            <div 
              key={client.id} 
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-sm transition-all group"
            >
              <div className="space-y-3">
                {/* Logo Display Box */}
                <div className="h-24 w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden shadow-xs border border-slate-800">
                  {client.logo_url ? (
                    <img 
                      src={client.logo_url} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <ImageIcon className="h-6 w-6 text-slate-400" />
                      <span className="text-[10px] font-bold mt-1">No Logo</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="text-center space-y-1">
                  <h3 className="font-serif text-sm font-extrabold text-white truncate">{client.name}</h3>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center justify-center gap-1">
                    <Globe className="h-3 w-3 shrink-0" /> {client.country || 'Global'}
                  </span>
                  {client.category && (
                    <span className="inline-block text-[10px] text-slate-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 truncate max-w-full">
                      {client.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-500">
                  Order: #{client.display_order || 1}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(client)}
                    className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 transition-colors"
                    title="Edit Buyer"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => handleDelete(client.id!, client.name)}
                    disabled={deletingId === client.id}
                    className="p-2 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors disabled:opacity-50"
                    title="Delete Buyer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredClients.length === 0 && (
            <div className="col-span-full bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-500">
              No clients found matching your query.
            </div>
          )}
        </div>

        {/* ADD / EDIT MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-lg space-y-5 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <Building className="h-5 w-5 text-emerald-400" />
                  {editingClient ? `Edit Buyer: ${editingClient.name}` : 'Add New Client / Buyer'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Buyer / Retailer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Ten Thousand Villages"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Country / Market *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    placeholder="e.g. USA / Canada or Germany"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Category / Description Tag */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Category / Retail Industry
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="e.g. Fair Trade Artisan Products"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Logo Image Upload / URL */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Buyer Logo Image
                  </label>

                  {formData.logo_url && (
                    <div className="h-16 w-32 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-700">
                      <img src={formData.logo_url} alt="Preview" className="max-h-full max-w-full object-contain" />
                    </div>
                  )}

                  <ImageUploader
                    value={formData.logo_url || ''}
                    onChange={(url) => setFormData(prev => ({ ...prev, logo_url: url }))}
                    folder="goldenfibercrafts/clients"
                    label="Upload Buyer Logo"
                  />

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Or paste Logo URL directly..."
                      value={customLogoUrl}
                      onChange={(e) => setCustomLogoUrl(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-emerald-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customLogoUrl.trim()) {
                          setFormData(prev => ({ ...prev, logo_url: customLogoUrl.trim() }));
                          setCustomLogoUrl('');
                        }
                      }}
                      className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
                    >
                      Set
                    </button>
                  </div>
                </div>

                {/* Display Order */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: Number(e.target.value) }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50"
                  >
                    <Save className="h-4 w-4" />
                    <span>{saving ? 'Saving...' : (editingClient ? 'Update Buyer' : 'Save Buyer')}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminClients;
