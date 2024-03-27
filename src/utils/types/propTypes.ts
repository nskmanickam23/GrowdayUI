import { FieldErrors } from "react-hook-form";
import { RegisterFormData } from "../formValidations/user/register";


export interface propsType {
    errors: FieldErrors<RegisterFormData>;
}