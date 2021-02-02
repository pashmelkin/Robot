import {MoveRobot} from "../../Processor/MoveRobot";

describe('MoveRobot', function() {
    it('MoveRobot function returns something',  function () {
        const result = MoveRobot("Move 1 2 3");
        expect(result).toBe('Successfully moved');
    });

});
