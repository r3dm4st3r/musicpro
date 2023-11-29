export const Duration = (duration: string) =>
  new Date(Number(duration) * 1000).toISOString().slice(14, 19);
