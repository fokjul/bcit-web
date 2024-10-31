const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Load environment variables from .env file
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON bodies and handle CORS
app.use(cors());
app.use(express.json());

// Import course routes
const courseRoutes = require("./routes/course-routes");

// Mount API routes under /
app.use("/courses", courseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
