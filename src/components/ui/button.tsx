import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {  
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
       
        // NEW VARIANTS
        primary: "bg-blue-dark rounded-radius py-2 px-4 text-primary-foreground hover:bg-blue-intense",
        destructive: "bg-purple rounded-radius py-2 px-4 text-primary-foreground hover:bg-purple-bright",
        disable: "bg-blue-dark/50  rounded-radius py-2 px-4 text-primary-foreground",
        outline: "bg-white  rounded-radius py-2 px-4 text-primary-foreground hover:bg-gray-light border ",
        subtle: "bg-gray-light  rounded-radius py-2 px-4 text-primary-foreground hover:bg-gray-cool",
        ghost: "sharedProperties rounded-radius text-primary hover:bg-gray-light",
        link: "sharedProperties rounded-radius text-primary hover:underline",
       
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
