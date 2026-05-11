import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
  if (config.method === "delete") {
    config.headers[
      "x-delete-task-auth"
    ] = "task-delete-secret";
  }

  return config;
});

export default api;