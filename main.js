const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import des routes
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Configuration CORS
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Utilisation des routes d'upload
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
