import axios from "axios";
import store from "../store/store";

const api = axios;
console.log("0000000000000");

function JSINtoFormData(params) {
  const formData = new FormData();
  Object?.keys(params)?.forEach((key) => {
    formData.append(key, params[key]);
  });
  return formData;
}

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

axios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  console.log(token, "1212");

  if (token) {
    console.log("ccccccccccccccc");
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (
    (config.method === "post" ||
      config.method === "put" ||
      config.method === "delete") &&
    isJson(config.data)
  ) {
    console.log("aaaaaaaaaaa");
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.data = JSINtoFormData(config.data);
  }
  console.log("bbbbbbbbbbbbb");

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized access here
    }
    return Promise.reject(error);
  }
);

export default api;
