import React from "react";
import { Input } from "../../ui/input";

// Define a generic type for the table
type TableFilterProps<T extends string | number> = {
  table: {
    getColumn: (column: string) =>
      | {
          getFilterValue: () => T | undefined;
          setFilterValue: (value: T) => void;
        }
      | undefined; // The return type of getColumn can be `undefined`
  };
  column: string; // Dynamic column for filtering
  placeholder: string; // Dynamic placeholder text
};

export default function TableFilter<T extends string | number>({
  table,
  column,
  placeholder,
}: TableFilterProps<T>) {
  // Get the column object from the table, ensuring it's not undefined
  const columnDef = table.getColumn(column);

  // If the column is not found, return null or some fallback component
  if (!columnDef) {
    return <div>Column not found</div>; // Or return nothing if preferred
  }

  // Fallback for getFilterValue() if it returns undefined
  const filterValue = columnDef.getFilterValue() ?? "";

  return (
    <Input
      placeholder={placeholder}
      value={filterValue} // Default to empty string if undefined
      onChange={
        (event) => columnDef.setFilterValue(event.target.value as T) // Set the value correctly
      }
      className="max-w-sm"
    />
  );
}
