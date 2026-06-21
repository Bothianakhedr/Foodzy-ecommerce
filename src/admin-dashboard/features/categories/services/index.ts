// add category

import { axiosInstance } from "@/admin-dashboard/axiosConfig/axiosInstance";
import type { CategoryFormInput } from "../components/CategoryForm";

export async function addCategory(payload: CategoryFormInput) {
  const { data } = await axiosInstance.post("admin/categories", payload);
  console.log(data);
}
