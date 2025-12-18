"use client";

import { cn } from "@/registry/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-full",
    "rounded-md",
    "border",
    "border-gray-300",
    "bg-white",
    "text-black",
    "px-3",
    "py-2",
    "text-sm",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "[appearance:textfield]",
    "placeholder:text-sm"
  ],
  {
    variants: {
      border: {
        primary: "focus:ring-2 focus:ring-blue-500 ",
        success: "focus:ring-2 focus:ring-green-500 ",
        warning: "focus:ring-2 focus:ring-yellow-400 ",
        danger: "focus:ring-2 focus:ring-red-500",
        none: "focus:ring-0",
      },
    },
    defaultVariants: {
      border: "primary",
    },
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ border, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputStyles({ border }), className)}
        {...props}
      />
    );
  }
);

Input.displayName="Input"
