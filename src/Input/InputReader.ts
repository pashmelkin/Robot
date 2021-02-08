import IReader from './IReader';
import { commandLine } from './CommandLine';
import ISanitizer from './ISanitizer';

export default class InputReader implements IReader {
    private readonly prompt: string;
    private readonly sanitizer: ISanitizer;
    constructor(prompt: string, sanitizer: ISanitizer) {
        this.prompt = prompt;
        this.sanitizer = sanitizer;
    }

    read(): string {
        return commandLine(this.prompt, this.sanitizer);
    }
}
