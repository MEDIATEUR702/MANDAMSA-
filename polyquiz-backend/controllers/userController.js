const User = require("../models/User");

/*
=================================
Mettre à jour le meilleur score
=================================
*/
const updateScore = async (req, res) => {
  try {
    const { score } = req.body;

    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable",
      });
    }

    if (score > user.bestScore) {
      user.bestScore = score;

      await user.save();
    }

    res.status(200).json({
      message: "Score enregistré",
      bestScore: user.bestScore,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
=================================
Leaderboard Top 10
=================================
*/
const getLeaderboard = async (
  req,
  res
) => {
  try {
    const leaderboard =
      await User.find()

        .select(
          "pseudo bestScore"
        )

        .sort({
          bestScore: -1,
        })

        .limit(10);

    res.status(200).json(
      leaderboard
    );

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  updateScore,
  getLeaderboard,
};