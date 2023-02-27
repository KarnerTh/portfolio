// Inspired by: https://github.com/Th1nkK1D/svelte-use-click-outside
type VoidCallback = () => void;

export const clickOutside = (node: HTMLElement, handler: VoidCallback): { destroy: VoidCallback } => {
  const onClick = (event: MouseEvent) =>
    node &&
    !node.contains(event.target as HTMLElement) &&
    !event.defaultPrevented &&
    handler();

  document.addEventListener('click', onClick, true);

  return {
    destroy() {
      document.removeEventListener('click', onClick, true);
    },
  };
}
