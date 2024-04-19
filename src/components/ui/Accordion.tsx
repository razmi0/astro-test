import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const ChevronDown = ({ className, ...props }: { className?: string }) => (
  <svg
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentcolor"
    className={className}
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="currentcolor" transform="translate(32.000000, 42.666667)">
        <path d="M246.3129 5.6289C252.9276 9.4087 258.4096 14.8907 262.1894 21.5054L444.667 340.8413C456.3581 361.3007 449.25 387.3638 428.7906 399.0549 422.3438 402.7388 415.0471 404.6766 407.622 404.6766L42.6667 404.6766C19.1025 404.6766 0 385.574 0 362.0099 0 354.5847 1.9377 347.2881 5.6216 340.8413L188.0993 21.5054C199.7904 1.046 225.8535-6.0622 246.3129 5.6289Z"></path>
      </g>
    </g>
  </svg>
);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={className} {...props} />);
AccordionItem.displayName = "AccordionItem";

const triggerClass = [
  // BASE
  "flex flex-1 items-center justify-between py-4 font-medium transition-all",
  // HOVER
  "hover:underline",
].join(" ");

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(triggerClass, "[&[data-state=open]>svg]:rotate-180", className)}
      {...props}
    >
      {children}
      <ChevronDown className="h-3 w-3 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
