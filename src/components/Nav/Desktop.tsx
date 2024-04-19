// import {
//   NavigationMenuLink as MenuLink,
//   NavigationMenuTrigger as MenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/NavigationMenu";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import MenuIcon from "./shared/MenuIcon";
import { headerItemClass, links } from "./shared/data";

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
// const Trigger = ({ currentPath, children, href }: { currentPath: string; children: any; href: string }) => {
//   const isPath = currentPath.replace("/", "") === href.replace("/", "");
//   return (
//     <MenuTrigger
//       className={`bg-transparent ghost ${navigationMenuTriggerStyle()} ${
//         isPath ? "hover:border-gr-400" : "hover:border-white"
//       } `}
//       style={{ color: isPath ? "var(--color-gr-400)" : "inherit" }}
//     >
//       {children}
//     </MenuTrigger>
//   );
// };

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
 *
 */
// const NoContentItem = ({ label, href, currentPath }: { label: string; href: string; currentPath: string }) => {
//   const isPathClasses =
//     currentPath === href
//       ? "dark:hover:border-gr-400 dark:text-gr-400 text-gr-500 hover:border-gr-500"
//       : "hover:border-white";
//   return (
//     <MenuLink asChild>
//       <a href={href} className={`bg-transparent ghost ${navigationMenuTriggerStyle()} ${isPathClasses} `}>
//         {label}
//       </a>
//     </MenuLink>
//   );
// };

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
// const AsideMenuLink = ({ href }: { href: string }) => (
//   <MenuLink asChild>
//     <a href={href} className={menuLinkClass}>
//       <span className="flex flex-col justify-center items-start">
//         <LucideSquareArrowOutUpRight size={18} className="text-gr-500 dark:text-gr-400 mb-2" />
//         <h4 className="w-full text-gr-500 dark:text-gr-400">{generateLorem(3)}</h4>
//       </span>
//       <p className="text-sm">{generateLorem(20)}</p>
//     </a>
//   </MenuLink>
// );

