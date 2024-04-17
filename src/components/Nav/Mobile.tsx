import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import { ModeToggle } from "../ui/ModeToggle";
import Spacer from "../ui/Spacer";
import ListElement from "./shared/ListElement";
import { content, headerItemClass, links } from "./shared/data";

const MenuIcon = () => {
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      className="pointer"
      transform="scale(-1, 1)"
    >
      <style>{`
          .rects > .rect-1 {
            width: 25px;
            transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
          }
          .rects > .rect-2 {
            width: 15px;
            transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
          }
          .rects > .rect-3 {
            width: 10px;
            transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
          }
          svg:hover > .rects > .rect-1 {
            width: 10px;
          }
          svg:hover > .rects > .rect-3 {
            width: 25px;
          }
        `}</style>
      <g className="rects">
        <rect y="25%" height="3" rx="1" className="rect-1" fill="#000" />
        <rect y="50%" height="3" rx="1" className="rect-2" fill="#000" />
        <rect y="75%" height="3" rx="1" className="rect-3" fill="#000" />
      </g>
    </svg>
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
 * @description NAVMOBILE COMPONENT
 *
 *
 *
 *
 *
 *
 *
 *
 */
export default function NavMobile({ currentPath }: { currentPath: string }) {
  return (
    <Drawer preventScrollRestoration>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="h-[85dvh] bg-slate-200 dark:bg-slate-800 text-black dark:text-white">
        <DrawerHeader className="flex-row w-full flex items-center">
          <HeaderItem href={links[0].href} currentPath={currentPath}>
            Accueil
          </HeaderItem>
          <HeaderItem href={links[4].href} currentPath={currentPath} classNames="ml-2">
            Contact
          </HeaderItem>
          <Spacer />
          <ModeToggle />
        </DrawerHeader>
        <Accordion type="single" collapsible className="px-2 justify-center">
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
        </Accordion>
      </DrawerContent>
    </Drawer>
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
  const isPathStyle = currentPath.replace("/", "") === href.replace("/", "") ? "text-main-500 dark:text-main-300" : "";
  return (
    <a href={href} className={[headerItemClass, isPathStyle, classNames].join(" ")}>
      <LucideSquareArrowOutUpRight size={16} className="translate-y-[0px]" />
      {children}
    </a>
  );
};

/**
 *
 *
 *
 *
 *
 *
 * For NavMobile
 * @description A AccordionItem with a AccordionTrigger and children is the content
 *
 *
 *
 *
 *
 *
 *
 */
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
    className="mb-3 border-black dark:border-white hover:text-main-500 hover:dark:border-main-300 hover:dark:text-main-300 hover:border-main-500 transition-colors"
  >
    <AccordionTrigger className="hover:no-underline no-underline ">
      <span
        className={`${
          currentPath.replace("/", "") === href.replace("/", "") ? "text-main-500 dark:text-main-300" : ""
        }`}
      >
        {label}
      </span>
    </AccordionTrigger>
    {children && <AccordionContent>{children}</AccordionContent>}
  </AccordionItem>
);
