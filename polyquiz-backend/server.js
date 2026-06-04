require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
  require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const questionRoutes =
  require("./routes/questionRoutes");

const userRoutes =
  require("./routes/userRoutes");

const app = express();

/*
=================================
Connexion MongoDB
=================================
*/
connectDB();

/*
=================================
Middlewares
=================================
*/
app.use(cors());

app.use(express.json());

/*
=================================
Route de test
=================================
*/
app.get("/", (req, res) => {
  res.json({
    message:
      "API PolyQuiz opérationnelle",
  });
});

/*
=================================
Routes API
=================================
*/
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/questions",
  questionRoutes
);

app.use(
  "/api/users",
  userRoutes
);

/*
=================================
404
=================================
*/
app.use((req, res) => {
  res.status(404).json({
    message: "Route introuvable",
  });
});

/*
=================================
Démarrage du serveur
=================================
*/
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Serveur démarré sur le port ${PORT}`
  );
});