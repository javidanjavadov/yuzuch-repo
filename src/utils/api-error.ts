import { AxiosError } from "axios";
import { ApiErrorShape } from "@/types/api";

export function getApiErrorMessage(error: unknown) {
  if (error instanceof AxiosError) {
    const data = error.response?.data as ApiErrorShape | undefined;
    return data?.message ?? error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unexpected error occurred.";
}
