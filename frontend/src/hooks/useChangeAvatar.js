import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { updateAvatar } from "@/store/states/userData";

export default function useChangeAvatar() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(false, token);

  async function changeAvatar(formData) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.patch("/change-avatar", formData);
      console.log(res, "useChangeAvatar");
      dispatch(updateAvatar(res.data.avatar));
    } catch (error) {
      console.log(error, "useChangeAvatar");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, error, changeAvatar };
}
