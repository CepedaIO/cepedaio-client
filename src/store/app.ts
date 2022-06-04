import { computed, reactive } from "vue";
import WindowData from "../models/WindowData";

export const state = reactive({
  active: null as null | HTMLElement,
  windows: [] as Array<[iWindow, iWindowable]>
});

export const getAllWindows = computed<Array<[ iWindow, iWindowable, number]>>(() =>
  state.windows.map(([window, content], index) => [window, content, index])
);


export function getWindow(id: string): [iWindow, iWindowable] | undefined {
  return state.windows.find(([window]) => window.id === id);
}

export function focusWindow(window: iWindow) {
  const opened = getWindow(window.id);

  if(!opened) throw new Error('This window isn\'t being manage');

  state.windows = state.windows
    .filter(([cur]) => cur !== window)
    .concat([ opened ]);
}

export function openWindow(content: iWindowable) {
  const window = new WindowData({
    id: content.id,
    label: content.label || content.id
  });

  state.windows.push([window, content]);
}

export function closeWindow(window:iWindow) {
  state.windows = state.windows.filter(([opened]) => opened !== window);
}
