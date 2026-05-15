export type ApiSuccess<T> = {
  data: T;
  message?: string;
};

export type ApiErrorShape = {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
};
