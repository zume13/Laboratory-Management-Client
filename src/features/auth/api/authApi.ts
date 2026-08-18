import { httpClient } from "@/shared/api/httpClient";
import type { LoginRequest, LoginResponse, AuthUser } from "../types";

export const authApi = {
  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const { data } = await httpClient.post<LoginResponse>("/auth/login", payload);
    return data;
  },

  // Called on app load to restore a session from a stored token without
  // forcing the user to log in again on every refresh.
  getCurrentUser: async (): Promise<AuthUser> => {
    const { data } = await httpClient.get<AuthUser>("/auth/me");
    return data;
  },

  logout: async (): Promise<void> => {
    await httpClient.post("/auth/logout");
  },
};
