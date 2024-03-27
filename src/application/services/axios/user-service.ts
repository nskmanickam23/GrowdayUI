import axios from "axios";

const baseURL = "https://growday.onrender.com";

const userService = {
  getUser: (param: any, token: string) =>
    axios.get(`${baseURL}/user/info`, {
      headers: {
        token: `Bearer ${token}`,
      },
    }),

  editUser: (param: any, token: string) =>
    axios.post(`${baseURL}/edit/users`, param, {
      headers: {
        token: `Bearer ${token}`,
      },
    }),
};

export default userService;
