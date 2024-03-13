import { Id } from "@/types/types";
import errMsg from "./errMsg";

export async function get(id: Id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data };
  } catch (error) {
    return { error: errMsg(error) };
  }
}
