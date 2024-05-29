import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { createMainInstance } from "@/lib/axios";
import { errorHandler } from "@/lib/errorHandler";
import { storeInLocal } from "@/lib/storeInLocal";
import { reset } from "@/store/states/authStatus";
import { logIn } from "@/store/states/userData";
import { reset as resett } from "@/store/states/registerForm";

export default function useVerifyEmail() {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // creating axios instance for user
  const userInstance = createMainInstance();

  async function verifyEmail(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("verify-email", data);
      toast({
        title: "Login Successful",
        description: res.data.userData.username + " Welcome to BizGuide360",
      });
      dispatch(reset()); //reset auth dialogue status
      dispatch(resett()); //reset register form data
      dispatch(logIn(res.data));
      storeInLocal(res.data);
    } catch (error) {
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, verifyEmail };
}
