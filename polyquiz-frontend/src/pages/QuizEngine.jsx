import {
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  isFinished: false,
  answers: [],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION": {
      const isCorrect =
        action.payload.selectedAnswer ===
        action.payload.correctAnswer;

      return {
        ...state,

        score: isCorrect
          ? state.score + 1
          : state.score,

        currentQuestionIndex:
          state.currentQuestionIndex + 1,

        answers: [
          ...state.answers,
          action.payload.selectedAnswer,
        ],
      };
    }

    case "FINISH_QUIZ":
      return {
        ...state,
        isFinished: true,
      };

    default:
      return state;
  }
}

function QuizEngine() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(
    quizReducer,
    initialState
  );

  const [questions, setQuestions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [timeLeft, setTimeLeft] =
    useState(60);

  const intervalRef = useRef(null);

  /*
  =========================
  Chargement des questions
  =========================
  */

  useEffect(() => {
    const fetchQuestions =
      async () => {
        try {
          const response =
            await api.get(
              "/questions"
            );

          setQuestions(
            response.data
          );
        } catch (error) {
          setError(
            "Erreur lors du chargement des questions"
          );

          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchQuestions();
  }, []);

  /*
  =========================
  Timer
  =========================
  */

  useEffect(() => {
    intervalRef.current =
      setInterval(() => {
        setTimeLeft(
          (prev) => prev - 1
        );
      }, 1000);

    return () =>
      clearInterval(
        intervalRef.current
      );
  }, []);

  /*
  =========================
  Fin si temps écoulé
  =========================
  */

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(
        intervalRef.current
      );

      dispatch({
        type: "FINISH_QUIZ",
      });
    }
  }, [timeLeft]);

  /*
  =========================
  Fin si plus de questions
  =========================
  */

  useEffect(() => {
    if (
      questions.length > 0 &&
      state.currentQuestionIndex >=
        questions.length
    ) {
      clearInterval(
        intervalRef.current
      );

      dispatch({
        type: "FINISH_QUIZ",
      });
    }
  }, [
    state.currentQuestionIndex,
    questions,
  ]);

  /*
  =========================
  Sauvegarde du score
  =========================
  */

  useEffect(() => {
    const saveScore =
      async () => {
        try {
          await api.post(
            "/users/score",
            {
              score:
                state.score,
            }
          );
        } catch (error) {
          console.error(error);
        }
      };

    if (
      state.isFinished &&
      questions.length > 0
    ) {
      saveScore();

      navigate("/resultats", {
        state: {
          score: state.score,
          totalQuestions:
            questions.length,
        },
      });
    }
  }, [
    state.isFinished,
    state.score,
    questions,
    navigate,
  ]);

  /*
  =========================
  Chargement
  =========================
  */

  if (loading) {
    return (
      <h1>
        Chargement...
      </h1>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  /*
  =========================
  Sécurité
  =========================
  */

  const currentQuestion =
    questions[
      state.currentQuestionIndex
    ];

  if (!currentQuestion) {
    return (
      <h1>
        Fin du quiz...
      </h1>
    );
  }

  /*
  =========================
  Interface
  =========================
  */

  return (
    <div>
      <h1>PolyQuiz</h1>

      <h2>
        Temps restant :
        {" "}
        {timeLeft}s
      </h2>

      <h3>
        Question{" "}
        {state.currentQuestionIndex +
          1}
        {" / "}
        {questions.length}
      </h3>

      <h2>
        {currentQuestion.text}
      </h2>

      <div>
        {currentQuestion.options.map(
          (
            option,
            index
          ) => (
            <button
              key={index}
              onClick={() =>
                dispatch({
                  type:
                    "ANSWER_QUESTION",

                  payload: {
                    selectedAnswer:
                      option,

                    correctAnswer:
                      currentQuestion.correctAnswer,
                  },
                })
              }
            >
              {option}
            </button>
          )
        )}
      </div>

      <h3>
        Score : {state.score}
      </h3>
    </div>
  );
}

export default QuizEngine;