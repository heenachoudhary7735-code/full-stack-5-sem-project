import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Landing.css";

// Product data
const products = [
  {
    name: "Cheesecake",
    image: "/images/cheesecake.jpeg",
    description: "Creamy, delicate and irresistibly smooth.",
  },
  {
    name: "Tiramisu",
    image: "/images/tiramisu.jpeg",
    description: "A classic Italian favorite with rich flavors.",
  },
  {
    name: "Butterscotch Cake",
    image: "/images/butterscotch-cake.jpeg",
    description: "Soft, buttery and beautifully indulgent.",
  },
];

function Landing() {
  // Cart state
  const [cartCount, setCartCount] = useState(0);

  // Cart functionality
  const handleCartClick = () => {
    const updatedCount = cartCount + 1;
    setCartCount(updatedCount);
    alert("Cart clicked! Items: " + updatedCount);
  };

  // Wishlist functionality
  const handleHeartClick = () => {
    alert("Added to wishlist ❤️");
  };

  return (
    <>
      {/* Header */}
      <header className="main-header">
        <div className="header-left">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Lily & Sugar Logo" />
          </a>
        </div>

        <div className="header-right">
          <a
            href="#favourites"
            onClick={(e) => {
              e.preventDefault();
              handleHeartClick();
            }}
          >
            <i className="fa-solid fa-heart"></i>
          </a>

          <a
            href="#cart"
            onClick={(e) => {
              e.preventDefault();
              handleCartClick();
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>

          <a href="/login.html">
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <a href="#popular">MENU</a>
        <a href="/custom.html">CUSTOM CAKE</a>
         <Link to="/store">STORE</Link>
        <a href="/about.html">ABOUT US</a>

        <a
          href="#favourites"
          onClick={(e) => {
            e.preventDefault();
            handleHeartClick();
          }}
        >
          FAVOURITES
        </a>

        <a
          href="#cart"
          onClick={(e) => {
            e.preventDefault();
            handleCartClick();
          }}
        >
          CART ({cartCount})
        </a>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-small">FRESHLY BAKED</p>

            <h1>Made With Love</h1>

            <div className="hero-line"></div>

            <p className="hero-description">
              Beautifully crafted cakes, pastries and sweet treats,
              freshly made with love and care.
            </p>

            <a href="#popular" className="hero-button">
              SHOP NOW
            </a>
          </div>
        </section>

        {/* Popular Products */}
        <section className="popular-section" id="popular">
          <p className="section-label">OUR COLLECTION</p>

          <h2>Popular Treats</h2>

          <p className="section-description">
            Discover our most loved freshly baked delights.
          </p>

          <div className="products-container">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <a href="/store.html">
                    VIEW PRODUCT
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a href="/store.html" className="full-menu-button">
            VIEW FULL MENU
          </a>
        </section>

        {/* Custom Cake Section */}
        <section className="custom-cake">
          <div className="custom-cake-content">
            <p className="section-label">
              MADE JUST FOR YOU
            </p>

            <h2>Your Dream Cake, Your Way</h2>

            <p>
              Make every celebration special with a beautiful
              custom-made cake designed just for you.
            </p>

            <a href="/custom.html" className="custom-button">
              ORDER CUSTOM CAKE
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">OUR STORY</p>

            <h2>Made With Love, Baked With Passion</h2>

            <p>
              At Lily & Sugar, we believe every sweet moment
              deserves something special. We create delicious
              cakes and desserts using quality ingredients,
              care and creativity. Every bite is made to bring
              happiness to your celebrations.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h3>Lily & Sugar</h3>

            <p>
              Freshly baked happiness for every special moment.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="/">Home</a>
            <Link to="/store">STORE</Link>
            <a href="/custom.html">Custom Cake</a>
            <a href="/about.html">About Us</a>
          </div>

          <div className="footer-address">
            <h4>Our Address</h4>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              Jaipur, Rajasthan, India
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>

            <p>
              <i className="fa-solid fa-phone"></i>
              +91 XXXXX XXXXX
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              info@lilyandsugar.com
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Lily & Sugar. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Landing;
