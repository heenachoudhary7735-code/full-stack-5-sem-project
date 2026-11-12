import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Store.css";

function Store() {

    const [cartCount, setCartCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [favorites, setFavorites] = useState([]);

        const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // Fetch products from Express backend
    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await fetch(
                    "http://127.0.0.1:5000/api/products"
                );

                if (!response.ok) {

                    throw new Error("Failed to fetch products");

                }

                const data = await response.json();

                if (!Array.isArray(data)) {

                    throw new Error("Invalid product data received");

                }

                setProducts(data);

                setError("");

            }

            catch (error) {

                console.error("Error fetching products:", error);

                setError(
                    "Unable to load products. Please check your backend server."
                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchProducts();

    }, []);


    

    // Add product to cart
    const addToCart = () => {
        setCartCount(cartCount + 1);
        alert("Product added to cart!");
    };

    // Add or remove favourites
    const toggleFavorite = (id) => {

        if (favorites.includes(id)) {

            setFavorites(favorites.filter(item => item !== id));

        } else {

            setFavorites([...favorites, id]);

        }

    };

    // Filter products
    const filteredProducts = selectedCategory === "ALL"
        ? products
        : products.filter(
            product => product.category === selectedCategory
        );


    return (

        <div className="store-page">

            {/* HEADER */}

            <header className="main-header">

                <div className="header-left">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <Link to="/" className="logo">
                    <img src="/images/logo.png" alt="Lily & Sugar" />
                </Link>

                <div className="header-right">

                    <a href="#products">
                        <i className="fa-regular fa-heart"></i>
                        <span>{favorites.length}</span>
                    </a>

                    <a href="#products">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>{cartCount}</span>
                    </a>

                    <a href="/login.html">
                        <i className="fa-regular fa-user"></i>
                    </a>

                </div>

            </header>


            {/* NAVIGATION */}

            <nav className="navigation">

                <Link to="/">MENU</Link>

                <a href="/custom.html">CUSTOM CAKE</a>

                <Link to="/store">STORE</Link>

                <a href="/about.html">ABOUT US</a>

                <a href="#products">FAVOURITES</a>

                <a href="#products">CART</a>

            </nav>


            {/* STORE BANNER */}

            <section className="store-banner">

                <h1>Our Store</h1>

                <p>
                    Freshly baked treats, made with love.
                </p>

                <a href="#products">
                    EXPLORE PRODUCTS
                </a>

            </section>


            {/* STORE SECTION */}

            <section className="store-section">

                <p className="section-label">
                    EXPLORE OUR MENU
                </p>


                {/* CATEGORIES */}

                <div className="categories">

                    {[
                        "ALL",
                        "CAKES",
                        "PASTRIES",
                        "COOKIES",
                        "CUPCAKES",
                        "BREADS"
                    ].map(category => (

                        <button
                            key={category}
                            className={
                                selectedCategory === category
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}

                        </button>

                    ))}

                </div>


                <p className="section-label">
                    OUR FAVORITES
                </p>

                <h2 id="products">
                    Freshly Baked For You
                </h2>


                {/* PRODUCTS */}

                <div className="products">

                    {filteredProducts.map(product => (

                        <div className="product-card" key={product.id}>

                            <div className="product-image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>


                            <div className="product-info">

                                <button
                                    className="heart"
                                    onClick={() => toggleFavorite(product.id)}
                                >
                                    {favorites.includes(product.id) ? "♥" : "♡"}
                                </button>


                                <h3>{product.name}</h3>

                                <p>
                                    {product.description}
                                </p>


                                <div className="product-bottom">

                                    <span>₹{product.price}</span>

                                    <button onClick={addToCart}>
                                        Add to Cart
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* OFFER SECTION */}

            <section className="offer">

                <h2>Sweet Weekend Deal</h2>

                <p>
                    Get 20% OFF on selected treats this weekend!
                </p>

                <a href="#products">
                    ORDER NOW
                </a>

            </section>


            {/* FOOTER */}

            <footer className="footer">

                <div className="footer-container">


                    <div className="footer-brand">

                        <h3>Lily & Sugar</h3>

                        <p>Freshly baked with love.</p>

                        <p>Sweet moments made special.</p>

                    </div>


                    <div className="footer-links">

                        <h4>QUICK LINKS</h4>

                        <a href="/login.html">Login</a>

                        <Link to="/">Menu</Link>

                        <a href="/custom.html">Custom Cake</a>

                        <Link to="/store">Store</Link>

                    </div>


                    <div className="footer-address">

                        <h4>VISIT US</h4>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            Lily & Sugar Bakery
                        </p>

                        <p>Jaipur, Rajasthan</p>

                        <p>India</p>

                    </div>


                    <div className="footer-contact">

                        <h4>GET IN TOUCH</h4>

                        <p>
                            <i className="fa-solid fa-phone"></i>
                            +91 XXXXX XXXXX
                        </p>

                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            hello@lilyandsugar.com
                        </p>

                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © 2026 Lily & Sugar. All Rights Reserved.
                    </p>

                </div>

            </footer>

        </div>

    );

}

export default Store;