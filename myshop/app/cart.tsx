// app/cart.tsx
'use client';

import React from 'react';
import { useCart } from '../src/context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} width="50" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
