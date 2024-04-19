import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import ModeToggle from "../ui/ModeToggle";
import MenuBody from "./shared/MenuBody";
import MenuHeader from "./shared/MenuHeader";
import MenuIcon from "./shared/MenuIcon";
import { triggerClass } from "./shared/data";

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
          <MenuHeader />
          <MenuBody />
        </menu>
      </DrawerContent>
    </Drawer>
  );
}
