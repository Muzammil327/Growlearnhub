import { getSession } from "@/src/lib/getSession";
import { redirect } from "next/navigation";
import Dashboard from "./Dashboard";

export default async function DashboardPage() {
    const { userRole, userId, userEmail, userUsername, session } =
        await getSession();
    if (!session) redirect("/login");
    return (
        <Dashboard
            userRole={userRole}
            userId={userId ?? -1}
            userEmail={userEmail}
            userUsername={userUsername}
        />
    );
}
