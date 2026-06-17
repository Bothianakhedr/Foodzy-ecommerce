import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().min(1, "Email is Required").email(),
  password: z
    .string()
    .min(8, "Password is Required")
    .regex(
      /^[A-Za-z0-9_]+$/,
      "Password must contain at least one special character",
    ),
});

