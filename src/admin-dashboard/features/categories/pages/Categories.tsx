import { columns, type Categories } from "../components/categoryColumns";
import { DataTable } from "../../../shard/components/DataTable";
import { useState } from "react";
import { DashboardModal } from "@/admin-dashboard/shard/components/DashboardModal";
import { CategoryForm } from "../components/CategoryForm";
import AlertDialogPopUp from "@/admin-dashboard/shard/components/AlertDialogPopUp";

function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date: "1/1/2015",
    },

    {
      id: "728ed52f",
      name: "drink",
      description: "drink.com",
      image: "hthello tps",
      date: "1/6/2026",
    },
    // ...
  ];
}

export function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const data = getData();
  const handleEdit = () => {
    setIsModalOpen(true);
  };
  const handleDelete = () => {
    console.log("deleted");
    setIsAlertOpen(true);
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable
        buttonText="Add New Category"
        searchKey="Search By Name..."
        title="Popular Category"
        columns={columns(handleEdit, handleDelete)}
        data={data}
        setIsModalOpen={setIsModalOpen}
      />
      {/* Modal */}
      <DashboardModal
        title="Add Category"
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      >
        <CategoryForm setIsModalOpen={setIsModalOpen} />
      </DashboardModal>
      {/* alert dialog */}
      <AlertDialogPopUp
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
    </div>
  );
}
