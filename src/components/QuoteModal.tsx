import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductCode?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProductCode = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCode: initialProductCode,
    quantity: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-amber-900/10 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-stone-900">RFQ Submitted Successfully!</h3>
            <p className="mt-2 text-sm text-stone-600">
              Thank you for contacting Golden Fiber Crafts Ltd. Our export merchandising team will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Request For Quotation</span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-stone-900">Get Factory Direct Quote</h2>
              <p className="mt-1 text-xs text-stone-500">Fill in your specifications and order volume for instant FOB pricing.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Company / Brand Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700">Country / Region</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Item Code (Optional)</label>
                  <input
                    type="text"
                    value={formData.productCode}
                    onChange={(e) => setFormData({ ...formData, productCode: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="e.g. GFC-SB-015"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700">Estimated Quantity (Pcs)</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    placeholder="e.g. 500 pcs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700">Message / Customization Details</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-800 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Specify size variations, colors, packaging requirements..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-800 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-amber-700 transition-all"
              >
                Submit RFQ Request
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
