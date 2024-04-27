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
export default function ListElement({ children }: { children: React.ReactNode }) {
  return (
    <li className="px-4 flex items-center h-16 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 w-full">
      {children}
    </li>
  );
}

// const ListElement = ({ title, description, anchor, mobile = false }: ListElementType & { mobile?: boolean }) => {
//   const Main = () => (
//     <li className="hover:bg-slate-200 dark:hover:bg-slate-700 py-2 transition-colors px-3 rounded-md w-full">
//       <h4 className="text-base text-gr-500 dark:text-gr-400">{title}</h4>
//       <p className="text-sm dark:text-def-100 text-def-900 text-balance">{description}</p>
//     </li>
//   );

//   if (mobile && anchor) {
//     return (
//       <a href={anchor}>
//         <Main />
//       </a>
//     );
//   }
//   return <Main />;
// };
