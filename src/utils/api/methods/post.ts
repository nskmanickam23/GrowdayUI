import client from "../baseUrl/axios.baseUrl";

import { Login_api, Register_api } from "../endPoints/common";

import { RegisterFormData } from "../../formValidations/user/register";

export const RegisterFn = async (data: RegisterFormData) => {
  console.log(data, "from post ");
  const { userName, email, password, role } = data;
  // Create a new object with the required fields
  const newData = {
    userName,
    email,
    password,
    role,
  };

  console.log(newData, "new data--------");
  try {
    return client().post(Register_api, data);
  } catch (error) {
    return error;
  }
};

export const LoginFn = async (data: object) => {
  console.log("data to be logged in", data);

  try {
    return client().post(Login_api, data);
  } catch (error) {
    return error;
  }
};
