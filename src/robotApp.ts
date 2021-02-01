import Input from './Input/Input'

class RobotApp {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    start() {
        Input.GetInput();
        return "Hello, " + this.greeting;
    }
}

export default RobotApp;
