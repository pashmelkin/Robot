import { SimpleCommands } from '../models/Commands';
import { Sanitizer } from './Sanitizer';

export default class SanitizerImpl extends Sanitizer {
    isCommandComplex = (input: string): boolean => !(this.normalizeCommand(input) in SimpleCommands);

    sanitizeSimpleCmd = function (input: string): string {
        const command = this.normalizeCommand(input);

        if (input.toLocaleUpperCase() in SimpleCommands) {
            return command;
        }
        throw new Error(`Command is unknown: ${command}`);
    };

    sanitizeComplexCmd(input: string): string {
        return this.normalizeCommand(input);
    }
}
