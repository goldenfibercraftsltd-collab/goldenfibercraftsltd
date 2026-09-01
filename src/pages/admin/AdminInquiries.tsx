import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  Globe, 
  Package, 
  CheckCircle2, 
  FileText, 
  User, 
  Scale, 
  Trash2, 
  ExternalLink,
  RefreshCw,
  Clock,
  Building,
  Check,
  Search
} from 'lucide-react';
import { usePageTitle } from '../../utils/usePageTitle';

export const AdminInquiries: React.FC = () => {
  usePageTitle('Inquiries & Orders - Admin');
  const [activeTab, setActiveTab] = useState<'orders' | 'messages'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState<string | number | null>(null);

  const fetchAllData = () => {
    setLoading(true);
    const token = localStorage.getItem('gfcl_admin_token') || '';
    
    Promise.all([
      fetch('/api/orders', { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .catch(() => ({ success: false, orders: [] })),
      fetch('/api/inquiries', { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .catch(() => ({ success: false, inquiries: [] }))
    ])
      .then(([ordData, inqData]) => {
        if (ordData && ordData.success && Array.isArray(ordData.orders)) {
          setOrders(ordData.orders);
        }
        if (inqData && inqData.success && Array.isArray(inqData.inquiries)) {
          setInquiries(inqData.inquiries);
        }
      })
      .catch((err) => {
        console.error('Error loading inquiries/orders:', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleDeleteInquiry = async (id: number | string) => {
    if (!window.confirm('Are you sure you want to delete this contact inquiry?')) return;
    setDeletingId(id);
    const token = localStorage.getItem('gfcl_admin_token') || '';
    try {
      await fetch(`/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    } catch (e) {
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  const handleUpdateInquiryStatus = async (id: number | string, status: string) => {
    const token = localStorage.getItem('gfcl_admin_token') || '';
    try {
      await fetch(`/api/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status } : inq));
    } catch (e) {
      setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status } : inq));
    }
  };

  const filteredOrders = orders.filter(o => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      (o.buyer_name || '').toLowerCase().includes(q) ||
      (o.buyer_email || '').toLowerCase().includes(q) ||
      (o.buyer_company || '').toLowerCase().includes(q) ||
      (o.buyer_country || '').toLowerCase().includes(q) ||
      String(o.id).includes(q)
    );
  });

  const filteredInquiries = inquiries.filter(i => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      (i.name || '').toLowerCase().includes(q) ||
      (i.email || '').toLowerCase().includes(q) ||
      (i.subject || '').toLowerCase().includes(q) ||
      (i.message || '').toLowerCase().includes(q) ||
      (i.product_interest || '').toLowerCase().includes(q)
    );
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-extrabold text-white">B2B Cart Orders & Inquiries</h1>
            <p className="text-xs text-slate-400 mt-1">Real-time export cart quotations, buyer emails, freight stats, and contact inquiries</p>
          </div>

          <button
            onClick={fetchAllData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Tab Selector & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'orders'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Export Cart Quotations ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'messages'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Contact Messages ({inquiries.length})</span>
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, email, company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl text-xs text-white outline-none"
            />
          </div>
        </div>

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          filteredOrders.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <ShoppingBag className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="font-serif text-base font-bold text-white">No Cart Orders Found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">When wholesale buyers submit quotation inquiries from the `/cart` page, their order details and calculations will appear here in real-time.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((ord) => {
                let items: any[] = [];
                try { 
                  items = typeof ord.items_json === 'string' ? JSON.parse(ord.items_json || '[]') : (ord.items_json || []); 
                } catch { 
                  items = []; 
                }

                // Safe calculations
                const totalCartons = Number(ord.total_cartons) || items.reduce((sum, it) => sum + (Number(it.totalCartons) || 1), 0);
                const totalCbm = ord.total_cbm ? Number(ord.total_cbm).toFixed(3) : items.reduce((sum, it) => sum + (Number(it.totalCbm) || 0), 0).toFixed(3);
                const totalGw = ord.total_gw ? Number(ord.total_gw).toFixed(2) : items.reduce((sum, it) => sum + (Number(it.totalGw) || 0), 0).toFixed(2);
                const totalNw = ord.total_nw ? Number(ord.total_nw).toFixed(2) : items.reduce((sum, it) => sum + (Number(it.totalNw) || 0), 0).toFixed(2);

                const dateStr = ord.created_at ? new Date(ord.created_at).toLocaleString() : 'Recent Submission';

                return (
                  <div key={ord.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
                    
                    {/* Header: Buyer Info + Highlighted Email */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-md border border-amber-800">
                            Order #{ord.id}
                          </span>
                          <h3 className="font-serif text-base font-extrabold text-white">{ord.buyer_name || 'Anonymous Buyer'}</h3>
                          
                          {/* PROMINENT HIGHLIGHTED BUYER EMAIL BADGE */}
                          {ord.buyer_email && (
                            <span className="inline-flex items-center gap-1.5 bg-emerald-950/90 text-emerald-300 px-3 py-1 rounded-full border border-emerald-700/80 text-xs font-mono font-bold shadow-xs">
                              <Mail className="h-3.5 w-3.5 text-emerald-400" />
                              <a href={`mailto:${ord.buyer_email}?subject=RE: Golden Fiber Crafts Ltd Quotation Order #${ord.id}`} className="hover:underline hover:text-white">
                                {ord.buyer_email}
                              </a>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 font-medium">
                          Company: <strong className="text-white">{ord.buyer_company || 'Wholesale Buyer'}</strong> • Country: <strong className="text-white">{ord.buyer_country || 'Global'}</strong>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                          {dateStr}
                        </span>
                        <a
                          href={`mailto:${ord.buyer_email}?subject=Official Quotation Offer - Golden Fiber Crafts Ltd (Order #${ord.id})`}
                          className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1"
                        >
                          <Mail className="h-3 w-3" /> Reply
                        </a>
                      </div>
                    </div>

                    {/* Contact Details & Weight / Freight Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>Phone: <strong className="text-white font-mono">{ord.buyer_phone || 'N/A'}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 font-mono font-bold text-amber-400">
                        <Package className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>{totalCartons} CTNS | {totalCbm} CBM</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono font-bold text-emerald-400">
                        <Scale className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>N.W: {totalNw} KG | G.W: {totalGw} KG</span>
                      </div>
                    </div>

                    {/* Ordered Items Table with N.W and G.W */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-950 text-slate-400 font-mono text-[10px] uppercase">
                          <tr>
                            <th className="px-3 py-2">Artical No</th>
                            <th className="px-3 py-2">Item Name</th>
                            <th className="px-3 py-2">Cartons</th>
                            <th className="px-3 py-2">Total CBM</th>
                            <th className="px-3 py-2">Total N.W (KG)</th>
                            <th className="px-3 py-2">Total G.W (KG)</th>
                            <th className="px-3 py-2 text-right">Order Qty</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {items.map((item, idx) => {
                            const itemNw = Number(item.totalNw) || 0;
                            const itemGw = Number(item.totalGw) || 0;
                            const itemCbm = Number(item.totalCbm) || 0;
                            return (
                              <tr key={idx} className="hover:bg-slate-950/40">
                                <td className="px-3 py-2 font-mono font-bold text-emerald-400">{item.artNo || item.code || 'N/A'}</td>
                                <td className="px-3 py-2 text-white font-medium">{item.name}</td>
                                <td className="px-3 py-2 font-mono text-amber-300">{item.totalCartons || 1}</td>
                                <td className="px-3 py-2 font-mono text-slate-300">{itemCbm.toFixed(3)}</td>
                                <td className="px-3 py-2 font-mono text-slate-300">{itemNw.toFixed(2)}</td>
                                <td className="px-3 py-2 font-mono text-emerald-400 font-bold">{itemGw.toFixed(2)}</td>
                                <td className="px-3 py-2 text-right font-mono font-bold text-white">{item.orderQty || 1}</td>
                              </tr>
                            );
                          })}
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
          filteredInquiries.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <Mail className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="font-serif text-base font-bold text-white">No Contact Messages Found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">Direct submissions from the `/contact` page form will appear here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredInquiries.map((inq) => {
                const dateStr = inq.created_at ? new Date(inq.created_at).toLocaleString() : 'Recent';
                const isReplied = inq.status === 'replied';

                return (
                  <div key={inq.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-serif text-base font-extrabold text-white">{inq.name}</h3>
                          
                          <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 text-xs font-mono font-bold">
                            <Mail className="h-3 w-3" />
                            <a href={`mailto:${inq.email}?subject=RE: Golden Fiber Crafts Ltd Inquiry - ${inq.product_interest || inq.subject || ''}`} className="hover:underline">
                              {inq.email}
                            </a>
                          </span>

                          {inq.phone && (
                            <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-mono">
                              <Phone className="h-3 w-3 text-slate-500" /> {inq.phone}
                            </span>
                          )}

                          {inq.company && (
                            <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                              <Building className="h-3 w-3 text-slate-500" /> {inq.company}
                            </span>
                          )}

                          {inq.country && (
                            <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                              <Globe className="h-3 w-3 text-slate-500" /> {inq.country}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400">
                          Interest: <strong className="text-amber-400">{inq.product_interest || inq.subject || 'General Export Inquiry'}</strong>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateInquiryStatus(inq.id, isReplied ? 'pending' : 'replied')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                            isReplied 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <Check className="h-3 w-3" />
                          <span>{isReplied ? 'Replied' : 'Mark Replied'}</span>
                        </button>

                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          disabled={deletingId === inq.id}
                          className="p-1.5 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors"
                          title="Delete Inquiry"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                          {dateStr}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80 whitespace-pre-wrap">
                      {inq.message}
                    </p>
                  </div>
                );
              })}
            </div>
          )
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminInquiries;
