import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { addCategory } from "@/store/states/categories";

export default function useAddCategory() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function addCategory(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/category", data);
      console.log(res);
      // dispatch(addCategory(res.data));
      return true;
    } catch (error) {
      console.log(error, "useAddCategory");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, addCategory, resetError };
}
