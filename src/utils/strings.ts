export const toCapitalizeCase = (str?: string): string => {
  if (str) {
    const res = str.toLowerCase();
    return res.charAt(0).toUpperCase() + res.slice(1);
  }
  return '';
};
