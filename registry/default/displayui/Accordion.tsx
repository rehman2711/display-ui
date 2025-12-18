"use client"

import {
  ComponentProps,
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useState,
} from "react"
import { cva, VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/registry/lib/utils"

// ---------------- Styles ----------------
const accordionStyles = cva(
  ["w-full text-base outline-2 px-1 py-2 rounded-md"],
  {
    variants: {
      variant: {
        dark: "bg-black text-white border-2 ring-3 ring-black",
        light: "bg-white text-black ",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
)

// ---------------- Context ----------------
const AccordionCtx = createContext<{
  isOpen: boolean
  toggle: () => void
} | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionCtx)
  if (!ctx)
    throw new Error(
      "Accordion compound components must be inside <Accordion.Main>"
    )
  return ctx
}

// ---------------- Main ----------------
type AccordionMainProps = ComponentProps<"div"> &
  VariantProps<typeof accordionStyles>

const AccordionMain = forwardRef<HTMLDivElement, AccordionMainProps>(
  ({ variant, className, children, ...props }, ref) => {
    const [isOpen, setOpen] = useState(false)
    return (
      <AccordionCtx.Provider
        value={{ isOpen, toggle: () => setOpen((o) => !o) }}
      >
        <div
          ref={ref}
          className={cn(accordionStyles({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionCtx.Provider>
    )
  }
)
AccordionMain.displayName = "Accordion.Main"

// ---------------- Trigger ----------------
type AccordionTriggerProps = ComponentProps<"button"> & {
  children?: ReactNode
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, toggle } = useAccordion()
    return (
      <button
        ref={ref}
        type="button"
        onClick={toggle}
        className={cn(
          "group flex w-full items-center justify-between p-2 text-left duration-400 delay-[50ms]",
          isOpen && "border-b",
          className
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>
        <ChevronDown
          className={cn(
            "ml-2 h-4 w-4 transition-transform duration-500",
            isOpen && "rotate-180"
          )}
        />
      </button>
    )
  }
)
AccordionTrigger.displayName = "Accordion.Trigger"

// ---------------- Content ----------------
type AccordionContentProps = ComponentProps<"div"> & { children?: ReactNode }

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useAccordion()
    return (
      <div
        ref={ref}
        className={cn(
          "px-2 overflow-hidden transition-[max-height,padding,opacity] duration-500 ease-in-out",
          isOpen
            ? "max-h-[500px] p-2 opacity-100"
            : "duration-400 max-h-0 my-0 opacity-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AccordionContent.displayName = "Accordion.Content"

// ---------------- Compound export ----------------
export const Accordion = {
  Main: AccordionMain,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
}
