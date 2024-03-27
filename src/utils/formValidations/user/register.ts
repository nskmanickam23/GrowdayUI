import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Register form schama
export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  photo: string;
  role: string;
  created_at: string;
  updated_at: string;
  verified: boolean;
  organization_name: string;
  organization_type: string;
  description: string;
};

//  Zod validation
export const schama: ZodType<RegisterFormData> = z
  .object({
    name: z
      .string()
      .min(2, {
        message: "Username must contain at least 2 character(s)",
      })
      .max(30, { message: "First Name cannot exceed 30 characters" }),
    email: z.string().email({
      message: "Please provide a valid email address",
    }),
    password: z
      .string()
      .min(5, {
        message: "password must contain at least 5 character(s)",
      })
      .max(20, {
        message: "password cannot exceed 20 characters",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }),
    passwordConfirm: z.string(),
    role: z.string(),
    photo: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    verified: z.boolean(),
    organization_name: z.string(),
    organization_type: z.string(),
    description: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

// custom Hook
export const useRegisterValidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schama) });
  return {
    register,
    handleSubmit,
    errors,
  };
};
