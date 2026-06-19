"use client"

import {
  ComponentProps,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/registry/lib/utils"

// 🔹 Infinite Carousel Item
type InfiniteCarouselItemProps = ComponentProps<"div"> & {
  children: ReactNode
  href?: string
}
export const InfiniteCarouselItem = forwardRef<
  HTMLDivElement,
  InfiniteCarouselItemProps
>(({ className, children, href, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-64 flex-shrink-0 relative cursor-pointer group",
      className
    )}
    onClick={() => href && (window.location.href = href)}
    {...props}
  >
    {children}
    {/* 🔵 Blue overlay on hover */}
    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
))
InfiniteCarouselItem.displayName = "InfiniteCarouselItem"

// 🔹 Infinite Carousel
type InfiniteCarouselProps = {
  children: ReactNode[]
  speed?: number // pixels per second
  className?: string
  pauseOnHover?: boolean // new prop
}

export const InfiniteCarousel = forwardRef<
  HTMLDivElement,
  InfiniteCarouselProps
>(({ children, className, speed = 50, pauseOnHover = true }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)

  // duplicate children for seamless loop
  const items = [...children, ...children]

  useEffect(() => {
    let last = performance.now()
    let raf: number

    const tick = (now: number) => {
      const delta = (now - last) / 1000
      last = now

      if (!paused) {
        setOffset((prev) => {
          const width = containerRef.current?.scrollWidth || 0
          const next = prev + speed * delta
          return next >= width / 2 ? 0 : next // reset at half
        })
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed, paused])

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      ref={ref}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: "transform",
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
})
InfiniteCarousel.displayName = "InfiniteCarousel"
