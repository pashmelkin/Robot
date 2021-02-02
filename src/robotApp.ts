import InputReader from "./Input/InputReader";
import Sanitizer from "./Input/Sanitizer";

class RobotApp {

    private readonly prompt: string = "What is the robot command, please: => ";
    private inputReader: InputReader;
    constructor() {
        this.inputReader = new InputReader(this.prompt, new Sanitizer());
    }

    start() {
        let res = this.inputReader.read();
        console.log("Read: " + res );
    }
}

export default RobotApp;
