import { reactive } from "vue";
import FileData from "../models/FileData";
import WindowData from "../models/WindowData";

export const state = reactive({
  active: null as null | HTMLElement,
  windows: [] as Array<WindowData>,
  files: new Map as Map<string, FileData>
});

export function register(item: FileData) {
  state.files.set(item.id, item);
}

export function unregister(item: FileData) {
  state.files.delete(item.id);
}

export function getWindow(id: string): WindowData | undefined {
  return state.windows.find((window) => window.id === id);
}

export function openWindow(window:WindowData) {
  console.log(window);
  state.windows.push(window);
}

export function closeWindow(window:WindowData) {
  state.windows = state.windows.filter((opened) => opened !== window);
}
