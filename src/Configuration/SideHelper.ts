import {BoardSides} from "../models/BoardSides";
import {Commands} from "../models/Commands";

export class SideHelper {
    private readonly myMap: Map<string, BoardSides>;

    constructor() {

       this.myMap = new Map<string, BoardSides>([
           [`${BoardSides.NORTH}${Commands.LEFT}`,  BoardSides.WEST],
           [`${BoardSides.NORTH}${Commands.RIGHT}`,  BoardSides.EAST],
           [`${BoardSides.SOUTH}${Commands.LEFT}`,  BoardSides.EAST],
           [`${BoardSides.SOUTH}${Commands.RIGHT}`,  BoardSides.WEST],
           [`${BoardSides.EAST}${Commands.LEFT}`,  BoardSides.NORTH],
           [`${BoardSides.EAST}${Commands.RIGHT}`,  BoardSides.SOUTH],
           [`${BoardSides.WEST}${Commands.LEFT}`,  BoardSides.SOUTH],
           [`${BoardSides.WEST}${Commands.RIGHT}`,  BoardSides.NORTH]
       ]);

    }

    public GetNextSide(command : Commands, currSide : BoardSides) : {side: BoardSides, error: string}
    {
        let projection = `${currSide}${command}`;
        let side : BoardSides;
        let error: string = "";

        if(this.myMap.has(projection)) {
            side = this.myMap.get(projection);
        }
        else
        {
            error = `The combination ${currSide} ${command} not found`;
        }

        return {side, error};
    }
}

