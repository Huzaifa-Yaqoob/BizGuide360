import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { updateAvatar } from "@/store/states/userData";

export default function useRemoveAvatar() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(false, token);

  async function removeAvatar() {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.patch("/remove-avatar");
      console.log(res, "useChangeAvatar");
      dispatch(updateAvatar("/defaultAvatar.jpeg"));
    } catch (error) {
      console.log(error, "useRemoveAvatar");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, removeAvatar };
}
