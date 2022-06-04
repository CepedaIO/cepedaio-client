import { computed, reactive } from "vue";
import WindowData from "../models/WindowData";

export const state = reactive({
  active: null as null | HTMLElement,
  windows: [] as Array<[iWindow, iWindowable]>
});

export const getAllWindows = computed<Array<[ iWindow, iWindowable]>>(() =>
  state.windows
);

export function getWindow(id: string): [iWindow, iWindowable] | undefined {
  return state.windows.find(([window]) => window.id === id);
}

export function hasWindow(id: string): boolean {
  return getWindow(id) !== undefined;
}

export function focusWindow(id: string) {
  const opened = getWindow(id);

  if(!opened) throw new Error('This window is not opened, cannot focus');

  const [window] = opened;
  const index = window.position.index;

  incrementIndex(index);
  window.position.index = 0;
}

export function openWindow(content: iWindowable) {
  if(hasWindow(content.id)) {
    focusWindow(content.id);
    return;
  }

  const availableSpace = window.innerHeight - 425;
  const padding = 40;
  const index = 0;
  const top = padding * (state.windows.length % Math.floor(availableSpace/padding));
  const left = padding * state.windows.length;

  const wind = new WindowData({
    id: content.id,
    label: content.label || content.id,
    position: { top, left, index }
  });

  incrementIndex(index);
  state.windows.push([wind, content]);
}

function incrementIndex(limit: number) {
  state.windows.forEach(([wind]) => {
    if(limit === 0 || wind.position.index < limit) {
      wind.position.index += 1;
    }
  })
}

export function closeWindow(window:iWindow) {
  state.windows = state.windows.filter(([opened]) => opened !== window);
}

export function isActive(el:HTMLElement): boolean {
  return !!state.active && state.active === el;
}

export function setActive(el:HTMLElement | null): void {
  state.active = el;
}
