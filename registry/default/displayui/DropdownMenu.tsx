"use client"

import {
  ComponentProps,
  createContext,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/registry/lib/utils"

// ---------------- Context ----------------
const DropdownCtx = createContext<{
  open: boolean
  setOpen: (v: boolean) => void
} | null>(null)

function useDropdown() {
  const ctx = useContext(DropdownCtx)
  if (!ctx)
    throw new Error(
      "Dropdown compound components must be inside <DropdownMenu.Main>"
    )
  return ctx
}

// ---------------- Main ----------------
type DropdownMainProps = ComponentProps<"div"> & {
  defaultOpen?: boolean
}

const DropdownMain = forwardRef<HTMLDivElement, DropdownMainProps>(
  ({ children, defaultOpen = false, className, ...props }, ref) => {
    const [open, setOpen] = useState(defaultOpen)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close when clicking outside
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClick)
      return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    // Properly forward ref without using `any`
    const setRefs = (node: HTMLDivElement | null) => {
      containerRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }
    }

    return (
      <DropdownCtx.Provider value={{ open, setOpen }}>
        <div
          ref={setRefs}
          className={cn("relative inline-block", className)}
          {...props}
        >
          {children}
        </div>
      </DropdownCtx.Provider>
    )
  }
)
DropdownMain.displayName = "DropdownMenu.Main"

// ---------------- Trigger ----------------
type DropdownTriggerProps = ComponentProps<"button"> & { children?: ReactNode }

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { open, setOpen } = useDropdown()
    return (
      <button
        ref={ref}
        onClick={() => setOpen(!open)}
        className={cn(
          "px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownTrigger.displayName = "DropdownMenu.Trigger"

// ---------------- Content ----------------
type DropdownContentProps = ComponentProps<"div"> & { children?: ReactNode }

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, className, ...props }, ref) => {
    const { open } = useDropdown()
    if (!open) return null

    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-8 mt-2 w-48 rounded-md bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-1 z-50 animate-in fade-in-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DropdownContent.displayName = "DropdownMenu.Content"

// ---------------- Item ----------------
type DropdownItemProps = ComponentProps<"button"> & {
  children?: ReactNode
  icon?: ReactNode
}

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, className, icon, onClick, ...props }, ref) => {
    const { setOpen } = useDropdown()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      setOpen(false)
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition",
          className
        )}
        {...props}
      >
        {icon && <span className="inline-flex mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
)
DropdownItem.displayName = "DropdownMenu.Item"

// ---------------- Export ----------------
export const DropdownMenu = {
  Main: DropdownMain,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
}
