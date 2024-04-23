import { z } from "zod";

export const searchBusiness = z.object({
  category: z.object({ id: z.string(), value: z.string(), label: z.string() }),
  area: z.object({ id: z.string(), value: z.string(), label: z.string() }),
});
