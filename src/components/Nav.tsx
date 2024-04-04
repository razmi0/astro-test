import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Nav({ links }: { links: { href: string; label: string }[] }) {
  return (
    <>
      <NavigationMenu data-is="MENU" className="">
        <NavigationMenuList data-is="LIST" className="">
          {links.map((link) => {
            const { href, label } = link;
            return (
              <NavigationMenuItem data-is="ITEM" key={label} className="bg-def-500">
                <NavigationMenuTrigger className="px-8" data-is="TRIGGER">
                  {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent data-is="CONTENT">
                  <NavigationMenuLink className="p-5 " href={href} data-is="LINK">
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
