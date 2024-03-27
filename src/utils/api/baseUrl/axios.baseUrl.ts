import axios from "axios";

const BASE_URL = "https://ecommercete.vercel.app/user/";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};

export const axiosPrivet = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
