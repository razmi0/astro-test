import type { SegmentProps } from "@/components/Segment/Segment.astro";
import colorThemes from "@/components/ui/Color/data";
import { generateLorem } from "@/helpers";
import type { ScreenUnitProps } from "@/layouts/ScreenUnit.astro";
import type { SegmentFormat } from "@/types";

type ScreenUnitType = {
  [key: string]: Omit<ScreenUnitProps, "children"> & { children?: any };
};
//
type SegmentType<T extends SegmentFormat> = {
  [key: string]: SegmentProps<T>;
};

const thresholds = {
  wrapper: {
    header: 0.5,
    content: 0.5,
  },
  text: 1,
};

const wrappers: ScreenUnitType = {
  fondateurHeader: {
    theme: "light",
    wrapper: {
      name: "fondateur",
      threshold: thresholds.wrapper.header,
      size: "quarter",
      className: "pb-0 md:pb-0 flex items-start",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "fondateur",
      text: "Les fondateurs",
      direction: "ltr",
    },
  },
  fondateurVijay: {
    theme: "light",
    wrapper: {
      threshold: thresholds.wrapper.content,
      size: "half",
      className: "pb-12 !pt-0",
    },
  },
  fondateurLou: {
    theme: "light",
    wrapper: {
      threshold: thresholds.wrapper.content,
      size: "half",
      className: "pb-12",
    },
  },
  histoireHeader: {
    theme: "dark",
    wrapper: {
      name: "histoire",
      threshold: thresholds.wrapper.header,
      size: "quarter",
      className: "pb-0 md:pb-0 flex items-start",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "histoire",
      text: "Notre histoire",
      direction: "rtl",
      className: "",
    },
  },
  histoire: {
    theme: "dark",
    wrapper: {
      threshold: thresholds.wrapper.content,
      size: "half",
      className: "pb-12 !pt-0",
    },
  },

  hookHeaderPrimary: {
    theme: "dark",
    wrapper: {
      name: "hookHeaderPrimary",
      threshold: thresholds.wrapper.header,
      size: "quarter",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "hookHeaderPrimary",
      text: generateLorem(5),
      direction: "rtl",
      className: "ps-3",
    },
  },
  hookPrimary: {
    theme: "dark",
    wrapper: {
      name: "hookHeaderPrimary",
      threshold: thresholds.wrapper.content,
      size: "threeQuarter",
      className: "pb-12 !pt-0 flex flex-col gap-12 xl:flex-row justify-evenly items-center w-full",
    },
  },
  hookHeaderSecondary: {
    theme: "light",
    wrapper: {
      name: "hookHeaderSecondary",
      threshold: thresholds.wrapper.header,
      size: "quarter",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "hookHeaderSecondary",
      text: generateLorem(5),
      direction: "ltr",
      className: "ps-3",
    },
  },
  hookSecondary: {
    theme: "light",
    wrapper: {
      name: "hookHeaderSecondary",
      threshold: thresholds.wrapper.content,
      size: "threeQuarter",
      className: "pb-12 !pt-0 flex flex-col gap-12 xl:flex-row justify-evenly items-center w-full",
    },
  },
  featuresHeaderTitle: {
    theme: "dark",
    wrapper: {
      size: "third",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
      name: "features",
    },
    titleWrapper: {
      className: "place-content-center text-center",
    },
    title: {
      startingPos: "0",
      endingPos: "0",
      name: "Presentation",
      text: "Découvrez des activitées uniques et enrichissantes",
      className: "sm:text-5xl",
      direction: "ltr",
    },
  },
  featuresHeaderSubText: {
    theme: "dark",
    wrapper: {
      size: "none",
    },
  },
  features: {
    theme: "light",
    wrapper: {
      id: "features",
      name: "features",
      threshold: thresholds.wrapper.content,
      size: "full",
      className: [
        // BASE
        "place-items-center pb-12 !px-2 w-full min-w-[400px] h-fit gap-1", // !mt-44
        // GRID
        "screen-unit-grid screen-unit-rank",
      ].join(" "),
    },
  },
};

