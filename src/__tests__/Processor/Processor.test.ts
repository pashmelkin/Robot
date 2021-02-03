import {Processor} from "../../Processor/Processor";

describe('Processor', function() {
    it('Processor function returns something',  function () {
        let processor = new Processor(undefined);
        const result = processor.MoveRobot("REPORT");
        expect(result).toBe('Not ready to move!');
    });

});
