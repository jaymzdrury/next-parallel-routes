"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  const [num, numSet] = React.useState<number>(1);
  return (
    <main>
      <input
        type="number"
        value={num}
        onChange={(e) => numSet(Number(e.target.value))}
      />
      <Link href={`/${num}`}>Find ID</Link>
    </main>
  );
}
