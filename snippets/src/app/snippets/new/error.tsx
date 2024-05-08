"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function CreateSnippetErrorPage(props: Props) {
  return <div>{props.error.message}</div>;
}
