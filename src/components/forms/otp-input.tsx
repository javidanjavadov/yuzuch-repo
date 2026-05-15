import { ComponentProps } from "react";
import { TextInput } from "./text-input";

export function OTPInput(
  props: Omit<ComponentProps<typeof TextInput>, "maxLength">,
) {
  return (
    <TextInput
      inputMode="numeric"
      maxLength={6}
      placeholder="Enter 6-digit code"
      {...props}
    />
  );
}
