import React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <table
      className={`min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </table>
  );
};

export const TableHead = ({ children, className }: TableProps) => {
  return <thead className={`bg-gray-200 ${className}`}>{children}</thead>;
};

export const TableBody = ({ children, className }: TableProps) => {
  return <tbody className={`${className}`}>{children}</tbody>;
};

export const TableRow = ({ children, className }: TableProps) => {
  return (
    <tr className={`${className} hover:bg-gray-50 transition-colors`}>
      {children}
    </tr>
  );
};

export const TableHeader = ({ children, className }: TableProps) => {
  return (
    <th
      className={`py-3 px-6 text-left font-semibold text-gray-600 uppercase tracking-wider ${className}`}
    >
      {children}
    </th>
  );
};

export const TableData = ({ children, className }: TableProps) => {
  return (
    <td className={`py-3 px-6 border-t text-gray-800 ${className}`}>
      {children}
    </td>
  );
};
