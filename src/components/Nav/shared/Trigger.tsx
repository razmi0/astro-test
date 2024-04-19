import { AccordionTrigger } from "@/components/ui/Accordion";

export default function Trigger({ children }: { children: any }) {
  return (
    <AccordionTrigger className="justify-between hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl px-4">
      <span className="text-lg grandstander text-left">{children}</span>
    </AccordionTrigger>
  );
}
