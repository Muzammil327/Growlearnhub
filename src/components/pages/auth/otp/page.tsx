import { redirect } from "next/navigation";
import { OTPForm } from "./OTPForm";
import { getSession } from "@/src/lib/getSession";

export default async function OTPVerificationFormPage() {
  const { userRole, userEmail, userUsername, session } = await getSession();
  if (session) redirect("/dashboard");
  return <OTPForm />;
}
