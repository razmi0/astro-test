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

export { generateLorem };
