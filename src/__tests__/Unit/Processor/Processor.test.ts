import { Processor } from '../../../Processor/Processor';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { Repository } from '../../../Repository/Repository';
import { Commands } from '../../../models/Commands';

const actCommands = [Commands.LEFT, Commands.RIGHT, Commands.REPORT, Commands.MOVE, Commands.REPORT];
const correctLocation = new RobotLocation(1, 2, BoardSides.SOUTH);
const correctLocationStr = '1,2,SOUTH';

describe("'Processor returns error if no Place command initially issued", () => {
    test.each(actCommands)('returns error if %s and no Place command initially issued', (command) => {
        const processor = new Processor(undefined);
        const t = () => {
            processor.process(command);
        };
        expect(t).toThrow(Error);
        expect(t).toThrow(`Not ready to process the command. Please put the ${Commands.PLACE} command first.`);
    });
    it('process returns error if unknown command issued', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const t = () => {
            processor.process('HELLO_ROBOT');
        };
        expect(t).toThrow(Error);
        expect(t).toThrow(`Processor: Unknown command HELLO_ROBOT received`);
    });
});

describe('Processor', function () {
    it('process with Report command returns correct location after correct place command', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        const result = processor.process(Commands.REPORT);
        expect(result).toBe(correctLocationStr);
    });
    it('process function returns correct location after correct place command', function () {
        const repo = new Repository(undefined);
        const processor = new Processor(repo);
        processor.process('PLACE 1,2,SOUTH');
        const result = processor.process(Commands.REPORT);
        expect(result).toBe(correctLocationStr);
    });
});

describe('Processor commands: MOVE', function () {
    it('process with Move command returns correct new location', function () {
        const repo = new Repository(correctLocation);
        const processor = new Processor(repo);
        processor.process(Commands.MOVE);

        const result = processor.process(Commands.REPORT);

        expect(result).toBe('1,1,SOUTH');
    });
    it('process with Left command returns correct new location', function () {
        const repo = new Repository(undefined);
        const processor = new Processor(repo);
        processor.process("PLACE 1,2,NORTH")
        processor.process(Commands.LEFT);

        const result = processor.process(Commands.REPORT);

        expect(result).toBe('1,2,WEST');
    });
    it('process with Right command returns correct new location', function () {
        const repo = new Repository(undefined);
        const processor = new Processor(repo);
        processor.process("PLACE 1,2,NORTH")
        processor.process(Commands.RIGHT);

        const result = processor.process(Commands.REPORT);

        expect(result).toBe('1,2,EAST');
    });
});
