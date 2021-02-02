import InputReader from "./Input/InputReader";
import Sanitizer from "./Input/Sanitizer";
import {IProcessor} from "./Processor/IProcessor";
import {Processor} from "./Processor/Processor";
import {IRepository} from "./Repository/IRepository";

class RobotApp {

    private readonly prompt: string = "What is the robot command, please: => ";
    private readonly exitCommand = "EXIT";
    private readonly inputReader: InputReader;
    private readonly moveProcessor: IProcessor;
    private readonly repository : IRepository;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
        this.moveProcessor = new Processor(this.repository);
    }

    start() {

        while(true) {
            let command = this.inputReader.read ();
            if (command.includes(this.exitCommand)){
                break;
            }
            this.moveProcessor.MoveRobot (command);
        }
    }
}

export default RobotApp;
