import { getSession } from "@/src/lib/getSession";
import { redirect } from "next/navigation";
import DashboardLayout from "./layout";

export default async function DashboardLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userRole, userEmail, userUsername, session } = await getSession();
  if (!session) redirect("/login");

  return (
    <DashboardLayout
      userRole={userRole}
      userEmail={userEmail}
      userUsername={userUsername}
    >
      {children}
    </DashboardLayout>
  );
}
