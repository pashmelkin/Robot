import {BoardConfiguration} from "../Configuration/BoardConfiguration";
import {RobotLocation} from "../models/RobotLocation";
import {BoardSides} from "../models/BoardSides";

export class Calculator{
    private readonly boardSize: BoardConfiguration;

    constructor(){
        this.boardSize = new BoardConfiguration(5 ,5);
    }

    Move(location: RobotLocation): {newLocation: RobotLocation, error: string} {

        let error : string = '';
        let newLocation : RobotLocation = location;
        if(location.direction === BoardSides.EAST && location.x > 0){
            newLocation.x--;
        }
        else if(location.direction === BoardSides.WEST && location.x < this.boardSize.width ){
            newLocation.x++;
        }
        else if(location.direction === BoardSides.NORTH && location.y < this.boardSize.length ){
            newLocation.y++;
        }
        else if(location.direction === BoardSides.SOUTH && location.y > 0  ){
            newLocation.y--;
        }
        else
            error = "Robot will fall off the board.";
        return {newLocation, error};
    }

    IsPlacementLegimite (location : RobotLocation) : {result : boolean, error?: string} {
        let result = true;
        let error: string = "";
        if (location.x >= this.boardSize.width ||
            location.y >= this.boardSize.length ||
            location.x <= 0 || location.y < 0 )
        {
            error = 'Invalid placement location value';
            result = false;
        }
            return {result, error};
    }
}
