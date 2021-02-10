import { IProcessor } from './IProcessor';
import { BoardSides } from '../models/BoardSides';
import { RobotLocation } from '../models/RobotLocation';
import { Commands } from '../models/Commands';
import { NotReadyToMoveError } from '../models/NotReadyToMoveError';

export abstract class Processor implements IProcessor {
    abstract getLocation: () => RobotLocation;
    abstract moveRobot(command: string): string | undefined;

    process = (command: string) => (command === Commands.REPORT ? this.report() : this.moveRobot(command));

    report(): string {
        const location = this.getLocation();
        if (location === undefined) throw new NotReadyToMoveError();
        const destination: string = BoardSides[location?.direction];
        return `${location?.x},${location?.y},${destination}`;
    }
}
