import React from "react";
import {
    ColumnDef,
    useReactTable,
    getPaginationRowModel,
    getCoreRowModel,
} from "@tanstack/react-table";
import TableLayout from "./TableLayout";
import TablePagination from "./TablePagination";

// Define a generic DataTableProps
interface DataTableProps<T> {
    data: T[]; // Data passed to the table
    columns: ColumnDef<T>[]; // Columns definition
    filterColumn: string; // Column to filter
    filterColumnPlaceholder: string; // Placeholder text for the filter
    pageCount: number; // Total pages for pagination
    page: number; // Current page state
    loading: boolean;
    setPage: React.Dispatch<React.SetStateAction<number>>; // Setter function for updating page
}

export function DataTable<T>({
    data,
    columns,
    // filterColumn,
    // filterColumnPlaceholder,
    pageCount,
    page,
    loading,
    setPage,
}: DataTableProps<T>) {
    // Define table instance with proper typing
    const table = useReactTable({
        data,
        columns,
        pageCount,
        manualPagination: true, // Use manual pagination (since you're passing `pageCount`)
        getCoreRowModel: getCoreRowModel(), // Required: Add the core row model
        getPaginationRowModel: getPaginationRowModel(), // Add pagination row model if necessary
    });

    return (
        <div className="w-full">
            {/* <div className="flex items-center py-4">
                <TableFilter table={table} column={filterColumn} placeholder={filterColumnPlaceholder} />
            </div> */}
            <div className="min-w-full overflow-x-auto rounded-md border">
                {/* TableLayout component also needs table typing */}
                <TableLayout table={table} loading={loading} />
            </div>
            {/* Pass the table to TablePagination */}
            <TablePagination
                table={table}
                totalPages={pageCount}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}
