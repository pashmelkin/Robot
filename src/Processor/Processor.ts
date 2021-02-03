import {MoveRobot} from "./MoveRobot";
import {IProcessor} from "./IProcessor";
import {IRepository} from "../Repository/IRepository";


export class Processor implements IProcessor {
    repository: IRepository;

    constructor(repository: IRepository){
        this.repository = repository;
    }

    MoveRobot (command: string)
    {
        let res = this.repository.GetLocation();
        console.log("GetLocation returned::" + res);
        return MoveRobot(command);
    }


};

