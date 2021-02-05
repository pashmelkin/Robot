import { Processor } from '../../../Processor/Processor';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { Repository } from '../../../Repository/Repository';
import { Commands } from '../../../models/Commands';

const actCommands = [Commands.LEFT, Commands.RIGHT, Commands.REPORT, Commands.MOVE, Commands.REPORT];
const correctLocation = new RobotLocation(1, 2, BoardSides.SOUTH);
const correctLocationStr = '1 2 SOUTH';

describe("'Processor returns error if no Place command initially issued", () => {
    test.each(actCommands)('returns error if %s and no Place command initially issued', (command) => {
        const processor = new Processor(undefined);
        const result = processor.MoveRobot(command);
        expect(result).toBe('Not ready to move. Please put the Place command first.');
    });
});

describe('Processor', function () {
    it('Processor function returns correct location after correct place command', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const result = processor.MoveRobot('REPORT');
        expect(result).toBe(correctLocationStr);
    });
});

describe('Processor', function () {
    it('Processor function returns error message after wrong place command', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const resultMove = processor.MoveRobot('PLACE 1 NORTH NORTH');
        expect(resultMove).toBe('Wrong Place command parameter: NORTH');
    });
});

describe('Processor', function () {
    it('Processor function returns does not change location after wrong place command', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const resultMove = processor.MoveRobot('PLACE 1 NORTH NORTH');
        expect(resultMove).toBe('Wrong Place command parameter: NORTH');
        const resultReport = processor.MoveRobot('REPORT');
        expect(resultReport).toBe(correctLocationStr);
    });
});

describe('Processor', function () {
    it('Processor function returns correct location after correct place command', function () {
        const repo = new Repository(undefined);
        const processor = new Processor(repo);
        processor.MoveRobot('PLACE 1 2 SOUTH');
        const result = processor.MoveRobot('REPORT');
        expect(result).toBe('1 2 SOUTH');
    });
});
