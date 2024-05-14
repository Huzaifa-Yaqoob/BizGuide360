import { z } from "zod";

export const registerFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(64),
  password: z.string().min(8).max(64),
});

export const logInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
});

export const OTPFormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
