import { RobotLocation } from '../models/RobotLocation';
import { PlacementProcessor } from './PlacementProcessor';
import { BoardConfiguration } from '../Configuration/BoardConfiguration';

export function place(location: RobotLocation): RobotLocation {
    const resLocation: RobotLocation = location;
    const placementProc: PlacementProcessor = new PlacementProcessor(new BoardConfiguration());

    if (placementProc.isPlacementLegimit(location)) {
        return resLocation;
    }
    throw new Error('Wrong Place command parameters.');
}
