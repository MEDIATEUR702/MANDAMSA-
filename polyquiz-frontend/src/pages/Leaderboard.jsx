import {
  useEffect,
  useState,
} from "react";

import api
from "../services/api";

function Leaderboard() {

  const [
    players,
    setPlayers,
  ] = useState([]);

  useEffect(() => {

    const fetchLeaderboard =
      async () => {

        try {

          const response =
            await api.get(
              "/users/leaderboard"
            );

          setPlayers(
            response.data
          );

        } catch (error) {

          console.error(error);
        }
      };

    fetchLeaderboard();

  }, []);

  return (

    <div>

      <h1>
        Leaderboard
      </h1>

      {players.map(
        (
          player,
          index
        ) => (

          <div
            key={
              player._id ||
              index
            }
          >
            {index + 1}
            {" - "}
            {player.pseudo}
            {" : "}
            {player.bestScore}
          </div>
        )
      )}

    </div>
  );
}

export default Leaderboard;