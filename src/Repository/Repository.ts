import {RobotLocation} from "../models/RobotLocation";
import {IRepository} from "./IRepository";


export class Repository implements IRepository {

    private location : RobotLocation;
    constructor(location: RobotLocation)
    {
        this.location = location;
    }
    GetLocation() {
        if (this.location !== undefined)
            console.log("GetLocation: direction: " + this.location.direction);
        return this.location;
    }

    SetLocation (location: RobotLocation) {
        this.location = location;
        console.log("SetLocation: direction: " + this.location.direction);
    }

};

