import { BoardSides } from './BoardSides';

export class RobotLocation {
    constructor(x: number, y: number, direction: BoardSides) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        /* if (isNaN(this.x))
            throw new Error(`Wrong RobotLocation parameter: ${this.x}`);
        if (isNaN(y))
            throw new Error(`Wrong RobotLocation parameter: ${this.y}`)*/
    }

    x: number;
    y: number;
    direction: BoardSides;
}
