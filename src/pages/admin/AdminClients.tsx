import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { Users, Plus, Trash2, Globe } from 'lucide-react';

export const AdminClients: React.FC = () => {
  const [clients, setClients] = useState<any[]>([
    { id: 1, name: 'Aarong', logo_url: '/clients/aarong.png', country: 'Bangladesh' },
    { id: 2, name: 'Det Gamle Apotek', logo_url: '/clients/det_gamle_apotek.png', country: 'Denmark' },
    { id: 3, name: 'Ten Thousand Villages', logo_url: '/clients/ten_thousand_villages.png', country: 'USA / Canada' },
    { id: 4, name: 'The Body Shop', logo_url: '/clients/the_body_shop.png', country: 'UK / Global' },
    { id: 5, name: 'Le Rêve', logo_url: '/clients/le_reve.png', country: 'Bangladesh' },
    { id: 6, name: 'Dekker Decoration', logo_url: '/clients/dekker_decoration.png', country: 'Netherlands' },
    { id: 7, name: 'Traidcraft', logo_url: '/clients/traidcraft.png', country: 'UK' },
    { id: 8, name: 'Bozy', logo_url: '/clients/bozy.png', country: 'Australia' },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Global Clients & Buyers</h1>
          <p className="text-xs text-slate-400 mt-1">Authentic buyer logos extracted from GFCL Product PPT</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {clients.map((c) => (
            <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center text-center space-y-3">
              <div className="h-20 w-full rounded-xl bg-white p-3 flex items-center justify-center overflow-hidden shadow-sm">
                <img src={c.logo_url} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-extrabold text-white">{c.name}</h3>
                <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-0.5">
                  <Globe className="h-3 w-3 text-emerald-400" /> {c.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
