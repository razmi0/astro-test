import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import { ModeToggle } from "../ui/ModeToggle";
import Spacer from "../ui/Spacer";
import MenuIcon from "./shared/MenuIcon";
import { links } from "./shared/data";

const lorems = ["Lorem ipsum dolor ", "consectetur", "sed do eiusmod"];

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
          <menu className="flex flex-col w-full  items-start justify-center pt-14 px-5">
            <SimpleItem href={links[0].href}>Accueil</SimpleItem>
            <SimpleItem href={links[4].href}>Contact</SimpleItem>
            <SimpleItem href={links[2].href}>Qui nous sommes</SimpleItem>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={links[1].label} key={links[1].label} className="items-center">
                <Trigger>Activités et tarifs</Trigger>
                <AccordionContent asChild>
                  <List>
                    {lorems.map((label) => (
                      <ListElement key={label}>{label}</ListElement>
                    ))}
                  </List>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={links[3].label} key={links[3].label} className="items-center">
                <Trigger>FAQ</Trigger>
                <AccordionContent asChild>
                  <List>
                    {lorems.map((label) => (
                      <ListElement key={label}>{label}</ListElement>
                    ))}
                  </List>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </menu>
          <Spacer />
          <Footer>
            <ModeToggle />
          </Footer>
        </DrawerContent>
      </Drawer>
    </>
  );
}

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

const SimpleItem = ({ children, href }: { children: any; href: string }) => (
  <li className="h-16 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 w-full px-4">
    <a href={href} className="cursor-pointer h-full w-full flex items-center">
      <h3 className="text-lg grandstander">{children}</h3>
    </a>
  </li>
);

const Trigger = ({ children }: { children: any }) => (
  <AccordionTrigger className="justify-between hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl px-4">
    <span className="text-lg grandstander text-left">{children}</span>
  </AccordionTrigger>
);

const Footer = ({ children }: { children: any }) => (
  <div className="w-full h-20 bg-slate-100 dark:bg-slate-700 flex items-center px-8">{children}</div>
);

const List = ({ children }: { children: any }) => (
  <ul className="px-6 ms-6 w-full text-lg grandstander flex flex-col justify-evenly border-transparent border-s-4 border-s-slate-300 dark:border-s-slate-700">
    {children}
  </ul>
);

const ListElement = ({ children }: { children: any }) => (
  <li className="px-4 flex items-center h-16 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 w-full">
    {children}
  </li>
);
