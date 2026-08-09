import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ShoppingBag, Mail, Phone, Globe, Package, CheckCircle2, FileText, User } from 'lucide-react';

export const AdminInquiries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'messages'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('gfcl_admin_token') || '';
    
    Promise.all([
      fetch('/api/orders', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/inquiries', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json())
    ])
      .then(([ordData, inqData]) => {
        if (ordData.success && ordData.orders) setOrders(ordData.orders);
        if (inqData.success && inqData.inquiries) setInquiries(inqData.inquiries);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">B2B Cart Orders & Inquiries</h1>
          <p className="text-xs text-slate-400 mt-1">Real-time export cart orders and contact form submissions from Cloudflare D1</p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Submitted B2B Cart Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Mail className="h-4 w-4" />
            <span>Contact Form Inquiries ({inquiries.length})</span>
          </button>
        </div>

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          orders.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <ShoppingBag className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="font-serif text-base font-bold text-white">No Cart Orders Submitted Yet</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">When buyers register and submit their export cart from `/cart`, their carton orders, CBM, G.W, and contact info will appear here in real-time.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((ord) => {
                let items: any[] = [];
                try { items = JSON.parse(ord.items_json || '[]'); } catch { items = []; }

                return (
                  <div key={ord.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    
                    {/* Header: Buyer Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                            Order #{ord.id}
                          </span>
                          <h3 className="font-serif text-base font-extrabold text-white">{ord.buyer_name}</h3>
                        </div>
                        <p className="text-xs text-emerald-400 font-bold mt-0.5">{ord.buyer_company || 'Wholesale Buyer'} • {ord.buyer_country || 'Global'}</p>
                      </div>

                      <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md">
                        {new Date(ord.created_at).toLocaleString()}
                      </span>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-slate-500" />
                        <a href={`mailto:${ord.buyer_email}`} className="hover:underline font-bold text-white">{ord.buyer_email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-slate-500" />
                        <span>{ord.buyer_phone || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono font-bold text-amber-400">
                        <Package className="h-3.5 w-3.5 text-amber-500" />
                        <span>{ord.total_cartons} CTNS | {ord.total_cbm} CBM | {ord.total_gw} KG</span>
                      </div>
                    </div>

                    {/* Ordered Items Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-950 text-slate-400 font-mono text-[10px] uppercase">
                          <tr>
                            <th className="px-3 py-2">Artical No</th>
                            <th className="px-3 py-2">Item Name</th>
                            <th className="px-3 py-2">Cartons</th>
                            <th className="px-3 py-2">Total CBM</th>
                            <th className="px-3 py-2">Total G.W</th>
                            <th className="px-3 py-2 text-right">Order Qty (Pcs)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {items.map((item, idx) => (
                            <tr key={idx}>
                              <td className="px-3 py-2 font-mono font-bold text-emerald-400">{item.artNo}</td>
                              <td className="px-3 py-2 text-white font-medium">{item.name}</td>
                              <td className="px-3 py-2 font-mono text-amber-300">{item.totalCartons}</td>
                              <td className="px-3 py-2 font-mono text-slate-300">{item.totalCbm}</td>
                              <td className="px-3 py-2 font-mono text-slate-300">{item.totalGw}</td>
                              <td className="px-3 py-2 text-right font-mono font-bold text-white">{item.orderQty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>
                );
              })}
            </div>
          )
        )}

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          inquiries.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <Mail className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="font-serif text-base font-bold text-white">No Contact Inquiries Yet</h3>
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div key={inq.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <h3 className="font-serif text-base font-bold text-white">{inq.name}</h3>
                    <span className="text-[10px] text-slate-400 font-mono">{new Date(inq.created_at).toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-300">{inq.message}</p>
                </div>
              ))}
            </div>
          )
        )}

      </div>
    </AdminLayout>
  );
};
