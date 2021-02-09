import { IProcessor } from './IProcessor';
import { BoardSides } from '../models/BoardSides';
import { RobotLocation } from '../models/RobotLocation';
import { Commands } from '../models/Commands';

export abstract class ProcessorAbs implements IProcessor {
    abstract getLocation: () => RobotLocation;
    abstract moveRobot: (command: string) => string;

    process(command: string): string {
        return command === Commands.REPORT ? this.report() : this.moveRobot(command);
    }
    report(): string {
        const location = this.getLocation();
        const destination: string = BoardSides[location.direction];
        return `${location.x} ${location.y} ${destination}`;
    }
}
