"use client";

import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";
import { addBanner, editBanner } from "../services";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import type { BannersColumnsType } from "./BannerColumns";
import { useEffect } from "react";

type BannerFormInput = {
  title: string;
  placement: string;
  isActive: boolean | string;
  image?: FileList | string;
};
type BannerFormProps = {
  setIsModalOpen: (open: boolean) => void;
  bannerInfo?: BannersColumnsType;
};
export function BannerForm({ setIsModalOpen, bannerInfo }: BannerFormProps) {
  const { handleSubmit, control, reset, register, watch } =
    useForm<BannerFormInput>({
      defaultValues: {
        title: "",
        placement: "",
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
        isActive: bannerInfo.isActive,
      });
    }
  }, [bannerInfo, reset]);

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
  const image = watch("image");

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-rhf-demo" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="image">
              <Label
                htmlFor="image"
                className="
    flex h-10 cursor-pointer 
    items-center justify-center gap-2
    rounded-md border border-dashed
    border-gray-300 
    hover:bg-gray-100 transition
  "
              >
                <Upload className="h-5 w-5 text-gray-500" />

                <p className="text-sm">
                  {image?.[0]
                    ? image[0].name
                    : bannerInfo?.image
                      ? bannerInfo.image.split("/").pop()
                      : "Click to upload Image"}
                </p>
              </Label>

              <Input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image")}
              />
            </div>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Field>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    placeholder="Type title here ..."
                    autoComplete="off"
                  />
                </Field>
              )}
            />
            <Controller
              name="placement"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Field>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select placement" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="home_top">home_top</SelectItem>
                      <SelectItem value="home_bottom">home_bottom</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
            <Controller
              name="isActive"
              control={control}
              render={({ field }) => (
                <Field>
                  <div className="flex items-center space-x-2 justify-center border border-gray-300 rounded-md p-1">
                    <Switch
                      id="isActive"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="isActive">Is Active</Label>
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            {bannerInfo ? "Update" : "Create"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
