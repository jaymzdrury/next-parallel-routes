import { z } from "zod";

export const idSchema = z.enum([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
]);
export const paramsSchema = z.object({ params: z.object({ id: idSchema }) });
export const dataSchema = z.object({ name: z.string().min(1) });
