export type UserRole = "patient" | "doctor" | "admin";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
};

export type AuthSession = {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserProfile | null;
  isAuthenticated: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
