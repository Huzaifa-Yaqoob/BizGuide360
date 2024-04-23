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
