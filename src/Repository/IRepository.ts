import {RobotLocation} from "../models/RobotLocation";

export interface IRepository {
    GetLocation: () => RobotLocation
    SetLocation: (location: RobotLocation) => void
};
