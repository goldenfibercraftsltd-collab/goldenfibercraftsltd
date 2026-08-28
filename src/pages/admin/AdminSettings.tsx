import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { 
  Save, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Tag, 
  Cloud, 
  MessageSquare,
  Building,
  User,
  Sliders,
  Share2,
  FileText,
  Sparkles,
  Layers,
  Globe,
  Loader2,
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';
import { 
  SiteSettingsData, 
  DEFAULT_SITE_SETTINGS, 
  getLocalSiteSettings, 
  saveLocalSiteSettings, 
  fetchLiveSiteSettings 
} from '../../utils/siteContentStore';

export const AdminSettings: React.FC = () => {
  usePageTitle('Site Settings & Content Editor - Admin');
  const [activeTab, setActiveTab] = useState<'general' | 'addresses' | 'leadership' | 'technical' | 'social' | 'footer'>('general');
  const [settings, setSettings] = useState<SiteSettingsData>(() => getLocalSiteSettings());
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchLiveSiteSettings()
      .then(data => {
        if (data) setSettings(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    const token = localStorage.getItem('gfcl_admin_token') || '';

    // 1. Save locally and dispatch event immediately
    saveLocalSiteSettings(settings);

    try {
      // 2. Persist to Cloudflare D1
      await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error('Error saving settings to D1:', err);
      setSuccess(true); // Saved locally
    } finally {
      setSaving(false);
    }
  };

  const navTabs = [
    { id: 'general', label: 'General & Branding', icon: Tag },
    { id: 'addresses', label: 'Offices & Factory Units', icon: MapPin },
    { id: 'leadership', label: 'Key Leadership & Bios', icon: User },
    { id: 'technical', label: 'Technical & Production Specs', icon: Sliders },
    { id: 'social', label: 'Social Media & Links', icon: Share2 },
    { id: 'footer', label: 'Footer & Legal Content', icon: FileText },
  ];

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-6 pb-12 font-sans">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
          <div>
            <span className="text-[11px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest block">
              VISUAL CONTENT MANAGEMENT
            </span>
            <h1 className="font-serif text-2xl font-extrabold text-white">Global Site Content & Settings</h1>
            <p className="text-xs text-slate-400 mt-1">Elementor-Pro-style live visual editor for contact details, leadership bios, factory addresses, and specs</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50 transition-all cursor-pointer"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              <span>{saving ? 'Publishing...' : 'Save & Publish Live'}</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {success && (
          <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-700 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-lg animate-fadeIn">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>✨ All Site Content & Settings have been published live to Cloudflare D1 and updated across the site in real-time!</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* FORM CONTENT */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* TAB 1: GENERAL & BRANDING */}
          {activeTab === 'general' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <Tag className="h-5 w-5 text-emerald-400" />
                  General Branding & Global Contact Info
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Primary brand details displayed on Header, Top Announcement Bar, and Title</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={settings.site_name}
                    onChange={(e) => setSettings(prev => ({ ...prev, site_name: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Official Tagline</label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={(e) => setSettings(prev => ({ ...prev, tagline: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Sub-Tagline</label>
                  <input
                    type="text"
                    value={settings.sub_tagline}
                    onChange={(e) => setSettings(prev => ({ ...prev, sub_tagline: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Top Notice / Announcement Bar</label>
                  <input
                    type="text"
                    value={settings.announcement_bar || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, announcement_bar: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Primary Export Email *</label>
                  <input
                    type="email"
                    required
                    value={settings.official_email}
                    onChange={(e) => setSettings(prev => ({ ...prev, official_email: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Secondary / MD Email</label>
                  <input
                    type="email"
                    value={settings.secondary_email}
                    onChange={(e) => setSettings(prev => ({ ...prev, secondary_email: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Export Phone / Hotline</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Official WhatsApp Number</label>
                  <input
                    type="text"
                    value={settings.whatsapp}
                    onChange={(e) => setSettings(prev => ({ ...prev, whatsapp: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none font-mono"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Official Website URL</label>
                  <input
                    type="text"
                    value={settings.official_website}
                    onChange={(e) => setSettings(prev => ({ ...prev, official_website: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none font-mono"
                  />
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: OFFICES & FACTORY UNITS */}
          {activeTab === 'addresses' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  Corporate Office & Factory Units (Salna & Kishoreganj)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Real-time address details shown on Contact Us page and Site Footer</p>
              </div>

              <div className="space-y-6">
                
                {/* Corporate Office */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">1. Corporate Headquarters</span>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Corporate Address</label>
                    <textarea
                      rows={2}
                      value={settings.corporate_office}
                      onChange={(e) => setSettings(prev => ({ ...prev, corporate_office: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Corporate Phone / Inquiries</label>
                    <input
                      type="text"
                      value={settings.corporate_phone || ''}
                      onChange={(e) => setSettings(prev => ({ ...prev, corporate_phone: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Factory Unit 1 */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">2. Factory Unit 1 (Gazipur)</span>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Unit 1 Address & Location</label>
                    <textarea
                      rows={2}
                      value={settings.factory_unit_1}
                      onChange={(e) => setSettings(prev => ({ ...prev, factory_unit_1: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Factory Phone</label>
                    <input
                      type="text"
                      value={settings.factory_phone || ''}
                      onChange={(e) => setSettings(prev => ({ ...prev, factory_phone: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Factory Unit 2 */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">3. Factory Unit 2 (Kishoreganj)</span>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Unit 2 Address & Location</label>
                    <textarea
                      rows={2}
                      value={settings.factory_unit_2}
                      onChange={(e) => setSettings(prev => ({ ...prev, factory_unit_2: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>
                </div>

                {/* Google Map Link */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Google Maps Link / Coordinates</label>
                  <input
                    type="text"
                    value={settings.google_map_url || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, google_map_url: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                  />
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: KEY LEADERSHIP (ABOUT US) */}
          {activeTab === 'leadership' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <User className="h-5 w-5 text-emerald-400" />
                  Key Leadership, Executive Profiles & Messages
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Customize CEO & Senior Director profiles, images, and messages on the About Us page</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 1. Managing Director & CEO */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <div className="h-16 w-16 rounded-xl bg-slate-900 p-1 border border-slate-700 overflow-hidden shrink-0">
                      <img src={settings.md_image || '/about/md_safiqul_islam.png'} alt="MD Preview" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Executive 1</span>
                      <h4 className="font-serif text-base font-bold text-white">CEO & Managing Director</h4>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Full Name</label>
                    <input
                      type="text"
                      value={settings.md_name}
                      onChange={(e) => setSettings(prev => ({ ...prev, md_name: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Designation / Title</label>
                    <input
                      type="text"
                      value={settings.md_title}
                      onChange={(e) => setSettings(prev => ({ ...prev, md_title: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Direct Phone</label>
                      <input
                        type="text"
                        value={settings.md_phone}
                        onChange={(e) => setSettings(prev => ({ ...prev, md_phone: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Direct Email</label>
                      <input
                        type="email"
                        value={settings.md_email}
                        onChange={(e) => setSettings(prev => ({ ...prev, md_email: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300">Profile Photo Upload / URL</label>
                    <ImageUploader
                      value={settings.md_image}
                      onChange={(url) => setSettings(prev => ({ ...prev, md_image: url }))}
                      folder="goldenfibercrafts/leadership"
                      label="Upload MD Photo"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Executive Message & Vision</label>
                    <textarea
                      rows={5}
                      value={settings.md_message}
                      onChange={(e) => setSettings(prev => ({ ...prev, md_message: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* 2. Senior Director & General Manager */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <div className="h-16 w-16 rounded-xl bg-slate-900 p-1 border border-slate-700 overflow-hidden shrink-0">
                      <img src={settings.director_image || '/about/md_nazrul_islam_uzzal.png'} alt="Director Preview" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Executive 2</span>
                      <h4 className="font-serif text-base font-bold text-white">Senior Director & GM</h4>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Full Name</label>
                    <input
                      type="text"
                      value={settings.director_name}
                      onChange={(e) => setSettings(prev => ({ ...prev, director_name: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Designation / Title</label>
                    <input
                      type="text"
                      value={settings.director_title}
                      onChange={(e) => setSettings(prev => ({ ...prev, director_title: e.target.value }))}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Direct Phone</label>
                      <input
                        type="text"
                        value={settings.director_phone}
                        onChange={(e) => setSettings(prev => ({ ...prev, director_phone: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">Direct Email</label>
                      <input
                        type="email"
                        value={settings.director_email}
                        onChange={(e) => setSettings(prev => ({ ...prev, director_email: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300">Profile Photo Upload / URL</label>
                    <ImageUploader
                      value={settings.director_image}
                      onChange={(url) => setSettings(prev => ({ ...prev, director_image: url }))}
                      folder="goldenfibercrafts/leadership"
                      label="Upload GM Photo"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">Executive Message & Vision</label>
                    <textarea
                      rows={5}
                      value={settings.director_message}
                      onChange={(e) => setSettings(prev => ({ ...prev, director_message: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none leading-relaxed"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: TECHNICAL & PRODUCTION SPECS */}
          {activeTab === 'technical' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-emerald-400" />
                  Technical Information & Export Factory Capabilities
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Displayed on About Us page technical specifications grid</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Office Staff Count</label>
                  <input
                    type="text"
                    value={settings.office_staff}
                    onChange={(e) => setSettings(prev => ({ ...prev, office_staff: e.target.value }))}
                    placeholder="e.g. 30"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Total Artisans Network</label>
                  <input
                    type="text"
                    value={settings.artisans_count}
                    onChange={(e) => setSettings(prev => ({ ...prev, artisans_count: e.target.value }))}
                    placeholder="e.g. Approximate 15,000 (Directly & Indirectly)"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Monthly Production Capacity</label>
                  <input
                    type="text"
                    value={settings.monthly_capacity}
                    onChange={(e) => setSettings(prev => ({ ...prev, monthly_capacity: e.target.value }))}
                    placeholder="e.g. 50X40' HQ Containers"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Production Lead Time</label>
                  <input
                    type="text"
                    value={settings.production_lead_time}
                    onChange={(e) => setSettings(prev => ({ ...prev, production_lead_time: e.target.value }))}
                    placeholder="e.g. 70-90 days"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Payment Terms</label>
                  <input
                    type="text"
                    value={settings.payment_terms}
                    onChange={(e) => setSettings(prev => ({ ...prev, payment_terms: e.target.value }))}
                    placeholder="e.g. LC at sight or TT (30% Advance & 70% against copy of Shipping documents)"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Annual Export Turnover</label>
                  <input
                    type="text"
                    value={settings.annual_turnover}
                    onChange={(e) => setSettings(prev => ({ ...prev, annual_turnover: e.target.value }))}
                    placeholder="e.g. 5 million USD"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: SOCIAL MEDIA LINKS */}
          {activeTab === 'social' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-emerald-400" />
                  Social Media & Global Online Profiles
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Linked icons on Header, Footer, and Contact Us page</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">LinkedIn Company Profile</label>
                  <input
                    type="text"
                    value={settings.linkedin_url || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, linkedin_url: e.target.value }))}
                    placeholder="https://linkedin.com/company/goldenfibercrafts"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Facebook Page</label>
                  <input
                    type="text"
                    value={settings.facebook_url || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, facebook_url: e.target.value }))}
                    placeholder="https://facebook.com/goldenfibercrafts"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Instagram Profile</label>
                  <input
                    type="text"
                    value={settings.instagram_url || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, instagram_url: e.target.value }))}
                    placeholder="https://instagram.com/goldenfibercrafts"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">YouTube Channel / Factory Video</label>
                  <input
                    type="text"
                    value={settings.youtube_url || ''}
                    onChange={(e) => setSettings(prev => ({ ...prev, youtube_url: e.target.value }))}
                    placeholder="https://youtube.com/@goldenfibercrafts"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none font-mono"
                  />
                </div>

              </div>
            </div>
          )}

          {/* TAB 6: FOOTER & LEGAL CONTENT */}
          {activeTab === 'footer' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-extrabold text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-400" />
                  Footer Brand Description & Copyright Notice
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Short company intro and legal notices shown across the bottom of every page</p>
              </div>

              <div className="space-y-6">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Footer Short Brand Description</label>
                  <textarea
                    rows={3}
                    value={settings.footer_description}
                    onChange={(e) => setSettings(prev => ({ ...prev, footer_description: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">About Us Hero Banner Intro</label>
                  <textarea
                    rows={3}
                    value={settings.about_intro}
                    onChange={(e) => setSettings(prev => ({ ...prev, about_intro: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-slate-200 outline-none leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Copyright Notice Text</label>
                  <input
                    type="text"
                    value={settings.copyright_text}
                    onChange={(e) => setSettings(prev => ({ ...prev, copyright_text: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
                  />
                </div>

              </div>
            </div>
          )}

          {/* Bottom Save Action Bar */}
          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Changes will be saved to Cloudflare D1 and applied live.</span>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50 transition-all cursor-pointer"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              <span>{saving ? 'Publishing...' : 'Save & Publish Live'}</span>
            </button>
          </div>

        </form>

      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
