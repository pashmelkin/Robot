export class RobotLocation
{
    constructor(x: number, y: number, direction: string) {
       this.x = x;
       this.y = y;
       this.direction = direction;
    }

    x: number;
    y: number;
    direction: string;
}
