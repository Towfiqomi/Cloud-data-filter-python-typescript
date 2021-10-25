export const toUpperCase = (s: string) => {
  return s.replace(/(^\w|\s\w)/g, (s: string) => s.toUpperCase());
};
