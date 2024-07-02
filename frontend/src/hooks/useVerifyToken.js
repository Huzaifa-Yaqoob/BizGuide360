import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMainInstance } from "@/lib/axios";
import { errorHandler } from "@/lib/errorHandler";
import { logIn, logOut } from "@/store/states/userData";

export default function useVerifyToken() {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const userInstance = createMainInstance();

  const token = localStorage.getItem("token");
  async function verifyToken() {
    setError({});
    setIsLoading(true);
    try {
      if (isLoggedIn || !token) {
        return { ok: true };
      }
      const res = await userInstance.post("/verify-token/", { token });
      console.log(res);
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
