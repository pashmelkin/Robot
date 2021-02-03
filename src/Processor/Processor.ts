import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";
import {Commands} from "../models/Commands";
import {RobotLocation} from "../models/RobotLocation";
import {BoardSides} from "../models/BoardSides";


export class Processor implements IProcessor {
    repository: IRepository;
    private readonly result = "Successfully moved";


    constructor(repository: IRepository){
        this.repository = repository;
    }

    public MoveRobot (command: string) : string
    {
        let result = "";
        let currLocation = this.repository.GetLocation();

        const params = command.split(" ");
        const commandName = params[0];
        if (commandName !== Commands.PLACE && currLocation === undefined)
        {
            return "Not ready to move!";
        }

        switch (commandName) {
            case Commands.PLACE: {
                const direction: BoardSides = BoardSides[params[3]];
                const newLocation = new RobotLocation ( parseInt ( params[1] ) , parseInt ( params[2] ) , direction );
                this.repository.SetLocation ( newLocation );

                break;
                }
            case Commands.LEFT: {
                    break;
                }
            case Commands.RIGHT: {
                    //statements;
                    break;
                }
            case Commands.MOVE: {
                    //statements;
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



        return result;
    }


};

