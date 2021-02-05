import InputReader from './Input/InputReader';
import Sanitizer from './Input/Sanitizer';
import { Processor } from './Processor/Processor';
import { Repository } from './Repository/Repository';
import { BoardConfiguration } from './Configuration/BoardConfiguration';

class RobotApp {
    private readonly prompt: string = 'What is the robot command, please: => ';
    private readonly inputReader: InputReader;
    private readonly moveProcessor: Processor;
    private readonly boardConfiguration: BoardConfiguration;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
        const repository = new Repository(undefined);
        this.moveProcessor = new Processor(repository);
        this.boardConfiguration = new BoardConfiguration();
    }

    start() {
        let result: string = undefined;
        while (true) {
            const command = this.inputReader.read();

            if (command !== undefined) {
                result = this.moveProcessor.MoveRobot(command);
            }
            if (result !== undefined) console.log(`${result}`);
        }
        console.log('bye for now...');
    }
}

export default RobotApp;
