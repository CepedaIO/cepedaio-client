type ConstructorOptions = Omit<PartialBy<ImageData, 'position'>, 'type'>

export default class ImageData implements iWindow {
  type = "ImageData";
  id!: string;
  label!: string;
  position: Position = {
    left: 0,
    top: 0
  };
  src!: string;

  constructor(data: ConstructorOptions) {
    Object.assign(this, data);
  }
}
