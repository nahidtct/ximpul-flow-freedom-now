
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  },
);

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mockupVariants({ type, className }))}
      {...props}
    />
  ),
);
Mockup.displayName = "Mockup";

export { Mockup };
