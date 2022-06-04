import { reactive } from "vue";

export const folderStore = {
  state: reactive({
    active: [] as Array<string>
  }),
  openFolder(folder:string) {
    this.state.active.push(folder);
  },
  closeFolder(folder:string) {
    this.state.active = this.state.active.filter((activeFolder) => activeFolder !== folder);
  }
};