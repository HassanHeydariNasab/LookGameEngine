import { Vector2D } from "../types/Vector2D";

export class Node2D {
  name: string;
  position: Vector2D; // position according to parent
  pivot: Vector2D; // rotation pivot relative to position
  scale: [number, number]; // scale canvas [along_x, along_y] (local)
  rotation: number; // rotate canvas in radian (local)
  children: Node2D[];

  constructor({
    name,
    position = new Vector2D(0, 0),
    pivot = new Vector2D(0, 0),
    scale = [1, 1],
    rotation = 0,
    children = [],
  }: {
    name: string;
    position?: Vector2D;
    pivot?: Vector2D;
    scale?: [number, number];
    rotation?: number;
    children?: Node2D[];
  }) {
    this.name = name;
    this.position = position;
    this.pivot = pivot;
    this.scale = scale;
    this.rotation = rotation;
    this.children = children;
  }

  rotate(angle: number) {
    this.rotation += angle;
  }

  moveForward(n: number) {
    this.position.translate(
      new Vector2D(n * Math.cos(this.rotation), n * Math.sin(this.rotation))
    );
  }

  render(canvas: HTMLCanvasElement, parent: Node2D | null) {
    //const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
}
