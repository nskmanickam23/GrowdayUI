import axios from "axios";

const baseURL = "https://growday.onrender.com";

const authService = {
  // POST
  saveLogin: (param: any) => axios.post(`${baseURL}/user/login`, param),
  saveRegister: (param: any) => axios.post(`${baseURL}/user/register`, param),

  // GET
  verifyEmail: (param: any) => axios.get(`${baseURL}/verifyemail/${param}`),
};

export default authService;
