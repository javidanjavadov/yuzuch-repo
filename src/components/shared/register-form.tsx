"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { PhoneInput } from "@/components/forms/phone-input";
import { TextInput } from "@/components/forms/text-input";
import { PrimaryButton } from "@/components/ui/button";
import { appRoutes } from "@/constants/routes";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(10, "Phone is required."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export function RegisterForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = registerSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
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
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput
        label="Full name"
        name="name"
        placeholder="Jane Doe"
        error={errors.name}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="patient@yuzuch.com"
        error={errors.email}
      />
      <PhoneInput label="Phone number" name="phone" error={errors.phone} />
      <TextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Create a secure password"
        error={errors.password}
      />
      <PrimaryButton className="w-full" type="submit">
        Create account
      </PrimaryButton>
      <p className="text-sm text-slate-500">
        Already registered?{" "}
        <Link href={appRoutes.login} className="font-semibold text-primary">
          Login
        </Link>
      </p>
    </form>
  );
}
