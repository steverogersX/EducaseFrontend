"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FloatingInput({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  className,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={floated ? (placeholder ?? "") : ""}
        className={cn(
          "w-full h-input rounded-input border bg-white font-rubik text-input-label text-app-text",
          "px-3 outline-none transition-colors duration-150",
          "placeholder:text-app-placeholder",
          focused ? "border-brand" : "border-app-border"
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-3 font-rubik transition-all duration-150",
          floated
            ? "top-0 -translate-y-1/2 text-floating-label text-brand bg-white px-1"
            : "top-1/2 -translate-y-1/2 text-input-label text-app-placeholder"
        )}
      >
        {label}
        {required && <span className="text-brand ml-0.5">*</span>}
      </label>
    </div>
  );
}
