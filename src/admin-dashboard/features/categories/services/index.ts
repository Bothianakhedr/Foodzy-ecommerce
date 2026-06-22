import { axiosInstance } from "@/admin-dashboard/axiosConfig/axiosInstance";

// add category
export async function addCategory(payload: FormData) {
  return await axiosInstance.post("admin/categories", payload);
}

// get all categories
export async function getAllCategories() {
  return await axiosInstance.get("admin/categories");
}
// get single category
export async function getCategory(categoryId: string) {
  return await axiosInstance.get(`admin/categories/${categoryId}`);
}

// delete category
export async function deleteCategory(categoryId: string) {
  return await axiosInstance.delete(`admin/categories/${categoryId}`);
}

// update category
export async function updateCategory(categoryId: string, payload: FormData) {
  return await axiosInstance.patch(`admin/categories/${categoryId} `, payload);
}
