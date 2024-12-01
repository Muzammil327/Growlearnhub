import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { Edit, Processing, X } from "@/src/components/elements/Icon";

interface ActionButtonsProps {
  slug: string;
  id: number;
  handleDelete: (id: number) => void;
  loading: boolean
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  slug,
  id,
  handleDelete,
  loading,
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
        onClick={() => {
          handleDelete(id);
        }
        }
        className="border-red-500 bg-red-500 hover:bg-red-700 dark:text-white"
        disabled={loading}
      >
        {loading ?
          <Processing /> : <X />
        }
      </Button>
    </div>
  );
};

export default ActionButtons;
