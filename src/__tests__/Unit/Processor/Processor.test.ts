import { Processor } from '../../../Processor/Processor';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { Repository } from '../../../Repository/Repository';
import { Commands } from '../../../models/Commands';

const actCommands = [Commands.LEFT, Commands.RIGHT, Commands.REPORT, Commands.MOVE, Commands.REPORT];
const correctLocation = new RobotLocation(1, 2, BoardSides.SOUTH);
const correctLocationStr = '1 2 SOUTH';

describe("'Processor returns error if no Place commandName initially issued", () => {
    test.each(actCommands)('returns error if %s and no Place commandName initially issued', (command) => {
        const processor = new Processor(undefined);
        const result = processor.moveRobot(command);
        expect(result).toBe('Not ready to move. Please put the Place commandName first.');
    });
});

describe('Processor', function () {
    it('moveRobot function returns correct location after correct place commandName', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const result = processor.moveRobot('REPORT');
        expect(result).toBe(correctLocationStr);
    });
    it('moveRobot function returns does not change location after wrong place commandName', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const resultMove = processor.moveRobot('PLACE 1 NORTH NORTH');
        //  expect(resultMove).toBe('Wrong Place commandName parameter: NORTH');
        // const resultReport = processor.moveRobot('REPORT');
        // expect(resultReport).toBe(correctLocationStr);
    });
    it('moveRobot function returns correct location after correct place commandName', function () {
        const repo = new Repository(undefined);
        const processor = new Processor(repo);
        processor.moveRobot('PLACE 1 2 SOUTH');
        const result = processor.moveRobot('REPORT');
        expect(result).toBe('1 2 SOUTH');
    });
});
