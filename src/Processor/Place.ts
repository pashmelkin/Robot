import { RobotLocation } from '../models/RobotLocation';
import { PlacementProcessor } from './PlacementProcessor';

export function place(location: RobotLocation): RobotLocation {
    const resLocation: RobotLocation = location;
    const placementProc: PlacementProcessor = new PlacementProcessor();

    if (placementProc.isPlacementLegimit(location)) {
        return resLocation;
    }
    throw new Error('Wrong Place command parameters.');
}
