const express = require("express");
const config = require("config");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// CORS Handler
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/uploads", express.static(path.join("uploads")));

// Define Routes
app.use("/api/posts", require("./routes/postRoute"));
app.use("/api/upload", require("./controller/imageUploadController"));

const PORT = config.get("PORT") || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
