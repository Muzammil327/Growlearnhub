"use client";

import React, { useState } from "react";
import ActionButtons from "@/src/components/tables/components/ActionButtons";
import { DataTable } from "@/src/components/tables/components/DataTable";
import { ColumnDef, Row } from "@tanstack/react-table";
import { useDeleteItem, usePaginationGetItems } from "@/src/hooks/useQuestion";
import { Question } from "@/src/types/question";
import { toast } from "@/src/hooks/use-toast";
import { formatDate } from "@/src/lib/dateFnsUtils";
 
const ActionsCell: React.FC<{ itemId: number }> = ({ itemId }) => {
  const { mutate, isError, isSuccess, error } = useDeleteItem(itemId);

  if (isSuccess) {
    toast({
      title: "Success",
      description: "You have successfully deleted!",
      variant: "default",
    });
  }

  if (isError && error instanceof Error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "default",
    });
  }

  const handleDelete = async () => {
    try {
      await mutate();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  return (
    <ActionButtons
      slug="/dashboard/question"
      id={itemId}
      handleDelete={handleDelete}
    />
  );
};

const dynamicColumns: ColumnDef<Question>[] = [
  {
    accessorKey: "id",
    header: "#Id",
    cell: ({ row }: { row: Row<Question> }) => (
      <div className="w-12 capitalize">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }: { row: Row<Question> }) => (
      <div className="w-auto capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }: { row: Row<Question> }) => (
      <div className="w-80 lowercase">
        {formatDate(row.getValue("created_at") as string)}
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: Row<Question> }) => {
      const itemId = row.getValue("id") as number;
      return <ActionsCell itemId={itemId} />;
    },
  },
];

export default function GetQuestionTable() {
  const [page, setPage] = useState(1);
  const {
    data,
    error: ErrorGetQuestion,
    isLoading: LoadingGetQuestion,
  } = usePaginationGetItems(page, 10);

  if (ErrorGetQuestion instanceof Error)
    return <div>Error: {ErrorGetQuestion.message}</div>;

  return (
    <DataTable
      data={data?.data || []}
      columns={dynamicColumns}
      filterColumn="name"
      filterColumnPlaceholder="Enter Your Name"
      pageCount={data?.totalPages || 0}
      page={page}
      setPage={setPage}
      loading={LoadingGetQuestion}
    />
  );
}
