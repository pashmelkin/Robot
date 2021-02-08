import ISanitizer from './ISanitizer';

export abstract class Sanitizer implements ISanitizer {
    protected command: string;
    sanitize = function (input: string): string {
        this.command = this.normalizeCommand(input);
        return this.isCommandComplex(this.command) ? this.sanitizeComplexCmd() :
            this.sanitizeSimpleCmd();
    };

    protected normalizeCommand = (input: string) => input.toLocaleUpperCase();
    abstract sanitizeSimpleCmd(): string;
    abstract sanitizeComplexCmd(): string;
    abstract isCommandComplex: () => boolean;
}
