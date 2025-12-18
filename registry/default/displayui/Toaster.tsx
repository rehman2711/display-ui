"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  forwardRef,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/registry/lib/utils";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------- Types ----------------
interface Toast {
  id: number;
  message: string;
  toastType: "success" | "error" | "info" | "warning";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  duration?: number;
}

interface ToastContextProps {
  showToast: (toast: Omit<Toast, "id">) => void;
}

// ---------------- Context ----------------
const ToasterCtx = createContext<ToastContextProps | null>(null);

export function useToast() {
  const ctx = useContext(ToasterCtx);
  if (!ctx) throw new Error("useToast must be used inside <Toaster.Main>");
  return ctx;
}

// ---------------- Main ----------------
interface ToasterMainProps {
  children: ReactNode;
}

export const ToasterMain = ({ children }: ToasterMainProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = ({
    message,
    toastType = "info",
    position = "top-right",
    duration = 3000,
  }: Omit<Toast, "id">) => {
    const id = Date.now();
    const newToast = { id, message, toastType, position, duration };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration + 300);
  };

  return (
    <ToasterCtx.Provider value={{ showToast }}>
      {children}
      {/* Floating toasts container */}
      {["top-right", "top-left", "bottom-right", "bottom-left"].map((pos) => {
        const filtered = toasts.filter((t) => t.position === pos);
        if (!filtered.length) return null;
        return (
          <div
            key={pos}
            className={cn(
              "fixed z-50 flex flex-col gap-2",
              pos.includes("top") ? "top-4" : "bottom-4",
              pos.includes("right") ? "right-4" : "left-4"
            )}
          >
            <AnimatePresence>
              {filtered.map((toast) => (
                <ToasterItem key={toast.id} {...toast} />
              ))}
            </AnimatePresence>
          </div>
        );
      })}
    </ToasterCtx.Provider>
  );
};
ToasterMain.displayName = "Toaster.Main";

// ---------------- Item ----------------
const ToasterItem = ({
  message,
  toastType,
  position = "top-right",
  duration = 3000,
}: Toast) => {
  const [progress, setProgress] = useState(100);

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p > 0 ? p - 100 / (duration / 100) : 0));
    }, 100);
    return () => clearInterval(interval);
  }, [duration]);

  const icons = {
    success: <CheckCircle size={20} />,
    error: <XCircle size={20} />,
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
  };

  // Motion animation based on position
  const motionVariants = {
    initial: {},
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {},
  };

  switch (position) {
    case "top-right":
      motionVariants.initial = { opacity: 0, x: 100, y: -20, scale: 0.8 };
      motionVariants.exit = { opacity: 0, x: 100, y: -20, scale: 0.8 };
      break;
    case "top-left":
      motionVariants.initial = { opacity: 0, x: -100, y: -20, scale: 0.8 };
      motionVariants.exit = { opacity: 0, x: -100, y: -20, scale: 0.8 };
      break;
    case "bottom-right":
      motionVariants.initial = { opacity: 0, x: 100, y: 20, scale: 0.8 };
      motionVariants.exit = { opacity: 0, x: 100, y: 20, scale: 0.8 };
      break;
    case "bottom-left":
      motionVariants.initial = { opacity: 0, x: -100, y: 20, scale: 0.8 };
      motionVariants.exit = { opacity: 0, x: -100, y: 20, scale: 0.8 };
      break;
  }

  return (
    <motion.div
      role="alert"
      aria-live="assertive"
      initial={motionVariants.initial}
      animate={motionVariants.animate}
      exit={motionVariants.exit}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        "flex items-center gap-2 rounded-md shadow-lg text-white text-sm p-4 min-w-[240px] relative",
        {
          "bg-green-600": toastType === "success",
          "bg-red-600": toastType === "error",
          "bg-blue-600": toastType === "info",
          "bg-yellow-500 text-black": toastType === "warning",
        }
      )}
    >
      {icons[toastType]}
      <span>{message}</span>
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-white/40"
        style={{ width: `${progress}%` }}
      />
    </motion.div>
  );
};

// ---------------- Trigger ----------------
interface ToasterTriggerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  message: string;
  toastType?: "success" | "error" | "info" | "warning";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  duration?: number;
  children: ReactNode;
}

export const ToasterTrigger = forwardRef<
  HTMLButtonElement,
  ToasterTriggerProps
>(
  (
    {
      message,
      toastType = "info",
      position,
      duration,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const { showToast } = useToast();
    return (
      <button
        ref={ref}
        onClick={() => showToast({ message, toastType, position, duration })}
        className={cn("px-3 py-2 rounded-lg text-white text-sm", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ToasterTrigger.displayName = "Toaster.Trigger";

// ---------------- Export ----------------
export const Toaster = {
  Main: ToasterMain,
  Trigger: ToasterTrigger,
};