const Logo = () => {
  return (
    <>
      <figure className="w-fit h-fit">
        <a href="/" aria-label="Home">
          <img
            src="logo.webp"
            width="52"
            height="52"
            decoding="async"
            loading="lazy"
            alt="Colorful logo of the company"
            className="rounded-sm"
          />
        </a>
      </figure>
    </>
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
export default function NavDesktop({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Drawer preventScrollRestoration direction="left">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent
          className="h-full w-1/3 max-w-[400px] bg-slate-200 dark:bg-slate-900 text-black dark:text-white rounded-none border-none p-0"
          handlerClassName="hidden"
        >
          <DrawerHeader className="flex-row w-full flex items-center justify-between pt-7 px-5">
            <Logo />
            <DrawerClose>
              <MenuIcon direction="left" />
            </DrawerClose>
          </DrawerHeader>
          <menu className="flex-col w-full flex items-start justify-center pt-14 px-5">
            <li className=" h-16 rounded-xl hover:bg-slate-300 w-full px-4">
              <a href={links[0].href} className="cursor-pointer h-full w-full flex items-center">
                <h3 className="text-lg grandstander">Accueil</h3>
              </a>
            </li>
            <li className=" h-16 rounded-xl hover:bg-slate-300 w-full px-4">
              <a href={links[4].href} className="cursor-pointer h-full w-full flex items-center">
                <h3 className="text-lg grandstander">Contact</h3>
              </a>
            </li>

            <li className=" h-16 rounded-xl hover:bg-slate-300 w-full px-4">
              <a href={links[2].href} className="cursor-pointer h-full w-full flex items-center">
                <h3 className="text-lg grandstander">Qui sommes-nous</h3>
              </a>
            </li>
            <Accordion type="single" collapsible asChild>
              <AccordionItem value={links[1].label} asChild>
                <li className="h-16 flex items-center rounded-xl hover:bg-slate-300 w-full px-4 [&>*]:w-full">
                  <AccordionTrigger className="justify-between">
                    <div className="text-lg grandstander w-full text-left">Activités et tarifs</div>
                  </AccordionTrigger>
                </li>
              </AccordionItem>
            </Accordion>
            <li className=" h-16 flex items-center rounded-xl hover:bg-slate-300 w-full px-4">
              <h3 className="text-lg grandstander">FAQ</h3>
            </li>
          </menu>

          {/* 

          export const links = [
  {
    href: "/",
    label: "Accueil",
    noContent: true,
  },
  {
    href: "/activities",
    label: "Nos activités et tarifs",
  },
  {
    href: "/about",
    label: "Qui sommes-nous",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  { href: "/contact", label: "Contact", noContent: true },
]; */}

          {/* <Accordion type="single" collapsible className="px-2 justify-center">
            <Item currentPath={currentPath} href={links[1].href} label={links[1].label}>
              <ul className="w-full flex flex-col h-full items-start justify-start">
                {content.activities.map((element) => (
                  <ListElement key={element.title} {...element} mobile />
                ))}
              </ul>
            </Item>
            <Item currentPath={currentPath} href={links[2].href} label={links[2].label}>
              <ul className="w-full">
                {content.about.map((element) => (
                  <ListElement key={element.title} {...element} mobile />
                ))}
              </ul>
            </Item>
            <Item currentPath={currentPath} href={links[3].href} label={links[3].label}>
              <ul className="w-full grid grid-cols-2">
                {content.faq.map((element) => (
                  <ListElement key={element.title} {...element} mobile />
                ))}
              </ul>
            </Item>
          </Accordion> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

const HeaderItem = ({
  href,
  currentPath,
  children,
  classNames,
}: {
  classNames?: string;
  href: string;
  currentPath: string;
  children: any;
}) => {
  const isPathStyle = currentPath.replace("/", "") === href.replace("/", "") ? "text-gr-500 dark:text-gr-400" : "";
  return (
    <a href={href} className={[headerItemClass, isPathStyle, classNames].join(" ")}>
      <LucideSquareArrowOutUpRight size={16} className="translate-y-[0px]" />
      {children}
    </a>
  );
};

const Item = ({
  currentPath,
  children,
  href,
  label,
}: {
  currentPath: string;
  children?: any;
  href: string;
  label: string;
}) => (
  <AccordionItem
    key={label}
    value={label}
    className="mb-3 border-black dark:border-white hover:text-gr-500 hover:dark:border-gr-400 hover:dark:text-gr-400 hover:border-gr-500 transition-colors"
  >
    <AccordionTrigger className="hover:no-underline no-underline ">
      <span
        className={`${currentPath.replace("/", "") === href.replace("/", "") ? "text-gr-500 dark:text-gr-400" : ""}`}
      >
        {label}
      </span>
    </AccordionTrigger>
    {children && <AccordionContent>{children}</AccordionContent>}
  </AccordionItem>
);

// {/* <Menu viewportClassName="right-0" className="me-4">
// <MenuList>
//   {/* ACCUEIL */}
//   {/* ACCUEIL */}
//   {/* ACCUEIL */}
//   {/* ACCUEIL */}
//   <NoContentItem currentPath={currentPath} href={links[0].href} label={links[0].label} />
//   {/* ACTIVITES */}
//   {/* ACTIVITES */}
//   {/* ACTIVITES */}
//   {/* ACTIVITES */}
//   <MenuItem>
//     <Trigger href={links[1].href} currentPath={currentPath}>
//       {links[1].label}
//     </Trigger>
//     <MenuContent className="flex flex-row p-5 h-[320px] gap-6 max-w-[600px] card">
//       <AsideMenuLink href={links[1].href} />
//       <ul className="w-[615px] flex flex-col h-full items-start justify-start">
//         {content.activities.map((element) => (
//           <ListElement key={element.title} {...element} />
//         ))}
//       </ul>
//     </MenuContent>
//   </MenuItem>
//   {/* QUI SOMMES NOUS (about)*/}
//   {/* QUI SOMMES NOUS */}
//   {/* QUI SOMMES NOUS */}
//   {/* QUI SOMMES NOUS */}
//   <MenuItem>
//     <Trigger href={links[2].href} currentPath={currentPath}>
//       {links[2].label}
//     </Trigger>
//     <MenuContent className="flex flex-row p-5 h-[320px] gap-6 max-w-[600px] card">
//       <AsideMenuLink href={links[2].href} />
//       <ul className="w-[615px]">
//         {content.about.map((element) => (
//           <ListElement key={element.title} {...element} />
//         ))}
//       </ul>
//     </MenuContent>
//   </MenuItem>
//   {/* FAQ */}
//   {/* FAQ */}
//   {/* FAQ */}
//   {/* FAQ */}
//   <MenuItem>
//     <Trigger href={links[3].href} currentPath={currentPath}>
//       {links[3].label}
//     </Trigger>
//     <MenuContent>
//       <ul className="w-[615px] grid grid-cols-2 p-5">
//         {content.faq.map((element) => (
//           <ListElement key={element.title} {...element} />
//         ))}
//       </ul>
//     </MenuContent>
//   </MenuItem>
//   {/* CONTACT */}
//   {/* CONTACT */}
//   {/* CONTACT */}
//   {/* CONTACT */}
//   <NoContentItem currentPath={currentPath} href={links[4].href} label={links[4].label} />
// </MenuList>
// </Menu> */}
