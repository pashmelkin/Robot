import ISanitizer from "./ISanitizer";

export abstract class Sanitizer implements ISanitizer{

    sanitize = function (input: string) : string {

        return (this.isCommandComplex(input) ? this.sanitizeComplexCmd(input) : this.sanitizeSimpleCmd(input));
    };

    normalizeCommand = (input : string) => input.toLocaleUpperCase();
    abstract sanitizeSimpleCmd (input: string) : string;
    abstract sanitizeComplexCmd (input: string) : string;
    abstract isCommandComplex: (input : string) => boolean;

}
