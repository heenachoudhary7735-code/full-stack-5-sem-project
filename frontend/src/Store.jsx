
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Store.css";

function Store() {

    const [cartCount, setCartCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [favorites, setFavorites] = useState([]);

    const products = [
        {
            id: 1,
            name: "Cheesecake",
            description: "Creamy and smooth cheesecake made fresh.",
            price: 499,
            image: "/images/cheesecake.jpeg",
            category: "CAKES"
        },
        {
            id: 2,
            name: "Tiramisu",
            description: "A delicious Italian dessert with rich flavors.",
            price: 399,
            image: "/images/tiramisu.jpeg",
            category: "PASTRIES"
        },
        {
            id: 3,
            name: "Butterscotch Cake",
            description: "Soft cake with delicious butterscotch cream.",
            price: 599,
            image: "/images/butterscotch-cake.jpeg",
            category: "CAKES"
        },
        {
            id: 4,
            name: "Chocolate Cookies",
            description: "Freshly baked cookies with chocolate chips.",
            price: 199,
            image: "/images/cookie.jpeg",
            category: "COOKIES"
        },
        {
            id: 5,
            name: "Red Velvet Cake",
            description: "Soft red velvet cake with creamy frosting.",
            price: 699,
            image: "/images/redvelvet.jpeg",
            category: "CAKES"
        },
        {
            id: 6,
            name: "Vanilla Cupcake",
            description: "Soft vanilla cupcake with creamy frosting.",
            price: 149,
            image: "/images/cupcake.jpeg",
            category: "CUPCAKES"
        },
        {
            id: 7,
            name: "Blueberry Muffin",
            description: "Soft muffin filled with fresh blueberries.",
            price: 179,
            image: "/images/blueberry.jpeg",
            category: "PASTRIES"
        },
        {
            id: 8,
            name: "Fresh Milk Bread",
            description: "Soft and fresh bread made with quality ingredients.",
            price: 120,
            image: "/images/bread.jpeg",
            category: "BREADS"
        }
    ];

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