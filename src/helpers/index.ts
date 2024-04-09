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

const handleIntersection = (entries: IntersectionObserverEntry[], debugLog: string) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      console.log(`Element : ${debugLog} is visible!`);
      // LOGIC HERE
      // --
    } else {
      console.log(`Element ${debugLog} is not visible`);
    }
  });
};

type SetupObserverProps = {
  element: HTMLElement;
  debugLog?: string;
  threshold?: number;
};

const setupIntersectionObserver = ({ element, debugLog = "", threshold = 0.5 }: SetupObserverProps) => {
  const observer = new IntersectionObserver((entry) => handleIntersection(entry, debugLog), {
    threshold: threshold,
  });

  // Observe the target element
  console.log(`Observing element : ${debugLog}`);
  observer.observe(element);
};

export { generateLorem, handleIntersection, setupIntersectionObserver };
