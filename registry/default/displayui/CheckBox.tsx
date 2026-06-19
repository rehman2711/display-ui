"use client"

import { ComponentProps, forwardRef } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

const checkBoxVariant = cva([], {
  variants: {
    variant: {
      primary: "accent-blue-500",
      dark: "accent-black",
      success: "accent-green-400",
      danger: "accent-red-500",
    },
    boxSize: {
      md: "w-4 h-4",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    boxSize: "md",
  },
})

type CheckBoxProps = ComponentProps<"input"> &
  VariantProps<typeof checkBoxVariant>

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ variant, boxSize, className, ...props }, ref) => {
    return (
      <>
        <input
          type="checkbox"
          ref={ref}
          className={cn(checkBoxVariant({ variant, boxSize }), className)}
          {...props}
        />
      </>
    )
  }
)

CheckBox.displayName = "CheckBox"
