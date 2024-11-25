import { Skeleton } from "@/src/components/ui/skeleton";

interface SkeletonTableWrapperProps {
  columns: string[]; // An array of column names or labels
  rowCount: number; // Number of rows to display
}

const SkeletonTableWrapper = ({
  columns,
  rowCount,
}: SkeletonTableWrapperProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2">
                <Skeleton className="h-6 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rowCount)].map((_, index) => (
            <tr key={index} className="border-b bg-gray-100">
              {columns.map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  <Skeleton className="h-6 w-24" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTableWrapper;
