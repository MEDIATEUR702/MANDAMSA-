import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  UserContext,
} from "../context/UserContext";

import api from "../services/api";

function Home() {

  const [pseudo, setPseudo] =
    useState("");

  const { setUser } =
    useContext(UserContext);

  const navigate =
    useNavigate();

  
  const handleLogin =
    async () => {

      console.log("handleLogin appelé, pseudo:", pseudo); 

      try {

        const response =
          await api.post(
            "/auth/login",
            {
              pseudo,
            }
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        setUser(
          response.data.user
        );

        navigate("/quiz");

      } catch (error) {

        console.error(error);

        alert(
          "Erreur de connexion"
        );
      }
    };

  return (

    <div>

      <h1>PolyQuiz</h1>

      <input
        type="text"
        placeholder="Pseudo"
        value={pseudo}
        onChange={(e) =>
          setPseudo(
            e.target.value
          )
        }
      />

      <button
        onClick={
          handleLogin
        }
      >
        Commencer
      </button>

    </div>
  );
}

export default Home;