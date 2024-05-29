import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { updateName } from "@/store/states/userData";

export default function useEditUsername() {
  const { token, userData } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const userInstance = createMainInstance(true, token);

  async function editUsername(data) {
    setIsLoading(true);
    setError({});
    try {
      if (data.username === userData.username) {
        return true;
      }
      const res = await userInstance.patch("/change-username", data);
      console.log(res.data);
      dispatch(updateName(res.data.username));
      return true;
    } catch (error) {
      console.log(error, "useEditUsername");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, editUsername };
}
