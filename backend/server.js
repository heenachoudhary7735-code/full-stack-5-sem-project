const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;


// Middleware

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ]
}));

app.use(express.json());


// Home route

app.get("/", (req, res) => {

    res.send("Welcome to Lily & Sugar Backend!");

});


// Health check API

app.get("/api/health", (req, res) => {

    res.json({
        message: "Backend is working successfully!"
    });

});


// Products API

app.get("/api/products", (req, res) => {

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


    res.json(products);

});


// Start server

app.listen(PORT, () => {

    console.log(`Server running on http://127.0.0.1:${PORT}`);

});