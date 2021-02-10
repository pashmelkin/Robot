import { BoardConfiguration } from '../Configuration/BoardConfiguration';
import { RobotLocation } from '../models/RobotLocation';
import { BoardSides } from '../models/BoardSides';

export class MoveCalculator {
    private readonly boardSize: BoardConfiguration;

    constructor(board: BoardConfiguration) {
        this.boardSize = board;
    }

    move(location: RobotLocation): RobotLocation {
        const newLocation: RobotLocation = location;

        if (location.direction === BoardSides.EAST && location.x < this.boardSize.width - 1) {
            newLocation.x++;
        } else if (location.direction === BoardSides.WEST && location.x > 1) {
            newLocation.x--;
        } else if (location.direction === BoardSides.NORTH && location.y < this.boardSize.length - 1) {
            newLocation.y++;
        } else if (location.direction === BoardSides.SOUTH && location.y > 1) {
            newLocation.y--;
        } else throw new Error('Robot will fall off the board.');
        return location;
    }
}
