"use client"

import { ComponentProps, forwardRef, ReactNode } from "react"

import { cn } from "@/registry/lib/utils"

// ---------- Tooltip Root ----------
type TooltipRootProps = ComponentProps<"div"> & { children: ReactNode }

const TooltipRoot = forwardRef<HTMLDivElement, TooltipRootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("relative inline-block group", className)} // <- group needed
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TooltipRoot.displayName = "TooltipRoot"

// ---------- Tooltip Trigger ----------
type TooltipTriggerProps = ComponentProps<"span"> & { children: ReactNode }

const TooltipTrigger = forwardRef<HTMLSpanElement, TooltipTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span className={cn("cursor-pointer", className)} ref={ref} {...props}>
        {children}
      </span>
    )
  }
)
TooltipTrigger.displayName = "TooltipTrigger"

// ---------- Tooltip Content ----------
type TooltipContentProps = ComponentProps<"div"> & {
  content: ReactNode
  position?: "top" | "bottom" | "left" | "right" | "simple"
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, content, position = "top", ...props }, ref) => {
    const positionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
      simple: "",
    }

    const arrowClasses = {
      top: "after:border-t-black dark:after:border-t-white after:border-t-[6px] after:border-x-transparent after:border-x-[6px] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2",
      bottom:
        "after:border-b-black dark:after:border-b-white after:border-b-[6px] after:border-x-transparent after:border-x-[6px] after:absolute after:top-[-5px] after:left-1/2 after:-translate-x-1/2",
      left: "after:border-l-black dark:after:border-l-white after:border-l-[6px] after:border-y-transparent after:border-y-[6px] after:absolute after:right-[-5px] after:top-1/2 after:-translate-y-1/2",
      right:
        "after:border-r-black dark:after:border-r-white after:border-r-[6px] after:border-y-transparent after:border-y-[6px] after:absolute after:left-[-5px] after:top-1/2 after:-translate-y-1/2",
      simple: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    }

    return (
      <div
        className={cn(
          "absolute z-50 bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform scale-90 group-hover:scale-100 whitespace-nowrap",
          positionClasses[position],
          arrowClasses[position],
          className
        )}
        ref={ref}
        {...props}
      >
        {content}
      </div>
    )
  }
)

TooltipContent.displayName = "TooltipContent"

// ---------- Export ----------
export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
}
