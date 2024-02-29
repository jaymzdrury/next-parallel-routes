interface Data {
  name: string;
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error();
  const data = await res.json();
  return data;
}

export default async function DataId({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Data = await getData(id);
  return <h1>{data.name}</h1>;
}
