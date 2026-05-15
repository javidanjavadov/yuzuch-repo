import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[var(--shadow-medical)] hover:bg-[#0698d1] focus-visible:outline-primary",
  secondary:
    "bg-primary-dark text-white hover:bg-[#0d2444] focus-visible:outline-primary-dark",
  outline:
    "border border-border bg-white/90 text-primary-dark hover:border-primary hover:text-primary focus-visible:outline-primary",
  icon: "border border-border bg-white text-primary-dark hover:border-primary hover:text-primary",
};

export function buttonStyles({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex h-12 items-center justify-center rounded-[1rem] px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  );
}

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ className, variant })}
      {...props}
    />
  );
}

export const PrimaryButton = (props: ButtonProps) => (
  <Button variant="primary" {...props} />
);
export const SecondaryButton = (props: ButtonProps) => (
  <Button variant="secondary" {...props} />
);
export const OutlineButton = (props: ButtonProps) => (
  <Button variant="outline" {...props} />
);
export const IconButton = (props: ButtonProps) => (
  <Button className="h-11 w-11 rounded-full px-0" variant="icon" {...props} />
);
