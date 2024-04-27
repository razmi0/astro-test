import type { ReactIconName } from "@/components/icons/ReactIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import { AccordionTrigger } from "@/components/ui/Accordion";

export default function Trigger({
  children,
  iconName,
  iconClass,
}: {
  children: React.ReactNode;
  iconName?: ReactIconName;
  iconClass?: string;
}) {
  return (
    <AccordionTrigger className="justify-start hover:bg-slate-300 hover:text-pur-500 transition-colors dark:hover:bg-slate-700 rounded-xl px-4">
      <div className="flex items-center w-full gap-3">
        {iconName && <ReactIcon name={iconName} className={`w-6 h-6 ${iconClass ? iconClass : ""}`} />}
        <span className="text-lg grandstander text-left">{children}</span>
      </div>
    </AccordionTrigger>
  );
}
