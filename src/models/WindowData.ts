export function isWindowData(obj: any): obj is WindowData {
  return typeof obj.id === "string" &&
    typeof obj.label === "string"
}

export default class WindowData {
  id!: string;
  label!: string;
  left = 0;
  top = 0;

  constructor(data: Omit<WindowData, 'left' | 'top'>) {
    Object.assign(this, data);
  }
}
