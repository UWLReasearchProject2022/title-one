export const parseDate = (dateString: string): Date => {
  if (dateString.length !== 10) return new Date();
  const [dd, mm, yyyy] = dateString.split("/");
  return new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
};
