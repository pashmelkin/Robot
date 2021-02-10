import { SimpleCommands } from '../models/Commands';
import { RobotLocation } from '../models/RobotLocation';
import { Sider } from './Sider';

export class SideHelper extends Sider {
    GetNextSide(command: SimpleCommands, location: RobotLocation): RobotLocation {
        const projection = `${location.direction}${command}`;
        const newLocation = location;

        if (this.myMap.has(projection)) {
            const newSide = this.myMap.get(projection);
            newLocation.direction = newSide;
        } else {
            throw new Error(`The combination ${location.direction} ${command} not found`);
        }

        return newLocation;
    }
}
