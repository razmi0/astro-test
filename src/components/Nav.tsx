import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { generateLorem } from "@/helpers";
import type { ImageNames } from "@/types";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "./ui/Drawer";
import { ModeToggle } from "./ui/ModeToggle";

type ListElementType = {
  title?: string;
  description?: string;
  src?: ImageNames;
  anchor?: string;
};
export type ContentType = {
  href: string;
  label: string;
  noContent?: boolean;
  components?: ListElementType[];
};

const links = [
  {
    href: "/",
    label: "Accueil",
    noContent: true,
  },
  {
    href: "/activities",
    label: "Nos activités et tarifs",
  },
  {
    href: "/about",
    label: "Qui sommes-nous",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  { href: "/contact", label: "Contact", noContent: true },
];

const content = {
  activities: [
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "activities/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "activities/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "activities/#",
    },
  ],
  about: [
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "about/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "about/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "about/#",
    },
  ],
  faq: [
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(10),
      anchor: "faq/#",
    },
  ],
};

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
        <rect y="25%" height="3" rx="1" className="rect-1" fill="#FFF" />
        <rect y="50%" height="3" rx="1" className="rect-2" fill="#FFF" />
        <rect y="75%" height="3" rx="1" className="rect-3" fill="#FFF" />
      </g>
    </svg>
  );
};

export function NavDesktop({ currentPath }: { currentPath: string }) {
  const NoContentItem = ({ label, href }: { label: string; href: string }) => {
    return (
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={`bg-transparent ghost ${navigationMenuTriggerStyle()} ${
            currentPath === href ? "hover:border-main-300" : "hover:border-white"
          } `}
          style={{ color: currentPath === href ? "var(--color-main-300)" : "inherit" }}
        >
          {label}
        </a>
      </NavigationMenuLink>
    );
  };
  return (
    <>
      <NavigationMenu viewportClassName="right-0" className="me-4">
        <NavigationMenuList>
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          {/* ACCUEIL */}
          <NoContentItem href={links[0].href} label={links[0].label} />
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          {/* ACTIVITES */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{links[1].label}</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-row p-5 h-[300px] gap-6 max-w-[600px]">
              <div className="max-w-[40%] h-full rounded-md flex items-center justify-center">
                <NavigationMenuLink asChild>
                  <a href={links[1].href}>
                    <figure className="rounded-md">
                      <img
                        className="object-cover aspect-[14/16] rounded-md"
                        src="src/assets/oak.webp"
                        alt="placeholder"
                      />
                    </figure>
                  </a>
                </NavigationMenuLink>
              </div>
              <ul className="w-[615px] flex flex-col h-full items-start justify-between">
                {content.activities.map((element) => (
                  <li key={element.title} className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 rounded-md">
                    <ListElement {...element} />
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* QUI SOMMES NOUS (about)*/}
          {/* QUI SOMMES NOUS */}
          {/* QUI SOMMES NOUS */}
          {/* QUI SOMMES NOUS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{links[2].label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>
                <h4></h4>
                <p></p>
              </div>
              <ul className="w-[615px]">
                {content.about.map((element) => (
                  <li key={element.title}>
                    <ListElement {...element} />
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* FAQ */}
          {/* FAQ */}
          {/* FAQ */}
          {/* FAQ */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{links[3].label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[615px]">
                {content.faq.map((element) => (
                  <li key={element.title}>
                    <ListElement {...element} />
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* CONTACT */}
          {/* CONTACT */}
          {/* CONTACT */}
          {/* CONTACT */}
          <NoContentItem href={links[4].href} label={links[4].label} />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export function NavMobile({ currentPath }: { currentPath: string }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="h-[85dvh]">
        <DrawerHeader className="flex-row-reverse w-full flex items-center">
          <ModeToggle />
        </DrawerHeader>
        {/* <Accordion type="single" collapsible className="px-2 justify-center">
          {content.map((element) => {
            const { href, label } = element;
            return (
              <AccordionItem key={label} value={label} className="mb-3">
                <AccordionTrigger className=" hover:no-underline no-underline">
                  <span className={`${currentPath === href ? "text-main-300" : ""}`}>{label}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <a href={href}>{label}</a>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion> */}
      </DrawerContent>
    </Drawer>
  );
}

const ListElement = ({ title, description, anchor }: ListElementType) => {
  const Main = () => (
    <>
      <h4 className="text-base text-black dark:text-white">{title}</h4>
      <p className="text-sm dark:text-slate-100 text-balance">{description}</p>
    </>
  );

  return anchor ? (
    <NavigationMenuLink asChild>
      <a href={anchor}>
        <Main />
      </a>
    </NavigationMenuLink>
  ) : (
    <Main />
  );
};

//
//
//
//
//
//
//
//
//
//

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description: "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description: "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and paste into your apps. Accessible.
//                       Customizable. Open Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem key={component.title} title={component.title} href={component.href}>
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );
// ListItem.displayName = "ListItem";

// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
