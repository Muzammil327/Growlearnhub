"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/elements/Icon";

export default function DarkLightModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();

  // State to check if the component has mounted (client-side only)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure that the theme-dependent content is only rendered client-side
  }, []);

  // Return null if not mounted yet to avoid hydration error
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant={"destructive"}
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
