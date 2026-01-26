"use client";

import * as React from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "@/lib/utils";

/**
 * A reusable Field component built on Base UI primitives.
 * Provides the context for Label, Control, and Messages.
 */
export const FieldRoot = ({ className, ...props }: BaseField.Root.Props) => {
  return (
    <BaseField.Root
      className={cn("flex flex-col gap-2 w-full", className)}
      {...props}
    />
  );
};

export const FieldLabel = ({ className, ...props }: BaseField.Label.Props) => {
  return (
    <BaseField.Label
      className={cn(
        "text-sm font-medium text-zinc-900 dark:text-zinc-100",
        className,
      )}
      {...props}
    />
  );
};

export const FieldControl = ({
  className,
  render,
  ...props
}: BaseField.Control.Props) => {
  return (
    <BaseField.Control
      render={render}
      className={cn(
        "flex h-12 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 text-base text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};

export const FieldDescription = ({
  className,
  ...props
}: BaseField.Description.Props) => {
  return (
    <BaseField.Description
      className={cn("text-xs text-zinc-500 dark:text-zinc-400", className)}
      {...props}
    />
  );
};

export const FieldError = ({ className, ...props }: BaseField.Error.Props) => {
  return (
    <BaseField.Error
      className={cn("text-xs font-medium text-red-500", className)}
      {...props}
    />
  );
};

// Exporting as a single object for convenient usage
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Description: FieldDescription,
  Error: FieldError,
};
