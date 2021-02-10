import { IProcessor } from './IProcessor';
import { BoardSides } from '../models/BoardSides';
import { RobotLocation } from '../models/RobotLocation';
import { Commands } from '../models/Commands';

export abstract class ProcessorAbs implements IProcessor {
    abstract getLocation: () => RobotLocation;
    abstract moveRobot(command: string): string | undefined;

    process(command: string): string {
        return command === Commands.REPORT ? this.report() : this.moveRobot(command);
    }

    report(): string {
        const location = this.getLocation();
        if (location === undefined)
            throw new Error(`Not ready to process the command. Please put the ${Commands.PLACE} commandName first.`);
        const destination: string = BoardSides[location?.direction];
        return `${location?.x},${location?.y},${destination}`;
    }
}
