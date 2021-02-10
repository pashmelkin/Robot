import { IRepository } from '../Repository/IRepository';
import { Commands } from '../models/Commands';
import { RobotLocation } from '../models/RobotLocation';
import { BoardSides } from '../models/BoardSides';
import { SideHelper } from '../Configuration/SideHelper';
import { MoveCalculator } from './MoveCalculator';
import { PlacementProcessor } from './PlacementProcessor';
import { ProcessorAbs } from './ProcessorAbs';
import { BoardConfiguration } from '../Configuration/BoardConfiguration';

export class Processor extends ProcessorAbs {
    private readonly repository: IRepository;
    private readonly sideHelper: SideHelper;
    private readonly moveCalculator: MoveCalculator;
    private readonly commandsMap;
    private readonly placementProc: PlacementProcessor;

    constructor(repository: IRepository) {
        super();
        this.repository = repository;
        this.sideHelper = new SideHelper();
        this.moveCalculator = new MoveCalculator(new BoardConfiguration());
        this.placementProc = new PlacementProcessor(new BoardConfiguration());
        this.commandsMap = new Map<Commands, BoardSides>();
        this.commandsMap[Commands.PLACE] = this.placementProc.place;
        this.commandsMap[Commands.MOVE] = this.moveCalculator.move;
        this.commandsMap[Commands.LEFT] = this.sideHelper.Left;
        this.commandsMap[Commands.RIGHT] = this.sideHelper.Right;
    }

    getLocation = (): RobotLocation => this.repository?.GetLocation();

    public moveRobot(command: string): string | undefined {
        const currLocation = this.getLocation();
        let newPlaceLoc: RobotLocation;

        const params = command.split(/[ ,]+/);
        const commandName = params[0];
        if (params.length > 1)
            newPlaceLoc = new RobotLocation(parseInt(params[1]), parseInt(params[2]), BoardSides[params[3]]);
        else newPlaceLoc = currLocation;

        //Move it?
        if (currLocation === undefined && commandName !== Commands.PLACE) {
            throw new Error(`Not ready to process the command. Please put the ${Commands.PLACE} command first.`);
        }

        const moveFunc = this.commandsMap[commandName];
        if (typeof moveFunc === 'undefined') throw new Error(`Processor: Unknown command ${commandName} received`);

        this.repository.SetLocation(moveFunc(newPlaceLoc));
        return;
    }
}
