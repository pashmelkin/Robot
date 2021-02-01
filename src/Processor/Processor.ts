import {MoveRobot} from "./MoveRobot";

export interface IProcessor {
    MoveRobot: (command: string) => any

};


export const Processor: IProcessor = {
    MoveRobot : MoveRobot
};

