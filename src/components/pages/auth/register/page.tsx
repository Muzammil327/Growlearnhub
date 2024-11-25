import RegisterForm from "./RegisterForm";
import { redirect } from "next/navigation";
import { getSession } from "@/src/lib/getSession";

export default async function RegisterFormPage() {
  const { userRole, userEmail, userUsername, session } = await getSession();
  if (session) redirect("/dashboard");

  return <RegisterForm />;
}
