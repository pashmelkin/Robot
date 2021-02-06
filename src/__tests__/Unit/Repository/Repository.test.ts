import { Repository } from '../../../Repository/Repository';
import { RobotLocation } from '../../../models/RobotLocation';
import { BoardSides } from '../../../models/BoardSides';
import { MoveCalculator } from '../../../Processor/MoveCalculator';

describe('Repository', function () {
    it('Repository function returns undefined if initialized with undefined', function () {
        const repo = new Repository(undefined);
        const result = repo.GetLocation();
        expect(result).toBe(undefined);
    });
});

describe('Repository', function () {
    let repo: Repository;
    const loc = new RobotLocation(0, 0, BoardSides.NORTH);

    beforeEach(() => {
        repo = new Repository(loc);
    });
    it('Repository function returns correct location', function () {
        const result = repo.GetLocation();
        expect(result).toBe(loc);
    });
    it('Repository function returns correct location after set Location called', function () {
        const loc2 = new RobotLocation(0, 3, BoardSides.WEST);
        repo.SetLocation(loc2);
        const result = repo.GetLocation();
        expect(result).toBe(loc2);
    });
});
