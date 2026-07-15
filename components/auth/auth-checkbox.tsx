"use client"

import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

interface AuthCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  children: React.ReactNode
  containerClassName?: string
}

export function AuthCheckbox({
  children,
  className,
  containerClassName,
  ...props
}: AuthCheckboxProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground",
        containerClassName,
      )}
    >
      <span className="relative mt-0.5 flex size-5 shrink-0">
        <input
          type="checkbox"
          className={cn("peer absolute inset-0 z-10 cursor-pointer opacity-0", className)}
          {...props}
        />
        <span className="flex size-5 items-center justify-center rounded-md border border-auth-line bg-auth-field text-primary-foreground shadow-sm transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:[&_svg]:scale-100 peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-4 peer-focus-visible:ring-primary/15">
          <Check className="size-3.5 scale-75 opacity-0 transition-all" />
        </span>
      </span>
      <span>{children}</span>
    </label>
  )
}
