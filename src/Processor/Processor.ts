import { IProcessor } from './IProcessor';
import { IRepository } from '../Repository/IRepository';
import { Commands } from '../models/Commands';
import { RobotLocation } from '../models/RobotLocation';
import { BoardSides } from '../models/BoardSides';
import { SideHelper } from '../Configuration/SideHelper';
import { MoveCalculator } from './MoveCalculator';

export class Processor implements IProcessor {
    repository: IRepository;
    sideHelper: SideHelper;
    moveCalculator: MoveCalculator;

    constructor(repository: IRepository) {
        this.repository = repository;
        this.sideHelper = new SideHelper();
        this.moveCalculator = new MoveCalculator();
    }

    public moveRobot(command: string): string {
        const currLocation = this.repository?.GetLocation();
        const currDirection = currLocation?.direction;
        const currX = currLocation?.x;
        const currY = currLocation?.y;

        let newDirection = currDirection;
        let newX = currX;
        let newY = currY;

        const params = command.split(' ');
        const commandName = params[0];
        if (commandName !== Commands.PLACE && currLocation === undefined) {
            return 'Not ready to move. Please put the Place commandName first.';
        }

        switch (commandName) {
            case Commands.PLACE: {
                const x = parseInt(params[1]);
                if (isNaN(x)) return `Wrong Place command parameter: ${params[1]}`;
                const y = parseInt(params[2]);
                if (isNaN(y)) return `Wrong Place command parameter: ${params[2]}`;
                const direction = BoardSides[params[3]];

                if (this.moveCalculator.isPlacementLegimit(new RobotLocation(x, y, direction))) {
                    newX = x;
                    newY = y;
                    newDirection = direction;
                } else return 'Wrong Place commandName parameters.';
                x;
                break;
            }
            case Commands.LEFT:
            case Commands.RIGHT: {
                /* const sideRes = this.sideHelper.GetNextSide(Commands.LEFT, currDirection);
                if (sideRes.error === undefined) {
                    newDirection = sideRes.side;
                }*/
                break;
            }
            case Commands.MOVE:
                {
                    try {
                        const moveRes = this.moveCalculator.move(currLocation);

                        newY = moveRes.y;
                        newX = moveRes.x;
                    } catch (e) {
                        console.error(e.message);
                    }
                }
                break;
            case Commands.REPORT: {
                const destination: string = BoardSides[currLocation.direction];
                return `${currLocation.x} ${currLocation.y} ${destination}`;
                break;
            }
            default: {
                return 'Processor: Unknown commandName received';
                break;
            }
        }

        this.repository.SetLocation(new RobotLocation(newX, newY, newDirection));

        return;
    }
}
