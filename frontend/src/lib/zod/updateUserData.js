import { z } from "zod";

export const editUsernameFormSchema = z.object({
  username: z.string().min(3).max(64),
});

export const changeAvatarFormSchema = z.object({
  avatar: z.any(),
});
