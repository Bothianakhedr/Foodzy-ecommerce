import { axiosInstance } from "@/admin-dashboard/axiosConfig/axiosInstance";

export async function getAllBanners() {
  return await axiosInstance.get("admin/banners");
}
export async function AddBanner({ data }: { data: FormData }) {
  const { data: ResData } = await axiosInstance.post("admin/banners", data);

  return ResData;
}

export async function deleteBanner(id: string) {
  return await axiosInstance.delete(`admin/banners/${id}`);
}
