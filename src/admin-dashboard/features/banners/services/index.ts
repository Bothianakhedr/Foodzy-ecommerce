import { axiosInstance } from "@/admin-dashboard/axiosConfig/axiosInstance";

// get Banners list
export async function getAllBanners() {
  return await axiosInstance.get("admin/banners");
}

// get banner
export async function getBanner(bannerId: string) {
  return await axiosInstance.get(`admin/banners/${bannerId}`);
}

// Add Banner
export async function addBanner({ payload }: { payload: FormData }) {
  const { data } = await axiosInstance.post("admin/banners", payload);
  return data;
}
export async function editBanner({
  id,
  payload,
}: {
  id: string | undefined;
  payload: FormData;
}) {
  const { data } = await axiosInstance.patch(`admin/banners/${id}`, payload);
  return data;
}

// delete Banner
export async function deleteBanner(id: string) {
  return await axiosInstance.delete(`admin/banners/${id}`);
}
