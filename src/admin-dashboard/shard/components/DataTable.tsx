import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaginationIconsOnly } from "./Pagination";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title?: string;
  description?: string;
  searchKey: string;
  buttonText?: string;
  setIsModalOpen: (isOpen: boolean) => void;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  description,
  buttonText,
  searchKey,
  setIsModalOpen,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <section>
      {/* ############Header */}
      <div className="header flex items-center justify-between mt-5">
        <div>
          <h2 className="text-2xl font-bold"> {title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <div className=" text-sm text-white bg-red-500 rounded-md p-2">
              ({table.getFilteredSelectedRowModel().rows.length}) items selected
            </div>
          )}
          <Button
            className="p-4 h-10 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {buttonText}
          </Button>
        </div>
      </div>
      {/* ###########filter */}
      <div className=" bg-gray-50 my-5 rounded-md p-5">
        <div className="relative">
          <Search className="text-gray-200 w-5 absolute left-2 top-1 " />
          <Input
            placeholder="Search ..."
            className="max-w-sm ps-8 "
            value={
              (table.getColumn(searchKey)?.getFilterValue() as string) ?? ""
            }
            onChange={(e) => {
              table.getColumn(searchKey)?.setFilterValue(e.target.value);
            }}
          />
        </div>

        <div className="flex mt-4 items-center gap-2">
          <Button
            onClick={() => table.getColumn("title")?.setFilterValue("")}
            className="cursor-pointer"
          >
            Reset
          </Button>
        </div>
      </div>
      {/*    ########  table */}
      <div className="overflow-hidden rounded-md border ">
        <Table>
          <TableHeader className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* ######## pagination */}
        {table.getFilteredRowModel().rows.length > 5 && (
          <PaginationIconsOnly table={table} />
        )}{" "}
      </div>
    </section>
  );
}
