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
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => {
            const { href, label } = link;
            return (
              <NavigationMenuItem key={label}>
                <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="p-5" href={href}>
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
