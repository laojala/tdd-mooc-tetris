export class RotatingShape {
    shape;

    constructor(shape) {
        this.shape = trimShape(shape)
    }

    toString() {
        return this.shape;
    }

}

function trimShape(shape) {
    return shape.replaceAll(' ', '') + "\n"
}