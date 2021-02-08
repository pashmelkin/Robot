import { SimpleCommands } from '../models/Commands';
import { Sanitizer } from './Sanitizer';

export default class SanitizerImpl extends Sanitizer {
    isCommandComplex = (): boolean => !(this.command in SimpleCommands);

    sanitizeSimpleCmd = function (): string {

        if (this.command in SimpleCommands) {
            return this.command;
        }
        throw new Error(`Command is unknown: ${this.command}`);
    };

    sanitizeComplexCmd(): string {
        return this.command;
    }
}
