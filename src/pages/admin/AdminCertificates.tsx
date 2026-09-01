import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Plus, 
  Edit3, 
  Trash2, 
  X, 
  Save, 
  Image as ImageIcon, 
  RefreshCw, 
  FileCheck,
  Search
} from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';
import { 
  CertificateItem, 
  DEFAULT_CERTIFICATES, 
  fetchLiveCertificates, 
  saveLocalCertificates 
} from '../../utils/siteContentStore';

export const AdminCertificates: React.FC = () => {
  usePageTitle('Manage Factory Certificates - Admin');
  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<CertificateItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | string | null>(null);
  const [customImageUrl, setCustomImageUrl] = useState('');

  const [formData, setFormData] = useState<CertificateItem>({
    name: '',
    title: '',
    badge: 'Environmental Standard',
    image_url: '',
    logo_url: '',
    description: '',
    display_order: 1,
  });

  const loadCertificates = () => {
    setLoading(true);
    fetchLiveCertificates()
      .then((data) => {
        if (data && data.length > 0) {
          setCertificates(data);
        } else {
          setCertificates(DEFAULT_CERTIFICATES);
        }
      })
      .catch(() => setCertificates(DEFAULT_CERTIFICATES))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCertificates();
  }, []);

  const openAddModal = () => {
    setEditingCert(null);
    setFormData({
      name: '',
      title: '',
      badge: 'Environmental Standard',
      image_url: '',
      logo_url: '',
      description: '',
      display_order: certificates.length + 1,
    });
    setCustomImageUrl('');
    setIsModalOpen(true);
  };

  const openEditModal = (cert: CertificateItem) => {
    setEditingCert(cert);
    setFormData({
      name: cert.name || cert.title || '',
      title: cert.title || cert.name || '',
      badge: cert.badge || 'Export Compliance',
      image_url: cert.image_url || cert.logo_url || cert.image || '',
      logo_url: cert.logo_url || cert.image_url || '',
      description: cert.description || '',
      display_order: cert.display_order ?? 1,
    });
    setCustomImageUrl('');
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Certificate Title is required');
      return;
    }

    setSaving(true);
    const token = localStorage.getItem('gfcl_admin_token') || '';
    const img = formData.image_url || formData.logo_url || '';
    const payload = {
      name: formData.name?.trim() || formData.title.trim(),
      title: formData.title.trim(),
      badge: formData.badge?.trim() || 'Export Compliance',
      image_url: img,
      logo_url: img,
      description: formData.description?.trim() || '',
      display_order: Number(formData.display_order) || 1,
    };

    try {
      const isEdit = !!editingCert;
      const url = isEdit ? `/api/certificates/${editingCert.id}` : '/api/certificates';
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

      let updatedList: CertificateItem[];
      if (isEdit) {
        updatedList = certificates.map(c => c.id === editingCert.id ? { ...c, ...payload } : c);
      } else {
        const newCert: CertificateItem = {
          id: resData.id || Date.now(),
          ...payload,
        };
        updatedList = [...certificates, newCert];
      }

      setCertificates(updatedList);
      saveLocalCertificates(updatedList);
      setIsModalOpen(false);
    } catch (err) {
      // Offline fallback
      let updatedList: CertificateItem[];
      if (editingCert) {
        updatedList = certificates.map(c => c.id === editingCert.id ? { ...c, ...payload } : c);
      } else {
        updatedList = [...certificates, { id: Date.now(), ...payload }];
      }
      setCertificates(updatedList);
      saveLocalCertificates(updatedList);
      setIsModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number | string, title: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete certificate "${title}"?`)) return;

    setDeletingId(id);
    const token = localStorage.getItem('gfcl_admin_token') || '';

    try {
      await fetch(`/api/certificates/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const updated = certificates.filter(c => c.id !== id);
      setCertificates(updated);
      saveLocalCertificates(updated);
    } catch {
      const updated = certificates.filter(c => c.id !== id);
      setCertificates(updated);
      saveLocalCertificates(updated);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredCerts = certificates.filter(c => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      (c.title || '').toLowerCase().includes(q) ||
      (c.badge || '').toLowerCase().includes(q) ||
      (c.description || '').toLowerCase().includes(q)
    );
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">Factory Certificates & Compliance</h1>
            <p className="text-xs text-slate-400 mt-1">Manage ISO, amfori BSCI, OEKO-TEX, and social compliance certifications</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={loadCertificates}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reload from DB"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>

            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide shadow-md transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" /> Add Certificate
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search certificates by standard, title, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
          />
        </div>

        {/* Grid of Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => {
            const certImg = cert.image_url || cert.logo_url || cert.image || '';
            return (
              <div 
                key={cert.id} 
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm transition-all group justify-between"
              >
                <div className="flex flex-col sm:flex-row items-center gap-5 flex-1">
                  {/* Certificate Badge Image */}
                  <div className="h-32 w-32 rounded-2xl bg-white p-2.5 shrink-0 flex items-center justify-center shadow-md overflow-hidden border border-slate-800">
                    {certImg ? (
                      <img src={certImg} alt={cert.title} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <Award className="h-8 w-8 text-emerald-600" />
                        <span className="text-[10px] font-bold mt-1 text-slate-600">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800 inline-block">
                      {cert.badge || 'Compliance Standard'}
                    </span>
                    <h3 className="font-serif text-base font-extrabold text-white leading-snug">{cert.title || cert.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{cert.description}</p>
                    <span className="text-[10px] font-mono text-slate-500 block">Order: #{cert.display_order || 1}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-800 sm:pl-4">
                  <button
                    onClick={() => openEditModal(cert)}
                    className="p-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 transition-colors"
                    title="Edit Certificate"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(cert.id!, cert.title || cert.name || 'Certificate')}
                    disabled={deletingId === cert.id}
                    className="p-2.5 rounded-xl bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors disabled:opacity-50"
                    title="Delete Certificate"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

              </div>
            );
          })}

          {filteredCerts.length === 0 && (
            <div className="col-span-full bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-500">
              No certificates found matching your query.
            </div>
          )}
        </div>

        {/* ADD / EDIT MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-lg space-y-5 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <Award className="h-5 w-5 text-emerald-400" />
                  {editingCert ? `Edit Certificate` : 'Add New Certificate'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                
                {/* Title */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Certificate Title & Standard *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g. ISO 14001:2015 Environmental Management"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Badge Tag */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Standard Badge Category
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData(prev => ({ ...prev, badge: e.target.value }))}
                    placeholder="e.g. Environmental Standard or Social Compliance"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Certificate Description / Scope
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Certified environmental management systems ensuring zero toxic emissions..."
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none leading-relaxed"
                  />
                </div>

                {/* Image Upload / URL */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Certificate Seal / Logo Image
                  </label>

                  {formData.image_url && (
                    <div className="h-20 w-20 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-700">
                      <img src={formData.image_url} alt="Preview" className="max-h-full max-w-full object-contain" />
                    </div>
                  )}

                  <ImageUploader
                    value={formData.image_url || ''}
                    onChange={(url) => setFormData(prev => ({ ...prev, image_url: url, logo_url: url }))}
                    folder="goldenfibercrafts/certificates"
                    label="Upload Certificate Seal"
                  />

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Or paste Certificate Image URL..."
                      value={customImageUrl}
                      onChange={(e) => setCustomImageUrl(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white outline-none focus:border-emerald-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customImageUrl.trim()) {
                          setFormData(prev => ({ ...prev, image_url: customImageUrl.trim(), logo_url: customImageUrl.trim() }));
                          setCustomImageUrl('');
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
                    <span>{saving ? 'Saving...' : (editingCert ? 'Update Certificate' : 'Save Certificate')}</span>
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

export default AdminCertificates;
