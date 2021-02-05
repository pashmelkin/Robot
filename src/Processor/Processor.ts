import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";
import {Commands} from "../models/Commands";
import {RobotLocation} from "../models/RobotLocation";
import {BoardSides} from "../models/BoardSides";
import {SideHelper} from "../Configuration/SideHelper";
import {MoveCalculator} from "./MoveCalculator";


export class Processor implements IProcessor {
    repository: IRepository;
    sideHelper : SideHelper;
    moveCalculator: MoveCalculator;

    constructor(repository: IRepository){
        this.repository = repository;
        this.sideHelper = new SideHelper();
        this.moveCalculator = new MoveCalculator();
    }

    public MoveRobot (command: string) : string
    {
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
            return "Not ready to move. Please put the Place command first.";
        }

        switch (commandName) {
            case Commands.PLACE: {
                const x = parseInt ( params[1] );
                const y = parseInt ( params[2] );
                const direction = BoardSides[params[3]];

                if (this.moveCalculator.IsPlacementLegimite ( new RobotLocation ( x , y , direction ) )) {
                    newX = x;
                    newY = y;
                    newDirection = direction;
                } else
                    return "Wrong Place command parameters."
                break;
            }
            case Commands.LEFT:
            case Commands.RIGHT: {
                const sideRes = this.sideHelper.GetNextSide ( commandName , currDirection );
                if (sideRes.error === undefined) {
                    newDirection = sideRes.side;
                }
                break;
            }
            case Commands.MOVE: {
                const moveRes = this.moveCalculator.Move ( currLocation );
                if (moveRes.error === undefined) {
                    newY = moveRes.location.y;
                    newX = moveRes.location.x;
                }
            }
               break;
            case Commands.REPORT: {
                const destination: string = BoardSides[currLocation.direction];
                return `${currLocation.x} ${currLocation.y} ${destination}`;
                break;
            }
            default: {
                return  "Processor: Unknown command received" ;
                break;
                }
            }

        this.repository.SetLocation ( new RobotLocation ( newX , newY , newDirection ) );

        return;
    }


};

