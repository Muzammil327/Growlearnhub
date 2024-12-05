import React from "react";
import GetQuestionTable from "@/src/components/tables/GetQuestionTable";
import { redirect } from "next/navigation";
import { getSession } from "@/src/lib/getSession";

export default async function page() {
  const { session } = await getSession();
  if (!session) redirect("/login");
  return <GetQuestionTable />;
}
