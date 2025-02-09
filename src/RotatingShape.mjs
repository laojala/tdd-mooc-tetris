import { shapeToString } from "./common.mjs";

export class RotatingShape {
  constructor(shape) {
    if (typeof shape === "string") {
      let rows = shape.split("\n");
      let foo = rows.filter((row) => row != "");
      this.shape = foo.map((element) => element.replaceAll(" ", ""));
    } else {
      this.shape = shape;
    }
  }

  getWidth() {
    return this.shape[0].length;
  }

  getHeight() {
    return this.shape.length;
  }

  getSpot(row, col) {
    return this.shape[row][col];
  }

  toString() {
    return shapeToString(this);
  }

  rotateLeft() {
    const height = this.getHeight();
    const length = this.getWidth();

    let rotated = [];

    for (let column = length - 1; column >= 0; column--) {
      let rotated_row = "";
      for (let row = 0; row < height; row++) {
        rotated_row += this.getSpot(row, column);
      }
      rotated.push(rotated_row);
    }
    return new RotatingShape(rotated);
  }

  rotateRight() {
    return this.rotateLeft().rotateLeft().rotateLeft();
  }
}
