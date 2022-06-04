import FileData from "./FileData";

type ConstructorOptions = Omit<PartialBy<FolderData, 'position' | 'index'>, 'type'>

export default class FolderData implements iWindow {
  type = "FolderData";
  id!: string;
  label?: string;
  index = 0;
  position: Position = {
    left: 0,
    top: 0
  };
  files?: Array<FileData>;
  folders?: Array<FolderData>;

  constructor(data: ConstructorOptions) {
    Object.assign(this, data);
  }
}
