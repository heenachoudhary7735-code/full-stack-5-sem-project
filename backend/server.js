const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// ===============================
// Middleware
// ===============================

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ]
}));

app.use(express.json());

app.use("/api/products", productRoutes);
// ===============================
// MongoDB Connection
// ===============================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });


// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {

    res.send("Welcome to Lily & Sugar Backend!");

});


// ===============================
// Health Check API
// ===============================

app.get("/api/health", (req, res) => {

    res.json({
        message: "Backend is working successfully!"
    });

});




app.listen(PORT, () => {

    console.log(`Server running on http://127.0.0.1:${PORT}`);

});