import { z } from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  count: z.coerce.number().int().positive().default(10),
});
