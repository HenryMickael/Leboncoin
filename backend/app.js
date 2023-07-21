require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/user");
const vehiculeRoutes = require("./routes/vehicule");
const immobilierRoutes = require("./routes/immobilier");
const modeRoutes = require("./routes/mode");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Connexion à MongoDB échouée :", err));

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", userRoutes);
app.use("/api", vehiculeRoutes);
app.use("/api", immobilierRoutes);
app.use("/api", modeRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
