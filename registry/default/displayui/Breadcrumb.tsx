"use client";

import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";
// Main wrapper for breadcrumb
const breadcrumbVariant = cva(["inline-flex items-center"], {
  variants: {
    textSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    textSize: "md",
  },
});

type BreadcrumbProps = ComponentProps<"span"> &
  VariantProps<typeof breadcrumbVariant> & {
    children: ReactNode;
    separator?: ReactNode;
  };

const BreadcrumbMain = forwardRef<HTMLSpanElement, BreadcrumbProps>(
  ({ textSize, children, className, separator, ...props }, ref) => {
    const items = React.Children.toArray(children);
    return (
      <span
        className={cn(breadcrumbVariant({ textSize }), className)}
        ref={ref}
        {...props}
      >
        {items.map((child, index) => (
          <span key={index} className="inline-flex items-center">
            {child}
            {index < items.length - 1 && (
              <span className="mx-1">{separator}</span>
            )}
          </span>
        ))}
      </span>
    );
  }
);

BreadcrumbMain.displayName = "Breadcrumb.Main";

type PathProps = ComponentProps<"a"> & {
  icon?: ReactNode; // optional icon before the text
};

const Path = forwardRef<HTMLAnchorElement, PathProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 !text-gray-700",
          className
        )}
        {...props}
      >
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </a>
    );
  }
);

Path.displayName = "Path"

// Export compound component
export const Breadcrumb = {
  Main: BreadcrumbMain,
  Path: Path,
};
