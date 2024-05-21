import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMainInstance } from "@/lib/axios";
import { errorHandler } from "@/lib/errorHandler";
import { openVerifyEmail } from "../store/states/authStatus";

export default function useRegister() {
  const auth = useSelector((state) => state.authStatus.value);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  // creating axios instance for user
  const userInstance = createMainInstance();

  async function register(data) {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance.post("", data);
      console.log(res);
      dispatch(openVerifyEmail());
      return res.data;
    } catch (error) {
      console.log(error);
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetErrors() {
    setError({});
  }

  return {
    isLoading,
    error,
    register,
    resetErrors,
  };
}
