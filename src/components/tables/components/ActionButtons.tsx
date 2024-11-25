import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Edit, X } from "@/src/components/elements/Icon";

interface ActionButtonsProps {
  slug: string;
  id: number;
  handleDelete: (id: number) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  slug,
  id,
  handleDelete,
}) => {
  return (
    <div className="flex gap-2">
      <Button size={"icon"} asChild>
        <Link href={`${slug}/${id}`}>
          <Edit />
        </Link>
      </Button>
      <Button
        size={"icon"}
        onClick={() => handleDelete(id)}
        className="border-red-500 bg-red-500 hover:bg-red-700 dark:text-white"
      >
        <X />
      </Button>
    </div>
  );
};

export default ActionButtons;
