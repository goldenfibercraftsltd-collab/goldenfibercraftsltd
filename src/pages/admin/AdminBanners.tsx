import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';

export const AdminBanners: React.FC = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: 'Handcrafted Eco Jute & Seagrass Handicrafts', subtitle: '5-Second Auto Carousel Banner 1', image: '/banners/banner_jute_handicrafts.png' },
    { id: 2, title: 'Export Quality Garment Trims & Care Labels', subtitle: '5-Second Auto Carousel Banner 2', image: '/banners/banner_garment_trims.png' },
    { id: 3, title: 'Sustainable Manufacturing & Global Export', subtitle: '5-Second Auto Carousel Banner 3', image: '/banners/banner_factory_export.png' },
  ]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Hero Banner Carousel</h1>
          <p className="text-xs text-slate-400 mt-1">Manage the 3 rotating 5-second hero banners displayed below the header</p>
        </div>

        <div className="space-y-6">
          {banners.map((b, idx) => (
            <div key={b.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800">
                    Banner #{idx + 1}
                  </span>
                  <h3 className="font-serif text-base font-extrabold text-white">{b.title}</h3>
                </div>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> 5-Sec Auto Slide Active
                </span>
              </div>

              <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
