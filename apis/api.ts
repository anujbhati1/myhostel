import axios from "axios";
import { baseUrl } from "./endPoints";
import { storage } from "@/app/_layout";

const http = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
});

http.interceptors.request.use(
  async (config) => {
    try {
      // Retrieve the authToken from MMKV storage
      const authToken = storage.getString("authToken");

      // If authToken exists, attach it to the Authorization header
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
    } catch (error) {
      console.error("Error fetching authToken from storage:", error);
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default http;
