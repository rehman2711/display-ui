"use client"

import { ComponentProps, forwardRef, ReactNode } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

type RadioGroupProps = ComponentProps<"div"> & { children?: ReactNode }

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    )
  }
)

RadioGroup.displayName = "RadioGroup"

const radioVariant = cva(["text-lg"], {
  variants: {
    variant: {
      default: "accent-blue-500",
      success: "accent-green-400",
      danger: "accent-red-500",
      warning: "accent-yellow-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type InputProps = ComponentProps<"input"> & VariantProps<typeof radioVariant>

export const RadioItem = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(radioVariant({ variant }), className)}
        {...props}
      />
    )
  }
)

RadioItem.displayName = "RadioItem"
