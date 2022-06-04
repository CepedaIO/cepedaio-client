export default class FileData implements iFile {
  id!: string;
  class?: string
  icon?: string;
  iconLabel?: string;
  image?: string;
  label?: string;
  position: Position = {
    top: 0,
    left: 0
  };

  activated!: (data:this) => void;

  constructor(data: PartialBy<iFile, 'position'>) {
    Object.assign(this, data)
  }
}
