"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps extends ButtonProps {}

export default function FormButton(props: FormButtonProps) {
  const { pending } = useFormStatus();

  return <Button {...props} type="submit" isLoading={pending} />;
}
