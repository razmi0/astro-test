const debug = import.meta.env.DEV && false;

const generateLorem = (length: number): string => {
  let i = length;
  const lorem = (
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates odit ducimus, " +
    "eos quod nulla commodi minima, maiores illum consectetur itaque quis, quisquam distinctio autem " +
    "ex tenetur perferendis enim. Tempora?"
  ).split(" ");
  let generatedText = "";
  // --
  while (i > 0) {
    generatedText += lorem[(i + Math.floor(Math.random() * 100)) % lorem.length] + " ";
    i--;
  }
  return generatedText.charAt(0).toUpperCase() + generatedText.slice(1).toLowerCase();
};

const handleIntersection = (
  entries: IntersectionObserverEntry[],
  debugLog: string,
  onIntersect: () => void,
  onDisappear: () => void
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      debug && console.log(`Element ${debugLog} is intersecting`);
      onIntersect();
    } else {
      onDisappear();
      debug && console.log(`Element ${debugLog} is not intersecting`);
    }
  });
};

type SetupObserverProps = {
  element: HTMLElement;
  debugLog?: string;
  threshold?: number;
  onIntersect?: () => void;
  onDisappear?: () => void;
};

const setupIntersectionObserver = ({
  element,
  debugLog = "",
  threshold = 0.5,
  onIntersect = () => {},
  onDisappear = () => {},
}: SetupObserverProps) => {
  const observer = new IntersectionObserver((entry) => handleIntersection(entry, debugLog, onIntersect, onDisappear), {
    threshold: threshold,
  });

  // console.log(`Observing element : ${debugLog}`);
  observer.observe(element);
};

const mediaQueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

type AnimationTimeLine = [() => void, number];
/**
 *
 *
 *
 * Executes a series of animations in a timeline with respectives delays
 * [animationFunction, delay]
 *
 */
const timeline = (data: AnimationTimeLine[]) => {
  data.map(([animation, delay]) => {
    if (delay === 0) animation();
    setTimeout(() => animation(), delay);
  });
};

type Breakpoints = keyof typeof mediaQueries;
/**
 * @description Executes a callback when the media query matches or unmatches
 * @param breakpoint
 * @param matchCb
 * @param unMatchCb
 * @returns
 */
const actOnMedia = (breakpoint: Breakpoints, matchCb?: () => void, unMatchCb?: () => void) => {
  if (!mediaQueries || !(breakpoint in mediaQueries)) {
    console.error(`Invalid breakpoint: ${breakpoint}`);
    return;
  }

  const mediaQuery = mediaQueries[breakpoint];

  const handler = (event: MediaQueryList | MediaQueryListEvent) => {
    event.matches ? matchCb && matchCb() : unMatchCb && unMatchCb();
  };

  // Manually handling the initial state and cleanup
  const media = window.matchMedia(mediaQuery);
  handler(media);
  media.addEventListener("change", handler, { passive: true });

  return () => media.removeEventListener("change", handler);
};

const debounce = <T>(func: (...args: T[]) => void, delay: number) => {
  let timeoutId: number | null = null;
  return (...args: T[]) => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const selectImage = ({
  bgName,
  folder,
  extension,
  fallback,
}: {
  bgName?: string;
  folder?: "hero" | "tiles" | "flat-trees";
  extension?: "png" | "jpg" | "webp";
  fallback: ImageMetadata;
}) => {
  if (!bgName || !extension) return () => fallback;

  let images;
  const imgPath = folder ? `/src/assets/${folder}/${bgName}.${extension}` : `/src/assets/${bgName}.${extension}`,
    wildGlob = folder ? `/src/assets/${folder}/${bgName}.${extension}` : `/src/assets/${bgName}.${extension}`;

  switch (folder) {
    case "hero":
      images = import.meta.glob<{ default: ImageMetadata }>(`/src/assets/hero/*.*`);
      break;

    case "tiles":
      images = import.meta.glob<{ default: ImageMetadata }>(`/src/assets/tiles/*.*`);
      break;

    case "flat-trees":
      images = import.meta.glob<{ default: ImageMetadata }>(`/src/assets/flat-trees/*.*`);
      break;

    default:
      images = import.meta.glob<{ default: ImageMetadata }>(`/src/assets/*.*`);
      break;
  }

  if (!images[imgPath]) {
    console.warn(`"${imgPath}" does not exist in glob: "${wildGlob}"`);
    return () => fallback;
  }
  return images[imgPath];
};

export { actOnMedia, generateLorem, handleIntersection, selectImage, setupIntersectionObserver, timeline, debounce };
