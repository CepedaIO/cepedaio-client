type ConstructorOptions = Omit<PartialBy<EmbedData, 'position' | 'index'>, 'type'>

export default class EmbedData implements iWindow {
  type = "EmbedData";
  id!: string;
  label?: string;
  index = 0;
  position: Position = {
    left: 0,
    top: 0
  };
  mime!:string;
  src!: string;
  
  constructor(data: ConstructorOptions) {
    Object.assign(this, data);
  }
}
