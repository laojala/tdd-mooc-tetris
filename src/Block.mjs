export class Block {
  color;

  constructor(color) {
    this.color = color;
    this. shape = [color]
  }

  getShape() {
    return this.shape
  }
  getColor() {
    return this.color
  }
}
