// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Load environment variables from .env file
const app = express();

// Middleware to parse JSON bodies and handle CORS
app.use(cors({ origin: "*" }));
app.use(express.json());

// Import course routes
const courseRoutes = require("./routes/course-routes");

// Mount API routes under /
app.use("/courses", courseRoutes);

// Export the app for Vercel
module.exports = app;
