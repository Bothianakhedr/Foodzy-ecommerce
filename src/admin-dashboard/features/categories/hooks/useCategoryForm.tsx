import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory, updateCategory } from "../services";
import { toast } from "react-toastify";
import { handleAxiosError } from "@/admin-dashboard/shard/helper/handleAxiosError";
import type { CategoriesColumnsType, CategoryFormInput } from "../types";

export type useCategoryFormProps = {
  selectedCategory?: CategoriesColumnsType;
  setIsModalOpen: (open: boolean) => void;
};
export function useCategoryForm({
  selectedCategory,
  setIsModalOpen,
}: useCategoryFormProps) {
  const { control, handleSubmit, reset, register, watch } =
    useForm<CategoryFormInput>({
      defaultValues: {
        name: "",
        description: "",
        isActive: false,
        icon: {} as FileList,
      },
    });

  const queryClient = useQueryClient();
  // add category
  const addMutation = useMutation({
    mutationFn: (payload: FormData) => addCategory(payload),
    onSuccess: (data) => {
      toast.success(data?.data.message);
      queryClient.invalidateQueries({
        queryKey: ["allCategories"],
      });
      setIsModalOpen(false)
    },
    onError: (error) => handleAxiosError(error),
  });
  const editMutation = useMutation({
    mutationFn: (payload: FormData) =>
      updateCategory(selectedCategory!._id, payload),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({
        queryKey: ["allCategories"],
      });
      setIsModalOpen(false);
      reset();
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  // submit form
  function onSubmit(data: CategoryFormInput) {
    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("isActive", String(data.isActive));
    payload.append("description", data.description);
    if (data.icon?.[0]) {
      payload.append("icon", data.icon[0]);
    }
    console.log(payload);

    if (selectedCategory) {
      editMutation.mutate(payload);
    } else {
      addMutation.mutate(payload);
    }
  }
  useEffect(() => {
    if (selectedCategory) {
      reset({
        name: selectedCategory.name,
        description: selectedCategory.description,
        isActive: Boolean(selectedCategory.isActive),
      });
    }
  }, [selectedCategory, reset]);

  const watchedIcon = watch("icon");

  return { watchedIcon, register, onSubmit, handleSubmit, reset, control };
}
