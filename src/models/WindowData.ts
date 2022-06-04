export default class WindowData implements iWindow {
  id!: string;
  label?: string;
  fullscreen: boolean = false;
  position: Position = {
    left: 0,
    top: 0
  };

  constructor(data: PartialBy<iWindow, 'position'>) {
    Object.assign(this, data);
  }
}
