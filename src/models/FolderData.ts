export default class FolderData implements iFolder {
  type = "FolderData";
  id!: string;
  label?: string;
  files?: Array<iFile>;
  folders?: Array<iFolder>;

  constructor(data: iFolder) {
    Object.assign(this, data);
  }
}
