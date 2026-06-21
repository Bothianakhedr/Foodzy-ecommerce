import { DataTable } from "@/admin-dashboard/shard/components/DataTable";
import { BannersColumns } from "../components/BannerColumns";
import { useState } from "react";
import { DashboardModal } from "@/admin-dashboard/shard/components/DashboardModal";
import { BannerForm } from "../components/BannerForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBanner, getAllBanners, getBanner } from "../services";
import { toast } from "react-toastify";
import { PageSkeleton } from "@/admin-dashboard/shard/components/TableSkeleton";
import AlertDialogPopUp from "@/admin-dashboard/shard/components/AlertDialogPopUp";

export function Banner() {
  const queryClient = useQueryClient();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [bannerInfo, setBannerInfo] = useState(null);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["allBanners"],
    queryFn: getAllBanners,
  });

  const deleteMutate = useMutation({
    mutationFn: deleteBanner,
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      queryClient.invalidateQueries({
        queryKey: ["allBanners"],
      });
    },
    onError: () => {
      toast.error("Failed to delete banner");
    },
  });
  if (isLoading) {
    return <PageSkeleton />;
  }
  if (isError) {
    return toast.error(error.message);
  }
  async function onEdit(bannerId: string) {
    const data = await getBanner(bannerId);
    const banner = data.data.data;
    setBannerInfo(banner);

    setIsEditModalOpen(true);
  }
  async function onDelete(id: string) {
    setIsAlertOpen(true);
    setSelectedId(id);
  }

  function confirmDelete() {
    deleteMutate.mutate(selectedId);
  }

  
  return (
    <>
      <div className="container mx-auto py-8">
        <DataTable
          data={data?.data.data}
          columns={BannersColumns(onDelete, onEdit)}
          searchKey="title"
          buttonText="Add New Banner"
          title="Banners"
          setIsModalOpen={setIsAddModalOpen}
        />
      </div>
      {/* add banner */}
      <DashboardModal
        title="Add New Banner"
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
      >
        <BannerForm setIsModalOpen={setIsAddModalOpen}  />
      </DashboardModal>
      {/* edit banner */}
      <DashboardModal
        title="Edit Banner"
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
      >
        <BannerForm setIsModalOpen={setIsEditModalOpen} bannerInfo={bannerInfo ?? undefined} />
      </DashboardModal>

      <AlertDialogPopUp
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        confirmDelete={confirmDelete}
      ></AlertDialogPopUp>
    </>
  );
}
