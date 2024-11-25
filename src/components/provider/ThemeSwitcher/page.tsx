"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const ThemeSwitcher = ({ children }: Props) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme="light" // Set default theme to light
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
