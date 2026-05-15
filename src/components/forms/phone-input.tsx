import { ComponentProps } from "react";
import { TextInput } from "./text-input";

export function PhoneInput(
  props: Omit<ComponentProps<typeof TextInput>, "type">,
) {
  return <TextInput type="tel" placeholder="+1 (555) 000-0000" {...props} />;
}
