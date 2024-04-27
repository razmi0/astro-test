import { generateLorem } from "@/helpers";
import type { ImageNames } from "@/types";

export type ListElementType = {
  title?: string;
  description?: string;
  src?: ImageNames;
  anchor?: string;
};
export type SegmentType = {
  href: string;
  label: string;
  noContent?: boolean;
  components?: ListElementType[];
};

export const links = [
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

export const content = {
  activities: [
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "activities/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "activities/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "activities/#",
    },
  ],
  about: [
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "about/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "about/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "about/#",
    },
  ],
  faq: [
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
    {
      title: generateLorem(2),
      description: generateLorem(8),
      anchor: "faq/#",
    },
  ],
};

export const menuLinkClass = [
  // BASE
  "max-w-[40%] h-full rounded-md flex flex-col card items-start justify-evenly p-4 shadow-md",
  // LIGHT
  "bg-gradient-to-b from-slate-200/90 to-slate-300/90",
  // DARK
  "dark:bg-gradient-to-b dark:from-slate-800/90 dark:to-slate-900/90 dark:text-white",
  // HOVER
  "[&:hover>span>h4]:underline",
].join(" ");

export const headerItemClass = [
  // BASE
  "inline-flex gap-2 items-center font-medium transition-colors montserrat",
  // HOVER
  "hover:underline focus:underline",
].join(" ");

export const triggerClass = [
  // -- BASE
  // --
  "rounded-full card w-[56px] h-[56px] horizontal center",
  // -- HOVER
  // --
  "hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors",
  // -- THEME
  // --
  "bg-slate-300/80 dark:bg-slate-800/80",
  // -- PSEUDO-BASE
  // --
  "before:w-[inherit] before:h-[inherit] before:rounded-full before:blur-sm",
  // -- PSEUDO-POSITION
  // --
  "before:mt-10 before:ml-10 z-10 before:top-0 before:left-0 before:absolute",
  // -- PSEUDO-THEME
  // --
  "before:bg-slate-300/30 before:dark:bg-slate-900/30",
].join(" ");

export const lorems = ["Lorem ipsum dolor ", "consectetur", "sed do eiusmod"];
