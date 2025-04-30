'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Cherie's Electrical & Electronics</Link>
      </div>
      
      <nav className="nav-links">
        {/* Products Dropdown */}
        <div className="relative">
          <button 
            className="text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            Products ⬇
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-md mt-2 rounded-lg p-2 w-48">
              <Link href="/category/electrical" className="block p-2 hover:bg-gray-200">Electrical Components</Link>
              <Link href="/category/cables" className="block p-2 hover:bg-gray-200">Cables & Wires</Link>
              <Link href="/category/batteries" className="block p-2 hover:bg-gray-200">Batteries</Link>
              <Link href="/category/lighting" className="block p-2 hover:bg-gray-200">Lighting & Fixtures</Link>
            </div>
          )}
        </div>

        <Link href="/cart">Cart</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
