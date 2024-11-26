import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ui/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Home,
  BookOpen,
  Video,
  Book,
  FileText,
} from "@/src/components/elements/Icon";
import DarkLightModeButton from "@/components/elements/DarkLightModeButton";
import SocialLinks from "./socialLinks";
import SidebarUserProfile from "./SidebarUserProfile";
import { signOut } from "next-auth/react";
import HeaderUserProfile from "./HeaderUserProfile";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleSidebarClose: () => void;
  isSidebarCollapsed: boolean;
  toggleSidebarCollapse: () => void;
  isActive: (path: string) => boolean;
  sidebarWidth: string;
  sidebarRef: React.RefObject<HTMLDivElement>;
  sidebarVariants: any;
  userRole: string;
  userEmail: string;
  userUsername: string;
  setIsSidebarOpen: (value: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebarClose,
  toggleSidebar,
  isSidebarCollapsed,
  toggleSidebarCollapse,
  isActive,
  sidebarWidth,
  sidebarRef,
  sidebarVariants,
  userRole,
  userEmail,
  userUsername,
  setIsSidebarOpen
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const logout = () => {
    signOut({ callbackUrl: process.env.NEXTAUTH_URL });
  };

  return (
    <React.Fragment>
      <header
        className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b bg-background px-4 transition-colors duration-300 lg:px-6"
        ref={sidebarRef}
      >
        <div className="flex items-center gap-4">
          {isSidebarOpen ? (
            <Button
              size="icon"
              variant={"destructive"}
              className="lg:hidden"
              onClick={toggleSidebarClose}
            >
              <X className="h-6 w-6" />
            </Button>
          ) : (
            <Button size="icon" className="lg:hidden" variant={"destructive"}
              onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="#"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span
                    className={`${isSidebarCollapsed ? "lg:hidden" : ""} text-foreground transition-colors duration-300`}
                  >
                    EduPlatform
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>EduPlatform - Learn Anywhere, Anytime</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-4">
          <DarkLightModeButton />
          <HeaderUserProfile
            userUsername={userUsername}
            userEmail={userEmail}
            logout={logout}
          />
        </div>
      </header>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
      <motion.div
        className={`fixed inset-y-0 left-0 z-40 ${sidebarWidth} border-r bg-background transition-all duration-300 ease-in-out lg:translate-x-0`}
        variants={sidebarVariants}
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <span className="text-lg font-semibold text-foreground transition-colors duration-300">
              Navigation
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={toggleSidebarCollapse}
            >
              <ChevronRight
                className={`h-4 w-4 transition-transform ${isSidebarCollapsed ? "" : "rotate-180"}`}
              />
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="space-y-4 py-4">
              {data.map((section, index) => (
                <div key={index} className="px-3 py-2">
                  {/* Section Heading */}
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-destructive transition-colors duration-300">
                    {section.heading}
                  </h2>

                  <div className="md:block hidden">
                    <Desktop
                      section={section}
                      activeDropdown={activeDropdown}
                      isSidebarCollapsed={isSidebarCollapsed}
                      isActive={isActive}
                      setActiveDropdown={setActiveDropdown}
                    />
                  </div>
                  <div className="md:hidden block">
                    <Mobile
                      section={section}
                      activeDropdown={activeDropdown}
                      isSidebarCollapsed={isSidebarCollapsed}
                      isActive={isActive}
                      setIsSidebarOpen={setIsSidebarOpen}
                      setActiveDropdown={setActiveDropdown}
                    />
                  </div>

                </div>
              ))}
            </div>
          </ScrollArea>

          <SidebarUserProfile
            userUsername={userUsername}
            userRole={userRole}
            isSidebarCollapsed={isSidebarCollapsed}
            logout={logout}
          />
          <SocialLinks />
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Sidebar;

type SubmenuItem = {
  label: string;
  path: string;
};

type Section = {
  subheading: Array<{
    label: string;
    icon?: ReactNode;
    submenu?: SubmenuItem[];
    path: string;
  }>;
};

const Desktop = ({
  section,
  activeDropdown,
  isSidebarCollapsed,
  setActiveDropdown,
  isActive,
}: {
  section: Section;
  activeDropdown: number | null;
  isSidebarCollapsed: boolean;
  isActive: (path: string) => boolean;
  setActiveDropdown: (index: number | null) => void;
}) => {
  return (
    <div className="space-y-1">
      {/* Subheadings */}
      {section.subheading.map((item, subIndex) => (
        <div key={subIndex}>
          {item.submenu ? (
            <Collapsible
              open={activeDropdown === subIndex}
              onOpenChange={(open) => {
                setActiveDropdown(open ? subIndex : null);
              }}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-between transition-colors duration-300 ${activeDropdown === subIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"}`}
                >
                  <div className="flex items-center">
                    {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                    {!isSidebarCollapsed && <span>{item.label}</span>}
                  </div>
                  {!isSidebarCollapsed && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform text-destructive ${activeDropdown === subIndex ? "rotate-180" : ""}`}
                    />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 border-l pl-6 mt-2">
                {item.submenu.map((subItem, subSubIndex) => (
                  <TooltipProvider key={subSubIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start ${isActive(subItem.path) ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"} transition-colors duration-300`}
                          asChild
                        >
                          <Link href={subItem.path}>
                            {!isSidebarCollapsed && <span>{subItem.label}</span>}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      {isSidebarCollapsed && (
                        <TooltipContent side="right">
                          {subItem.label}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            // Regular Link (no submenu)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    // onClick={() => setIsSidebarOpen(false)}
                    variant="ghost"
                    className={`w-full justify-start ${isActive(item.path) ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"} transition-colors duration-300`}
                    asChild
                  >
                    <Link href={item.path}>
                      {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                      {!isSidebarCollapsed && <span>{item.label}</span>}
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isSidebarCollapsed && (
                  <TooltipContent side="right">
                    {item.label}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      ))}
    </div>
  );
};

const Mobile = ({
  section,
  activeDropdown,
  isSidebarCollapsed,
  setActiveDropdown,
  isActive,
  setIsSidebarOpen
}: {
  section: Section;
  activeDropdown: number | null;
  isSidebarCollapsed: boolean;
  isActive: (path: string) => boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  setActiveDropdown: (index: number | null) => void;
}) => {
  return (
    <div className="space-y-1">
      {/* Subheadings */}
      {section.subheading.map((item, subIndex) => (
        <div key={subIndex}>
          {item.submenu ? (
            <Collapsible
              open={activeDropdown === subIndex}
              onOpenChange={(open) => {
                setActiveDropdown(open ? subIndex : null);
              }}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-between transition-colors duration-300 ${activeDropdown === subIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"}`}
                >
                  <div className="flex items-center">
                    {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                    {!isSidebarCollapsed && <span>{item.label}</span>}
                  </div>
                  {!isSidebarCollapsed && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform text-destructive ${activeDropdown === subIndex ? "rotate-180" : ""}`}
                    />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 border-l pl-6 mt-2">
                {item.submenu.map((subItem, subSubIndex) => (
                  <TooltipProvider key={subSubIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={() => setIsSidebarOpen(false)}
                          className={`w-full justify-start ${isActive(subItem.path) ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"} transition-colors duration-300`}
                          asChild
                        >
                          <Link href={subItem.path}>
                            {!isSidebarCollapsed && <span>{subItem.label}</span>}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      {isSidebarCollapsed && (
                        <TooltipContent side="right">
                          {subItem.label}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            // Regular Link (no submenu)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsSidebarOpen(false)}
                    variant="ghost"
                    className={`w-full justify-start ${isActive(item.path) ? "bg-accent text-accent-foreground" : "hover:bg-accent/90"} transition-colors duration-300`}
                    asChild
                  >
                    <Link href={item.path}>
                      {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                      {!isSidebarCollapsed && <span>{item.label}</span>}
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isSidebarCollapsed && (
                  <TooltipContent side="right">
                    {item.label}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      ))}
    </div>
  );
};


const data = [
  {
    heading: "Dashboard",
    subheading: [
      {
        label: "Overview",
        path: "/dashboard",
        icon: <Home />,
      },
    ],
  },
  {
    heading: "Learning",
    subheading: [
      {
        label: "Classes",
        path: "/classes",
        icon: <Video />,
      },
      {
        label: "Questions",
        path: "/question",
        icon: <Book />,
        submenu: [
          {
            label: "Add",
            path: "/dashboard/question/add",
          },
          {
            label: "View All",
            path: "/dashboard/question",
          },
        ],
      },
    ],
  },
  {
    heading: "Resources",
    subheading: [
      {
        label: "E-Books",
        path: "/resources/ebooks",
        icon: <FileText />,
        submenu: [
          {
            label: "Add",
            path: "/question/add",
          },
          {
            label: "View All",
            path: "/question",
          },
        ],
      },
      {
        label: "Video Tutorials",
        path: "/resources/videos",
        icon: <Video />,
      },
    ],
  },
];
