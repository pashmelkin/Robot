import {Repository} from "../../../Repository/Repository";
import {RobotLocation} from "../../../models/RobotLocation";
import {BoardSides} from "../../../models/BoardSides";


describe('Repository', function() {
    it('Repository function returns undefined if initialized with undefined',  function () {
        const repo = new Repository(undefined);
        let result = repo.GetLocation();
        expect(result).toBe(undefined);
    });

});


describe('Repository', function() {
    it('Repository function returns something',  function () {
        const repo = new Repository(new RobotLocation(0, 0, BoardSides.NORTH));
        let result = repo.GetLocation();
        //expect(result).toBe({"direction": "NORTH", "x": 0, "y": 0});
    });

});
