
import ProductCard from './ProductCard';
import React, { useState } from 'react';

const ProductFilter = ({ products }) => {
  const [category, setCategory] = useState('all');

  const filteredProducts = products.filter(product => category === 'all' || product.category === category);

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
