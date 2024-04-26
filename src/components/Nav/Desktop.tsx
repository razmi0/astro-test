import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/Drawer";
import ModeToggle from "../ui/ModeToggle/ModeToggle";
import Spacer from "../ui/Spacer";
import Footer from "./shared/Footer";
import Logo from "./shared/Logo";
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
            <MenuHeader />
            <MenuBody />
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
