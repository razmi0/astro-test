import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import { ModeToggle } from "../ui/ModeToggle";
import Spacer from "../ui/Spacer";
import ListElement from "./shared/ListElement";
import MenuIcon from "./shared/MenuIcon";
import { content, headerItemClass, links } from "./shared/data";

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
export default function NavMobile() {
  return (
    <Drawer preventScrollRestoration>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="h-[85dvh] bg-slate-200 dark:bg-slate-800 text-black dark:text-white">
        <DrawerHeader className="flex-row w-full flex items-center">
          <HeaderItem href={links[0].href}>Accueil</HeaderItem>
          <HeaderItem href={links[4].href} classNames="ml-2">
            Contact
          </HeaderItem>
          <Spacer />
          <ModeToggle />
        </DrawerHeader>
        <Accordion type="single" collapsible className="px-2 justify-center">
          <Item label={links[1].label}>
            <ul className="w-full flex flex-col h-full items-start justify-start">
              {content.activities.map((element) => (
                <ListElement key={element.title} {...element} mobile />
              ))}
            </ul>
          </Item>
          <Item label={links[2].label}>
            <ul className="w-full">
              {content.about.map((element) => (
                <ListElement key={element.title} {...element} mobile />
              ))}
            </ul>
          </Item>
          <Item label={links[3].label}>
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

const HeaderItem = ({ href, children, classNames }: { classNames?: string; href: string; children: any }) => {
  return (
    <a href={href} className={[headerItemClass, classNames].join(" ")}>
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
const Item = ({ children, label }: { children?: any; label: string }) => (
  <AccordionItem
    key={label}
    value={label}
    className="mb-3 border-none hover:text-gr-500 hover:dark:border-gr-400 hover:dark:text-gr-400 hover:border-gr-500 transition-colors"
  >
    <AccordionTrigger className="hover:no-underline no-underline ">{label}</AccordionTrigger>
    {children && <AccordionContent>{children}</AccordionContent>}
  </AccordionItem>
);
