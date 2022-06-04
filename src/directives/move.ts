import { Directive } from "vue";
import { iconStore } from "../store/icons";

interface Options {
  mousedown: (event:MouseEvent) => void;
  mousemove: (event:MouseEvent) => void;
  mouseup: () => void;
  innerLeft: number;
  innerTop: number;
}

const handlers:Map<HTMLElement, Options> = new Map()

export default {
  created(el: HTMLElement, binding) {
    const options: Options = {
      innerLeft: 0,
      innerTop: 0,
      mousedown: (event: MouseEvent) => {
        const { left, top } = el.getBoundingClientRect();
        options.innerLeft = event.clientX - left;
        options.innerTop = event.clientY - top;
        event.preventDefault();
  
        document.addEventListener('mousemove', options.mousemove)
      },
      mousemove: (event: MouseEvent) => {
        binding.value({
          left: event.clientX - options.innerLeft,
          top: event.clientY - options.innerTop
        });
      },
      mouseup: () => {
        document.removeEventListener('mousemove', options.mousemove);
      }
    };

    el.addEventListener('mousedown', options.mousedown);
    el.addEventListener('mouseup', options.mouseup);
    handlers.set(el, options);
  },
  unmounted(el: HTMLElement) {
    const options = handlers.get(el)!;
    el.removeEventListener('mousedown', options.mousedown);
    el.removeEventListener('mouseup', options.mouseup);
    handlers.delete(el);
  }
} as Directive