import { z } from "zod";

export const addBusinessFormSchema = z.object({
  title: z.string().min(3).max(75),
  area: z.any(),
  category: z.any(),
});
