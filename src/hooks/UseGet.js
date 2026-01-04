import { useEffect, useState } from "react";
import { baseAxios } from "../axios";

function UseGetApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getApi() {
    setLoading(true);
    try {
      const response = await baseAxios();
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getApi();
  }, []);
  return { data, loading, error };
}

export default UseGetApi;
