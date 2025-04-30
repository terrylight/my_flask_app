// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ name, description, imageUrl, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
