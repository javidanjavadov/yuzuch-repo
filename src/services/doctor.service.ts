import { apiClient } from "./api-client";
import { ApiSuccess } from "@/types/api";

export type DoctorSummary = {
  id: string;
  name: string;
  specialty: string;
  availability: string;
};

export const doctorService = {
  list: async () => apiClient.get<ApiSuccess<DoctorSummary[]>>("/doctors"),
  detail: async (id: string) =>
    apiClient.get<ApiSuccess<DoctorSummary>>(`/doctors/${id}`),
};
