"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { createContext } from "@/registry/lib/context"

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ value, onValueChange, defaultValue, ...props }, ref) => {
  const [activeTab, setActiveTab] = useControllableState({
    prop: value,
    defaultProp: defaultValue ?? "" ,
    onChange: onValueChange,
  })

  return (
    <TabsProvider value={{ activeTab, setActiveTab }}>
      <TabsPrimitive.Root
        ref={ref}
        value={activeTab}
        onValueChange={setActiveTab}
        {...props}
      />
    </TabsProvider>
  )
})
Tabs.displayName = TabsPrimitive.Root.displayName

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-8 items-center justify-center gap-2",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, value, ...props }, ref) => {
  return (
    <TabProvider value={{ value }}>
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          "group h-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground",
          className
        )}
        value={value}
        {...props}
      >
        {children}
      </TabsPrimitive.Trigger>
    </TabProvider>
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsTriggerIcon = React.forwardRef<
  React.ComponentRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("[&>svg]:w-4 [&>svg]:h-4", className)}
    {...props}
  />
))
TabsTriggerIcon.displayName = TabsPrimitive.Trigger.displayName

const TabsTriggerText = React.forwardRef<
  React.ComponentRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => {
  const { activeTab } = useTabsContext()
  const { value } = useTabContext()

  const isActive = value === activeTab

  const variants = {
    initial: {
      width: 0,
      opacity: 0,
    },
    animate: { width: "auto", opacity: 1 },
  }

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          ref={ref}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          className={cn("overflow-hidden", className)}
          {...props}
        >
          <span className="ml-1">{children}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
TabsTriggerText.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

interface TabsContextValue {
  activeTab: string | undefined
  setActiveTab: (value: string) => void
}

interface TabContextValue {
  value: string | undefined
}

const [TabsProvider, useTabsContext] = createContext<TabsContextValue>({
  activeTab: undefined,
  setActiveTab: () => {},
})

const [TabProvider, useTabContext] = createContext<TabContextValue>({
  value: undefined,
})

export {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
  TabsTriggerText,
  TabsTriggerIcon,
}

export { useTabsContext, useTabContext }