"use client"

import { ComponentProps, forwardRef, ReactNode, useRef, useState } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

const buttonVariants = cva(
  [
    "bg-black text-white border-2 border-transparent rounded-md transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        solid: "focus:border-white bg-black focus:ring-black",
        primary: "focus:border-white bg-blue-500  focus:ring-blue-500",
        success: "focus:border-white  bg-green-500 focus:ring-green-500",
        danger: "focus:border-white  bg-red-500 focus:ring-red-500",
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
  }
)

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { RingOff: number }

export const ButtonRing = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, radius, RingOff = 5000, className, ...props }, ref) => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const [activeRing, setActiveRing] = useState(false)

    const handleClick = () => {
      setActiveRing(true)
      btnRef.current?.focus()

      setTimeout(() => {
        setActiveRing(false)
        btnRef.current?.blur()
      }, RingOff)
    }

    return (
      <button
        ref={(node) => {
          btnRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          buttonVariants({ variant, size, radius, className }),
          activeRing && "ring-2"
        )}
        onClick={(e) => {
          handleClick()
          props.onClick?.(e)
        }}
        {...props}
      >
        {props.children}
      </button>
    )
  }
)

ButtonRing.displayName = "ButtonRing"
