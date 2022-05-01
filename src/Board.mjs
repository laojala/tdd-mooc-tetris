import { shapeToString } from "./common.mjs";

class DropBlock {
  constructor(block, center) {
    this.color = block.getColor();
    this.coordinates = setDropCoordinatesList(center, this.color);
  }
}
function setDropCoordinatesList(center, color) {
  // does not work if indexes are not in a right order
  switch (color) {
    case "T":
      return [
        [1, center - 1],
        [1, center - 2],
        [1, center],
        [0, center - 1],
      ];
    default:
      return [[0, center]];
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
      //populate layout
      dropping.coordinates.forEach((element) => {
        const x = element[0];
        const y = element[1];
        this.layout[x][y] = dropping.color;
      });

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

      // all spots under the "moving" must have space

      if (
        (y_moving < this.height - 1 &&
          this.layout[y_moving + 1][x_moving] == ".") ||
        canMove([y_moving + 1, x_moving], this.moving)
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

function canMove(point, moving) {
  const a = JSON.stringify(point);
  const b = JSON.stringify(moving);
  var c = a.indexOf(b);
  if (c != -1) {
    return true;
  }
  return false;
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
