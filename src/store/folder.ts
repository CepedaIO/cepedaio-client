import { reactive } from "vue";
import { FolderData } from "../components/folder.vue";

export const folderStore = {
  state: reactive({
    active: [] as Array<string>,
    folders: new Map as Map<string, FolderData>
  }),
  register(folder: FolderData) {
    this.state.folders.set(folder.id, folder);
  },
  openFolder(folder:string) {
    this.state.active.push(folder);
  },
  closeFolder(folder:string) {
    this.state.active = this.state.active.filter((activeFolder) => activeFolder !== folder);
  }
};