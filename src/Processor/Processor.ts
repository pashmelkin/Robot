import {MoveRobot} from "./MoveRobot";
import {Repository} from "../Repository/Repository";
import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";


export class Processor implements IProcessor {
    repository: Repository;

    constructor(repository : IRepository){
        this.repository = new Repository();
    }

    MoveRobot (command: string)
    {
        let res = this.repository.GetLocation();
        console.log("GetLocation returned::" + res);
        return MoveRobot(command);
    }


};

