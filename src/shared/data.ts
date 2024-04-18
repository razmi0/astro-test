import type { ContentProps } from "@/components/Content/Content.astro";
import { links } from "@/components/Nav/shared/data";
import { generateLorem } from "@/helpers";
import type { ScreenUnitProps } from "@/layouts/ScreenUnit.astro";
import type { ContentFormat } from "@/types";

type ScreenUnitType = {
  [key: string]: Omit<ScreenUnitProps, "children"> & { children?: any };
};

type ContentType<T extends ContentFormat> = {
  [key: string]: ContentProps<T>;
};

const thresholds = {
  wrapper: {
    header: 1,
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
  presentationHeader: {
    theme: "light",
    wrapper: {
      size: "half",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
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
    subtitle: {
      name: "presentation",
      startingPos: "0",
      endingPos: "0",
      separator: {
        props: {},
      },
      text: {
        content: generateLorem(4),
      },
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
        "place-items-center md:justify-center md:items-start pb-12 gap-10 sm:gap-2 w-full !px-2 !pt-0 xl:justify-center xl:items-center",
        // GRID
        "grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4",
      ].join(" "),
    },
  },
  hookHeaderOne: {
    theme: "dark",
    wrapper: {
      name: "hookHeaderOne",
      threshold: thresholds.wrapper.header,
      size: "half",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "hookHeaderOne",
      text: generateLorem(5),
      direction: "rtl",
      endingPos: "-100%",
    },
  },
  hookOne: {
    theme: "dark",
    wrapper: {
      threshold: thresholds.wrapper.content,
      size: "half",
      className: "pb-12 !pt-0",
    },
  },
  hookHeaderTwo: {
    theme: "dark",
    wrapper: {
      name: "hookHeaderTwo",
      threshold: thresholds.wrapper.header,
      size: "half",
      className: "pb-0 md:pb-0 flex items-center justify-center gap-12",
    },
    titleWrapper: {
      className: "justify-center md:justify-end",
    },
    title: {
      name: "hookHeaderTwo",
      text: generateLorem(5),
      direction: "ltr",
    },
  },
  hookTwo: {
    theme: "dark",
    wrapper: {
      threshold: thresholds.wrapper.content,
      size: "half",
      className: "pb-12 !pt-0",
    },
  },
};

const textContent: ContentType<"text"> = {
  presentationContentOne: {
    theme: "light",
    type: "text",

    title: {
      content: generateLorem(1),
      props: {
        class: "mb-2",
      },
    },
    text: {
      content: generateLorem(30),
      threshold: thresholds.text,
      props: {
        class: "md:w-[30ch]",
      },
    },
    article: {
      props: {
        class: "flex flex-col items-start !sm:w-fit w-full h-full md:gap-6 xl:w-fit",
      },
    },
    form: {
      props: {
        class: "flex flex-col",
      },
    },
    button: {
      content: `<a href=${links[3].href}>Learn more...</a>`,
      props: {
        className: "w-fit text-main-500 dark:text-main-300 ps-0 ms-0 text-left",
        variant: "link",
      },
    },
  },
  presentationContentTwo: {
    theme: "light",
    type: "text",
    title: {
      content: generateLorem(1),
      props: {
        class: "mb-2",
      },
    },
    text: {
      content: generateLorem(30),
      threshold: thresholds.text,
      props: {
        class: "md:w-[30ch]",
      },
    },
    article: {
      props: {
        class: "flex flex-col items-start !sm:w-fit w-full h-full md:gap-6",
      },
    },
    form: {
      props: {
        class: "flex flex-col",
      },
    },
    button: {
      content: `<a href=${links[1].href}>Learn more...</a>`,
      props: {
        className: "w-fit text-main-500 dark:text-main-300 ps-0 ms-0 text-left",
        variant: "link",
      },
    },
  },
  presentationContentThree: {
    theme: "light",
    type: "text",
    title: {
      content: generateLorem(1),
      props: {
        class: "mb-2",
      },
    },
    text: {
      content: generateLorem(30),
      threshold: thresholds.text,
      props: {
        class: "md:w-[30ch]",
      },
    },
    article: {
      props: {
        class: "flex flex-col items-start !sm:w-fit w-full h-full md:gap-6",
      },
    },
    form: {
      props: {
        class: "flex flex-col",
      },
    },
    button: {
      content: `<a href=${links[2].href}>Learn more...</a>`,
      props: {
        className: "w-fit text-main-500 dark:text-main-300 ps-0 ms-0 text-left",
        variant: "link",
      },
    },
  },
  presentationContentFour: {
    theme: "light",
    type: "text",
    title: {
      content: generateLorem(1),
      props: {
        class: "mb-2",
      },
    },
    text: {
      content: generateLorem(30),
      threshold: thresholds.text,
      props: {
        class: "md:w-[30ch]",
      },
    },
    article: {
      props: {
        class: "flex flex-col items-start !sm:w-fit w-full h-full md:gap-6",
      },
    },
    form: {
      props: {
        class: "flex flex-col",
      },
    },
    button: {
      content: `<a href=${links[1].href}>Learn more...</a>`,
      props: {
        className: "w-fit text-main-500 dark:text-main-300 ps-0 ms-0 text-left",
        variant: "link",
      },
    },
  },
};

const imageTextContent: ContentType<"image-text"> = {
  vijay: {
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
    theme: "light",
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
  hookOne: {
    theme: "dark",
    type: "image-text",
    img: {
      name: "lorem-vijay.webp",
      props: {
        alt: "l'image lorem de vijay",
        class: "w-[200px]",
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
  hookTwo: {
    theme: "dark",
    type: "image-text",
    img: {
      name: "lorem-lou.webp",
      props: {
        alt: "l'image lorem de vijay",
        class: "w-[200px]",
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
export { imageTextContent, textContent, thresholds, wrappers };
