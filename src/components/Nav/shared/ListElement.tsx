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
      <h4 className="text-base text-gr-500 dark:text-gr-400">{title}</h4>
      <p className="text-sm dark:text-def-100 text-def-900 text-balance">{description}</p>
    </li>
  );

  if (mobile && anchor) {
    return (
      <a href={anchor}>
        <Main />
      </a>
    );
  }
  return <Main />;
};

export default ListElement;
