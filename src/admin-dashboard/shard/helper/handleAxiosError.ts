import axios from "axios";
import { toast } from "react-toastify";

export function handleAxiosError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const serverMessage = error.response?.data?.message;
    const fallbackMessage = error.message;
    toast.error(serverMessage || fallbackMessage);
  }
}
