import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMainInstance } from "@/lib/axios";
import errorHandler from "@/lib/errorHandler";
import authStatus, {
  openRegister,
  openVerifyEmail,
  reset,
} from "../store/states/authStatus";

export default function useRegister() {
  const auth = useSelector((state) => state.authStatus.value);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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
      console.log(auth);
      return res.data;
    } catch (error) {
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    register,
  };
}
