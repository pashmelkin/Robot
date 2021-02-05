import { BoardSides } from './BoardSides';

export class RobotLocation {
    constructor(x: number, y: number, direction: BoardSides) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    x: number;
    y: number;
    direction: BoardSides;
}
