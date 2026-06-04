import { useEffect, useState } from "react";

function useFetch(url) {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url)

      .then((response) => {

        if (!response.ok) {
          throw new Error(
            "Erreur lors du chargement"
          );
        }

        return response.json();
      })

      .then((result) => {

        setData(result);

        setLoading(false);
      })

      .catch((err) => {

        setError(err.message);

        setLoading(false);
      });

  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;