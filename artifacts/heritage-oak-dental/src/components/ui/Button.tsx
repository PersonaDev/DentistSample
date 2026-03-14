import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 border border-transparent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent",
      outline: "border-2 border-primary text-primary hover:bg-primary/5 bg-transparent",
      ghost: "hover:bg-primary/10 text-primary bg-transparent",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
