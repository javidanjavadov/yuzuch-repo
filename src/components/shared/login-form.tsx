"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { TextInput } from "@/components/forms/text-input";
import { OTPInput } from "@/components/forms/otp-input";
import { PrimaryButton } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { appRoutes } from "@/constants/routes";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  otp: z.string().length(6, "OTP code must be 6 digits."),
});

export function LoginForm() {
  const setSession = useAuthStore((state) => state.setSession);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      otp: formData.get("otp"),
    });

    if (!result.success) {
      setErrors(
        Object.fromEntries(
          Object.entries(result.error.flatten().fieldErrors).map(
            ([key, value]) => [key, value?.[0] ?? ""],
          ),
        ),
      );
      return;
    }

    setErrors({});
    setSession({
      accessToken: "demo-access-token",
      refreshToken: "demo-refresh-token",
      user: {
        id: "patient-01",
        name: "Demo Patient",
        email: result.data.email,
        role: "patient",
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="patient@yuzuch.com"
        error={errors.email}
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        error={errors.password}
      />
      <OTPInput label="OTP verification" name="otp" error={errors.otp} />
      <PrimaryButton className="w-full" type="submit">
        Login to account
      </PrimaryButton>
      <p className="text-sm text-slate-500">
        New here?{" "}
        <Link href={appRoutes.register} className="font-semibold text-primary">
          Create an account
        </Link>
      </p>
    </form>
  );
}
