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
  presentationHeaderTitle: {
    theme: "dark",
    wrapper: {
      size: "third",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
      name: "presentation",
    },
    titleWrapper: {
      className: "place-content-center text-center",
    },
    title: {
      startingPos: "0",
      endingPos: "0",
      name: "presentation",
      text: generateLorem(5),
      className: "sm:text-5xl",
      direction: "ltr",
    },
  },
  presentationHeaderSubText: {
    theme: "dark",
    wrapper: {
      size: "none",
    },
  },
  presentation: {
    theme: "light",
    wrapper: {
      name: "presentation",
      threshold: thresholds.wrapper.content,
      size: "half",
      className: [
        // BASE
        "place-items-center pb-12 !px-2 !w-fit min-w-[400px] h-fit ms-[10%] gap-1", // !mt-44
        // GRID
        "screen-unit-grid screen-unit-rank",
      ].join(" "),
    },
  },
};

const presentationProps = {
  article: "flex flex-col items-center justify-center px-3 py-5",
  wrapperIcon: "overflow-hidden rounded-full max-w-[80px] max-h-[80px] shadow-2xl shadow-black",

  form: "flex flex-row items-center justify-center w-full",
  buttonProps: {
    className: `${colorThemes["dark"].buttonText} font-bold m-0 p-0`,
    variant: "link",
    size: "none",
    "data-is": "card-article-button",
  } as const,
};

const presentation: SegmentType<"text"> = {
  subText: {
    type: "text",
    article: {
      props: {
        class: `absolute right-28 max-w-[400px] max-h-[200px] border-e-8 ${colorThemes["light"].titleBorder} rounded-lg`,
      },
    },
    title: {
      content: "Des expériences exceptionelles",
      props: { class: "text-center text-pur-600 dark:text-pur-400" },
    },
    text: {
      props: {
        class: "text-left mt-5",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste doloremque, assumenda rerum facilis, illum sunt saepe autem neque vel optio velit fugit quos asperiores quae quisquam laudantium beatae et!",
    },
  },
  1: {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: generateLorem(1),
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-1.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[8px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: "overflow-hidden rounded-full max-w-[80px] max-h-[80px] shadow-2xl shadow-black",
      },
    },

    article: {
      props: {
        class: presentationProps.article,
      },
    },
    form: {
      props: {
        class: presentationProps.form,
      },
    },
    button: {
      content: `Learn more...`, // <a href=${links[3].href}>Learn more...</a>
      props: { ...presentationProps.buttonProps },
    },
  },
  2: {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: generateLorem(1),
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-2.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[5px] -translate-x-[8px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: presentationProps.wrapperIcon,
      },
    },

    article: {
      props: {
        class: presentationProps.article,
      },
    },
    form: {
      props: {
        class: presentationProps.form,
      },
    },
    button: {
      content: `Learn more...`, // <a href=${links[3].href}>Learn more...</a>
      props: { ...presentationProps.buttonProps },
    },
  },
  3: {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: generateLorem(1),
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-3.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[7px] -translate-x-[8.5px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: presentationProps.wrapperIcon,
      },
    },

    article: {
      props: {
        class: presentationProps.article,
      },
    },

    form: {
      props: {
        class: presentationProps.form,
      },
    },
    button: {
      content: `Learn more...`, // <a href=${links[3].href}>Learn more...</a>
      props: { ...presentationProps.buttonProps },
    },
  },
  4: {
    theme: "dark",
    type: "text",
    card: true,
    title: {
      content: generateLorem(1),
      props: { class: `${colorThemes["dark"].title}` },
      icon: "tree-4.png",
      iconProps: {
        class: "rounded-full min-w-[100px] min-h-[100px] -translate-y-[6px] -translate-x-[7px]",
        alt: "tree icon representing feature number 1",
      },
      wrapperIconProps: {
        class: presentationProps.wrapperIcon,
      },
    },
    article: {
      props: {
        class: presentationProps.article,
      },
    },

    form: {
      props: {
        class: presentationProps.form,
      },
    },
    button: {
      content: `Learn more...`, // <a href=${links[3].href}>Learn more...</a>
      props: { ...presentationProps.buttonProps },
    },
  },
};

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
  hookPrimaryTop: {
    theme: "dark",
    type: "image-text",
    img: {
      name: "outdoor-1.webp",
      props: {
        alt: "child climbing tree",
        class: "w-[300px]",
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
  hookPrimaryBot: {
    theme: "dark",
    type: "image-text",
    img: {
      name: "outdoor-2.webp",
      props: {
        alt: "adult climbing tree",
        class: "w-[300px]",
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
  hookSecondaryTop: {
    theme: "light",
    type: "image-text",
    img: {
      name: "outdoor-3.webp",
      props: {
        alt: "man on a zip line",
        class: "w-[300px]",
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
  hookSecondaryBot: {
    theme: "light",
    type: "image-text",
    img: {
      name: "outdoor-4.webp",
      props: {
        alt: "classroom in spring park",
        class: "w-[300px]",
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
export { imageTextContent, presentation, thresholds, wrappers };
