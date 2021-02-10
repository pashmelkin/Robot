import InputReader from './Input/InputReader';
import Sanitizer from './Input/InputSanitizer';
import { RobotProcessor } from './Processor/RobotProcessor';
import { Repository } from './Repository/Repository';
import { help } from './Input/help';

class RobotApp {
    private readonly prompt: string = 'What is the robot commandName, please: => ';
    private readonly inputReader: InputReader;
    private readonly moveProcessor: RobotProcessor;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
        const repository = new Repository(undefined);
        this.moveProcessor = new RobotProcessor(repository);
    }

    start() {
        let result: string = undefined;
        help();
        while (true) {
            const command = this.inputReader.read();
            if (command === undefined) continue;

            try {
                result = this.moveProcessor.process(command);
                if (result !== undefined) console.log(`${result}`);
            } catch (e) {
                console.error(e.message);
            }
        }
        console.log('bye for now...');
    }
}

export default RobotApp;
