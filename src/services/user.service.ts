import { apiClient } from "./api-client";
import { ApiSuccess } from "@/types/api";
import { UserProfile } from "@/types/auth";

export const userService = {
  me: async () => apiClient.get<ApiSuccess<UserProfile>>("/users/me"),
  update: async (payload: Partial<UserProfile>) =>
    apiClient.patch<ApiSuccess<UserProfile>>("/users/me", payload),
};
