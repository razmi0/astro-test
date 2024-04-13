const debug = import.meta.env.DEV && false;

const generateLorem = (length: number): string => {
  let i = length;
  const lorem = "Lorem ipsum dolor sit amet, Consectetur adipiscing elit".split(" ");
  let generatedText = "";
  // --
  while (i > 0) {
    generatedText += lorem[i % lorem.length] + " ";
    i--;
  }
  return generatedText;
};

const handleIntersection = (
  entries: IntersectionObserverEntry[],
  debugLog: string,
  onIntersect: () => void,
  onDisappear: () => void,
  threshold: number
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
  const observer = new IntersectionObserver(
    (entry) => handleIntersection(entry, debugLog, onIntersect, onDisappear, threshold),
    {
      threshold: threshold,
    }
  );

  // console.log(`Observing element : ${debugLog}`);
  observer.observe(element);
};

const mediaQueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

type Breakpoints = keyof typeof mediaQueries;
const actOnMedia = (breakpoint: Breakpoints, matchCb: () => void, unMatchCb: () => void) => {
  if (!mediaQueries || !(breakpoint in mediaQueries)) {
    console.error(`Invalid breakpoint: ${breakpoint}`);
    return;
  }

  const mediaQuery = mediaQueries[breakpoint];

  const handler = (event: MediaQueryList | MediaQueryListEvent) => {
    if (event.matches) {
      matchCb();
    } else {
      unMatchCb();
    }
  };

  // Manually handling the initial state and cleanup
  const media = window.matchMedia(mediaQuery);
  handler(media);
  media.addEventListener("change", handler, { passive: true });

  return () => media.removeEventListener("change", handler);
};

export { actOnMedia, generateLorem, handleIntersection, setupIntersectionObserver };
