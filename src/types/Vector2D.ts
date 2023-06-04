export class Vector2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  translate(other: Vector2D) {
    this.x += other.x;
    this.y += other.y;
  }

  translated(other: Vector2D) {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }

  distanceTo(other: Vector2D) {
    Math.sqrt(other.x - this.x + (other.y - this.y));
  }

  rotate(angle: number) {
    this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
  }

  rotated(angle: number) {
    return new Vector2D(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }

  scale(m: Vector2D) {
    this.x = m.x * this.x;
    this.y = m.y * this.y;
  }

  scaled(m: Vector2D) {
    return new Vector2D(m.x * this.x, m.y * this.y);
  }
}
