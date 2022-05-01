import { shapeToString } from "./common.mjs";

class DropBlock {
  constructor(block, board_center) {
    this.color = block.getColor();
    this.coordinates = setDropCoordinatesList(board_center, this.color);
  }
}
function setDropCoordinatesList(board_center, color) {
  switch (color) {
    case "T":
      return ["foo"];
    default:
      return [[0, board_center]];
  }
}
export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.layout = setInitialLayout(width, height);
    this.moving = [];
    this.center = Math.floor(this.width / 2);
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getSpot(row, col) {
    return this.layout[row][col];
  }

  toString() {
    return shapeToString(this);
  }

  drop(block) {
    if (this.moving.length == 0) {
      const dropping = new DropBlock(block, this.center);
      this.layout[0][this.center] = dropping.color;
      this.moving = dropping.coordinates;
    } else {
      throw "already falling";
    }
  }

  tick() {
    let new_moving = [];

    for (let item = 0; item < this.moving.length; item++) {
      let y_moving = this.moving[item][0];
      let x_moving = this.moving[item][1];

      if (
        y_moving < this.height - 1 &&
        this.layout[y_moving + 1][x_moving] == "."
      ) {
        let color = this.layout[y_moving][x_moving];
        this.layout[y_moving][x_moving] = ".";
        this.layout[y_moving + 1][x_moving] = color;
        new_moving.push([y_moving + 1, x_moving]);
      } else {
        break;
      }
    }
    this.moving = new_moving;
  }

  hasFalling() {
    if (this.moving.length > 0) return true;
    return false;
  }
}

function setInitialLayout(width, height) {
  let array = [];
  for (let row = 0; row < height; row++) {
    let row = "";
    for (let col = 0; col < width; col++) {
      row += ".";
    }
    array.push(row.split(""));
  }
  return array;
}
