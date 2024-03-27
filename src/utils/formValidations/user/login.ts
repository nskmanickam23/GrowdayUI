import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type LoginFormData = {
    username: string;
    password: string;
};

export const schema: ZodType<LoginFormData> = z.object({
    username: z.string().min(5, { message: "Please provide a valid user name" }),
    password: z.string().min(5, { message: "Please enter password" })
});

export const useValidate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({ resolver: zodResolver(schema) })
    return {
        register,
        handleSubmit,
        errors
    }
}

