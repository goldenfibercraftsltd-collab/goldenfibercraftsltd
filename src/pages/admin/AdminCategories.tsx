import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CATEGORIES } from '../../data/products';
import { Folders, Edit3, CheckCircle, Package } from 'lucide-react';

export const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<any[]>(CATEGORIES);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.categories?.length > 0) {
          setCategories(data.categories);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Product Categories</h1>
          <p className="text-xs text-slate-400 mt-1">Official PPT categories for Golden Fiber Crafts Ltd.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div key={cat.id || idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
                  {cat.slug || cat.id}
                </span>
                <span className="text-xs text-slate-500 font-extrabold">Order #{idx + 1}</span>
              </div>

              <div>
                <h3 className="font-serif text-base font-extrabold text-white">{cat.name}</h3>
                <p className="text-xs text-slate-400 font-normal mt-1 leading-relaxed">{cat.description}</p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> Verified PPT Category
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
