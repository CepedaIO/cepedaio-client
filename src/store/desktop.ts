import { reactive } from "vue";
import FileData, { isFileData } from "../models/FileData";
import WindowData, { isWindowData } from "../models/WindowData";

export const desktopStore = {
  state: reactive({
    active: null as null | HTMLElement,
    opened: [] as Array<string>,
    files: new Map as Map<string, FileData>,
    windows: new Map as Map<string, WindowData>,

  }),
  register(item: FileData | WindowData) {
    if(isFileData(item)) {
      this.state.files.set(item.id, item);
    } else if(isWindowData(item)) {
      this.state.windows.set(item.id, item);
    }
  },
  getWindow(id: string) {
    return this.state.windows.get(id);
  },
  openWindow(window:string) {
    this.state.opened.push(window);
  },
  closeWindow(window:string) {
    this.state.opened = this.state.opened.filter((activeFolder) => activeFolder !== window);
  }
};
