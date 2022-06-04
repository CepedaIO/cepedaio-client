import FileData from "./FileData";
import FolderData from "./FolderData";

export function isWindowData(obj: any): obj is WindowData {
  return typeof obj.id === "string" &&
    typeof obj.label === "string"
}

export default class WindowData {
  id!: string;
  label!: string;
  files?: Array<FileData>;
  folders?: Array<FolderData>;
  position: Position = {
    left: 0,
    top: 0
  };

  constructor(data: Omit<WindowData, 'left' | 'top'>) {
    Object.assign(this, data);
  }
}
