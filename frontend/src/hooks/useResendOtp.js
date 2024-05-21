import { useState } from "react";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useResendOtp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance();

  async function resendOtp(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/resend-otp/", data);
    } catch (error) {
      console.log(error, "useResendOtp");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, resendOtp, resetError };
}
