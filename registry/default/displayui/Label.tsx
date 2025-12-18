"use client";

import { ComponentProps, forwardRef } from "react";
import { cn } from "@/registry/lib/utils";

type LabelProps = ComponentProps<"label">;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn("text-base text-black dark:text-white", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

Label.displayName="Label"