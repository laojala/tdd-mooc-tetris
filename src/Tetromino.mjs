import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`,
    "T"
  );

  static I_SHAPE = new Tetromino(
    `.....
     .....
     IIII.
     .....
     .....`,
    "I"
  );

  static O_SHAPE = new Tetromino(
    `.OO
     .OO
     ...`,
    "O"
  );

  constructor(initial_shape, type = "") {
    this.tetromino = new RotatingShape(initial_shape);
    this.color = type;
  }

  toString() {
    return this.tetromino.toString();
  }

  getShape() {
    return this.tetromino.shape;
  }

  getColor() {
    return this.color;
  }

  rotateI() {
    if (this.tetromino.shape[2][0] == "I") {
      return new Tetromino(
        `..I..
      ..I..
      ..I..
      ..I..
      .....`,
        this.color
      );
    }
    return Tetromino.I_SHAPE;
  }

  rotateRight() {
    if (this.color == "I") {
      return this.rotateI();
    }
    if (this.color == "O") {
      return Tetromino.O_SHAPE;
    }
    return new Tetromino(this.tetromino.rotateRight().toString(), this.color);
  }

  rotateLeft() {
    if (this.color == "I") {
      return this.rotateI();
    }
    if (this.color == "O") {
      return Tetromino.O_SHAPE;
    }
    return new Tetromino(this.tetromino.rotateLeft().toString(), this.color);
  }
}
