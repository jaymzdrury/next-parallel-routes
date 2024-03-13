import { z } from "zod";
import { dataSchema, idSchema, paramsSchema } from "./schemas";

export type Id = z.infer<typeof idSchema>;
export type Params = z.infer<typeof paramsSchema>;
export type Data = z.infer<typeof dataSchema>;
