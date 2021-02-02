import {MoveRobot} from "./MoveRobot";

export interface IProcessor {
    MoveRobot: (command: string) => string

};


export const Processor: IProcessor = {
    MoveRobot : MoveRobot
};

