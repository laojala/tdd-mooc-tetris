import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

  static T_SHAPE = new Tetromino(
    `.T.
     TTT
     ...`
  );


  constructor(initial_shape) {
    const tetromino = new RotatingShape(initial_shape);
    this.shape = tetromino.shape
    console.log(tetromino.shape.toString())
  }

  toString() {
    return this.shape.toString();
  }

}