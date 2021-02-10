import { BoardSides } from '../models/BoardSides';
import { Commands, SimpleCommands } from '../models/Commands';
import { RobotLocation } from '../models/RobotLocation';

export abstract class Sider {
    abstract GetNextSide(command: SimpleCommands, location: RobotLocation): RobotLocation;
    public readonly myMap: Map<string, BoardSides>;

    constructor() {
        this.myMap = new Map<string, BoardSides>([
            [`${BoardSides.NORTH}${Commands.LEFT}`, BoardSides.WEST],
            [`${BoardSides.NORTH}${Commands.RIGHT}`, BoardSides.EAST],
            [`${BoardSides.SOUTH}${Commands.LEFT}`, BoardSides.EAST],
            [`${BoardSides.SOUTH}${Commands.RIGHT}`, BoardSides.WEST],
            [`${BoardSides.EAST}${Commands.LEFT}`, BoardSides.NORTH],
            [`${BoardSides.EAST}${Commands.RIGHT}`, BoardSides.SOUTH],
            [`${BoardSides.WEST}${Commands.LEFT}`, BoardSides.SOUTH],
            [`${BoardSides.WEST}${Commands.RIGHT}`, BoardSides.NORTH],
        ]);
    }

    Left = (location: RobotLocation) => this.GetNextSide(Commands.LEFT, location);
    Right = (location: RobotLocation) => this.GetNextSide(Commands.RIGHT, location);
}
