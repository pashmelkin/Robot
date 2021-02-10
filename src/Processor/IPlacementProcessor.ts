import { RobotLocation } from '../models/RobotLocation';

export interface IPlacementProcessor {
    place(location: RobotLocation): RobotLocation;
}
