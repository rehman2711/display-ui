"use client";

import { cn } from "@/registry/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, ReactNode } from "react";

//  Main Card
const cardMainVariant = cva(
  [
    "w-full max-w-sm overflow-hidden shadow-md transition-all duration-300",
    "bg-black/40 dark:bg-white text-white dark:text-black",
  ],
  {
    variants: {
      shadow: {
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      radius: "xl",
      shadow: "md",
    },
  }
);

type CardMainProps = ComponentProps<"div"> &
  VariantProps<typeof cardMainVariant> & { children: ReactNode };

const CardMain = forwardRef<HTMLDivElement, CardMainProps>(
  ({ children, radius, shadow, className, ...props }, ref) => {
    return (
      <div
        className={cn(cardMainVariant({ radius, shadow }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardMain.displayName="Card.Main"

// Content Area
type CardAreaProps = ComponentProps<"div"> & { children: ReactNode };

const CardArea = forwardRef<HTMLDivElement, CardAreaProps>(
  ({ children, className, ...props }, ref) => (
    <div className={cn(className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

CardArea.displayName="Card.Area"

// Image Section
const cardImageVariant = cva(["object-cover"], {
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    fit: {
      cover: "cover",
      contain: "contain",
      fill: "fill",
      none: "none",
      scale: "scale-down",
    },
  },
  defaultVariants: { radius: "xl", fit: "cover" },
});

type CardImageProps = ComponentProps<"img"> &
  VariantProps<typeof cardImageVariant>;

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ radius, fit, className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(
        cardImageVariant({ radius }),
        fit && `object-${fit}`,
        className
      )}
      {...props}
    />
  )
);

CardImage.displayName="Card.Image"

export const Card = {
  Main: CardMain,
  Area: CardArea,
  Image: CardImage,
};
