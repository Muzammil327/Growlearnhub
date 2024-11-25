import Link from "next/link";
import React from "react";
import { FaGraduationCap } from "@/components/elements/Icon";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <FaGraduationCap className="h-6 w-6 text-destructive" />
      <span className="font-bold">Growlearnhub</span>
    </Link>
  );
}
