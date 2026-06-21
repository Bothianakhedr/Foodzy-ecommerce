import { useForm } from "react-hook-form";
import type { BannerFormInput, BannerFormProps } from "../types";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBanner, editBanner } from "../services";
import { toast } from "react-toastify";
import axios from "axios";

export function useBannerForm({ bannerInfo, setIsModalOpen }: BannerFormProps) {
  const { handleSubmit, control, reset, register, watch } =
    useForm<BannerFormInput>({
      defaultValues: {
        title: "",
        placement: bannerInfo?.placement || "",
        image: {} as FileList,
        isActive: false,
      },
    });
  const queryClient = useQueryClient();
  useEffect(() => {
    if (bannerInfo) {
      reset({
        title: bannerInfo.title,
        placement: bannerInfo.placement,
        isActive: Boolean(bannerInfo.isActive),
      });
    }
  }, [bannerInfo, reset]);

  // Add Banner
  const addMutation = useMutation({
    mutationFn: (payload: FormData) => addBanner({ payload }),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["allBanners"],
      });
      setIsModalOpen(false);
      reset();
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    },
  });
  // Edit Banner
  const editMutation = useMutation({
    mutationFn: (payload: FormData) =>
      editBanner({ id: bannerInfo!._id, payload }),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["allBanners"],
      });
      setIsModalOpen(false);
      reset();
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    },
  });
  // submit form
  async function onSubmit(data: BannerFormInput) {
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("placement", data.placement);
    payload.append("isActive", String(data.isActive));
    if (data.image?.[0]) {
      payload.append("image", data.image[0]);
    }

    if (bannerInfo) {
      editMutation.mutate(payload);
    } else {
      addMutation.mutate(payload);
    }
  }
  const watchedImage = watch("image") as FileList | undefined;

  return { watchedImage, onSubmit, register, control, handleSubmit, reset };
}
