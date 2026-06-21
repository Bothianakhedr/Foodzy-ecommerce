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
import type { BannersColumnsType } from "@/admin-dashboard/features/banners/components/BannerColumns";

 export type DropdownActionsType = {
  onDelete: (id: string) => void;
  onEdit: (bannerId: string) => void;
  banner: BannersColumnsType;
};
export function DropdownActions({
  onEdit,
  banner,
  onDelete,
}: DropdownActionsType) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline">:</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onEdit(banner._id)}>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => onDelete(banner._id)}
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
