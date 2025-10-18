/**
 * Formats milliseconds into a HH:MM:SS.MS string.
 * @param milliseconds The total number of milliseconds.
 * @returns The formatted time string.
 */
export function formatTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor((milliseconds % 1000) / 10);

  const pad = (num: number): string => num.toString().padStart(2, '0');

  return `${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
}

/**
 * Gets the current timestamp in milliseconds.
 * @returns The current timestamp.
 */
export function now(): number {
  return Date.now();
}