import ISanitizer from './ISanitizer';

export abstract class Sanitizer implements ISanitizer {
    protected commandName: string;
    sanitize = function (input: string): string {
        this.commandName = this.normalizeCommand(input);
        return this.isCommandComplex(this.commandName) ? this.sanitizeComplexCmd(input) : this.sanitizeSimpleCmd();
    };

    protected normalizeCommand = (input: string) => input.toLocaleUpperCase()?.split(' ')[0];
    abstract sanitizeSimpleCmd(): string;
    abstract sanitizeComplexCmd(input: string): string;
    abstract isCommandComplex: () => boolean;
}
