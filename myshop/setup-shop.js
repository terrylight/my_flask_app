const fs = require('fs');
const path = require('path');

// Helper function to create a file with content
const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
};

// Define the base folder structure
const directories = [
  'src/components',
  'src/pages',
  'src/styles',
  'public/images'
];

// Define the files to create
const files = [
  {
    filePath: 'src/components/ProductCard.js',
    content: `
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
`
  },
  {
    filePath: 'src/components/ProductFilter.js',
    content: `
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
`
  },
  {
    filePath: 'src/components/ProductSearch.js',
    content: `
import React, { useState } from 'react';

const ProductSearch = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
`
  },
  {
    filePath: 'src/pages/index.js',
    content: `
import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import ProductSearch from '../components/ProductSearch';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/images/product1.jpg', category: 'category1' },
    { id: 2, name: 'Product 2', price: 19.99, image: '/images/product2.jpg', category: 'category2' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Welcome to My Shop</h1>
      <ProductSearch products={products} />
      <ProductFilter products={products} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
`
  },
  {
    filePath: 'src/styles/global.css',
    content: `
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.product-card {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
`
  },
  {
    filePath: 'public/images/product1.jpg',
    content: `# Placeholder for product image 1`
  },
  {
    filePath: 'public/images/product2.jpg',
    content: `# Placeholder for product image 2`
  }
];

// Create folders
directories.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
});

// Create files with their respective content
files.forEach((file) => {
  const filePath = path.join(__dirname, file.filePath);
  createFile(filePath, file.content);
});

console.log('Shop project setup is complete!');
