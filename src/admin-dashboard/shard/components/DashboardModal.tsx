import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";

import type { ReactNode } from "react";

type DashboardModalType = {
  title: string;
  description?: string;
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
};
export function DashboardModal({
  title,
  children,
  isModalOpen,
  setIsModalOpen,
}: DashboardModalType) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <FieldGroup>{children}</FieldGroup>
      </DialogContent>
    </Dialog>
  );
}
