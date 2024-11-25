import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { flexRender, Table as TanstackTable } from "@tanstack/react-table";
import { Skeleton } from "@/src/components/ui/skeleton"; // Import Skeleton component for loading state

interface TableLayoutProps<T> {
  table: TanstackTable<T>; // Type the table prop correctly using the `TanstackTable` type from `@tanstack/react-table`
  loading: boolean; // Add loading prop
}

export default function TableLayout<T>({
  table,
  loading,
}: TableLayoutProps<T>) {
  return (
    <Table className="">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {loading ? (
          // If loading, display skeleton loaders for rows and cells
          [...Array(5)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {table.getAllColumns().map((column, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="h-6 w-24" />
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : table.getRowModel().rows.length > 0 ? (
          // If data is available, display the rows
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          // If no rows are available, show a "No results" message
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
