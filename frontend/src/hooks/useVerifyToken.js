import { useState } from "react";
import { createMainInstance } from "@/lib/axios";
import { errorHandler } from "@/lib/errorHandler";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "@/store/states/userData";

export default function useVerifyToken() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance();

  async function verifyToken(token) {
    setError({});
    setIsLoading(true);
    try {
      const res = await userInstance.post("/verify-token/", { token });
      dispatch(logIn(res.data));
      return { ok: true };
    } catch (error) {
      console.log(error, "useVerifyToken");
      dispatch(logOut());
      localStorage.removeItem("token");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, verifyToken };
}
