"use client";

import React from "react";
import { Select as BaseSelect } from "@base-ui/react/select";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

export interface SelectProps {
  value?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const Select = ({
  value,
  onValueChange,
  placeholder,
  label,
  error,
  children,
}: SelectProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          {label}
        </label>
      )}
      <BaseSelect.Root value={value} onValueChange={onValueChange}>
        <BaseSelect.Trigger
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-base text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-500",
          )}
        >
          <BaseSelect.Value placeholder={placeholder} />
          <BaseSelect.Icon>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner sideOffset={8}>
            <BaseSelect.Popup className="min-w-[200px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl z-50 p-1">
              {children}
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const SelectItem = React.forwardRef<
  HTMLDivElement,
  { value: string; children: React.ReactNode }
>(({ value, children }, ref) => (
  <BaseSelect.Item
    ref={ref}
    value={value}
    className="relative flex w-full cursor-pointer select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none hover:bg-zinc-100 dark:hover:bg-zinc-800 data-[highlighted]:bg-zinc-100 dark:data-[highlighted]:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <BaseSelect.ItemIndicator>
        <Check className="h-4 w-4 text-primary" />
      </BaseSelect.ItemIndicator>
    </span>
    <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
  </BaseSelect.Item>
));
SelectItem.displayName = "SelectItem";

export { Select, SelectItem };
