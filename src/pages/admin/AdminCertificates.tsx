import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AdminCertificates: React.FC = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Factory Certificates</h1>
          <p className="text-xs text-slate-400 mt-1">Official export compliance & sustainability certificates from GFCL Product PPT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="h-32 w-32 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-md">
              <img src="/certs/wfTO.png" alt="WFTO Certificate" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono font-extrabold text-amber-400 uppercase bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800">
                Fair Trade Guaranteed
              </span>
              <h3 className="font-serif text-lg font-extrabold text-white">WFTO Guaranteed Fair Trade</h3>
              <p className="text-xs text-slate-400">WFTO Certificate verifying ethical wages, safe working conditions, and artisan empowerment across production mills.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="h-32 w-32 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-md">
              <img src="/certs/bsci.png" alt="BSCI Certificate" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
                Social Audit Compliant
              </span>
              <h3 className="font-serif text-lg font-extrabold text-white">amfori BSCI Audit Certified</h3>
              <p className="text-xs text-slate-400">Comprehensive workplace safety and environmental management compliance standard for European supply chains.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
