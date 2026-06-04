const mongoose = require("mongoose");

const userSchema =
  new mongoose.Schema({

    pseudo: {

      type: String,

      required: true,

      unique: true,

      lowercase: true,

      trim: true,

      validate: {
        validator: function (value) {
          return !/\s/.test(value);
        },

        message:
          "Le pseudo ne doit pas contenir d'espace",
      },
    },

    bestScore: {

      type: Number,

      default: 0,
    },
  });

module.exports =
  mongoose.model(
    "User",
    userSchema
  );