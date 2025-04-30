"use client";  // Needed for React state/context

import { CartProvider } from '../src/context/CartContext';
import Header from '../src/components/Header';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
    </CartProvider>
  );
};

export default Layout;
