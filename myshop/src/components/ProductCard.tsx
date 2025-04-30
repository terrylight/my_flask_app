// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
