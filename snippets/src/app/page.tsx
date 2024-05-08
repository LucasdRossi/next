import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Snippets</h1>
        <Link href="/snippets/new" className="rounded p-2 bg-blue-200 font-bold">
          New
        </Link>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        {snippets.map((snippet) => (
          <li
            key={snippet.id}
            className="border rounded flex justify-between p-2"
          >
            <div className="">{snippet.title}</div>
            <Link href={`/snippets/${snippet.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
