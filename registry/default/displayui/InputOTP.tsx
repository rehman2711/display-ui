"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  FocusEvent,
  CompositionEvent,
} from "react";
import { cn } from "@/registry/lib/utils";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  value?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  ariaLabel?: string;
}

export function OTPInput({
  length = 4,
  onComplete,
  value,
  autoFocus = true,
  disabled = false,
  containerClassName = "",
  inputClassName = "",
  ariaLabel = "One-time passcode",
}: OTPInputProps) {
  const [internalOtp, setInternalOtp] = useState<string[]>(() =>
    Array(length).fill("")
  );
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  // const inputsRef = useRef<HTMLInputElement[]>([]);
  const compositionRef = useRef(false);

  const otp =
    typeof value === "string" ? value.slice(0, length).split("") : internalOtp;

  const updateOtp = (next: string[]) => {
    if (!value) setInternalOtp(next);
    if (next.every((d) => d !== "")) onComplete?.(next.join(""));
  };

  const focusInput = (idx: number) => {
    const el = inputsRef.current[idx];
    if (el) {
      el.focus();
      try {
        el.setSelectionRange(0, 1);
      } catch {}
    }
  };

  useEffect(() => {
    if (autoFocus && !value) {
      const firstEmpty = internalOtp.findIndex((d) => d === "");
      focusInput(firstEmpty !== -1 ? firstEmpty : 0);
    }
  }, [autoFocus, internalOtp, value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    if (compositionRef.current) return;
    const digit = e.target.value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[idx] = digit || "";
    updateOtp(next);
    if (digit && idx < length - 1) focusInput(idx + 1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    const next = [...otp];
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (idx > 0) focusInput(idx - 1);
        break;
      case "ArrowRight":
        e.preventDefault();
        if (idx < length - 1) focusInput(idx + 1);
        break;
      case "Backspace":
        e.preventDefault();
        if (next[idx] !== "") {
          next[idx] = "";
          updateOtp(next);
        } else if (idx > 0) {
          next[idx - 1] = "";
          updateOtp(next);
          focusInput(idx - 1);
        }
        break;
      case "Delete":
        e.preventDefault();
        next[idx] = "";
        updateOtp(next);
        focusInput(idx);
        break;
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>, idx: number) => {
    e.preventDefault();
    const digits = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length - idx)
      .split("");
    const next = [...otp];
    digits.forEach((d, i) => (next[idx + i] = d));
    updateOtp(next);
    focusInput(Math.min(idx + digits.length, length - 1));
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    try {
      e.target.setSelectionRange(0, 1);
    } catch {}
  };

  const handleCompositionStart = () => (compositionRef.current = true);
  const handleCompositionEnd = (
    e: CompositionEvent<HTMLInputElement>,
    idx: number
  ) => {
    compositionRef.current = false;
    handleChange(e as unknown as ChangeEvent<HTMLInputElement>, idx);
  };

  const getInputClass = (i: number) =>
    cn(
      "w-12 h-12 text-center text-lg font-medium border border-gray-300 text-black bg-white",
      i === 0 ? "rounded-l-md" : i === length - 1 ? "rounded-r-md" : "-ml-px",
      "focus:z-10 outline-none focus:ring-2 focus:ring-black/60",
      inputClassName
    );

  return (
    <div
      className={cn("inline-flex items-center", containerClassName)}
      role="group"
      aria-label={ariaLabel}
    >
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el ?? null;
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={otp[i] ?? ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={(e) => handlePaste(e, i)}
          onFocus={handleFocus}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={(e) => handleCompositionEnd(e, i)}
          disabled={disabled}
          aria-label={`${ariaLabel} digit ${i + 1}`}
          className={getInputClass(i)}
        />
      ))}
    </div>
  );
}
