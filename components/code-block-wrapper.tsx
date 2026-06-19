"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
  /** Optional title shown above the code block (e.g. "component/ui/Button.tsx") */
  title?: string
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  title,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div
        className={cn("relative overflow-hidden space-y-1", className)}
        {...props}
      >
        {title ? (
          // control the text size from here
          <div className="p-2 bg-black/10 dark:bg-white/15 border-b border-muted/30 text-sm text-muted-foreground">
            {title}
          </div>
        ) : null}
        <CollapsibleContent
          forceMount
          initialHeight={128}
          className={cn("overflow-hidden")}
        >
          <div
            className={cn(
              "[&_figure]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened
                ? "[_&amp;_pre]:overflow-hidden"
                : "[&_pre]:overflow-auto rounded-none"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-background/10 to-background/50 p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}
