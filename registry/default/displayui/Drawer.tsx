"use client";

import {
  ComponentProps,
  ReactNode,
  forwardRef,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";

// ---------------- Styles ----------------
const drawerOverlay = cva(
  "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
  {
    variants: {
      open: { true: "opacity-100", false: "opacity-0 pointer-events-none" },
    },
  }
);

const drawerContent = cva(
  "fixed bg-white dark:bg-[#0b090a] shadow-xl transition-transform duration-300",
  {
    variants: {
      open: {
        true: "translate-x-0 translate-y-0",
        false: "", // direction-specific when closed
      },
      side: {
        left: "top-0 left-0 h-full w-80",
        right: "top-0 right-0 h-full w-80",
        top: "top-0 left-0 w-full h-64",
        bottom: "bottom-0 left-0 w-full h-64",
      },
    },
    compoundVariants: [
      { side: "left", open: false, class: "-translate-x-full" },
      { side: "right", open: false, class: "translate-x-full" },
      { side: "top", open: false, class: "-translate-y-full" },
      { side: "bottom", open: false, class: "translate-y-full" },
    ],
  }
);

// ---------------- Context ----------------
type DrawerSide = "left" | "right" | "top" | "bottom";
const DrawerCtx = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
  side: DrawerSide;
} | null>(null);

function useDrawer() {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error("Drawer components must be inside <Drawer.Main>");
  return ctx;
}

// ---------------- Main ----------------
type DrawerMainProps = ComponentProps<"div"> & {
  defaultOpen?: boolean;
  side?: DrawerSide;
};

const DrawerMain = forwardRef<HTMLDivElement, DrawerMainProps>(
  ({ children, defaultOpen = false, side = "right" }, ref) => {
    const [open, setOpen] = useState(defaultOpen);

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
      <DrawerCtx.Provider value={{ open, setOpen, side }}>
        <div ref={ref}>{children}</div>
      </DrawerCtx.Provider>
    );
  }
);
DrawerMain.displayName = "Drawer.Main";

// ---------------- Trigger ----------------
const DrawerTrigger = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & { children?: ReactNode }
>(({ children, className, ...props }, ref) => {
  const { setOpen } = useDrawer();
  return (
    <button
      ref={ref}
      onClick={() => setOpen(true)}
      className={cn(
        "px-4 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
DrawerTrigger.displayName = "Drawer.Trigger";

// ---------------- Content ----------------
const DrawerContent = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & { children?: ReactNode }
>(({ children, className, ...props }, ref) => {
  const { open, setOpen, side } = useDrawer();
  return (
    <div
      className={cn(drawerOverlay({ open }), "flex")}
      onClick={() => setOpen(false)}
    >
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={cn(drawerContent({ open, side }), className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
DrawerContent.displayName = "Drawer.Content";

// ---------------- Subcomponents ----------------
const DrawerHeader = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "p-4 border-b border-gray-200 dark:border-gray-700",
      className
    )}
  >
    {children}
  </div>
);
const DrawerBody = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <div className={cn("p-4 flex-1 overflow-auto", className)}>{children}</div>
);
const DrawerFooter = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "p-4 border-t border-gray-200 dark:border-gray-700",
      className
    )}
  >
    {children}
  </div>
);

const DrawerClose = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  const { setOpen } = useDrawer();
  return (
    <button
      onClick={() => setOpen(false)}
      className={cn(
        "px-4 py-2 rounded-md border bg-white border-gray-300 hover:bg-white/90 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white transition text-sm",
        className
      )}
      {...props}
    >
      {children || "Close"}
    </button>
  );
};

// ---------------- Export ----------------
export const Drawer = {
  Main: DrawerMain,
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Close: DrawerClose,
};

// ---------------- Example ----------------
// export function DrawerExample() {
//   return (
//     <Drawer.Main side="left">
//       <Drawer.Trigger>Open Drawer</Drawer.Trigger>
//       <Drawer.Content>
//         <Drawer.Header>Drawer Title</Drawer.Header>
//         <Drawer.Body>
//           <p>Your drawer content goes here.</p>
//         </Drawer.Body>
//         <Drawer.Footer>
//           <Drawer.Close>Close</Drawer.Close>
//         </Drawer.Footer>
//       </Drawer.Content>
//     </Drawer.Main>
//   );
// }
