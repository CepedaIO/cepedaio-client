import FileData from "./FileData";

export default class FolderData {
  id!: string;
  label?: string;
  files?: Array<FileData>;
  folders?: Array<FolderData>;

  constructor(data: FolderData) { Object.assign(this, data) }
}
