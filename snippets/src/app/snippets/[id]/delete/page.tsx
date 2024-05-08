"use client";

import { startTransition } from "react";
import type { Props as CreateSnippetProps } from "../page";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

interface Props extends CreateSnippetProps {}

export default function DeleteSnippetPage(props: Props) {
  const handleConfirm = async () => {
    startTransition(async () => {
      await actions.deleteSnippet(parseInt(props.params.id));

      redirect("/");
    });
  };

  return (
    <div>
      <h1 className="text-2xl">
        Are you shure you want to delete this snippet?
      </h1>
      <div className="flex justify-start gap-2 mt-2">
        <Link
          href={`/snippets/${props.params.id}`}
          className="border rounded p-1 w-14 flex justify-center text-center"
        >
          No
        </Link>
        <button onClick={handleConfirm} className="rounded p-1 bg-red-200 w-14">
          Yes
        </button>
      </div>
    </div>
  );
}
