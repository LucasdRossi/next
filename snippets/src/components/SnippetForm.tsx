"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useFormState } from "react-dom";
import type { FormState } from "@/actions";

interface Props {
  snippet?: Snippet;
  action: (
    code: string,
    formState: FormState,
    formData: FormData
  ) => FormState | Promise<FormState>;
}

export default function SnippetForm(props: Props) {
  const [code, setCode] = useState(props.snippet?.code ?? "");

  const bindedAction = props.action?.bind(null, code);

  const [formState, action] = useFormState<FormState, FormData>(bindedAction, {
    message: "",
  });

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <form className="flex flex-col gap-4" action={action}>
      <div className="flex gap-2">
        <label htmlFor="title" className="w-12">
          Title
        </label>
        <input
          defaultValue={props.snippet?.title}
          id="title"
          name="title"
          type="text"
          required
          className="border rounded w-full"
        />
      </div>

      <div className="flex gap-2">
        <label className="w-12">Code</label>
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={props.snippet?.code}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={handleEditorChange}
        />
      </div>

      {formState.message && (
        <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
          {formState.message}
        </div>
      )}

      <button
        type="submit"
        className="rounded p-1 bg-blue-200 w-1/3 self-end font-bold"
      >
        Save
      </button>
    </form>
  );
}
