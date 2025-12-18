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
const dialogOverlay = cva(
  "fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-opacity duration-300",
  {
    variants: {
      open: { true: "opacity-100", false: "opacity-0 pointer-events-none" },
    },
  }
);

const dialogContent = cva(
  "bg-white dark:bg-[#0b090a] rounded-xl shadow-lg p-6 w-[90%] max-w-md transition-transform duration-300",
  {
    variants: {
      open: { true: "scale-100 opacity-100", false: "scale-95 opacity-0" },
    },
  }
);

// ---------------- Context ----------------
const DialogCtx = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

function useDialog() {
  const ctx = useContext(DialogCtx);
  if (!ctx)
    throw new Error(
      "AlertDialog compound components must be inside <AlertDialog.Main>"
    );
  return ctx;
}

// ---------------- Main ----------------
type DialogMainProps = ComponentProps<"div"> & {
  defaultOpen?: boolean;
};

const DialogMain = forwardRef<HTMLDivElement, DialogMainProps>(
  ({ children, defaultOpen = false }, ref) => {
    const [open, setOpen] = useState(defaultOpen);

    // Close on ESC
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
      <DialogCtx.Provider value={{ open, setOpen }}>
        <div ref={ref}>{children}</div>
      </DialogCtx.Provider>
    );
  }
);
DialogMain.displayName = "AlertDialog.Main";

// ---------------- Trigger ----------------
type DialogTriggerProps = ComponentProps<"button"> & { children?: ReactNode };

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { setOpen } = useDialog();
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
  }
);
DialogTrigger.displayName = "AlertDialog.Trigger";

// ---------------- Content ----------------
type DialogContentProps = ComponentProps<"div"> & { children?: ReactNode };

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, ref) => {
    const { open, setOpen } = useDialog();

    return (
      <div
        className={cn(dialogOverlay({ open }), "flex")}
        onClick={() => setOpen(false)}
      >
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className={cn(dialogContent({ open }), className)}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);
DialogContent.displayName = "AlertDialog.Content";

// ---------------- Subcomponents ----------------
const DialogTitle = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <h2 className={cn("text-red-500 text-xl font-semibold mb-2", className)}>
    {children}
  </h2>
);

const DialogDescription = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <p className={cn("text-sm text-black dark:text-white mb-4", className)}>
    {children}
  </p>
);

const DialogActions = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex justify-end gap-3 mt-4", className)}>{children}</div>
);

const DialogCancel = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  const { setOpen } = useDialog();
  return (
    <button
      onClick={() => setOpen(false)}
      className={cn(
        "px-4 py-2 rounded-md border bg-white border-gray-300 hover:bg-white/90 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white transition text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const DialogConfirm = ({
  children,
  className,
  onClick,
  ...props
}: ComponentProps<"button">) => {
  const { setOpen } = useDialog();

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e); // ✅ use actual React synthetic event
    setOpen(false);
  };

  return (
    <button
      onClick={handleConfirm}
      className={cn(
        "px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// ---------------- Export ----------------
export const AlertDialog = {
  Main: DialogMain,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Actions: DialogActions,
  Cancel: DialogCancel,
  Confirm: DialogConfirm,
};

// ---------------- Example Usage ----------------
// export function AlertDialogExample() {
//   return (
//     <AlertDialog.Main>
//       <AlertDialog.Trigger>Delete Item</AlertDialog.Trigger>
//       <AlertDialog.Content>
//         <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
//         <AlertDialog.Description>
//           Are you sure you want to delete this item? This action cannot be undone.
//         </AlertDialog.Description>
//         <AlertDialog.Actions>
//           <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
//           <AlertDialog.Confirm onClick={() => alert("Deleted!")}>Delete</AlertDialog.Confirm>
//         </AlertDialog.Actions>
//       </AlertDialog.Content>
//     </AlertDialog.Main>
//   );
// }
