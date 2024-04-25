import type { SegmentProps } from "@/components/Segment/Segment.astro";
import colorThemes from "@/components/ui/Color/data";
import { generateLorem } from "@/helpers";
import type { SegmentFormat } from "@/types";
import { thresholds } from "./screen";

type SegmentType<T extends SegmentFormat> = {
  [key: string]: SegmentProps<T>;
};

const cardsProps = {
  article: "max-w-[400px] max-h-[300px] flex flex-col items-center justify-evenly px-3 py-5",
  wrapperIcon: "overflow-hidden rounded-full max-w-[80px] max-h-[80px] shadow-sm shadow-black",
  form: "flex flex-row items-center justify-center w-full",
  text: {
    content: generateLorem(5),
    props: {
      class: "hidden md:block text-black/90 dark:text-white/90 font-bold",
    },
  },
  buttonProps: {
    props: {
      className: `${colorThemes["dark"].buttonText} 
        group/btn hover:pe-10 transition-all duration-200
        font-bold text-lg w-fit items-center 
        bg-slate-200 border border-slate-400 ring-1 ring-slate-300/80 
        dark:ring-slate-700/80 dark:bg-slate-600`,
      variant: "outline",
      size: "default",
    },
    content: "Voir",
    arrowIcon: true,
    arrowProps: {
      direction: "right",
      class:
        "absolute opacity-0 group-hover/btn:opacity-80 group-hover/btn:inline-block group-hover/btn:translate-x-[35px] transition-all duration-200",
    },
  } as const,
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
};

export { features, imageTextContent };
