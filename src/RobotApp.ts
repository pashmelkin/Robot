import InputReader from './Input/InputReader';
import Sanitizer from './Input/InputSanitizer';
import { Processor } from './Processor/Processor';
import { Repository } from './Repository/Repository';

class RobotApp {
    private readonly prompt: string = 'What is the robot commandName, please: => ';
    private readonly inputReader: InputReader;
    private readonly moveProcessor: Processor;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
        const repository = new Repository(undefined);
        this.moveProcessor = new Processor(repository);
    }

    private help() {
        console.log('=======================================================');
        console.log('Welcome to Toy Robot CLI.');
        console.log("The first commandName is expected is 'PLACE/'");
        console.log('PLACE X,Y,F  X,Y - numbers, F is one of directions: North, West, East, South');
        console.log('Others correct commands are:');
        console.log('LEFT');
        console.log('RIGHT');
        console.log('MOVE');
        console.log('REPORT');
        console.log('All commands are case insensitive');
        console.log('=======================================================');
    }
    start() {
        let result: string = undefined;
        this.help();
        while (true) {
            const command = this.inputReader.read();

            if (command !== undefined) {
                try {
                    result = this.moveProcessor.process(command);
                    if (result !== undefined) console.log(`${result}`);
                } catch (e) {
                    console.error(e);
                }
            }
        }
        console.log('bye for now...');
    }
}

export default RobotApp;
