import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, Folders, Users, Award, Image,
  MessageSquare, Settings, LogOut, ExternalLink, Sparkles
} from 'lucide-react';

interface AdminSidebarProps {
  onLogout: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ onLogout }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/categories', label: 'Categories', icon: Folders },
    { path: '/admin/clients', label: 'Clients / Buyers', icon: Users },
    { path: '/admin/certificates', label: 'Certificates', icon: Award },
    { path: '/admin/banners', label: 'Hero Banners', icon: Image },
    { path: '/admin/sections', label: 'Pillars & Sections', icon: Sparkles },
    { path: '/admin/inquiries', label: 'Inquiries', icon: MessageSquare },
    { path: '/admin/settings', label: 'Site Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-200 min-h-screen flex flex-col border-r border-slate-800 shrink-0">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-serif font-extrabold text-white text-base leading-tight">GFCL Admin</h1>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wide">Management Suite</span>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/admin/dashboard' && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer & Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-all"
        >
          <span>View Live Site</span>
          <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
        </a>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 text-xs font-bold transition-all text-left"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
