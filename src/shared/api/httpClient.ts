import axios, { type AxiosError } from "axios";
import { isApiErrorResponse, type ApiError } from "./types";

// Every request goes through /api, which vite.config.ts proxies to the
// ASP.NET Core API in dev. In production this should be set to the real
// API origin via VITE_API_BASE_URL.
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attaches the bearer token to every outgoing request. Token is read fresh
// on each request rather than captured once, so logging in/out mid-session
// takes effect immediately without re-creating the client.
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("lms_access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalizes every failure into ApiError so callers never branch on axios
// internals (status codes, response.data shape) themselves.
httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const data = error.response?.data;

    if (isApiErrorResponse(data)) {
      return Promise.reject(data.error);
    }

    // Network failure, timeout, or an endpoint that hasn't been wired up to
    // the ApiError envelope yet (e.g. framework-level 401/500 pages).
    const fallback: ApiError = {
      code: error.code ?? "Network.Unknown",
      message: error.message || "Something went wrong. Please try again.",
      errorType: error.response?.status === 401 ? "Failure" : "Problem",
    };
    return Promise.reject(fallback);
  },
);
