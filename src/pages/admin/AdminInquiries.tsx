import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { MessageSquare, Mail, Phone, Globe, Trash2, CheckCircle } from 'lucide-react';

export const AdminInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('gfcl_admin_token') || '';
    fetch('/api/inquiries', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.inquiries) {
          setInquiries(data.inquiries);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Export & Sample Inquiries</h1>
          <p className="text-xs text-slate-400 mt-1">Direct inquiries submitted by buyers from the site quote modal & contact page</p>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <MessageSquare className="h-10 w-10 text-slate-600 mx-auto" />
            <h3 className="font-serif text-base font-bold text-white">No Inquiries Submitted Yet</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">When international buyers fill out the quote request form, their contact details and target product codes will show up here in real-time D1.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inq) => (
              <div key={inq.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="font-serif text-base font-extrabold text-white">{inq.name}</h3>
                    <p className="text-xs text-emerald-400 font-bold">{inq.company || 'Private Buyer'}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md">
                    {new Date(inq.created_at).toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-slate-500" />
                    <a href={`mailto:${inq.email}`} className="hover:underline font-bold text-white">{inq.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-slate-500" />
                    <span>{inq.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-3.5 w-3.5 text-slate-500" />
                    <span>{inq.country || 'International'}</span>
                  </div>
                </div>

                {inq.product_interest && (
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs">
                    <span className="font-extrabold text-amber-400 uppercase tracking-wider text-[10px] block">Target Product:</span>
                    <span className="font-bold text-white">{inq.product_interest}</span>
                  </div>
                )}

                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300">
                  <p className="font-light whitespace-pre-line">{inq.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};
