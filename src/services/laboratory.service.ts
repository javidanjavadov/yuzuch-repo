import { apiClient } from "./api-client";
import { ApiSuccess } from "@/types/api";

export type LaboratoryTest = {
  id: string;
  name: string;
  turnaround: string;
  price: string;
};

export const laboratoryService = {
  list: async () =>
    apiClient.get<ApiSuccess<LaboratoryTest[]>>("/laboratory/tests"),
};
