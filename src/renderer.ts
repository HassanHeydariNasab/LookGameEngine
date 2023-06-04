import { Node2D } from "./types/Node2D";

export function render(
  canvas: HTMLCanvasElement,
  parent: Node2D | null,
  root: Node2D
) {
  root.render(canvas, parent);
  for (const child of root.children) {
    render(canvas, root, child);
  }
}
