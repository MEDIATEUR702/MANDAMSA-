import { useMemo } from "react";

import { useLocation }
from "react-router-dom";

function Resultats() {

  const location = useLocation();

  const {
    score,
    totalQuestions,
  } = location.state;

  const ratio = useMemo(() => {

    return (
      (score / totalQuestions) * 100
    );

  }, [score, totalQuestions]);

  return (

    <div>

      <h1>
        Résultats
      </h1>

      <h2>
        Score :
        {score}/{totalQuestions}
      </h2>

      <h2>
        Ratio :
        {ratio.toFixed(2)}%
      </h2>

    </div>
  );
}

export default Resultats;