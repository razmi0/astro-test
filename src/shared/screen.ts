import type { ScreenUnitProps } from "@/layouts/ScreenUnit.astro";

type ScreenUnitType = {
  [key: string]: Omit<ScreenUnitProps, "children"> & { children?: HTMLElement };
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
  natureHeader: {
    theme: "dark",
    wrapper: {
      id: "natureHeader",
      name: "natureHeader",
      size: "quarter",
      className: "flex items-center justify-center",
    },
    title: {
      text: "Nature et Aventure",
      name: "natureHeader",
      direction: "rtl",
    },
  },
  nature: {
    theme: "dark",
    wrapper: {
      id: "nature",
      name: "nature",
      size: "threeQuarter",
      className: "flex flex-col justify-center items-center !pt-0",
    },
  },
  explorationHeader: {
    theme: "light",
    wrapper: {
      id: "explorationHeader",
      name: "explorationHeader",
      size: "quarter",
    },
    title: {
      text: "Exploration et Découverte",
      name: "explorationHeader",
      direction: "ltr",
    },
  },
  exploration: {
    theme: "light",
    wrapper: {
      id: "exploration",
      name: "exploration",
      size: "threeQuarter",
      className: "flex flex-col justify-center items-center !pt-0",
    },
  },
  featuresHeader: {
    theme: "dark",
    wrapper: {
      id: "featuresHeader",
      name: "featuresHeader",
      size: "quarter",
    },
    title: {
      text: "En résumé...",
      name: "featuresHeader",
      direction: "rtl",
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
        "pb-12 !px-2 w-full min-w-[400px] h-fit gap-1 justify-center items-center", // !mt-44
        // GRID
        "screen-unit-grid screen-unit-rank",
      ].join(" "),
    },
  },
};

export { thresholds, wrappers };
