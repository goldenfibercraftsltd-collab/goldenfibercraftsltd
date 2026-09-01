import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import {
  Sparkles,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Eye,
  EyeOff,
  Layers,
  Leaf,
  Factory,
  ShieldCheck,
  Loader2,
  X,
  Save,
  Check,
  ArrowUpDown,
  Tag,
  Quote,
  Activity,
  ListPlus,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';
import {
  PageSectionItem,
  SectionMetric,
  ProcessStep,
  getLocalSections,
  setLocalSections,
  fetchLiveSections,
  normalizeSectionItem
} from '../../utils/pageSectionsStore';

export const AdminPageSections: React.FC = () => {
  usePageTitle('Page Sections & Posts CMS - Admin');

  const [sections, setSections] = useState<PageSectionItem[]>(() => getLocalSections());
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'sustainability' | 'infrastructure' | 'quality'>('all');
  
  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form Fields
  const [formData, setFormData] = useState<PageSectionItem>({
    section_type: 'sustainability',
    section_key: '',
    number: '01',
    badge: '',
    title: '',
    subtitle: '',
    quote: '',
    description: '',
    image_url: '',
    image_alt: '',
    category_slug: '',
    display_order: 1,
    is_active: 1,
    metrics: [{ label: '', value: '' }],
    points: [''],
    process: [{ step: '1', title: '', description: '' }]
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchLiveSections();
      if (data && data.length > 0) {
        setSections(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleUpdated = () => {
      setSections(getLocalSections());
    };
    window.addEventListener('gfcl_sections_updated', handleUpdated);
    return () => window.removeEventListener('gfcl_sections_updated', handleUpdated);
  }, []);

  const showNotification = (text: string, type: 'success' | 'error' = 'success') => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleOpenAdd = (defaultType?: 'sustainability' | 'infrastructure' | 'quality') => {
    setEditingId(null);
    const chosenType = defaultType || (filterType !== 'all' ? filterType : 'sustainability');
    const existingInType = sections.filter(s => s.section_type === chosenType);
    const nextNum = (existingInType.length + 1).toString().padStart(2, '0');

    setFormData({
      section_type: chosenType,
      section_key: '',
      number: nextNum,
      badge: chosenType === 'sustainability' ? 'Eco-Pillar' : chosenType === 'infrastructure' ? 'Craft Line' : 'Quality Protocol',
      title: '',
      subtitle: '',
      quote: '',
      description: '',
      image_url: '',
      image_alt: '',
      category_slug: '',
      display_order: existingInType.length + 1,
      is_active: 1,
      metrics: [{ label: '', value: '' }, { label: '', value: '' }],
      points: ['', ''],
      process: [{ step: '1', title: '', description: '' }]
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: PageSectionItem) => {
    setEditingId(item.id || null);
    setFormData({
      ...item,
      metrics: item.metrics && item.metrics.length > 0 ? item.metrics : [{ label: '', value: '' }],
      points: item.points && item.points.length > 0 ? item.points : [''],
      process: item.process && item.process.length > 0 ? item.process : [{ step: '1', title: '', description: '' }]
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number | string | undefined, title: string) => {
    if (!id) return;
    if (!window.confirm(`Are you sure you want to permanently delete section "${title}"?`)) return;

    const token = localStorage.getItem('gfcl_admin_token') || '';
    const updated = sections.filter(s => s.id !== id);
    setSections(updated);
    setLocalSections(updated);

    try {
      await fetch(`/api/sections/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      showNotification(`Section "${title}" has been deleted live!`);
    } catch (err) {
      console.error(err);
      showNotification(`Section removed locally`, 'success');
    }
  };

  const handleToggleActive = async (item: PageSectionItem) => {
    if (!item.id) return;
    const token = localStorage.getItem('gfcl_admin_token') || '';
    const nextState = !item.is_active;

    const updated = sections.map(s => s.id === item.id ? { ...s, is_active: nextState ? 1 : 0 } : s);
    setSections(updated);
    setLocalSections(updated);

    try {
      await fetch(`/api/sections/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ is_active: nextState ? 1 : 0 })
      });
      showNotification(`"${item.title}" is now ${nextState ? 'Active (Visible)' : 'Hidden'}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    setSaving(true);
    const token = localStorage.getItem('gfcl_admin_token') || '';

    // Filter empty metrics, points, and process steps
    const cleanMetrics = (formData.metrics || []).filter(m => m.label.trim() || m.value.trim());
    const cleanPoints = (formData.points || []).filter(p => p.trim());
    const cleanProcess = (formData.process || []).filter(pr => pr.title.trim() || pr.description.trim());

    const payload = {
      ...formData,
      metrics_json: JSON.stringify(cleanMetrics),
      points_json: JSON.stringify(cleanPoints),
      process_json: JSON.stringify(cleanProcess),
      metrics: cleanMetrics,
      points: cleanPoints,
      guarantees: cleanPoints,
      impactPoints: cleanPoints,
      highlights: cleanPoints,
      process: cleanProcess
    };

    try {
      if (editingId) {
        // UPDATE
        await fetch(`/api/sections/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        const updated = sections.map(s => s.id === editingId ? normalizeSectionItem({ ...s, ...payload, id: editingId }) : s);
        setSections(updated);
        setLocalSections(updated);
        showNotification(`Section "${formData.title}" updated live!`);
      } else {
        // CREATE NEW
        const res = await fetch('/api/sections', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        const newId = data.id || Date.now();

        const newItem = normalizeSectionItem({ ...payload, id: newId });
        const updated = [...sections, newItem];
        setSections(updated);
        setLocalSections(updated);
        showNotification(`New section "${formData.title}" published live to Cloudflare D1!`);
      }

      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving section:', err);
      // Save locally as fallback
      const updated = editingId
        ? sections.map(s => s.id === editingId ? normalizeSectionItem({ ...s, ...payload, id: editingId }) : s)
        : [...sections, normalizeSectionItem({ ...payload, id: Date.now() })];
      setSections(updated);
      setLocalSections(updated);
      showNotification(`Saved locally`, 'success');
      setIsModalOpen(false);
    } finally {
      setSaving(false);
    }
  };

  // Metrics Helpers
  const handleAddMetric = () => {
    setFormData(prev => ({
      ...prev,
      metrics: [...(prev.metrics || []), { label: '', value: '' }]
    }));
  };

  const handleMetricChange = (index: number, field: 'label' | 'value', val: string) => {
    setFormData(prev => {
      const copy = [...(prev.metrics || [])];
      copy[index] = { ...copy[index], [field]: val };
      return { ...prev, metrics: copy };
    });
  };

  const handleRemoveMetric = (index: number) => {
    setFormData(prev => ({
      ...prev,
      metrics: (prev.metrics || []).filter((_, i) => i !== index)
    }));
  };

  // Points / Guarantees Helpers
  const handleAddPoint = () => {
    setFormData(prev => ({
      ...prev,
      points: [...(prev.points || []), '']
    }));
  };

  const handlePointChange = (index: number, val: string) => {
    setFormData(prev => {
      const copy = [...(prev.points || [])];
      copy[index] = val;
      return { ...prev, points: copy };
    });
  };

  const handleRemovePoint = (index: number) => {
    setFormData(prev => ({
      ...prev,
      points: (prev.points || []).filter((_, i) => i !== index)
    }));
  };

  // Process Steps Helpers
  const handleAddProcessStep = () => {
    setFormData(prev => {
      const current = prev.process || [];
      const nextStepNum = (current.length + 1).toString();
      return {
        ...prev,
        process: [...current, { step: nextStepNum, title: '', description: '' }]
      };
    });
  };

  const handleProcessChange = (index: number, field: 'step' | 'title' | 'description', val: string) => {
    setFormData(prev => {
      const copy = [...(prev.process || [])];
      copy[index] = { ...copy[index], [field]: val };
      return { ...prev, process: copy };
    });
  };

  const handleRemoveProcess = (index: number) => {
    setFormData(prev => ({
      ...prev,
      process: (prev.process || []).filter((_, i) => i !== index)
    }));
  };

  // Filtered List
  const filteredSections = sections.filter(s => {
    if (filterType === 'all') return true;
    return s.section_type === filterType;
  });

  const sustainabilityCount = sections.filter(s => s.section_type === 'sustainability').length;
  const infrastructureCount = sections.filter(s => s.section_type === 'infrastructure').length;
  const qualityCount = sections.filter(s => s.section_type === 'quality').length;

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6 pb-12 font-sans">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
          <div>
            <span className="text-[11px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest block">
              CONTENT MANAGEMENT SYSTEM (CMS)
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
              Sustainability, Infrastructure & Quality Posts
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Add, edit, delete, and manage dynamic visual posts and pillars across all corporate pages with instant D1 database sync
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleOpenAdd()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Section</span>
            </button>
          </div>
        </div>

        {/* Notification Alert */}
        {notification && (
          <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2 shadow-lg animate-fadeIn ${
            notification.type === 'success' ? 'bg-emerald-950/90 border-emerald-700 text-emerald-300' : 'bg-red-950/90 border-red-700 text-red-300'
          }`}>
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>{notification.text}</span>
          </div>
        )}

        {/* Filter Tabs & Counter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filterType === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>All Posts ({sections.length})</span>
            </button>

            <button
              onClick={() => setFilterType('sustainability')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filterType === 'sustainability'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Leaf className="h-3.5 w-3.5 text-emerald-400" />
              <span>Sustainability ({sustainabilityCount})</span>
            </button>

            <button
              onClick={() => setFilterType('infrastructure')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filterType === 'infrastructure'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Factory className="h-3.5 w-3.5 text-amber-400" />
              <span>Infrastructure ({infrastructureCount})</span>
            </button>

            <button
              onClick={() => setFilterType('quality')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filterType === 'quality'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
              <span>Quality Control ({qualityCount})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={filterType === 'sustainability' ? '/sustainability' : filterType === 'infrastructure' ? '/infrastructure' : filterType === 'quality' ? '/quality' : '/sustainability'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <span>Preview Live Page</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* SECTIONS GRID */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-emerald-500" />
            <p className="text-xs font-bold">Loading live sections from Cloudflare D1...</p>
          </div>
        ) : filteredSections.length === 0 ? (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-4">
            <Layers className="h-12 w-12 text-slate-600 mx-auto" />
            <h3 className="text-white font-bold text-base">No sections found for this filter</h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto">
              Click the button below to add your first post for {filterType.toUpperCase()}.
            </p>
            <button
              onClick={() => handleOpenAdd()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase"
            >
              <Plus className="h-4 w-4" />
              <span>Create First Section</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSections.map((item, idx) => {
              const typeColor = 
                item.section_type === 'sustainability' ? 'text-emerald-400 bg-emerald-950/70 border-emerald-800' :
                item.section_type === 'infrastructure' ? 'text-amber-400 bg-amber-950/70 border-amber-800' :
                'text-teal-400 bg-teal-950/70 border-teal-800';

              const typeIcon = 
                item.section_type === 'sustainability' ? <Leaf className="h-3 w-3" /> :
                item.section_type === 'infrastructure' ? <Factory className="h-3 w-3" /> :
                <ShieldCheck className="h-3 w-3" />;

              return (
                <div
                  key={item.id || idx}
                  className={`bg-slate-900 border rounded-3xl p-6 space-y-5 transition-all shadow-lg flex flex-col justify-between ${
                    item.is_active ? 'border-slate-800 hover:border-slate-700' : 'border-red-900/50 opacity-60'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Type Badge, Number & Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider border ${typeColor}`}>
                          {typeIcon}
                          <span>{item.section_type}</span>
                        </span>

                        <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          #{item.number || (idx + 1).toString().padStart(2, '0')}
                        </span>

                        {item.badge && (
                          <span className="text-[11px] font-bold text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-md truncate max-w-[180px]">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Controls: Active toggle, Edit, Delete */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => handleToggleActive(item)}
                          title={item.is_active ? 'Visible - Click to Hide' : 'Hidden - Click to Show'}
                          className={`p-2 rounded-xl transition-colors cursor-pointer ${
                            item.is_active ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400' : 'bg-red-950/80 text-red-400 hover:bg-red-900'
                          }`}
                        >
                          {item.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>

                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                          title="Edit Section"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => handleDelete(item.id, item.title)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-red-950 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Section"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image & Title Preview */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      {item.image_url ? (
                        <div className="w-full sm:w-36 h-28 shrink-0 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full sm:w-36 h-28 shrink-0 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-700">
                          <Layers className="h-8 w-8" />
                        </div>
                      )}

                      <div className="space-y-1.5 flex-1 min-w-0">
                        <h3 className="font-serif text-base font-extrabold text-white leading-snug">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs text-amber-400 font-bold truncate">
                            {item.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Quote preview */}
                    {item.quote && (
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 italic flex items-start gap-2">
                        <Quote className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 font-medium">"{item.quote}"</span>
                      </div>
                    )}

                    {/* Metrics preview chips */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] flex items-center gap-1.5">
                            <span className="text-slate-400 font-medium">{m.label}:</span>
                            <span className="text-emerald-300 font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer Info */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Display Order: #{item.display_order || 0}</span>
                    <span className="text-emerald-400/80 font-mono">
                      {item.points?.length || 0} Key Points • {item.process?.length || 0} Process Steps
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODAL: ADD / EDIT SECTION */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/50">
                <div>
                  <span className="text-[10.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                    {editingId ? 'EDIT POST / SECTION' : 'CREATE NEW SECTION'}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-white">
                    {editingId ? `Edit: ${formData.title || 'Untitled Section'}` : 'New Dynamic Page Post'}
                  </h2>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Form Scrollable Body */}
              <form onSubmit={handleSaveForm} className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-sans">
                
                {/* 1. Primary Classification */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">1. Page & Section Type</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Target Corporate Page *</label>
                      <select
                        value={formData.section_type}
                        onChange={(e) => setFormData(prev => ({ ...prev, section_type: e.target.value as any }))}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none cursor-pointer"
                      >
                        <option value="sustainability">🌱 Sustainability & Eco-Impact</option>
                        <option value="infrastructure">🏭 Infrastructure & Craft Lines</option>
                        <option value="quality">🛡️ Quality Control & Protocols</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Stage / Pillar Number</label>
                      <input
                        type="text"
                        value={formData.number || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, number: e.target.value }))}
                        placeholder="e.g. 01, STAGE 01, PILLAR 01"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Display Order</label>
                      <input
                        type="number"
                        value={formData.display_order || 0}
                        onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Titles, Tagline & Text Content */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">2. Headlines & Descriptions</span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Section Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g. Raw Fiber Purity & Tensile Strength Testing"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Badge / Tag Title</label>
                      <input
                        type="text"
                        value={formData.badge || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, badge: e.target.value }))}
                        placeholder="e.g. Raw Material Verification"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Subtitle / Product Tagline</label>
                    <input
                      type="text"
                      value={formData.subtitle || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                      placeholder="e.g. 100% Golden Jute • Eco Shopping & Totes • Artisanal Stitching"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-amber-300 outline-none font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Featured Quote / Callout</label>
                    <input
                      type="text"
                      value={formData.quote || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, quote: e.target.value }))}
                      placeholder="e.g. Only top-grade natural golden tossa jute are admitted..."
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none italic"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Detailed Description Paragraph *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Comprehensive explanation of the inspection protocol, sustainability impact, or craft line..."
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* 3. Section Photo & Image Uploader */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase">3. High-Quality Photography</span>

                  <ImageUploader
                    value={formData.image_url || ''}
                    onChange={(url: string) => setFormData(prev => ({ ...prev, image_url: url }))}
                    folder={`sections/${formData.section_type}`}
                    label="Section Feature Photo"
                  />

                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-bold text-slate-300">Image Alt Text (SEO)</label>
                    <input
                      type="text"
                      value={formData.image_alt || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, image_alt: e.target.value }))}
                      placeholder="Descriptive caption for screen readers & SEO"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* 4. Dynamic Metrics / Specs Builder */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">4. Performance Metrics / Badges</span>
                    <button
                      type="button"
                      onClick={handleAddMetric}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold border border-slate-800 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Metric</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {(formData.metrics || []).map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={m.label}
                          onChange={(e) => handleMetricChange(mIdx, 'label', e.target.value)}
                          placeholder="e.g. Tensile Endurance"
                          className="w-1/2 px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                        />
                        <input
                          type="text"
                          value={m.value}
                          onChange={(e) => handleMetricChange(mIdx, 'value', e.target.value)}
                          placeholder="e.g. >45 kgf"
                          className="w-1/2 px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-emerald-400 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveMetric(mIdx)}
                          className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-900 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Key Points / Guarantees / Impact Points */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">5. Key Bullet Points / Guarantees</span>
                    <button
                      type="button"
                      onClick={handleAddPoint}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold border border-slate-800 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Point</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {(formData.points || []).map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                        <input
                          type="text"
                          value={pt}
                          onChange={(e) => handlePointChange(ptIdx, e.target.value)}
                          placeholder="e.g. 100% Natural Golden Jute & Wild Coastal Seagrass"
                          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemovePoint(ptIdx)}
                          className="p-2 rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-900 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Process Steps (Mainly for Infrastructure, optional for others) */}
                {formData.section_type === 'infrastructure' && (
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-teal-400 uppercase">6. Multi-Step Manufacturing Process</span>
                      <button
                        type="button"
                        onClick={handleAddProcessStep}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold border border-slate-800 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add Process Step</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {(formData.process || []).map((proc, pIdx) => (
                        <div key={pIdx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 flex-1">
                              <span className="text-xs font-mono font-bold text-amber-400">Step {pIdx + 1}:</span>
                              <input
                                type="text"
                                value={proc.title}
                                onChange={(e) => handleProcessChange(pIdx, 'title', e.target.value)}
                                placeholder="Step Title (e.g. Precision Pattern Cutting)"
                                className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg text-xs font-bold text-white outline-none"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveProcess(pIdx)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-950 transition-colors"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <textarea
                            rows={2}
                            value={proc.description}
                            onChange={(e) => handleProcessChange(pIdx, 'description', e.target.value)}
                            placeholder="Step description..."
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg text-xs text-slate-300 outline-none leading-relaxed"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Active Status */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Post Visibility</span>
                    <span className="text-[11px] text-slate-400">Controls whether this section appears on the live website.</span>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!formData.is_active}
                      onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked ? 1 : 0 }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    <span>{saving ? 'Publishing...' : editingId ? 'Save Changes' : 'Publish Section Live'}</span>
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

export default AdminPageSections;
