import { MoveCalculator } from '../../../Processor/MoveCalculator';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { BoardConfiguration } from '../../../Configuration/BoardConfiguration';

const boardSize: BoardConfiguration = new BoardConfiguration();
const maxY: number = boardSize.length - 1;
const maxX: number = boardSize.width - 1;

const locations = [
    [new RobotLocation(0, 0, BoardSides.NORTH), true],
    [new RobotLocation(0, 0, BoardSides.SOUTH), true],
    [new RobotLocation(0, 0, BoardSides.EAST), true],
    [new RobotLocation(0, 0, BoardSides.WEST), true],
    [new RobotLocation(-1, 0, BoardSides.NORTH), false],
    [new RobotLocation(-1, 0, BoardSides.SOUTH), false],
    [new RobotLocation(-1, 0, BoardSides.EAST), false],
    [new RobotLocation(-1, 0, BoardSides.WEST), false],
    [new RobotLocation(0, -1, BoardSides.NORTH), false],
    [new RobotLocation(0, -1, BoardSides.SOUTH), false],
    [new RobotLocation(0, -1, BoardSides.EAST), false],
    [new RobotLocation(0, -1, BoardSides.WEST), false],
];
const moves = [
    [new RobotLocation(0, 0, BoardSides.WEST), new RobotLocation(0, 0, BoardSides.WEST)],
    [new RobotLocation(0, 0, BoardSides.EAST), new RobotLocation(1, 0, BoardSides.EAST)],
    [new RobotLocation(0, 0, BoardSides.SOUTH), new RobotLocation(0, 0, BoardSides.SOUTH)],
    [new RobotLocation(0, 0, BoardSides.NORTH), new RobotLocation(0, 1, BoardSides.NORTH)],
    [new RobotLocation(0, maxY, BoardSides.NORTH), new RobotLocation(0, maxY, BoardSides.NORTH)],
    [new RobotLocation(maxX, 0, BoardSides.WEST), new RobotLocation(maxX, 0, BoardSides.WEST)],
];

let moveCalculator: MoveCalculator;

beforeEach(() => {
    moveCalculator = new MoveCalculator();
});

describe('MoveCalculator:IsPlacementLegimit function ', function () {
    test.each(locations)(
        'returns expected result depends on location',
        (location: RobotLocation, expectedResult: boolean) => {
            const result = moveCalculator.IsPlacementLegimit(location);
            expect(result).toEqual(expectedResult);
        },
    );
});

describe('MoveCalculator:Move function ', function () {
    test.each(moves)(
        'returns expected result depends on location',
        (location: RobotLocation, expectedLocation: RobotLocation) => {
            const resultLocation = moveCalculator.Move(location).location;
            expect(resultLocation).toEqual(expectedLocation);
        },
    );
});
