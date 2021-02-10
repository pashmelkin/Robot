import { ComplexCommands, SimpleCommands } from '../models/Commands';
import { Sanitizer } from './Sanitizer';
import { BoardSides } from '../models/BoardSides';

export default class InputSanitizer extends Sanitizer {
    isCommandComplex = (): boolean => this.commandName in ComplexCommands;

    sanitizeSimpleCmd = function (): string {
        if (this.commandName in SimpleCommands) {
            return this.commandName;
        }
        throw new Error(`Command is unknown: ${this.commandName}`);
    };

    sanitizeComplexCmd(input: string): string {
        const result = input.toLocaleUpperCase();
        const regexPlace = new RegExp(
            '\\w+ \\d,\\d,' + `${BoardSides.NORTH}|${BoardSides.EAST}|${BoardSides.WEST}|${BoardSides.SOUTH}`,
        );

        if (regexPlace.test(result)) {
            return result;
        }
        throw new Error(`Sanitize: Wrong Complex command format: ${input}`);
    }
}
