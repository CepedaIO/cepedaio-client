export default class FolderData implements iFolder {
  id!: string;
  label?: string;
  files?: Array<iFile | iContribution>;
  folders?: Array<iFolder>;

  constructor(data: iFolder) {
    Object.assign(this, data);
  }
}
