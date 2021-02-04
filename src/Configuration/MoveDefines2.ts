import {BoardSides} from "../models/BoardSides";
import {Commands} from "../models/Commands";

export class MoveDefines2 {
    private readonly myMap: Map<string, BoardSides>;

    constructor() {

       this.myMap = new Map<string, BoardSides>([ [`${BoardSides.NORTH}${Commands.LEFT}`,  BoardSides.WEST],
           [`${BoardSides.NORTH}${Commands.RIGHT}`,  BoardSides.EAST]]);

    }

    public GetNextSide(command : Commands, currSide : BoardSides) : BoardSides
    {
        let projection = `${currSide}${command}`;
        for (let [key, value] of this.myMap) {
            console.log(key + ' = ' + value)
            console.log(projection);
        }

        const found = this.myMap.has(projection);
       // console.log("found 1 " + this.moves[0]);
       // console.log("found 1 " + this.moves[1]);
        console.log("found 2: " + found);
       // console.log("found 3: " + JSON.stringify(this.moves[1]) + " " +found === BoardSides.WEST);
        return BoardSides.SOUTH;
    }
}

