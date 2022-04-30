import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`
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
    this.type = type;
  }

  toString() {
    return this.tetromino.toString();
  }

  rotateI() {
    if (this.tetromino.shape[2][0] == "I") {
      return new Tetromino(
        `..I..
      ..I..
      ..I..
      ..I..
      .....`,
        this.type
      );
    }
    return Tetromino.I_SHAPE;
  }

  rotateRight() {
    if (this.type == "I") {
      return this.rotateI();
    }
    if (this.type == "O") {
      return Tetromino.O_SHAPE;
    }
    return new Tetromino(this.tetromino.rotateRight().toString(), this.type);
  }

  rotateLeft() {
    if (this.type == "I") {
      return this.rotateI();
    }
    if (this.type == "O") {
      return Tetromino.O_SHAPE;
    }
    return new Tetromino(this.tetromino.rotateLeft().toString(), this.type);
  }
}
