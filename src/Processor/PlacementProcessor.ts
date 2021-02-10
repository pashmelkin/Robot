import { RobotLocation } from '../models/RobotLocation';
import { BoardConfiguration } from '../Configuration/BoardConfiguration';

export class PlacementProcessor {
    private readonly boardSize: BoardConfiguration;

    constructor(board: BoardConfiguration) {
        this.boardSize = board;
    }

    isPlacementLegimit = (location: RobotLocation) =>
        !(
            location.x >= this.boardSize.width ||
            location.y >= this.boardSize.length ||
            location.x < 0 ||
            location.y < 0
        );
}
