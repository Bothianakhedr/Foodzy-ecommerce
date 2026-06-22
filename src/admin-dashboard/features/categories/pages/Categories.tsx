import { DataTable } from "@/admin-dashboard/shard/components/DataTable";
import { CategoryColumns } from "../components/categoryColumns";
import { useState } from "react";
import { DashboardModal } from "@/admin-dashboard/shard/components/DashboardModal";
import { CategoryForm } from "../components/CategoryForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getAllCategories, getCategory } from "../services";
import { PageSkeleton } from "@/admin-dashboard/shard/components/TableSkeleton";
import { toast } from "react-toastify";
import AlertDialogPopUp from "@/admin-dashboard/shard/components/AlertDialogPopUp";

export function Categories() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const queryClient = useQueryClient();

  // * start to edit
  const onEdit = async (id: string) => {
    setIsEditModalOpen(true);

    const data = await getCategory(id);
    const category = data.data.data;
    setSelectedCategory(category);
  };

  // ! start  delete process
  const onDelete = (id: string) => {
    setIsAlertOpen(true);
    setSelectedId(id);
  };
  const deleteMutation = useMutation({
    mutationFn: () => deleteCategory(selectedId),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({
        queryKey: ["allCategories"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const confirmDelete = () => {
    deleteMutation.mutate();
  };
  // ! end delete process

  // ^ get all categories
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAllCategories(),
  });
  if (isLoading) return <PageSkeleton />;
  if (isError) toast.error(error.message);
  return (
    <section>
      <DataTable
        data={data?.data.data || []}
        buttonText="Add New Category"
        columns={CategoryColumns(onDelete, onEdit)}
        title="Popular Categories"
        searchKey="name"
        setIsModalOpen={setIsAddModalOpen}
      />
      {/* Add Category */}
      <DashboardModal
        title="Add Category"
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
      >
        <CategoryForm  setIsModalOpen={setIsAddModalOpen} />
      </DashboardModal>

      <DashboardModal
        title="Edit Category"
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
      >
        <CategoryForm
          setIsModalOpen={setIsEditModalOpen}
          selectedCategory={selectedCategory ?? undefined}
        ></CategoryForm>
      </DashboardModal>

      {/* Alert modal */}

      <AlertDialogPopUp
        confirmDelete={confirmDelete}
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      ></AlertDialogPopUp>
    </section>
  );
}
