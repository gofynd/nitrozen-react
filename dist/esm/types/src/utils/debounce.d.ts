declare const debounce: (
  fn: Function,
  delay?: number
) => (this: any, ...args: any[]) => void;
export default debounce;
