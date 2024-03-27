import axios from "axios";

const baseURL = "https://growday.onrender.com";

const customerService = {
  saveCusomer: (param: any, token: string) =>
    axios.post(`${baseURL}/customer/register`, param, {
      headers: {
        token: `Bearer ${token}`,
      },
    }),

  getCutomers: (param: any, token: string) =>
    axios.get(`${baseURL}/<collection_name>/list?collection_name=customers`, {
      headers: {
        token: `Bearer ${token}`,
      },
    }),

  editCustomer: (param: any, token: string) =>
    axios.post(`${baseURL}/edit/customer`, param, {
      headers: {
        token: `Bearer ${token}`,
      },
    }),
};

export default customerService;
