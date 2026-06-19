"use client"

import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

const separatorVariants = cva("shrink-0 bg-gray-200", {
  variants: {
    variant: {
      default: "bg-gray-200",
      danger: "bg-red-500",
      success: "bg-green-400",
    },
    size: {
      sm: "my-2",
      md: "my-4",
      lg: "my-6",
    },
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    orientation: "horizontal",
  },
})

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof separatorVariants> & {
    decorative?: boolean
  }

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, variant, size, orientation, decorative = false, ...props },
    ref
  ) => {
    const semanticProps = decorative
      ? { role: "none" }
      : orientation
        ? { role: "separator", "aria-orientation": orientation }
        : { role: "separator" }
    // const semanticProps = decorative
    //   ? { role: "none" }
    //   : { role: "separator", "aria-orientation": orientation };

    return (
      <div
        ref={ref}
        className={cn(
          separatorVariants({ variant, size, orientation }),
          className
        )}
        {...semanticProps}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"
