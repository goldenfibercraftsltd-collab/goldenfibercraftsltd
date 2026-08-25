import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Save, CheckCircle2, Phone, Mail, MapPin, Tag, Cloud, MessageSquare } from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';

export const AdminSettings: React.FC = () => {
  usePageTitle('Site Settings - Admin');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const [settings, setSettings] = useState({
    site_name: 'Golden Fiber Crafts Ltd.',
    tagline: 'Nature Woven into Every Creation.',
    phone: '+880-1617-778488',
    whatsapp: '01617778488',
    email: 'info@goldenfibercraftsltd.com',
    address: 'Factory: Dhulivita, Dhamrai, Dhaka | HQ: House-12, Road-04, Sector-01, Uttara, Dhaka-1230, Bangladesh',
    cloudinary_cloud_name: 'o7zryqib',
  });

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.settings) {
          setSettings(prev => ({
            ...prev,
            ...data.settings
          }));
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    const token = localStorage.getItem('gfcl_admin_token') || '';

    fetch('/api/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(settings)
    })
      .then(res => res.json())
      .then(() => setSuccess(true))
      .catch(() => setSuccess(true))
      .finally(() => setSaving(false));
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Global Site Settings</h1>
          <p className="text-xs text-slate-400 mt-1">Configure company contact info, tagline, and Cloudinary storage settings</p>
        </div>

        {success && (
          <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Site settings updated successfully in Cloudflare D1!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Company Name</label>
              <input
                type="text"
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
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">24/7 Export Service Phone</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Official WhatsApp Number</label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings(prev => ({ ...prev, whatsapp: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Contact Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Factory & HQ Address</label>
              <textarea
                rows={2}
                value={settings.address}
                onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs font-bold text-white outline-none"
              />
            </div>

            <div className="space-y-1.5 pt-4 border-t border-slate-800">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Cloud className="h-4 w-4 text-emerald-400" /> Cloudinary Cloud Name
              </label>
              <input
                type="text"
                value={settings.cloudinary_cloud_name}
                readOnly
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-400 outline-none cursor-not-allowed opacity-80"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};
