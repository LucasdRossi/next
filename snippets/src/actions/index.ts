"use server";

import { db } from "@/db";
import { Snippet } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type FormState = { message: string };

export async function editSnippet(
  id: number,
  code: string,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  let snippet: Snippet;
  try {
    const title = formData.get("title");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "Code must be longer",
      };
    }

    snippet = await db.snippet.update({
      data: {
        code,
        title,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }

  revalidatePath("/");
  revalidatePath(`/snippets/${snippet.id}`);
  redirect(`/snippets/${snippet.id}`);
}

export async function createSnippet(
  code: string,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  let snippet: Snippet;
  try {
    const title = formData.get("title");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "Code must be longer",
      };
    }

    snippet = await db.snippet.create({
      data: {
        code,
        title,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }

  revalidatePath("/");
  redirect(`/snippets/${snippet.id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  redirect("/");
}
