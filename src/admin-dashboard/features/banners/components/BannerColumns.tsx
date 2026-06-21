"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BannersColumnsType = {
  title: string;
  image: string;
  placement: "home_top" | "home_bottom";
  isActive: boolean | string;
  _id: string;
};

export const BannersColumns = (
  onDelete: (id: string) => void,
  onEdit: (bannerId:string) => void,
): ColumnDef<BannersColumnsType>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} //or getToggleAllPageRowsSelectedHandler
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },

  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      return (
        <div className="w-16 h-10 overflow-hidden rounded-md border bg-muted">
          <img
            src={imageUrl}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="w-3 h-3 text-gray-400 " />
        </Button>
      );
    },
  },

  {
    accessorKey: "placement",
    header: "Placement",
    cell: ({ row }) => {
      const placement = row.getValue("placement") as string;
      return placement === "home_top" ? (
        <Badge className="text-orange-500 bg-orange-100 p-2 rounded-md">
          Home Top
        </Badge>
      ) : (
        <Badge className="text-yellow-500 bg-yellow-100 p-1 rounded-md">
          Home Bottom
        </Badge>
      );
    },
  },

  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("isActive");
      return status ? (
        <Badge className="bg-green-100 text-green-500 rounded-md p-1">
          Active
        </Badge>
      ) : (
        <Badge className="bg-red-100 text-red-500 rounded-md p-1">
          inActive
        </Badge>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const banner = row.original;

      return (
        <div className="flex gap-3 items-center">
          <Button
          onClick={()=>onEdit(banner._id)}
           variant="outline" size="sm">
            update
          </Button>
          <Button
            onClick={() => onDelete(banner._id)}
            variant="destructive"
            size="sm"
          >
            delete
          </Button>
        </div>
      );
    },
  },
];
