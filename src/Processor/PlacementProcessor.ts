import { RobotLocation } from '../models/RobotLocation';
import { BoardConfiguration } from '../Configuration/BoardConfiguration';

export class PlacementProcessor {
    private readonly boardSize: BoardConfiguration;

    constructor() {
        this.boardSize = new BoardConfiguration();
    }

    public isPlacementLegimit(location: RobotLocation): boolean {
        return !(
            location.x >= this.boardSize.width ||
            location.y >= this.boardSize.length ||
            location.x < 0 ||
            location.y < 0
        );
    }
}
