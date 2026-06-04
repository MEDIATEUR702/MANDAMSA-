import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home
from "./pages/Home";

import Quiz
from "./pages/Quiz";

import Resultats
from "./pages/Resultats";

import Leaderboard
from "./pages/Leaderboard";

import ProtectedRoute
from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resultats"
          element={
            <ProtectedRoute>
              <Resultats />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <Leaderboard />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;