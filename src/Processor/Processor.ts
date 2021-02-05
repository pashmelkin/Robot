import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";
import {Commands} from "../models/Commands";
import {RobotLocation} from "../models/RobotLocation";
import {BoardSides} from "../models/BoardSides";
import {SideHelper} from "../Configuration/SideHelper";
import {Calculator} from "./Calculator";


export class Processor implements IProcessor {
    repository: IRepository;
    sideHelper : SideHelper;
    moveCalculator: Calculator;

    constructor(repository: IRepository){
        this.repository = repository;
        this.sideHelper = new SideHelper();
        this.moveCalculator = new Calculator();
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
                const direction = BoardSides[params[3]];
                const x = parseInt ( params[1] );
                const y = parseInt ( params[2] );

                if (this.moveCalculator.IsPlacementLegimite(new RobotLocation(x, y, direction ))){
                    newX = x;
                    newY = y;
                    newDirection = direction;
                }
                break;
                }
            case Commands.LEFT:
            case Commands.RIGHT: {
                const sideRes = this.sideHelper.GetNextSide(commandName, currDirection);
                if (sideRes.error === "") {
                    newDirection = sideRes.side;
                }
                break;
                }
            case Commands.MOVE: {
               const moveRes = this.moveCalculator.Move(currLocation);
               if (moveRes.error === "") {
                   newY = moveRes.location.y;
                   newX = moveRes.location.x;
               }
               break;
                }
            case Commands.REPORT: {
                const destination: string = BoardSides[currLocation.direction];
                result = `${currLocation.x} ${currLocation.y} ${destination}`;
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

