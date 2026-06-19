"use client"

import { ComponentProps, forwardRef, ReactNode } from "react"

import { cn } from "@/registry/lib/utils"

// Outer Area For Avatar

type AvatarProps = ComponentProps<"span"> & { children: ReactNode }

const AvatarRoot = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        className={cn(
          "rounded-full w-20 h-20 flex justify-center align-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    )
  }
)

AvatarRoot.displayName = "AvatarRoot"

// Image Section

type AvatarImageProps = ComponentProps<"img">

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        className={cn("object-cover rounded-full", className)}
        ref={ref}
        {...props}
      />
    )
  }
)

AvatarImage.displayName = "AvatarImage"

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
}
