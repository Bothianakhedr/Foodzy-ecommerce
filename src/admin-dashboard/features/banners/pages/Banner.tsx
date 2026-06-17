import { DataTable } from "@/admin-dashboard/shard/components/DataTable";
import { BannersColumns } from "../components/BannerColumns";
import { useState } from "react";
import { DashboardModal } from "@/admin-dashboard/shard/components/DashboardModal";
import {BannerForm} from "../components/BannerForm";

export function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto py-8">
        <DataTable
          data={[]}
          columns={BannersColumns}
          searchKey="title"
          buttonText="Add New Banner"
          title="Banners"
          setIsModalOpen={setIsModalOpen}
        />
      </div>

      <DashboardModal
        title="Add New Banner"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <BannerForm />
      </DashboardModal>
    </>
  );
}
