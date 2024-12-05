import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";

export default function MobileNavButtonGroup() {
  return (
    <div className="my-4 flex flex-col items-center gap-3 px-4 text-sm font-medium lg:flex-row">
      <Button
        className="my-3 w-full rounded-md duration-300 ease-in"
        title="Sign In"
        variant={"destructive"}
        asChild
      >
        <Link href="/login">Sign In</Link>
      </Button>
      <Button
        className="w-full rounded-md duration-300 ease-in"
        title="Register"
        variant={"destructive"}
        asChild
      >
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
}
