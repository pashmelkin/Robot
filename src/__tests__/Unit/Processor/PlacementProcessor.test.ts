import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { BoardConfiguration } from '../../../Configuration/BoardConfiguration';
import { PlacementProcessor } from '../../../Processor/PlacementProcessor';

const boardSize: BoardConfiguration = new BoardConfiguration();
const maxY: number = boardSize.length - 1;
const maxX: number = boardSize.width - 1;

const placeLocations = [
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
    [new RobotLocation(maxY + 1, 0, BoardSides.NORTH), false],
    [new RobotLocation(maxY + 1, 0, BoardSides.SOUTH), false],
    [new RobotLocation(maxX + 1, 0, BoardSides.EAST), false],
    [new RobotLocation(maxX + 1, 0, BoardSides.WEST), false],
    [new RobotLocation(-1, -1, BoardSides.NORTH), false],
    [new RobotLocation(-1, -1, BoardSides.SOUTH), false],
    [new RobotLocation(-1, -1, BoardSides.EAST), false],
    [new RobotLocation(-1, -1, BoardSides.WEST), false],
];

let placementProc: PlacementProcessor;

beforeEach(() => {
    placementProc = new PlacementProcessor(boardSize);
});

describe('PlacementProcessor:isPlacementLegimit function ', function () {
    test.each(placeLocations)(
        'returns expected result depends on location',
        (location: RobotLocation, expectedResult: boolean) => {
            const result = placementProc.isPlacementLegimit(location);
            expect(result).toEqual(expectedResult);
        },
    );
});
