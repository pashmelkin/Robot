import { RobotLocation } from '../models/RobotLocation';
import { BoardConfiguration } from '../Configuration/BoardConfiguration';
import { IPlacementProcessor } from './IPlacementProcessor';

export class PlacementProcessor implements IPlacementProcessor {
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

    place(location: RobotLocation): RobotLocation {
        const resLocation: RobotLocation = location;
        const placementProc: PlacementProcessor = new PlacementProcessor(new BoardConfiguration());

        if (placementProc.isPlacementLegimit(location)) {
            return resLocation;
        }
        throw new Error('Wrong Place command parameters.');
    }
}
