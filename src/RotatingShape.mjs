
import { shapeToString } from "./common.mjs";
export class RotatingShape {

  constructor(shape) {
    if (typeof shape === 'string') {
      this.shape = trimShape(shape)
    }
    else {
      this.shape = shape
    }
  }

  getWidth() {
    return this.shape[0].length;
  }

  getHeight() {
    return this.shape.length;
  }

  getBlock(row, col) {
    return this.shape[row][col]
  }

  toString() {
    return shapeToString(this);
  }

  rotateLeft() {
    const height = this.getHeight()
    const length = this.getWidth()

    let rotated = [];

    for (let column = length - 1; column >= 0; column--) {
      let rotated_row = "";
      for (let row = 0; row < height; row++) {
        rotated_row += this.shape[row][column];
      }
      rotated.push(rotated_row);
    }

    return new RotatingShape(rotated)
  }

  rotateRight() {
    return this.rotateLeft().rotateLeft().rotateLeft();
  }
}

function trimShape(shape) {
  let rows = shape.split("\n");
  let new_rows = rows.map((element) => element.replaceAll(" ", ""));
  return new_rows;
}

function stringify(array) {
  let representation = "";
  array.forEach((element) => {
    representation = representation + element + "\n";
  });
  return representation;
}
