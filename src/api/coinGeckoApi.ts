import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT_URL,
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});
