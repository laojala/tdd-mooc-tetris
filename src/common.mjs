export function shapeToString(shape) {
  let board_string = "";
    for (let row = 0; row < shape.get_height(); row++) {
      board_string += shape.layout[row].join("");
      board_string += "\n";
    }
    return board_string;
}