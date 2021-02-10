import { IRepository } from '../Repository/IRepository';
import { Commands } from '../models/Commands';
import { RobotLocation } from '../models/RobotLocation';
import { BoardSides } from '../models/BoardSides';
import { SideHelper } from '../Configuration/SideHelper';
import { MoveCalculator } from './MoveCalculator';
import { PlacementProcessor } from './PlacementProcessor';
import { ProcessorAbs } from './ProcessorAbs';
import { place } from './Place';

export class Processor extends ProcessorAbs {
    repository: IRepository;
    sideHelper: SideHelper;
    moveCalculator: MoveCalculator;
    placementProc: PlacementProcessor;
    private readonly commandsMap;

    constructor(repository: IRepository) {
        super();
        this.repository = repository;
        this.sideHelper = new SideHelper();
        this.moveCalculator = new MoveCalculator();
        this.placementProc = new PlacementProcessor();
        this.commandsMap = new Map<Commands, BoardSides>();
        this.commandsMap[Commands.PLACE] = place;
        this.commandsMap[Commands.MOVE] = this.moveCalculator.move;
        this.commandsMap[Commands.LEFT] = this.moveCalculator.move;
        this.commandsMap[Commands.RIGHT] = this.moveCalculator.move;
    }

    getLocation = (): RobotLocation => this.repository?.GetLocation();

    public moveRobot(command: string): string | undefined {
        const currLocation = this.getLocation();
        const currDirection = currLocation?.direction;
        const currX = currLocation?.x; /// add coordinates type
        const currY = currLocation?.y;

        const newDirection = currDirection;
        const newX = currX;
        const newY = currY;

        const params = command.split(/[ ,]+/);
        const commandName = params[0];
        //Move it?
        if (currLocation === undefined && commandName !== Commands.PLACE) {
            throw new Error(`Not ready to process the command. Please put the ${Commands.PLACE} command first.`);
        }

        const f = this.commandsMap[commandName];
        if (typeof f === 'undefined') throw new Error(`Processor: Unknown command ${commandName} received`);

        const newLocation = f(new RobotLocation(parseInt(params[1]), parseInt(params[2]), BoardSides[params[3]]));

        /*        switch (commandName) {
            case Commands.PLACE: {

                break;
            }
            case Commands.LEFT:
            case Commands.RIGHT: {
                /* const sideRes = this.sideHelper.GetNextSide(Commands.LEFT, currDirection);
                if (sideRes.error === undefined) {
                    newDirection = sideRes.side;
                }
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
            default: {
                return 'Processor: Unknown commandName received';
                break;
            }
        }
*/
        this.repository.SetLocation(newLocation);
        return;
    }
}
