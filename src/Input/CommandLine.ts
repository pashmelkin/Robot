import * as rl from 'readline-sync';

let listenForCommands = true;

export function read() {
    while (listenForCommands) {
        let answer = rl.question("What is the robot command, please ");
        if (answer == "exit") {
            listenForCommands = false;
            console.log("bye");
        } else {

            console.log("received:" + answer);
        }
    }
};
