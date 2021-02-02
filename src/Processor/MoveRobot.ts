
import {Commands} from "../models/Commands";

export function MoveRobot(command: string) : string {
    console.log("called Processor with command "+ command);
    let result = "Successfully moved";
    if (command.startsWith(Commands.PLACE))
        console.log("Place received");
    else
    {
        switch (command) {
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
                //statements;
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
