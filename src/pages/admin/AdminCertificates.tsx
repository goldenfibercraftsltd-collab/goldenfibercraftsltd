import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Award, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';

export const AdminCertificates: React.FC = () => {
  const officialCertificates = [
    {
      id: 1,
      title: 'ISO 14001:2015 Environmental Management',
      badge: 'Environmental Standard',
      image: '/certificates/cert1.png',
      description: 'Certified environmental management systems ensuring zero toxic emissions and sustainable waste disposal.'
    },
    {
      id: 2,
      title: 'ISO 9001:2015 Quality Management System',
      badge: 'Quality Standard',
      image: '/certificates/cert2.png',
      description: 'Certified international quality management standard ensuring strict consistency and zero defect export dispatch.'
    },
    {
      id: 3,
      title: 'amfori BSCI Social Compliance Initiative',
      badge: 'Social Compliance',
      image: '/certificates/cert3.png',
      description: 'Comprehensive workplace safety, fair artisan compensation, and ethical labor standards across production facilities.'
    },
    {
      id: 4,
      title: 'OEKO-TEX® Standard 100 Certification',
      badge: 'Eco & Non-Toxic',
      image: '/certificates/cert4.png',
      description: 'Zero harmful substances, non-toxic heavy metal free vegetable colorings safe for infant contact and global retail.'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-extrabold text-white">Factory Certificates & Compliance</h1>
          <p className="text-xs text-slate-400 mt-1">Official export compliance & sustainability certificates extracted from GFCL Corporate Presentation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officialCertificates.map((cert) => (
            <div key={cert.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="h-36 w-36 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-md overflow-hidden">
                <img src={cert.image} alt={cert.title} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
                  {cert.badge}
                </span>
                <h3 className="font-serif text-base font-extrabold text-white">{cert.title}</h3>
                <p className="text-xs text-slate-400">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCertificates;
