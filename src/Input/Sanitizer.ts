import ISanitizer from './ISanitizer';
import { BoardSides } from '../models/BoardSides';
import { Commands } from '../models/Commands';

export default class Sanitizer implements ISanitizer {
    Sanitize(input: string): string {
        const command = input.toLocaleUpperCase();
        const regexPlace = new RegExp(
            '\\d+ \\d+ ' + `${BoardSides.NORTH}|${BoardSides.EAST}|${BoardSides.WEST}|${BoardSides.SOUTH}`,
        );
        const regexSimpleCommands = new RegExp(
            `${Commands.LEFT}|${Commands.REPORT}|${Commands.RIGHT}|${Commands.MOVE}` + '$',
        );

        if (command.startsWith(Commands.PLACE)) {
            if (!regexPlace.test(command)) {
                console.log('Sanitize: Wrong Place command format');
                return undefined;
            }
        } else if (!regexSimpleCommands.test(command)) {
            console.log('Sanitize: Unknown command:' + command);
            return undefined;
        }

        return command;
    }
}
