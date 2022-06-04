type ConstructorOptions = Omit<PartialBy<WindowData, 'position'>, 'type'>

export default class WindowData implements iWindow {
  type = "WindowData";
  id!: string;
  label?: string;
  position: Position = {
    left: 0,
    top: 0
  };

  constructor(data: ConstructorOptions) {
    Object.assign(this, data);
  }
}
