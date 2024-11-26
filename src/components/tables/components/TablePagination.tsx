import React from "react";
import { Button } from "../../ui/Button";
import { Table } from "@tanstack/react-table";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@/src/components/elements/Icon";

// Define the PaginationProps type with a generic type <T>
interface PaginationProps<T> {
  table: Table<T>; // Use the correct type for the table instance
  totalPages: number; // Total number of pages, passed from API
  page: number; // Current page index, passed from API
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function TablePagination<T>({
  table,
  totalPages,
  setPage,
  page,
}: PaginationProps<T>) {
  console.log("totalPages:", totalPages);
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      {/* Selected row count */}
      <div className="text-muted_foreground flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      {/* Pagination buttons */}
      <div className="space-x-2">
        <Button
          size="icon"
          onClick={() => setPage(page - 1)}
          disabled={page === 1} // Disable the button if we're on the first page
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          onClick={() => {
            // Go to the next page if there is one
            if (page < totalPages) {
              setPage(page + 1); // Go to the next page
            }
          }}
          disabled={page >= totalPages} // Disable the button if we're on the last page
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
