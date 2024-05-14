"use client";

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  }

  if (session.data?.user) {
    return (
      <NavbarItem>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar
              src={session.data.user.image ?? ""}
              className="cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  }

  return (
    <>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
}
