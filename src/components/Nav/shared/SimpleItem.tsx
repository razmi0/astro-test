export default function SimpleItem({ children, href }: { children: any; href: string }) {
  return (
    <li className="h-16 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 w-full px-4">
      <a href={href} className="cursor-pointer h-full w-full flex items-center">
        <h3 className="text-lg grandstander">{children}</h3>
      </a>
    </li>
  );
}
