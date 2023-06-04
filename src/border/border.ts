import { Node2D } from "../types/Node2D";

export class Border extends Node2D {
  width: number = 10;
  height: number = 10;

  constructor() {
    super({ name: "border" });
  }

  render(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
}
