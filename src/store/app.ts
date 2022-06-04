import { reactive } from "vue";

export const state = reactive({
  active: null as null | HTMLElement,
  windows: [] as Array<iWindow>
});

export function getWindow(id: string): iWindow | undefined {
  return state.windows.find((window) => window.id === id);
}

export function focusWindow(window: iWindow) {
  state.windows = state.windows.filter((opened) => opened !== window).concat(window);
}

export function openWindow(window:iWindow) {
  state.windows.push(window);
}

export function closeWindow(window:iWindow) {
  state.windows = state.windows.filter((opened) => opened !== window);
}
