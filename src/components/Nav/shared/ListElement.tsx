import { NavigationMenuLink as MenuLink } from "@radix-ui/react-navigation-menu";
import type { ListElementType } from "./data";

/**
 *
 *
 *
 *
 *
 *
 * For NavDesktop & NavMobile
 * @description A component for repeated NavigationMenuLink
 *
 *
 *
 *
 *
 *
 *
 */
const ListElement = ({ title, description, anchor, mobile = false }: ListElementType & { mobile?: boolean }) => {
  const Main = () => (
    <li className="hover:bg-slate-200 dark:hover:bg-slate-700 py-2 transition-colors px-3 rounded-md w-full">
      <h4 className="text-base text-main-500 dark:text-main-300">{title}</h4>
      <p className="text-sm dark:text-defs-100 text-defs-900 text-balance">{description}</p>
    </li>
  );

  if (!mobile && anchor) {
    return (
      <MenuLink asChild>
        <a href={anchor}>
          <Main />
        </a>
      </MenuLink>
    );
  } else if (mobile && anchor) {
    return (
      <a href={anchor}>
        <Main />
      </a>
    );
  }
  return <Main />;
};

export default ListElement;
