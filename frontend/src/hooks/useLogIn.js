import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMainInstance } from "@/lib/axios";
import { errorHandler } from "@/lib/errorHandler";
import { logIn as loggIn } from "@/store/states/userData";
import { storeInLocal } from "@/lib/storeInLocal";

export default function useLogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  // creating axios instance for user
  const userInstance = createMainInstance();

  async function logIn(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/login", data);
      dispatch(loggIn(res.data));
      storeInLocal(res.data);
    } catch (error) {
      console.log(error, "useLogIn");
      setError(errorHandler(error));
      return res;
    } finally {
      setIsLoading(false);
    }
  }

  function resetErrors() {}

  return {
    isLoading,
    error,
    logIn,
    resetErrors,
  };
}
