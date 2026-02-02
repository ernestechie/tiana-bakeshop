export const formatToNaira = (amount: number): string => {
  return `₦${amount.toLocaleString()}`;
};
