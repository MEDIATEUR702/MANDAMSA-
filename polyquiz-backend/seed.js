require("dotenv").config();

const mongoose = require("mongoose");

const Question =
  require("./models/Question");

async function connectDB() {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB connecté");

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
}

const questions = [

  {
    category: "F1",
    text: "Qui est surnommé The Iceman ?",
    options: [
      "Hamilton",
      "Raikkonen",
      "Verstappen",
      "Leclerc"
    ],
    correctAnswer: "Raikkonen"
  },

  {
    category: "F1",
    text: "Combien de roues possède une F1 ?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctAnswer: "4"
  },

  {
    category: "NBA",
    text: "Quelle équipe a drafté Michael Jordan ?",
    options: [
      "Bulls",
      "Lakers",
      "Heat",
      "Celtics"
    ],
    correctAnswer: "Bulls"
  },

  {
    category: "NBA",
    text: "Combien de joueurs sur le terrain par équipe ?",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correctAnswer: "5"
  },

  {
    category: "Manga",
    text: "Qui est le créateur de Naruto ?",
    options: [
      "Oda",
      "Kishimoto",
      "Toriyama",
      "Isayama"
    ],
    correctAnswer: "Kishimoto"
  },

  {
    category: "Manga",
    text: "Quel est le prénom de Luffy ?",
    options: [
      "Monkey D.",
      "Portgas",
      "Gol",
      "Roronoa"
    ],
    correctAnswer: "Monkey D."
  },

  {
    category: "MotoGP",
    text: "Qui est surnommé The Doctor ?",
    options: [
      "Rossi",
      "Marquez",
      "Bagnaia",
      "Lorenzo"
    ],
    correctAnswer: "Rossi"
  },

  {
    category: "MotoGP",
    text: "Combien de roues possède une moto ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "2"
  },

  {
    category: "Anime",
    text: "Dans Death Note, qui possède le carnet ?",
    options: [
      "Light",
      "L",
      "Near",
      "Mello"
    ],
    correctAnswer: "Light"
  },

  {
    category: "Anime",
    text: "Qui est Hokage au début de Naruto ?",
    options: [
      "Minato",
      "Tsunade",
      "Hiruzen",
      "Kakashi"
    ],
    correctAnswer: "Hiruzen"
  }

];

async function seedDatabase() {

  try {

    await connectDB();

    await Question.deleteMany();

    console.log(
      "Anciennes questions supprimées"
    );

    await Question.insertMany(
      questions
    );

    console.log(
      "Questions ajoutées"
    );

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);
  }
}

seedDatabase();