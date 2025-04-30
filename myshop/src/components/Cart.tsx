import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1 || isNaN(quantity)) return;
    updateQuantity(id, quantity);
  };

  const totalPrice = cart.reduce((acc, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
    return acc + (price || 0) * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl || 'placeholder.jpg'} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description || 'No description available'}</p>
              <p>${item.price.toFixed(2)}</p>
              <input
                type="number"
                value={item.quantity.toString()} // Convert number to string for input
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                min="1"
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
