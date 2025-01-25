import axios from "axios";
import { baseUrl } from "./endPoints";

const http = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
});

export default http;
