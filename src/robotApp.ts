import InputReader from "./Input/InputReader";

class RobotApp {

    private prompt: string = "What is the robot command, please: => ";
    private inputReader: InputReader;
    constructor() {
        this.inputReader = new InputReader();
    }

    start() {

    }
}

export default RobotApp;
