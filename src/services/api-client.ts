import axios from "axios";
import { env } from "@/config/env";
import { getApiErrorMessage } from "@/utils/api-error";

function getStoredToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem("mediconnect_token");
}

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new Error(getApiErrorMessage(error))),
);
