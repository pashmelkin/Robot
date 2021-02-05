import { RobotLocation } from '../models/RobotLocation';
import { IRepository } from './IRepository';

export class Repository implements IRepository {
    private location: RobotLocation;
    constructor(location: RobotLocation) {
        this.location = location;
    }
    GetLocation() {
        return this.location;
    }

    SetLocation(location: RobotLocation) {
        this.location = location;
    }
}
