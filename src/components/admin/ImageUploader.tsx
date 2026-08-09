import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  onChange,
  folder = 'goldenfibercrafts/products',
  label = 'Product Main Image'
}) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const token = localStorage.getItem('gfcl_admin_token') || '';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (data.success && data.url) {
        onChange(data.url);
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch (err: any) {
      setError(err.message || 'Upload error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
        {label}
      </label>

      {value ? (
        <div className="relative group w-40 h-40 rounded-xl overflow-hidden border-2 border-emerald-600/60 bg-slate-900 flex items-center justify-center p-2">
          <img src={value} alt="Uploaded preview" className="max-h-full max-w-full object-contain" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 bg-rose-600 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-xl bg-slate-900/60 hover:bg-slate-900 cursor-pointer transition-all">
          <div className="flex flex-col items-center justify-center py-4 px-6 text-center space-y-2">
            {uploading ? (
              <>
                <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
                <span className="text-xs font-bold text-emerald-400">Uploading to Cloudinary...</span>
              </>
            ) : (
              <>
                <Upload className="h-8 w-8 text-slate-400 group-hover:text-emerald-400" />
                <span className="text-xs font-bold text-slate-300">Click to Upload Image</span>
                <span className="text-[10px] text-slate-500">PNG, JPG, WEBP up to 10MB</span>
              </>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      )}

      {error && <p className="text-xs font-bold text-rose-400">{error}</p>}
    </div>
  );
};
