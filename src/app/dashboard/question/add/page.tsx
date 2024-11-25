import React from "react";
import DashboardQuestionAddPage from "./_components/DashboardQuestionAddPage";
import { redirect } from "next/navigation";
import { getSession } from "@/src/lib/getSession";

export default async function page() {
  const { session, userId } = await getSession();
  if (!session) redirect("/login");
  return <DashboardQuestionAddPage userId={userId} />;
}
