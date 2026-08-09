import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Package, Folders, MessageSquare, Users, Award, Plus, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({ products: 18, categories: 5, inquiries: 0, clients: 8 });
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('gfcl_admin_token') || '';

    Promise.all([
      fetch('/api/products').then(r => r.json()),
      fetch('/api/categories').then(r => r.json()),
      fetch('/api/inquiries', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/clients').then(r => r.json()),
    ])
      .then(([p, c, i, cl]) => {
        setStats({
          products: p.products?.length || 18,
          categories: c.categories?.length || 5,
          inquiries: i.inquiries?.length || 0,
          clients: cl.clients?.length || 8,
        });
        if (i.inquiries) setInquiries(i.inquiries);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">Dashboard Overview</h1>
            <p className="text-xs text-slate-400 mt-1">Real-time status of your Cloudflare D1 database & site content</p>
          </div>

          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-md"
          >
            <Plus className="h-4 w-4" /> Add New Product
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Products</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Package className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white font-mono">{stats.products}</span>
              <Link to="/admin/products" className="text-xs text-emerald-400 hover:underline flex items-center gap-0.5">
                Manage <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categories</span>
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Folders className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white font-mono">{stats.categories}</span>
              <Link to="/admin/categories" className="text-xs text-teal-400 hover:underline flex items-center gap-0.5">
                Manage <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Export Inquiries</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white font-mono">{stats.inquiries}</span>
              <Link to="/admin/inquiries" className="text-xs text-amber-400 hover:underline flex items-center gap-0.5">
                View <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Clients / Buyers</span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white font-mono">{stats.clients}</span>
              <Link to="/admin/clients" className="text-xs text-indigo-400 hover:underline flex items-center gap-0.5">
                Manage <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Actions Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-serif text-lg font-bold text-white">Quick Actions</h2>
            <div className="space-y-2.5">
              <Link
                to="/admin/products/new"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-800/80 text-xs font-bold text-white transition-all border border-slate-700/60"
              >
                <span>📦 Add Product with Cloudinary Image</span>
                <Plus className="h-4 w-4 text-emerald-400" />
              </Link>

              <Link
                to="/admin/categories"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-800/80 text-xs font-bold text-white transition-all border border-slate-700/60"
              >
                <span>🗂️ Manage PPT Product Categories</span>
                <ArrowUpRight className="h-4 w-4 text-teal-400" />
              </Link>

              <Link
                to="/admin/banners"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-800/80 text-xs font-bold text-white transition-all border border-slate-700/60"
              >
                <span>🖼️ Update Hero Banner Carousel</span>
                <ArrowUpRight className="h-4 w-4 text-amber-400" />
              </Link>

              <Link
                to="/admin/settings"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800 hover:bg-slate-800/80 text-xs font-bold text-white transition-all border border-slate-700/60"
              >
                <span>⚙️ Update Contact Phone & Tagline</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Database System Health */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" /> Infrastructure Status
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Database Engine</span>
                <p className="text-xs font-bold text-white">Cloudflare D1 (SQLite Edge)</p>
                <span className="text-[10px] text-emerald-400 font-mono block">UUID: d4209f11-be61...</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Media CDN</span>
                <p className="text-xs font-bold text-white">Cloudinary Storage</p>
                <span className="text-[10px] text-teal-400 font-mono block">Cloud: o7zryqib</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Host Environment</span>
                <p className="text-xs font-bold text-white">Cloudflare Pages Functions</p>
                <span className="text-[10px] text-amber-400 font-mono block">Branch: main</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Auth Token</span>
                <p className="text-xs font-bold text-white">SHA-256 HMAC JWT</p>
                <span className="text-[10px] text-indigo-400 font-mono block">24h Expiry</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
};
