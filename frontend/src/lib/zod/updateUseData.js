import { z } from "zod";

export const editUsernameFormSchema = z.object({
  username: z.string().min(3).max(64),
});
