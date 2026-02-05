require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());   // ⭐ MUST BE BEFORE ROUTES

app.get("/", (req, res) => {
  res.send("ecommerce backend is running");
});

app.use("/api/auth", authRoutes);  // ⭐ AFTER json()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
