import { DropdownActions } from "@/admin-dashboard/shard/components/DropDownActions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import type { CategoriesColumnsType } from "../types";



export const CategoryColumns = (
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
): ColumnDef<CategoriesColumnsType>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "icon",
    cell: ({ row }) => {
      const icon = row.getValue("icon") as string;
      return (
        <div className="w-12 h-10 overflow-hidden border rounded-md bg-muted ">
          <img
            src={icon}
            alt="category"
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="w-3 h-3 text-gray-400 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },

  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownActions onDelete={onDelete} data={category} onEdit={onEdit} />
      );
    },
  },
];
