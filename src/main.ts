import { Vector2D } from "./types/Vector2D";
import { Node2D } from "./types/Node2D";
import { Border } from "./border/border";
import { Player } from "./player/player";
import { render } from "./renderer";

import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

function setViewSize(canvas: HTMLCanvasElement) {
  const RATIO = 16 / 10;
  canvas.width = 800;
  canvas.height = 800 * RATIO;
}

setViewSize(canvas);
window.addEventListener("resize", () => {
  setViewSize(canvas);
});

const player = new Player({ position: new Vector2D(100, 100) });

const treeRoot = new Node2D({
  name: "root",
  position: new Vector2D(0, 0),
  children: [new Border(), player],
});

gameLoop(canvas);
window.clearInterval((window as any).gameLoopInterval);
(window as any).gameLoopInterval = setInterval(() => {
  gameLoop(canvas);
}, 10);

var keys = new Set<string>();

window.addEventListener("keydown", (event) => {
  keys.add(event.key);
});

window.addEventListener("keyup", (event) => {
  keys.delete(event.key);
});

function inputHandler() {
  if (!keys) return;
  if (keys.has("ArrowUp")) {
    player.moveForward(2);
  }
  if (keys.has("ArrowLeft")) {
    player.rotate(-0.02);
  }
  if (keys.has("ArrowRight")) {
    player.rotate(0.02);
  }
}

function gameLoop(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  inputHandler();

  render(canvas, null, treeRoot);
}
