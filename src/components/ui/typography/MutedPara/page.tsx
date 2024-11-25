import React from "react";
import { cn } from "@/src/lib/utils";

export default function MutedPara({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p style={{
      lineHeight: "2"
    }}
      className={cn("text-base text-muted-foreground py-2 tracking-wide", className)}
    >{children}</p>
  );
}
