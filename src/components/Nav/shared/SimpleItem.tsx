import type { ReactIconName } from "@/components/icons/ReactIcon";
import ReactIcon from "@/components/icons/ReactIcon";

export default function SimpleItem({
  children,
  href,
  iconName,
  iconClass,
}: {
  children: any;
  href: string;
  iconName?: ReactIconName;
  iconClass?: string;
}) {
  return (
    <li className="h-16 rounded-xl hover:bg-slate-300 hover:text-pur-500 transition-colors dark:hover:bg-slate-700 w-full px-4">
      <a href={href} className={`cursor-pointer h-full w-full flex items-center ${iconName && "gap-3"}`}>
        {iconName && <ReactIcon name={iconName} className={`w-6 h-6 ${iconClass ? iconClass : ""}`} />}
        <h3 className="text-lg grandstander">{children}</h3>
      </a>
    </li>
  );
}
