"use client"

import { ComponentProps, forwardRef } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

const badgeVariant = cva(["px-3 py-1 text-white"], {
  variants: {
    variant: {
      primary: "bg-blue-500 text-sm ",
      danger: "bg-red-500 text-sm",
      success: "bg-green-500 text-sm",
      warning: "bg-yellow-400 text-sm",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      pill: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    radius: "md",
  },
})

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariant>

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, radius, className, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariant({ variant, radius }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"
