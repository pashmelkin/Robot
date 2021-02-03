import {BoardSides} from "./BoardSides";

export class RobotLocation
{
    constructor(x: number, y: number, direction: BoardSides) {
       this.x = x;
       this.y = y;
       this.direction = direction;
       console.log("Consrta: " + this.x + " " + this.direction)
    }

    x: number;
    y: number;
    direction: BoardSides;
}
