export function isFileData(obj:any): obj is FileData {
  return (typeof obj.icon === "string" || typeof obj.image === 'string') &&
    typeof obj.label === "string";
}

export default class FileData {
  id!: string;
  icon?: string;
  image?: string;
  label?: string;
  position: Position = {
    top: 0,
    left: 0
  };

  activated!: (data:this) => void;

  constructor(data: PartialBy<FileData, 'position'>) { Object.assign(this, data) }
}
