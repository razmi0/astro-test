import {
  NavigationMenu as Menu,
  NavigationMenuContent as MenuContent,
  NavigationMenuItem as MenuItem,
  NavigationMenuLink as MenuLink,
  NavigationMenuList as MenuList,
  NavigationMenuTrigger as MenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { generateLorem } from "@/helpers";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { content, links, menuLinkClass } from "./shared/data";
import ListElement from "./shared/ListElement";

/**
 *
 *
 *
 *
 *
 *
 * For NavDesktop
 * @description The trigger for the NavDesktop
 *
 *
 *
 *
 *
 *
 */
const Trigger = ({ currentPath, children, href }: { currentPath: string; children: any; href: string }) => {
  const isPath = currentPath.replace("/", "") === href.replace("/", "");
  return (
    <MenuTrigger
      className={`bg-transparent ghost ${navigationMenuTriggerStyle()} ${
        isPath ? "hover:border-main-300" : "hover:border-white"
      } `}
      style={{ color: isPath ? "var(--color-main-300)" : "inherit" }}
    >
      {children}
    </MenuTrigger>
  );
};

/**
 *
 *
 *
 *
 *
 *
 *
 * For NavDesktop
 * @description Just the trigger with no content in NavigationMenu
 *
 *
 *
 *
 *
 *text-main-500 dark:text-main-300
 *
 */
const NoContentItem = ({ label, href, currentPath }: { label: string; href: string; currentPath: string }) => {
  const isPathClasses =
    currentPath === href
      ? "dark:hover:border-main-300 dark:text-main-300 text-main-500 hover:border-main-500"
      : "hover:border-white";
  return (
    <MenuLink asChild>
      <a href={href} className={`bg-transparent ghost ${navigationMenuTriggerStyle()} ${isPathClasses} `}>
        {label}
      </a>
    </MenuLink>
  );
};

/**
 *
 *
 *
 *
 *
 *
 * NAVDESKTOP
 * @description The big item in the content of a element of NavDesktop
 *
 *
 *
 *
 *
 *
 *
 *
 */
const AsideMenuLink = ({ href }: { href: string }) => (
  <MenuLink asChild>
    <a href={href} className={menuLinkClass}>
      <span className="flex flex-col justify-center items-start">
        <LucideSquareArrowOutUpRight size={18} className="text-main-500 dark:text-main-300 mb-2" />
        <h4 className="w-full text-main-500 dark:text-main-300">{generateLorem(3)}</h4>
      </span>
      <p className="text-sm">{generateLorem(20)}</p>
    </a>
  </MenuLink>
);

/**
 *
 *
 *
 *
 *
 *
 *
 * @description NAVDESKTOP COMPONENT
 *
 *
 *
 *
 *
 *
 *
 *
 */
export function NavDesktop({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Menu viewportClassName="right-0" className="me-4">
        <MenuList>
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          <NoContentItem currentPath={currentPath} href={links[0].href} label={links[0].label} />
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          <MenuItem>
            <Trigger href={links[1].href} currentPath={currentPath}>
              {links[1].label}
            </Trigger>
            <MenuContent className="flex flex-row p-5 h-[320px] gap-6 max-w-[600px] card">
              <AsideMenuLink href={links[1].href} />
              <ul className="w-[615px] flex flex-col h-full items-start justify-start">
                {content.activities.map((element) => (
                  <ListElement key={element.title} {...element} />
                ))}
              </ul>
            </MenuContent>
          </MenuItem>
          {/* QUI SOMMES NOUS (about)*/}
          {/* QUI SOMMES NOUS */}
          {/* QUI SOMMES NOUS */}
          {/* QUI SOMMES NOUS */}
          <MenuItem>
            <Trigger href={links[2].href} currentPath={currentPath}>
              {links[2].label}
            </Trigger>
            <MenuContent className="flex flex-row p-5 h-[320px] gap-6 max-w-[600px] card">
              <AsideMenuLink href={links[2].href} />
              <ul className="w-[615px]">
                {content.about.map((element) => (
                  <ListElement key={element.title} {...element} />
                ))}
              </ul>
            </MenuContent>
          </MenuItem>
          {/* FAQ */}
          {/* FAQ */}
          {/* FAQ */}
          {/* FAQ */}
          <MenuItem>
            <Trigger href={links[3].href} currentPath={currentPath}>
              {links[3].label}
            </Trigger>
            <MenuContent>
              <ul className="w-[615px] grid grid-cols-2 p-5">
                {content.faq.map((element) => (
                  <ListElement key={element.title} {...element} />
                ))}
              </ul>
            </MenuContent>
          </MenuItem>
          {/* CONTACT */}
          {/* CONTACT */}
          {/* CONTACT */}
          {/* CONTACT */}
          <NoContentItem currentPath={currentPath} href={links[4].href} label={links[4].label} />
        </MenuList>
      </Menu>
    </>
  );
}
