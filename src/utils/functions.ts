export const truncateText = (text: string, number: number) => {
  if (text.length > number) {
    return text.slice(0, number) + "...";
  } else {
    return text;
  }
};
