"use client"

import {
  Children,
  cloneElement,
  ComponentProps,
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { cva, VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/registry/lib/utils"

// ---------------- Variants ----------------
const carouselVariants = cva("relative w-full overflow-hidden", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

// ---------------- Types ----------------
type CarouselProps = ComponentProps<"div"> &
  VariantProps<typeof carouselVariants> & {
    children: ReactNode
    autoPlay?: boolean
    intervalMs?: number
  }

// ---------------- Main Component ----------------
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      size,
      children,
      autoPlay = false,
      intervalMs = 3000,
      ...props
    },
    ref
  ) => {
    const items = Children.toArray(children).filter(
      (child): child is ReactElement => !!child && typeof child === "object"
    )
    const count = items.length

    // Start at 1 (first real slide, because of clones)
    const [index, setIndex] = useState(1)
    const [transitioning, setTransitioning] = useState(true)

    const next = () => setIndex((i) => i + 1)
    const prev = () => setIndex((i) => i - 1)

    // Auto play
    useEffect(() => {
      if (!autoPlay) return
      const t = setInterval(next, intervalMs)
      return () => clearInterval(t)
    }, [autoPlay, intervalMs])

    // Handle instant jump when hitting clones
    useEffect(() => {
      if (index === count + 1) {
        const t = setTimeout(() => {
          setTransitioning(false)
          setIndex(1)
        }, 500)
        return () => clearTimeout(t)
      }
      if (index === 0) {
        const t = setTimeout(() => {
          setTransitioning(false)
          setIndex(count)
        }, 500)
        return () => clearTimeout(t)
      }
      setTransitioning(true)
    }, [index, count])

    // Prepare slides [lastClone, ...items, firstClone]
    const slides: ReactElement[] = [
      cloneElement(items[count - 1], { key: "last-clone" }),
      ...items,
      cloneElement(items[0], { key: "first-clone" }),
    ]

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ size }), className)}
        {...props}
      >
        {/* Controls */}
        <button
          onClick={prev}
          className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slides */}
        <div
          className={cn(
            "flex",
            transitioning && "transition-transform duration-500"
          )}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides}
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

// ---------------- Item ----------------
type CarouselItemProps = ComponentProps<"div"> & { children: ReactNode }

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full flex-shrink-0", className)} {...props}>
      {children}
    </div>
  )
)
CarouselItem.displayName = "CarouselItem"
