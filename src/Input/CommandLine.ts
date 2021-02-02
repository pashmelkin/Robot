import * as rl from 'readline-sync';
import {IProcessor} from "../Processor/Processor";
import {sanitize} from "./Sanitizer";

let listenForCommands = true;

export function read(output : IProcessor) {
    while (listenForCommands) {
        let answer = rl.question("What is the robot command, please: => ");
        if (answer == "exit") {
            listenForCommands = false;
            console.log("bye");
        } else {
            console.log("received:" + answer);
            let res = output.MoveRobot(sanitize(answer));
            console.log(res);
        }
    }
};
