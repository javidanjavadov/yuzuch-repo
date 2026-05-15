import { apiClient } from "./api-client";
import { ApiSuccess } from "@/types/api";

export type AppointmentSummary = {
  id: string;
  doctor: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
};

export const appointmentService = {
  list: async () =>
    apiClient.get<ApiSuccess<AppointmentSummary[]>>("/appointments"),
};
