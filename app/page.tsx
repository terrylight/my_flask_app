import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>Cherie's Electrical and Electronics</h1>
        <div style={navbarStyle}>
          <Link href="/" style={navbarLinkStyle}>
            Home
          </Link>
          <Link href="/about" style={navbarLinkStyle}>
            About
          </Link>
          <Link href="/contact" style={navbarLinkStyle}>
            Contact
          </Link>
          <Link href="/login" style={navbarLinkStyle}>
            Login
          </Link>
          <Link href="/register" style={navbarLinkStyle}>
            Sign Up
          </Link>
          <Link href="/shop" style={navbarLinkStyle}>
            Shop
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div style={heroSectionStyle}>
        <h2 style={heroTitleStyle}>Welcome to Cherie's Electrical & Electronics</h2>
        <p style={heroDescriptionStyle}>
          Your trusted source for quality electronics and electrical appliances
        </p>
        <Link href="/shop" style={buttonStyle}>
          Browse Our Shop
        </Link>
      </div>

      {/* Featured Products Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Featured Products</h2>
        <div style={productCardContainerStyle}>
          <div style={productCardStyle}>
            <Image
              src="https://via.placeholder.com/300x200?text=Electric+Kettle"
              alt="Electric Kettle"
              width={300}
              height={200}
              style={productImageStyle}
            />
            <h3>Electric Kettle</h3>
            <p>$45</p>
          </div>
          <div style={productCardStyle}>
            <Image
              src="https://via.placeholder.com/300x200?text=Washing+Machine"
              alt="Washing Machine"
              width={300}
              height={200}
              style={productImageStyle}
            />
            <h3>Washing Machine</h3>
            <p>$350</p>
          </div>
          <div style={productCardStyle}>
            <Image
              src="https://via.placeholder.com/300x200?text=Refrigerator"
              alt="Refrigerator"
              width={300}
              height={200}
              style={productImageStyle}
            />
            <h3>Refrigerator</h3>
            <p>$500</p>
          </div>
          <div style={productCardStyle}>
            <Image
              src="https://via.placeholder.com/300x200?text=LED+TV"
              alt="LED TV"
              width={300}
              height={200}
              style={productImageStyle}
            />
            <h3>LED TV</h3>
            <p>$700</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div style={aboutSectionStyle}>
        <h2 style={sectionTitleStyle}>About Teresia</h2>
        <p style={aboutTextStyle}>
          Teresia is passionate about providing high-quality electrical and
          electronic products to make your home more comfortable. With years of
          experience, Cherie's Electrical and Electronics aims to be your go-to
          source for reliable and affordable products. We're dedicated to customer
          satisfaction and offer a range of products that fit your needs.
        </p>
      </div>

      {/* Footer Section */}
      <div style={footerStyle}>
        <p>Contact Us: email@example.com | Phone: 123-456-7890</p>
        <p>Follow us on Social Media:</p>
        <Link href="#" style={footerLinkStyle}>
          Facebook
        </Link>
        |
        <Link href="#" style={footerLinkStyle}>
          Instagram
        </Link>
        |
        <Link href="#" style={footerLinkStyle}>
          Twitter
        </Link>
      </div>
    </div>
  );
}

// Inline Styles
const headerStyle: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "white",
  padding: "30px 0",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const headerTitleStyle: React.CSSProperties = {
  fontSize: "50px",
  margin: 0,
  fontFamily: "'Roboto', sans-serif",
};

const navbarStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "20px",
};

const navbarLinkStyle: React.CSSProperties = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "18px",
};

const navbarLinkHoverStyle: React.CSSProperties = {
  textDecoration: "underline",
};

const heroSectionStyle: React.CSSProperties = {
  background: "linear-gradient(to right, #3498db, #8e44ad)",
  color: "white",
  padding: "100px 0",
  textAlign: "center",
  animation: "fadeIn 2s ease-in-out",
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: "70px",
  marginBottom: "20px",
  fontFamily: "'Roboto', sans-serif",
};

const heroDescriptionStyle: React.CSSProperties = {
  fontSize: "24px",
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: "30px",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#ff7f50",
  color: "white",
  padding: "15px 30px",
  textDecoration: "none",
  fontSize: "20px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

const sectionStyle: React.CSSProperties = {
  padding: "50px 20px",
  textAlign: "center",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "36px",
  marginBottom: "40px",
  fontFamily: "'Roboto', sans-serif",
};

const productCardContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const productCardStyle: React.CSSProperties = {
  width: "22%",
  margin: "15px",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
};

const productImageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};

const aboutSectionStyle: React.CSSProperties = {
  backgroundColor: "#ecf0f1",
  padding: "50px 20px",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const aboutTextStyle: React.CSSProperties = {
  fontSize: "20px",
  maxWidth: "800px",
  margin: "0 auto",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "white",
  textAlign: "center",
  padding: "20px 0",
  marginTop: "50px",
};

const footerLinkStyle: React.CSSProperties = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "600",
};

