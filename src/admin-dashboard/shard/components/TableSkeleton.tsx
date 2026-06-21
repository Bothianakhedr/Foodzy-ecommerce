import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PageSkeleton() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-40" />

        <Skeleton className="h-10 w-36 rounded-md" />
      </div>

      {/* Search & Filters */}
      <div className="rounded-lg border p-4 space-y-4">
        <Skeleton className="h-10 w-96" />

        <Skeleton className="h-10 w-20 rounded-md" />
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Skeleton className="h-4 w-4" />
              </TableHead>

              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>

              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>

              <TableHead>
                <Skeleton className="h-4 w-20" />
              </TableHead>

              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>

              <TableHead>
                <Skeleton className="h-4 w-20" />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-10 w-16 rounded-md" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-6 w-24 rounded-full" />
                </TableCell>

                <TableCell>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </TableCell>

                <TableCell>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20 rounded-md" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}