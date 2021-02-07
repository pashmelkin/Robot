import ISanitizer from './ISanitizer';
import { BoardSides } from '../models/BoardSides';
import { Commands } from '../models/Commands';

export default class Sanitizer implements ISanitizer {
    Sanitize(input: string): { command: string; error: string } {
        let error: string = undefined;
        const command = input.toLocaleUpperCase();

        const specials = /[^A-Za-z 0-9]/g;

        const regexPlace = new RegExp(
            '\\d \\d ' + `${BoardSides.NORTH}|${BoardSides.EAST}|${BoardSides.WEST}|${BoardSides.SOUTH}`,
        );
        const regexSimpleCommands = new RegExp(
            `${Commands.LEFT}|${Commands.REPORT}|${Commands.RIGHT}|${Commands.MOVE}` + '$',
        );

        if (specials.test(command)) {
            error = 'Sanitize: special symbols detected';
        } else if (command.startsWith(Commands.PLACE)) {
            if (!regexPlace.test(command)) {
                error = 'Sanitize: Wrong Place command format';
            }
        } else if (!regexSimpleCommands.test(command)) {
            error = `Sanitize: Unknown command: ${input}`;
        }

        return { command, error };
    }
}