const cardsProps = {
  article: "max-w-[400px] max-h-[300px] flex flex-col items-center justify-evenly px-3 py-5",
  wrapperIcon: "overflow-hidden rounded-full max-w-[80px] max-h-[80px] shadow-sm shadow-black",
  form: "flex flex-row items-center justify-center w-full",
  text: {
    content: generateLorem(5),
    props: {
      class: "hidden md:block text-black/90 dark:text-white/90 font-bold ",
    },
  },
  buttonProps: {
    props: {
      className: `${colorThemes["dark"].buttonText} 
      group/btn hover:pe-8 transition-all duration-200
      font-bold text-lg w-fit items-center gap-2 
      bg-slate-200  border border-slate-400 ring-1 ring-slate-300/80 
      dark:ring-slate-700/80 dark:bg-slate-600`,
      variant: "outline",
      size: "default",
    },
    content: "Voir",
    arrowIcon: true,
    arrowProps: {
      direction: "right",
      class:
        "absolute opacity-0 group-hover/btn:opacity-80 group-hover/btn:inline-block group-hover/btn:translate-x-[30px] transition-all duration-200",
    },
  } as const,
};

const subText = {
  theme: "dark",
  type: "text",
  article: {
    props: {
      class: `absolute right-28 max-w-[400px] max-h-[200px] border-e-8 ${colorThemes["dark"].titleBorder} rounded-lg`,
    },
  },
  title: {
    content: "Des expériences exceptionelles",
    props: { class: `text-center ${colorThemes["dark"].title}` },
  },
  text: {
    props: {
      class: "text-left mt-5",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste doloremque, assumenda rerum facilis, illum sunt saepe autem neque vel optio velit fugit quos asperiores quae quisquam laudantium beatae et!",
  },
};

const features: SegmentProps<"text">[] = [
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Exploration",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-1.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[8px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },
    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Grimpe",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-2.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[5px] -translate-x-[8px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },
    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Séjour",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-3.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[7px] -translate-x-[8.5px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },

    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Aventure",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-4.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[6px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },

    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Déconnexion",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-4.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[6px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },

    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
  {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: "Partage",
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-4.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[6px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: cardsProps.wrapperIcon,
      },
    },

    text: cardsProps.text,

    article: {
      props: {
        class: cardsProps.article,
      },
    },

    form: {
      props: {
        class: cardsProps.form,
      },
    },
    button: { ...cardsProps.buttonProps },
  },
];

const imageTextContent: SegmentType<"image-text"> = {
  vijay: {
    theme: "light",
    type: "image-text",
    img: {
      name: "lorem-vijay.webp",
      props: {
        alt: "le lorem de vijay",
      },
    },
    article: {
      props: {
        class: "flex-col md:flex-row",
      },
    },
    text: {
      content: generateLorem(40),
      threshold: thresholds.text,
    },
    title: {
      content: "Vijay Leblanc",
    },
    subtitle: {
      content: "Cordiste exégète et collectioneur de cordes",
    },
  },
  lou: {
    type: "image-text",
    img: {
      name: "lorem-lou.webp",
      props: {
        alt: "l'image lorem de lou",
      },
    },
    article: {
      props: {
        class: "flex-col md:flex-row sm:pb-12",
      },
    },
    text: {
      content: generateLorem(40),
      threshold: thresholds.text,
    },
    title: {
      content: "Lou Bideau",
    },
    subtitle: {
      content: "Psychologue sur cordage et intellectuelle en bleu",
    },
    theme: "light",
  },
  histoire: {
    type: "image-text",
    img: {
      name: "vijay-et-lou.webp",
      props: {
        alt: "l'image lorem de d'histoire",
      },
    },
    article: {
      props: {
        class: "flex-col md:flex-row sm:pb-12",
      },
    },
    text: {
      content: generateLorem(60),
      threshold: thresholds.text,
    },
    title: {
      content: "L'histoire d'une vie",
    },
    subtitle: {
      content: "Grandir ensemble",
    },
    theme: "dark",
  },

  hookPrimary: {
    theme: "dark",
    type: "image-text",
    img: {
      name: "outdoor-10.png",
      props: {
        alt: "adult climbing tree",
        class: "w-[500px]",
      },
    },
    title: {
      content: generateLorem(10),
    },
    article: {
      props: {
        class: "flex-col md:flex-row",
      },
    },
  },

  hookSecondary: {
    theme: "light",
    type: "image-text",
    img: {
      name: "outdoor-11.png",
      props: {
        alt: "classroom in spring park",
        class: "w-[500px]",
      },
    },
    title: {
      content: generateLorem(10),
    },
    article: {
      props: {
        class: "flex-col md:flex-row-reverse",
      },
    },
  },
};
export { features, imageTextContent, subText, thresholds, wrappers };
