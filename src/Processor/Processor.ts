import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";
import {Commands} from "../models/Commands";
import {RobotLocation} from "../models/RobotLocation";


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
        console.log("GetLocation returned::" + currLocation);

        if (command.startsWith(Commands.PLACE) && currLocation === undefined)
        {
            let r = new RegExp("\\d+ \\d+ \\w+");
            let result = command.match(r);
            let newLocation = new RobotLocation(parseInt(result[0]), parseInt(result[0]), result[2]);
            console.log("Found:" + result);
            this.repository.SetLocation(newLocation);
        }
        else
        {
            switch (command) {
                case Commands.PLACE: {
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
                    result = this.repository.GetLocation().direction;
                    console.log(result);
                    break;
                }
                default: {
                    console.log("Unknown command received");
                    break;
                }
            }
        }


        return result;
    }


};

