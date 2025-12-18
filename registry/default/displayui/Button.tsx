"use client";

import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";
const buttonVariants = cva(["bg-blue-500 p-2 rounded-md text-white"], {
  variants: {
    variant: {
      solid: "bg-blue-500 text-white hover:bg-blue-600",
      outline:
        "bg-transparent border border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700",
      ghost: "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white",
      link: "bg-transparent text-blue-500 hover:text-blue-700 hover:underline",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
    radius: "md",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, radius, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, radius, className }))}
        {...props}
      ></button>
    );
  }
);

Button.displayName="Button"
