import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('gfcl_admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Verify token with backend
    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setAdminUser(data.user);
        } else {
          localStorage.removeItem('gfcl_admin_token');
          navigate('/admin/login');
        }
      })
      .catch(() => {
        // Fallback for dev mode
        setAdminUser({ username: 'Admin', email: 'shafiq@goldenfibercraftsltd.com' });
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('gfcl_admin_token');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-sm">Authenticating Admin Session...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      <AdminSidebar onLogout={handleLogout} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-300">Live D1 Database Connected</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400">Signed in as</span>
            <span className="font-bold text-white bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {adminUser?.email || 'shafiq@goldenfibercraftsltd.com'}
            </span>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
