import InputReader from "./Input/InputReader";
import Sanitizer from "./Input/Sanitizer";
import {Processor} from "./Processor/Processor";
import {Repository} from "./Repository/Repository";
import {BoardConfiguration} from "./Configuration/BoardConfiguration";

class RobotApp {

    private readonly prompt: string = "What is the robot command, please: => ";
    private readonly exitCommand = "EXIT";
    private readonly inputReader: InputReader;
    private readonly moveProcessor: Processor;
    private readonly boardConfiguration: BoardConfiguration;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
        let repository = new Repository(undefined);
        this.moveProcessor = new Processor(repository);
        this.boardConfiguration = new BoardConfiguration(5, 5);
    }

    start() {

        while(true) {
            let command = this.inputReader.read ();
            if (command.includes(this.exitCommand)){
                break;
            }
            this.moveProcessor.MoveRobot (command);
        }
        console.log("bye for now...");
    }
}

export default RobotApp;
