import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {/* Example product */}
        <div className="product">
          <img src="path_to_image.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Short description of the product.</p>
          <a href="/product/1">View Details</a>
        </div>
        {/* Add more products */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
