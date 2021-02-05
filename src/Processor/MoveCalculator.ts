import { BoardConfiguration } from '../Configuration/BoardConfiguration';
import { RobotLocation } from '../models/RobotLocation';
import { BoardSides } from '../models/BoardSides';

export class MoveCalculator {
    private readonly boardSize: BoardConfiguration;

    constructor() {
        this.boardSize = new BoardConfiguration();
    }

    Move(location: RobotLocation): { location: RobotLocation; error: string } {
        let error: string = undefined;
        const newLocation: RobotLocation = location;
        if (location.direction === BoardSides.EAST && location.x < this.boardSize.width - 1) {
            newLocation.x++;
        } else if (location.direction === BoardSides.WEST && location.x > 1) {
            newLocation.x--;
        } else if (location.direction === BoardSides.NORTH && location.y < this.boardSize.length - 1) {
            newLocation.y++;
        } else if (location.direction === BoardSides.SOUTH && location.y > 1) {
            newLocation.y--;
        } else error = 'Robot will fall off the board.';
        return { location: newLocation, error };
    }

    IsPlacementLegimit(location: RobotLocation): boolean {
        let result = true;
        if (
            location.x >= this.boardSize.width ||
            location.y >= this.boardSize.length ||
            location.x < 0 ||
            location.y < 0
        ) {
            result = false;
        }
        return result;
    }
}
