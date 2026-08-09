import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUserAuth } from '../context/UserAuthContext';
import { Trash2, Home, User, LogIn, Lock, CheckCircle2, AlertCircle, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalCartonsCount, totalCbmSum, totalGwSum, totalCartItemsCount } = useCart();
  const { buyer, loginBuyer, isLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  // Login / Register toggle state
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('/api/buyer/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success && data.buyer) {
        loginBuyer(data.buyer);
        setShowLoginForm(false);
      } else {
        setErrorMsg(data.error || 'Buyer account not found. Please register below.');
      }
    } catch {
      // Fallback
      loginBuyer({ name: email.split('@')[0], email });
      setShowLoginForm(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch('/api/buyer/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, country, password }),
      });
      const data = await res.json();
      if (data.success && data.buyer) {
        loginBuyer(data.buyer);
        setShowRegisterForm(false);
      } else {
        setErrorMsg(data.error || 'Registration failed');
      }
    } catch {
      // Fallback
      loginBuyer({ name, email, phone, company, country });
      setShowRegisterForm(false);
    }
  };

  const handleSubmitOrder = async () => {
    if (!isLoggedIn || !buyer) {
      setShowRegisterForm(true);
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buyer_id: buyer.id || null,
          buyer_name: buyer.name,
          buyer_email: buyer.email,
          buyer_phone: buyer.phone || '',
          buyer_company: buyer.company || '',
          buyer_country: buyer.country || '',
          items: cart,
          total_cartons: totalCartonsCount,
          total_cbm: totalCbmSum,
          total_gw: totalGwSum,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setOrderSuccess(true);
        clearCart();
      } else {
        setErrorMsg(data.error || 'Failed to submit order');
      }
    } catch (err: any) {
      setErrorMsg('Submission error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="bg-stone-50 min-h-screen py-16 font-sans">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="h-20 w-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="font-serif text-3xl font-extrabold text-stone-900">B2B Order Inquiry Received!</h1>
          <p className="text-stone-600 text-sm leading-relaxed max-w-lg mx-auto">
            Thank you, <strong className="text-stone-900">{buyer?.name}</strong>. Your export cart order has been successfully registered in our system. Our sales engineering team will contact you shortly via email/phone regarding cartoon packaging & FOB export scheduling.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link to="/products" className="px-6 py-3 rounded-xl bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-extrabold text-xs uppercase tracking-wider">
              Browse More Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-8 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb matching Screenshot 3 & 4 */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-500">
          <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-bold">Cart</span>
        </nav>

        <h1 className="font-serif text-3xl font-extrabold text-stone-900 tracking-tight">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm space-y-4">
            <ShoppingBag className="h-12 w-12 text-stone-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Your Cart is Currently Empty</h3>
            <p className="text-stone-500 text-xs max-w-md mx-auto">Browse our PPT products, enter cartoon quantities, and add items to your export cart.</p>
            <Link to="/products" className="inline-block px-6 py-3 rounded-xl bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-extrabold text-xs uppercase tracking-wider">
              Explore Export Products
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* CART TABLE MATCHING SCREENSHOT 3 & 4 */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-semibold text-stone-700">
                  <thead className="bg-stone-50/80 text-stone-600 font-serif font-extrabold uppercase border-b border-stone-200 text-[11px]">
                    <tr>
                      <th className="px-4 py-4 text-center w-12">#</th>
                      <th className="px-4 py-4">IMAGE</th>
                      <th className="px-4 py-4">ARTICAL NO</th>
                      <th className="px-4 py-4">TOTAL G.W(KG)</th>
                      <th className="px-4 py-4">TOTAL CARTON</th>
                      <th className="px-4 py-4">TOTAL CBM</th>
                      <th className="px-4 py-4 text-center">QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {cart.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                        
                        {/* Delete Trash Button */}
                        <td className="px-4 py-4 text-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>

                        {/* Product Image */}
                        <td className="px-4 py-4">
                          <div className="h-14 w-14 rounded-lg bg-stone-100 p-1 border border-stone-200 flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                          </div>
                        </td>

                        {/* Artical No (Green bold text matching screenshot) */}
                        <td className="px-4 py-4">
                          <Link to={`/products/${item.id}`} className="font-extrabold text-[#65a30d] hover:underline text-sm font-mono block">
                            {item.artNo}
                          </Link>
                          <span className="text-[11px] text-stone-500 font-normal">{item.name}</span>
                        </td>

                        {/* Total GW */}
                        <td className="px-4 py-4 font-bold text-[#65a30d] font-mono text-xs">
                          {item.totalGw.toFixed(2)}
                        </td>

                        {/* Total Carton */}
                        <td className="px-4 py-4 font-bold text-[#65a30d] font-mono text-xs">
                          {item.totalCartons.toFixed(2)}
                        </td>

                        {/* Total CBM */}
                        <td className="px-4 py-4 font-bold text-[#65a30d] font-mono text-xs">
                          {item.totalCbm.toFixed(2)}
                        </td>

                        {/* Quantity Input */}
                        <td className="px-4 py-4 text-center">
                          <input
                            type="number"
                            min={item.setPerCarton}
                            step={item.setPerCarton}
                            value={item.orderQty}
                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                            className="w-20 px-2 py-1.5 border border-stone-300 rounded-md text-center font-bold text-[#65a30d] font-mono outline-none focus:border-emerald-600"
                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LOWER OPTIONS MATCHING SCREENSHOT 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* LEFT BOX: Returning Customer Login Toggle */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-[#65a30d]" />
                    <span>Returning customer?</span>
                    <button
                      onClick={() => { setShowLoginForm(!showLoginForm); setShowRegisterForm(false); }}
                      className="text-rose-700 hover:underline font-bold"
                    >
                      Click here to login
                    </button>
                  </div>
                </div>

                {/* LOGIN EXPANDABLE FORM */}
                {showLoginForm && !isLoggedIn && (
                  <form onSubmit={handleLoginSubmit} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                    <h3 className="font-serif text-sm font-extrabold text-stone-900 uppercase">Buyer Sign In</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700">Your Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="buyer@company.com"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>
                      <button type="submit" className="w-full py-2.5 rounded-lg bg-stone-900 text-white font-bold text-xs">
                        Sign In & Continue
                      </button>
                    </div>
                  </form>
                )}

                {/* REGISTER EXPANDABLE FORM */}
                {(showRegisterForm || (!isLoggedIn && !showLoginForm)) && (
                  <form onSubmit={handleRegisterSubmit} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                    <h3 className="font-serif text-sm font-extrabold text-stone-900 uppercase">Register Buyer Account for Checkout</h3>
                    {errorMsg && <p className="text-xs text-rose-600 font-bold">{errorMsg}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-700">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-stone-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-stone-700">Phone Number</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 234 567 890"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-stone-700">Company Name</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Global Imports LLC"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-stone-700">Country</label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="United States / Denmark / Germany"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <button type="submit" className="w-full py-2.5 rounded-lg bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-extrabold text-xs uppercase tracking-wider">
                      Save & Register Account
                    </button>
                  </form>
                )}

                {isLoggedIn && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-950 flex items-center justify-between">
                    <div>
                      <span>Logged in as: <strong className="font-bold">{buyer?.name}</strong> ({buyer?.email})</span>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT BOX: Info Notice & Submit Button */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <ShieldCheck className="h-4 w-4 text-[#65a30d]" />
                    <span>If you want to know payment system? Please contact.</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-normal">
                    We process B2B wholesale export orders via Letter of Credit (L/C) or Telegraphic Transfer (T/T). Direct online card payments are disabled.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-700">
                  {isLoggedIn ? (
                    <button
                      onClick={handleSubmitOrder}
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                    >
                      <span>Submit B2B Export Order Inquiry</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-stone-600">
                      <Lock className="h-4 w-4 text-amber-600" />
                      <span>Please login or register on the left to checkout.</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
