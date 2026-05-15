const requiredClientEnv = {
  NEXT_PUBLIC_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://api.mediconnectplus.com/v1",
};

export const env = requiredClientEnv;
