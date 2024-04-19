import { Accordion, AccordionContent, AccordionItem } from "../ui/Accordion";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import ModeToggle from "../ui/ModeToggle";
import List from "./shared/List";
import ListElement from "./shared/ListElement";
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
      <DrawerTrigger className={triggerClass}>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="h-[85dvh] bg-slate-200 dark:bg-slate-800 text-black dark:text-white">
        <DrawerHeader className="flex-row w-full flex items-center">
          <ModeToggle />
        </DrawerHeader>
        <menu>
          <SimpleItem href={links[0].href}>Accueil</SimpleItem>
          <SimpleItem href={links[4].href}>Contact</SimpleItem>
          <SimpleItem href={links[2].href}>Qui nous sommes</SimpleItem>
          <Accordion type="single" collapsible className=" justify-center">
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
      </DrawerContent>
    </Drawer>
  );
}
