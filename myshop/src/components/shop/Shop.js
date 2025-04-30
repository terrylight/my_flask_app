// /src/components/shop/Shop.js
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { PayPalButton } from 'react-paypal-button-v2';
import StripeCheckout from './StripeCheckout';
import { Button, Input, Label } from '../ui';  // Assuming you have UI components like Button, Input, etc.

const Shop = () => {
  const { user, login, logout } = useAuth();
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handleMpesaPayment = () => {
    console.log(`Processing MPESA payment with number ${mpesaNumber}`);
    // Add your MPESA payment logic here
  };

  const handlePayPalPayment = () => {
    console.log('Processing PayPal payment');
  };

  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      {!user ? (
        <div>
          <h3>Sign In</h3>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button onClick={() => login('admin', 'password')}>Login</Button>
        </div>
      ) : (
        <div>
          <h3>Welcome, {user.username}</h3>
          <Button onClick={logout}>Logout</Button>
        </div>
      )}

      <div className="mt-4">
        <h3>Payment Options</h3>
        <Label>MPESA Number:</Label>
        <Input value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} placeholder="e.g. 07XXXXXXXX" />
        <Button onClick={handleMpesaPayment}>Pay with MPESA</Button>
        <Button onClick={handlePayPalPayment}>Pay with PayPal</Button>
        <StripeCheckout totalAmount={100} /> {/* Pass actual total amount */}
      </div>
    </div>
  );
};

export default Shop;
