import Input from './Input/Input'
import {IProcessor} from './Processor/Processor'

class RobotApp {
    greeting: string;
    processor: IProcessor;

    constructor(processor: IProcessor) {
        this.processor = processor;
    }

    start() {
        Input.GetInput(this.processor);
        return "Hello, " + this.greeting;
    }
}

export default RobotApp;
