export class RotatingShape {
    shape;

    constructor(shape) {
        this.shape = trimShape(shape)
    }

    toString() {
        return stringify(this.shape)
    }
/**
      `ABC
       DEF
       GHI`
       `GDA
       HEB
       IFC`

0,0 -> 0,2
0,1 -> 1,2
0,2 -> 2,2

1,0 -> 0,1
1,1 -> 1,1
1,2,-> 2,1

2,0 -> 0,0
2,1 -> 1,0
2,2 -> 2,0 

 */

    rotateRight() {
        const height = this.shape.length;
        const length = this.shape[0].length;
        
        let rotated = [];

        for (let column = 0; column < length; column++) {
            let rotated_row = "";
            for (let row = height-1; row >= 0; row--) {
                rotated_row += this.shape[row][column];
            }
            rotated.push(rotated_row);
        }

        // this.shape.forEach( row => {
        //     rotated.push(row)
        // });

        return(stringify(rotated))
    }
}

function trimShape(shape) {
    let rows = shape.split("\n");
    let new_rows = rows.map(element => element.replaceAll(' ', ''));
    return new_rows
}

function stringify(array) {
    let representation = "";
    array.forEach(element => {
        representation = representation + element + '\n';
    });
    return representation;
}