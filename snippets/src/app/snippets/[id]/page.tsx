import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";

export interface Props {
  params: {
    id: string;
  };
}

export default async function ShowSnippetPage(props: Props) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            className="p-2 border rounded w-20 text-center"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <Link
            className="p-2 border rounded w-20 text-center"
            href={`/snippets/${snippet.id}/delete`}
          >
            Delete
          </Link>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-300 mt-4">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: String(snippet.id),
    };
  });
}
