
import { shapeToString } from "./common.mjs";
export class RotatingShape {

  constructor(shape) {
    this.shape = trimShape(shape);
    console.log(this.shape)
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
    const height = this.shape.length;
    const length = this.shape[0].length;

    let rotated = [];

    for (let column = length - 1; column >= 0; column--) {
      let rotated_row = "";
      for (let row = 0; row < height; row++) {
        rotated_row += this.shape[row][column];
      }
      rotated.push(rotated_row);
    }

    return stringify(rotated);
  }

  rotateRight() {
    const height = this.shape.length;
    const length = this.shape[0].length;

    let rotated = [];

    for (let column = 0; column < length; column++) {
      let rotated_row = "";
      for (let row = height - 1; row >= 0; row--) {
        rotated_row += this.shape[row][column];
      }
      rotated.push(rotated_row);
    }

    return stringify(rotated);
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
