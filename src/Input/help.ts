import { SimpleCommands } from '../models/Commands';
import { BoardSides } from '../models/BoardSides';

export function help() {
    let allSides = '';
    console.log('=======================================================');
    console.log('Welcome to Toy Robot CLI.');
    console.log("The first command is expected to be 'PLACE'");
    for (const side in BoardSides) {
        allSides += side + ' ';
    }
    console.log(`PLACE X,Y,F  X,Y - numbers, F is one of directions: ${allSides}`);
    console.log('Others correct commands are:');
    for (const cmd in SimpleCommands) {
        console.log(cmd);
    }
    console.log('All commands are accepted in any case');
    console.log('=======================================================');
}
