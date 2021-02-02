import {MoveRobot} from "./MoveRobot";
import {Repository} from "../Repository/Repository";

export interface IProcessor {
    MoveRobot: (command: string) => string

};


export class Processor implements IProcessor {
    repository: Repository;

    constructor(){
        this.repository = new Repository();
    }

    MoveRobot (command: string)
    {
        let res = this.repository.GetLocation();
        console.log("GetLocation returned::" + res);
        return MoveRobot(command);
    }


};

