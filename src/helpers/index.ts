const generateLorem = (length: number): string => {
  let i = length;
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit".split(" ");
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
  onDisappear: () => void
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      onIntersect();
    } else {
      onDisappear();
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

export { generateLorem, handleIntersection, setupIntersectionObserver };
