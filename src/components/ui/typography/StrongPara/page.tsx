import React from "react";
import { cn } from "@/src/lib/utils";

export default function StrongPara({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <strong className={cn("font-bold text-primary", className)}>
      {children}
    </strong>
  );
}
