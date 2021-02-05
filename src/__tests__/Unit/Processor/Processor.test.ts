import {Processor} from "../../../Processor/Processor";
import {RobotLocation} from "../../../models/RobotLocation";
import {BoardSides} from "../../../models/BoardSides";
import {Repository} from "../../../Repository/Repository";

describe('Processor', function() {
    it('Processor function returns error if no repo defined',  function () {
        let processor = new Processor(undefined);
        const result = processor.MoveRobot("REPORT");
        expect(result).toBe('Not ready to move!');
    });

});

describe('Processor', function() {
    it('Processor function returns correct location after correct place command',  function () {
        const repo = new Repository(new RobotLocation(1 , 2, BoardSides.SOUTH));
        let processor = new Processor(repo);
        const result = processor.MoveRobot("REPORT");
        expect(result).toBe('1 2 SOUTH');
    });

});


describe('Processor', function() {
    it('Processor function returns correct location after correct place command',  function () {
        const repo = new Repository(undefined);
        let processor = new Processor(repo);
        processor.MoveRobot("PLACE 1 2 SOUTH");
        const result = processor.MoveRobot("REPORT");
        expect(result).toBe('1 2 SOUTH');
    });

});
