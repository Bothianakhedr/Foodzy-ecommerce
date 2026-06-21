import { columns, type Categories } from "../components/categoryColumns";
import { DataTable } from "../../../shard/components/DataTable";
import { useState } from "react";
import { DashboardModal } from "@/admin-dashboard/shard/components/DashboardModal";
import { CategoryForm } from "../components/CategoryForm";
import AlertDialogPopUp from "@/admin-dashboard/shard/components/AlertDialogPopUp";

export function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onEdit = () => {
    setIsModalOpen(true);
  };
  const onDelete = () => {
    console.log("deleted");
    setIsAlertOpen(true);
  };
  const confirmDelete = () => {
    console.log("deleted confirmation");
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable
        buttonText="Add New Category"
        searchKey="name"
        title="Popular Category"
        columns={columns(onEdit, onDelete)}
        data={[]}
        setIsModalOpen={setIsModalOpen}
      />
      {/* Modal */}
      <DashboardModal
        title="Add New Category"
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      >
        <CategoryForm />
      </DashboardModal>
      {/* alert dialog */}
      <AlertDialogPopUp
        confirmDelete={confirmDelete}
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
    </div>
  );
}
