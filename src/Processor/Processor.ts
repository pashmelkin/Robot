import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";
import {Commands} from "../models/Commands";
import {RobotLocation} from "../models/RobotLocation";
import {BoardSides} from "../models/BoardSides";
import {MoveDefines} from "../Configuration/MoveDefines";
import {MoveDefines2} from "../Configuration/MoveDefines2";


export class Processor implements IProcessor {
    repository: IRepository;
    moveDefines : MoveDefines2;

    constructor(repository: IRepository){
        this.repository = repository;
        this.moveDefines = new MoveDefines2();
    }

    public MoveRobot (command: string) : string
    {
        let result = "";
        let currLocation = this.repository?.GetLocation();
        let currDirection = currLocation?.direction;
        let currX = currLocation?.x;
        let currY = currLocation?.y;

        let newDirection = currDirection;
        let newX = currX;
        let newY = currY;

        const params = command.split(" ");
        const commandName = params[0];
        if (commandName !== Commands.PLACE && currLocation === undefined)
        {
            return "Not ready to move!";
        }

        switch (commandName) {
            case Commands.PLACE: {
                newDirection = BoardSides[params[3]];
                newX = parseInt ( params[1] );
                newY = parseInt ( params[2] );

                break;
                }
            case Commands.LEFT: {
                this.moveDefines.GetNextSide(Commands.LEFT, newDirection);
                /*if(currDirection === BoardSides.NORTH){
                    newDirection = BoardSides.WEST;
                }
                else if( currDirection === BoardSides.WEST){
                    newDirection = BoardSides.SOUTH;
                }
                else if( currDirection === BoardSides.SOUTH){
                    newDirection = BoardSides.WEST;
                }
                else if ( currDirection === BoardSides.EAST){
                    newDirection = BoardSides.NORTH;
                }*/

                    break;
                }
            case Commands.RIGHT: {
                if(currDirection === BoardSides.NORTH){
                    newDirection = BoardSides.EAST;
                }
                else if( currDirection === BoardSides.WEST){
                    newDirection = BoardSides.NORTH;
                }
                else if( currDirection === BoardSides.SOUTH){
                    newDirection = BoardSides.EAST;
                }
                else if ( currDirection === BoardSides.EAST){
                    newDirection = BoardSides.SOUTH;
                }


                break;
                }
            case Commands.MOVE: {
                if(currDirection === BoardSides.NORTH){
                    newY--;
                }
                else if( currDirection === BoardSides.WEST){
                    newX ++;
                }
                else if( currDirection === BoardSides.SOUTH){
                    newY++;
                }
                else if ( currDirection === BoardSides.EAST){
                    newY--;
                }
                    break;
                }
            case Commands.REPORT: {
                const destination: string = BoardSides[currLocation.direction];
                result = `${currLocation.x} ${currLocation.y} ${destination}`;
                console.log ( result );
                break;
                }
            default: {
                console.log ( "Unknown command received" );
                break;
                }
            }
        if (commandName !== Commands.REPORT) {
            this.repository.SetLocation ( new RobotLocation ( newX , newY , newDirection ) );
        }
        return result;
    }


};

