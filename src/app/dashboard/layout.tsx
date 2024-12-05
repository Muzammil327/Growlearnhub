import React from "react";
import DashboardLayoutComponent from "@/src/app/dashboard/_components/page";
import "./style.scss";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}
