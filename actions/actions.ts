"use server";
import { get } from "@/lib/db";
import { idSchema } from "@/types/schemas";
import { Data, Id } from "@/types/types";

export async function getData(id: Id): Promise<Data> {
  idSchema.safeParse(id);

  const { error, data } = await get(id);

  if (error) throw new Error(error);

  return data;
}
