import {BoardSides} from "../models/BoardSides";
import {Commands} from "../models/Commands";

type projection = [ BoardSides, Commands];
type nextMove = [ projection, BoardSides];

export class MoveDefines {
    private readonly moves: Array<nextMove>;

    constructor() {
        this.moves = [ [ [BoardSides.NORTH, Commands.LEFT],  BoardSides.WEST],
                       [ [BoardSides.NORTH, Commands.RIGHT],  BoardSides.EAST]];

    }

    public GetNextSide(command : Commands, currSide : BoardSides) : BoardSides
    {
        let project : projection = [currSide, command];
        const found = this.moves.find(element => element[0] === project);
        let keys = Object.keys(this.moves);
        console.log("keys: "+ keys);
        console.log("found 1 " + this.moves[0]);
        console.log("found 1 " + this.moves[1]);
        console.log("found 2: " + JSON.stringify(this.moves[0]) + " " +found === BoardSides.WEST);
        console.log("found 3: " + JSON.stringify(this.moves[1]) + " " +found === BoardSides.WEST);
        return BoardSides.SOUTH;
    }
}

