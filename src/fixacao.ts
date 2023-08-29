export const fixacao = (text: string): null | Array<string> => {
  if (typeof text !== "string") {
    return null;
  }

  return text.split("");
};
