export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.layout = setInitialLayout(width, height);
    this.moving = [];
  }

  toString() {
    let board_string = "";
    for (let row = 0; row < this.height; row++) {
      board_string += this.layout[row].join("");
      board_string += "\n";
    }
    return board_string;
  }

  drop(block) {
    if (this.moving.length == 0) {
      let center = Math.floor(this.width / 2);
      this.layout[0][center] = block.color;
      this.moving = Array.from([0, center]);
    } else {
      throw "already falling";
    }
  }

  tick() {
    let y_moving = this.moving[0];
    let x_moving = this.moving[1];
    if (
      y_moving < this.height - 1 &&
      this.layout[y_moving + 1][x_moving] == "."
    ) {
      let color = this.layout[y_moving][x_moving];
      this.layout[y_moving][x_moving] = ".";
      this.layout[y_moving + 1][x_moving] = color;
      this.moving = [y_moving + 1, x_moving];
    } else {
      this.moving = [];
    }
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
