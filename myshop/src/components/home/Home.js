import React from 'react';
import Header from './Header';  // Assuming you have a Header component
import Hero from './Hero';  // Hero section component
import FeaturedProducts from './FeaturedProducts';  // Featured products section
import About from './About';  // About Us section
import Footer from './Footer';  // Footer section

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
