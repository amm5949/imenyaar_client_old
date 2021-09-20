import { useState } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = () => {
    setLoading(true);
    apiFunction()
      .then((response) => {
        console.log(response);
        setData(response.data.result);
        setError(false);
        setLoading(false);
      })
      .catch((reason) => {
        console.log("ERROR reason: ", reason);
        setError(true);
        setLoading(false);
      });
  };

  return { request, data, loading, error };
};

export default useApi;
