export function convertStringToNumber(text: string): number {
  const number = parseFloat(text);
  if (!number || number === null) {
    return 0;
  }
  return number;
}
