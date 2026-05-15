import { apiClient } from "./api-client";
import { LoginPayload, RegisterPayload, UserProfile } from "@/types/auth";
import { ApiSuccess } from "@/types/api";

export const authService = {
  login: async (payload: LoginPayload) =>
    apiClient.post<
      ApiSuccess<{
        accessToken: string;
        refreshToken: string;
        user: UserProfile;
      }>
    >("/auth/login", payload),
  register: async (payload: RegisterPayload) =>
    apiClient.post<ApiSuccess<UserProfile>>("/auth/register", payload),
  verifyOtp: async (email: string, code: string) =>
    apiClient.post<ApiSuccess<{ verified: boolean }>>("/auth/verify-otp", {
      email,
      code,
    }),
  logout: async () => apiClient.post<ApiSuccess<null>>("/auth/logout"),
};
