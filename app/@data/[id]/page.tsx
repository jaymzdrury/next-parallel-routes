import { getData } from "@/actions/actions";
import { Params } from "@/types/types";

export default async function DataId({
  params: { id },
}: Params): Promise<JSX.Element> {
  const data = await getData(id);
  return <h1>{data.name}</h1>;
}
