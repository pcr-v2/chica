export const convertVw = (px: number, base = 834, precision = 1) => {
  const value = (px / base) * 100;
  return `${value.toFixed(precision)}vw`;
};
