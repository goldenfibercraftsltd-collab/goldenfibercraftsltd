import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string; // product id / item code
  name: string;
  image: string;
  artNo: string;
  categoryName: string;
  material: string;
  color: string;
  unit: string;
  cbmPerCarton: number;
  setPerCarton: number;
  nwPerCtn: number;
  gwPerCtn: number;
  orderQty: number; // total pcs
  totalCartons: number;
  totalCbm: number;
  totalNw: number;
  totalGw: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalCartItemsCount: number;
  totalCartonsCount: number;
  totalCbmSum: number;
  totalNwSum: number;
  totalGwSum: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gfcl_b2b_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gfcl_b2b_cart', JSON.stringify(cart));
    } catch { /* ignore */ }
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === newItem.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        const item = updated[existingIdx];
        const newOrderQty = item.orderQty + newItem.orderQty;
        const newTotalCartons = Math.ceil(newOrderQty / item.setPerCarton);
        const newTotalCbm = Number((newTotalCartons * item.cbmPerCarton).toFixed(3));
        const newTotalNw = Number((newTotalCartons * (item.nwPerCtn || 3)).toFixed(2));
        const newTotalGw = Number((newTotalCartons * (item.gwPerCtn || 4)).toFixed(2));

        updated[existingIdx] = {
          ...item,
          orderQty: newOrderQty,
          totalCartons: newTotalCartons,
          totalCbm: newTotalCbm,
          totalNw: newTotalNw,
          totalGw: newTotalGw,
        };
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQty: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const qty = Math.max(1, newQty);
          const totalCartons = Math.ceil(qty / item.setPerCarton);
          const totalCbm = Number((totalCartons * item.cbmPerCarton).toFixed(3));
          const totalNw = Number((totalCartons * (item.nwPerCtn || 3)).toFixed(2));
          const totalGw = Number((totalCartons * (item.gwPerCtn || 4)).toFixed(2));
          return {
            ...item,
            orderQty: qty,
            totalCartons,
            totalCbm,
            totalNw,
            totalGw,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const totalCartItemsCount = cart.reduce((sum, item) => sum + item.orderQty, 0);
  const totalCartonsCount = cart.reduce((sum, item) => sum + item.totalCartons, 0);
  const totalCbmSum = Number(cart.reduce((sum, item) => sum + item.totalCbm, 0).toFixed(3));
  const totalNwSum = Number(cart.reduce((sum, item) => sum + (item.totalNw || 0), 0).toFixed(2));
  const totalGwSum = Number(cart.reduce((sum, item) => sum + item.totalGw, 0).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCartItemsCount,
        totalCartonsCount,
        totalCbmSum,
        totalNwSum,
        totalGwSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
