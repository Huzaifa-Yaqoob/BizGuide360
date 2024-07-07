import { z } from "zod";

export const addCategoryFormSchema = z.object({
  category: z.string().min(3).max(64),
});
