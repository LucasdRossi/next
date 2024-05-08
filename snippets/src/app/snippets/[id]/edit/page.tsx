import { db } from "@/db";
import type { Props as CreateSnippetProps } from "../page";
import { notFound } from "next/navigation";
import SnippetForm from "@/components/SnippetForm";
import * as actions from "@/actions";

interface Props extends CreateSnippetProps {}

export default async function EditSnippetPage(props: Props) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetForm
        snippet={snippet}
        action={actions.editSnippet.bind(null, id)}
      />
    </div>
  );
}
