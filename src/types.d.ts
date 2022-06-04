type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface Position {
  top: number;
  left: number;
}