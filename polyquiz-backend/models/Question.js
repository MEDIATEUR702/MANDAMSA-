const mongoose = require("mongoose");

const questionSchema =
  new mongoose.Schema({

    category: {

      type: String,

      required: true,
    },

    text: {

      type: String,

      required: true,
    },

    options: {

      type: [String],

      required: true,

      validate: {

        validator: function (value) {

          return (
            value.length >= 2 &&
            value.length <= 4
          );
        },

        message:
          "Entre 2 et 4 options",
      },
    },

    correctAnswer: {

      type: String,

      required: true,
    },
  });

module.exports =
  mongoose.model(
    "Question",
    questionSchema
  );