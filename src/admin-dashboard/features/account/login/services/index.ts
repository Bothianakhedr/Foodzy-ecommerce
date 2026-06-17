import { axiosInstance } from "@/admin-dashboard/axiosConfig/axiosInstance";
import type { LoginInputs } from "../pages/Login";

export async function handleLogin(values: LoginInputs) {
  return axiosInstance.post("admin/auth/login", values);
}
