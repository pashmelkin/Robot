import {MoveRobot} from "./MoveRobot";

interface IProcessor {
    MoveRobot: () => any

};


const Processor: IProcessor = {
    MoveRobot : MoveRobot
};

export default Processor;
