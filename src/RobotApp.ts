import InputReader from './Input/InputReader';
import Sanitizer2 from './Input/SanitizerImpl';
import { Processor } from './Processor/Processor';
import { Repository } from './Repository/Repository';
import { BoardConfiguration } from './Configuration/BoardConfiguration';

class RobotApp {
    private readonly prompt: string = 'What is the robot command, please: => ';
    private readonly inputReader: InputReader;
    private readonly moveProcessor: Processor;
    private readonly boardConfiguration: BoardConfiguration;

    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer2());
        const repository = new Repository(undefined);
        this.moveProcessor = new Processor(repository);
        this.boardConfiguration = new BoardConfiguration();
    }

    private help() {
        console.log('=======================================================');
        console.log('Welcome to Toy Robot CLI.');
        console.log("The first command is expected is 'PLACE/'");
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
                result = this.moveProcessor.MoveRobot(command);

                if (result !== undefined) console.log(`${result}`);
            }
        }
        console.log('bye for now...');
    }
}

export default RobotApp;
