import ISanitizer from "./ISanitizer";

export default class Sanitizer implements ISanitizer{
    Sanitize(input: string) : string
    {
        return input.toLocaleUpperCase();
    }
}
