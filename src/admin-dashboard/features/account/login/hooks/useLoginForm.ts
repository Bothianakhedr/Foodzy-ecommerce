import axios from "axios";
import { toast } from "react-toastify";
import { setToken } from "../redux/authSlice";
import { handleLogin } from "../services";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginInputs } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/LoginSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (values) => {
    try {
      setIsLoading(true);

      const { data } = await handleLogin(values);

      dispatch(setToken(data.data.token));

      toast.success(data.message, {
        autoClose: 1000,
      });

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, onSubmit, errors, handleSubmit, isLoading };
}
