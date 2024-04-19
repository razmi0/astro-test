import { Accordion, AccordionContent, AccordionItem } from "../ui/Accordion";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import ModeToggle from "../ui/ModeToggle";
import Spacer from "../ui/Spacer";
import Footer from "./shared/Footer";
import List from "./shared/List";
import ListElement from "./shared/ListElement";
import Logo from "./shared/Logo";
import MenuIcon from "./shared/MenuIcon";
import SimpleItem from "./shared/SimpleItem";
import Trigger from "./shared/Trigger";
import { links, lorems, triggerClass } from "./shared/data";

/**
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
export default function NavDesktop() {
  return (
    <>
      <Drawer preventScrollRestoration direction="left">
        <DrawerTrigger className={triggerClass}>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent
          className="h-full min-w-[300px] w-1/3 max-w-[400px] bg-slate-200 dark:bg-slate-800 text-black dark:text-white rounded-none border-none p-0"
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
