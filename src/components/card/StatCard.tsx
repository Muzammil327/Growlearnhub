import { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

interface StatCardProps {
  title: string;
  count: number;
  icon: ReactNode;
}

const StatCard = ({ title, count, icon }: StatCardProps) => {
  return (
    <Card className="relative transition-all hover:bg-opacity-90 dark:bg-[#09090b]">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-destructive p-3">{icon}</div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{count}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
