import {MoveRobot} from "./MoveRobot";

export interface IProcessor {
    MoveRobot: () => any

};


export const Processor: IProcessor = {
    MoveRobot : MoveRobot
};

