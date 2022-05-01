export function shapeToString(shape) {
  let string_representation = "";
  for (let row = 0; row < shape.getHeight(); row++) {
    for (let column = 0; column < shape.getWidth(); column++) {
      string_representation += shape.getSpot(row, column);
    }
    string_representation += "\n";
  }
  return string_representation;
}
