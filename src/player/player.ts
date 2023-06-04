import { Node2D } from "../types/Node2D";
import { Vector2D } from "../types/Vector2D";

export class Player extends Node2D {
  width: number = 100;
  height: number = 100;

  constructor({
    position,
    scale,
    rotation,
  }: {
    position?: Vector2D;
    scale?: [number, number];
    rotation?: number;
  }) {
    super({
      name: "player",
      position,
      scale,
      rotation,
    });
    this.pivot = new Vector2D(this.width / 2, this.height / 2);
  }

  render(canvas: HTMLCanvasElement, parent: Node2D) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();

    const t = this.position.translated(this.pivot);
    ctx.translate(t.x, t.y);
    ctx.rotate(this.rotation);
    ctx.translate(-t.x, -t.y);

    const { x: globalX, y: globalY } = this.position.translated(
      parent.position
    );
    ctx.fillStyle = "red";
    ctx.fillRect(globalX, globalY, this.width, this.height);

    ctx.restore();
  }
}
