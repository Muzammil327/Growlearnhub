import AuthProvider from "@/components/provider/AuthProvider/page";
import QueryProvider from "@/components/provider/QueryProvider/page";
import ThemeSwitcher from "@/components/provider/ThemeSwitcher/page";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeSwitcher>
      <AuthProvider>
        <QueryProvider>{children}</QueryProvider>{" "}
      </AuthProvider>
    </ThemeSwitcher>
  );
}
