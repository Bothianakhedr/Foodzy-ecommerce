import { PencilIcon, TrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CategoriesColumnsType } from "@/admin-dashboard/features/categories/components/categoryColumns";
import type { BannersColumnsType } from "@/admin-dashboard/features/banners/types";

 export type DropdownActionsType = {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  data: BannersColumnsType | CategoriesColumnsType;
};
export function DropdownActions({
  onEdit,
  data,
  onDelete,
}: DropdownActionsType) {

  
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline">:</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onEdit(data._id)}>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => onDelete(data._id)}
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
