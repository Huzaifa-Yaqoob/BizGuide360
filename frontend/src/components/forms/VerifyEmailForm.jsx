import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { OTPFormSchema } from "@/lib/zod/authFormsSchema";
import useVerifyEmail from "@/hooks/useVerifyEmail";
import { ButtonLoading } from "../common/ButtonLoading";
import useResendOtp from "@/hooks/useResendOtp";
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";

export default function VerifyEmailForm() {
  const [counter, setCounter] = useState(60);
  const {
    isLoading: isLoadingResend,
    error: errorResend,
    resendOtp,
    resetError,
  } = useResendOtp();
  const { isLoading, error, verifyEmail } = useVerifyEmail();
  const formData = useSelector((state) => state.registerForm.value);
  const form = useForm({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && resetError();
  }, [counter]);

  async function handleResendOtp() {
    await resendOtp({ email: formData.email });
    setCounter(60);
  }

  async function onSubmit(data) {
    data = { email: formData.email, ...data };
    await verifyEmail(data);
  }

  return (
    <div className="space-y-2">
      {!isEmptyObject(errorResend) && <ErrorMessage msg={errorResend.msg} />}
      {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center space-y-6"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="m-auto">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-center">
                  Please enter the OTP sent to your email{" "}
                  {formData.email ? <b>{formData.email}</b> : ""} account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-center">
            <ButtonLoading isLoading={isLoading} className="shadow">
              Submit
            </ButtonLoading>
            <ButtonLoading
              type="button"
              isLoading={isLoadingResend}
              disabled={counter > 0}
              variant="outline"
              onClick={handleResendOtp}
            >
              Resend{" "}
              {counter > 0
                ? `in 00:${counter > 9 ? counter : `0${counter}`}s`
                : ""}
            </ButtonLoading>
          </div>
        </form>
      </Form>
    </div>
  );
}
