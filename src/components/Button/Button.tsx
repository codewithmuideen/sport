import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  onClick?: never;
  type?: never;
}

interface ClickButtonProps extends BaseProps {
  to?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export function Button({ children, variant = "primary", className, icon, to, onClick, type }: ButtonProps) {
  const classes = cn(variantClass[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
