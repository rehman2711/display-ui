"use client"

import { ComponentProps, forwardRef, ReactNode } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

/* ---------- Menu Bar ---------- */
type NavigationMenuBarProps = ComponentProps<"div"> & { children: ReactNode }

export const NavigationMenuBar = forwardRef<
  HTMLDivElement,
  NavigationMenuBarProps
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full h-14 px-4 rounded",
      "flex items-center justify-between gap-6",
      "bg-black text-white text-sm shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
NavigationMenuBar.displayName = "NavigationMenuBar"

/* ---------- Menu Item ---------- */
const navigationMenuItemVariant = cva([
  "text-white hover:text-gray-300 transition-colors",
])

type NavigationMenuItemProps = ComponentProps<"a"> & {
  children: ReactNode
} & VariantProps<typeof navigationMenuItemVariant>

export const NavigationMenuItem = forwardRef<
  HTMLAnchorElement,
  NavigationMenuItemProps
>(({ children, className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(navigationMenuItemVariant(), className)}
    {...props}
  >
    {children}
  </a>
))
NavigationMenuItem.displayName = "NavigationMenuItem"

/* ---------- Menu Logo ---------- */
type NavigationMenuLogoProps = ComponentProps<"img">

export const NavigationMenuLogo = forwardRef<
  HTMLImageElement,
  NavigationMenuLogoProps
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("h-10 w-auto object-contain select-none", className)}
    {...props}
  />
))
NavigationMenuLogo.displayName = "NavigationMenuLogo"
