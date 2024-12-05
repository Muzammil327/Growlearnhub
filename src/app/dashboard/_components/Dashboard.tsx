"use client";

import { ArrowRight, Home, Users } from "@/components/elements/Icon";
import Link from "next/link";
import React from "react";
import StatCard from "../../../components/card/StatCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetDashboard } from "@/src/hooks/use-dashboard";
import { format } from "date-fns";
import { Session } from "@/src/types/ApiResponse";
import { SitemapUrl } from "../../sitemap";

export default function Dashboard({ userRole, userId, userUsername }: Session) {
  const { data, isLoading, isError } = useGetDashboard(userId);
  const currentDate = format(new Date(), "EEEE, d MMMM yyyy");

  const skeletonCards = Array.from({ length: 8 }).map((_, index) => (
    <div key={index}>
      <Skeleton className="h-16 w-full rounded-md bg-gray-100 dark:bg-slate-900" />
    </div>
  ));

  return (
    <main className="container mx-auto py-4 md:px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold capitalize tracking-tight">
          Welcome {userUsername}
        </h1>
        <p className="text-muted-foreground">It&apos;s {currentDate}</p>
      </div>

      {/* Stats Section */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {isLoading ? (
          skeletonCards
        ) : isError ? (
          <p className="text-red-500">Failed to load data.</p>
        ) : (
          <React.Fragment>
            {userRole === "user" ? (
              <React.Fragment>
                <StatCard
                  title={"Total Questions"}
                  count={data?.questions ?? 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StatCard
                  title={"Total Questions Supebase"}
                  count={data?.questions || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Questions Owned"}
                  count={data?.countown ?? 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Other Page"}
                  count={SitemapUrl.length ?? 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Sitemap"}
                  count={
                    (SitemapUrl.length || 0) +
                    (data?.questions || 0) +
                    (data?.countown || 0)
                  }
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Users"}
                  count={data?.users || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Books"}
                  count={data?.books || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Class"}
                  count={data?.classes || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Chapter"}
                  count={data?.chapters || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Heading"}
                  count={data?.headings || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
                <StatCard
                  title={"Total Sub Heading"}
                  count={data?.subheadings || 0}
                  icon={<Users className="h-6 w-6 text-white" />}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </main>
  );
}
