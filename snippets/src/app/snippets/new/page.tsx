import SnippetForm from "@/components/SnippetForm";
import * as actions from "@/actions";

export default function NewSnippetPage() {
  return (
    <div>
      <h1 className="my-3 text-2xl">Create a Snippet</h1>
      <SnippetForm action={actions.createSnippet} />
    </div>
  );
}
