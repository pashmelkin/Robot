import { MoveCalculator } from '../../../Processor/MoveCalculator';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { BoardConfiguration } from '../../../Configuration/BoardConfiguration';

const boardSize: BoardConfiguration = new BoardConfiguration();
const maxY: number = boardSize.length - 1;
const maxX: number = boardSize.width - 1;

const moves = [
    [new RobotLocation(0, 0, BoardSides.WEST), new RobotLocation(0, 0, BoardSides.WEST)],
    [new RobotLocation(0, 0, BoardSides.EAST), new RobotLocation(1, 0, BoardSides.EAST)],
    [new RobotLocation(0, 0, BoardSides.SOUTH), new RobotLocation(0, 0, BoardSides.SOUTH)],
    [new RobotLocation(0, 0, BoardSides.NORTH), new RobotLocation(0, 1, BoardSides.NORTH)],
    [new RobotLocation(0, maxY, BoardSides.NORTH), new RobotLocation(0, maxY, BoardSides.NORTH)],
    [new RobotLocation(maxX, 0, BoardSides.EAST), new RobotLocation(maxX, 0, BoardSides.EAST)],
    [new RobotLocation(1, maxY, BoardSides.WEST), new RobotLocation(0, maxY, BoardSides.WEST)],
    [new RobotLocation(maxX, maxY, BoardSides.EAST), new RobotLocation(maxX, maxY, BoardSides.WEST)],
];

let moveCalculator: MoveCalculator;

beforeEach(() => {
    moveCalculator = new MoveCalculator(boardSize);
});

describe('MoveCalculator:move function ', function () {
    test.each(moves)(
        'returns expected result depends on location',
        (location: RobotLocation, expectedLocation: RobotLocation) => {
            let resultLocation: RobotLocation;
            try {
                resultLocation = moveCalculator.move(location);
                expect(resultLocation).toEqual(expectedLocation);
            } catch (e) {
                expect(e.message).toEqual('Robot will fall off the board.');
            }
        },
    );
});
