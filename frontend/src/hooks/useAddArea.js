import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { addArea } from "@/store/states/areas";

export default function useAddArea() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function addArea(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/area", data);
      console.log(res);
      // dispatch(addArea(await res.data));
      return true;
    } catch (error) {
      console.log(error, "useAddArea");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, addArea, resetError };
}
