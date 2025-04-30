// src/components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';

// Define the interface to type the props properly
interface ProductListProps {
  category: string;  // This will now be typed as a string
}

// Example product data
const products = [
  { id: 1, name: 'Product 1', description: 'This is an amazing product!', price: '$19.99', imageUrl: '/images/product1.jpg', category: 'electronics' },
  { id: 2, name: 'Product 2', description: 'High quality and durable.', price: '$29.99', imageUrl: '/images/product2.jpg', category: 'electronics' },
  { id: 3, name: 'Product 3', description: 'A must-have for professionals.', price: '$39.99', imageUrl: '/images/product3.jpg', category: 'electronics' },
  { id: 4, name: 'Product 4', description: 'Best for your needs!', price: '$49.99', imageUrl: '/images/product4.jpg', category: 'furniture' },
];

// Use the interface props in the component
const ProductList: React.FC<ProductListProps> = ({ category }) => {
  // Filter products by the category passed as a prop
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
