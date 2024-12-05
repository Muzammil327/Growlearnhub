"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar/page";
import { DynamicBreadcrumb } from "@/src/components/elements/Breadcrumb";

interface Iprops {
  children: React.ReactNode;
  userRole: string;
  userEmail: string;
  userUsername: string;
}

export default function DashboardLayout({
  children,
  userRole,
  userEmail,
  userUsername,
}: Iprops) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const pathname = usePathname();

  // Explicitly define the type of the ref as HTMLDivElement | null
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true); // Open sidebar on larger screens
      } else {
        setIsSidebarOpen(false); // Keep sidebar closed on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const sidebarWidth = isSidebarCollapsed ? "w-16" : "w-64";

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <div className="min-h-screen w-full bg-background transition-colors duration-300">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebarCollapse={toggleSidebarCollapse}
        isActive={isActive}
        sidebarWidth={sidebarWidth}
        sidebarRef={sidebarRef}
        sidebarVariants={sidebarVariants}
        toggleSidebarClose={toggleSidebarClose}
        userRole={userRole}
        userEmail={userEmail}
        userUsername={userUsername}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className={`mt-8 px-4 transition-all duration-300 md:pt-12 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-16"}`}
      >
        <DynamicBreadcrumb />
        {children}
      </div>
    </div>
  );
}
