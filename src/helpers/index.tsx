export const cleanText = (text: string) => {
  return text?.replace(/<\/?p>|<\/?em>/g, '');
};
