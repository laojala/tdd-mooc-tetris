import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`
  );

  constructor(initial_shape) {
    this.tetromino = new RotatingShape(initial_shape);
  }

  toString() {
    return this.tetromino.toString();
  }

}