import axios from "axios";

let bearerToken = "";
let baseUrl = "https://654200b9f0b8287df1ff4c14.mockapi.io";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token, backendUrl) => {
  baseUrl = backendUrl;
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;
