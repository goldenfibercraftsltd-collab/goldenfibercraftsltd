import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BuyerUser {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
}

interface UserAuthContextType {
  buyer: BuyerUser | null;
  loginBuyer: (buyerData: BuyerUser) => void;
  logoutBuyer: () => void;
  isLoggedIn: boolean;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(undefined);

export const UserAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buyer, setBuyer] = useState<BuyerUser | null>(() => {
    try {
      const saved = localStorage.getItem('gfcl_buyer_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (buyer) {
        localStorage.setItem('gfcl_buyer_user', JSON.stringify(buyer));
      } else {
        localStorage.removeItem('gfcl_buyer_user');
      }
    } catch { /* ignore */ }
  }, [buyer]);

  const loginBuyer = (buyerData: BuyerUser) => setBuyer(buyerData);
  const logoutBuyer = () => setBuyer(null);

  return (
    <UserAuthContext.Provider
      value={{
        buyer,
        loginBuyer,
        logoutBuyer,
        isLoggedIn: Boolean(buyer),
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) throw new Error('useUserAuth must be used within UserAuthProvider');
  return context;
};
