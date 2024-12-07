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
    <p
      style={{
        lineHeight: "2",
        wordSpacing: "2",
      }}
      className={cn("py-2 text-[18px] text-muted-foreground", className)}
    >
      {children}
    </p>
  );
}
