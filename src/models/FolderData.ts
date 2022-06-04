import FileData from "./FileData";
import WindowData from "./WindowData";

export default class FolderData {
  id!: string;
  label?: string;
  window!: WindowData;
  files?: Array<FileData>;
  folders?: Array<FolderData>;

  constructor(data: FolderData) { Object.assign(this, data) }
}