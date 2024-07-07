import { z } from "zod";

export const addAreaFormSchema = z.object({
  area: z.string().min(3).max(64),
});
