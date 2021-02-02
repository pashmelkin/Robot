import IReader from "./IReader";
import {readCli} from "./CommandLine";
import ISanitizer from "./ISanitizer";

export default class InputReader implements IReader{
    private readonly prompt: string;
    private readonly sanitizer : ISanitizer;
    constructor(_prompt: string , _sanitizer: ISanitizer)
    {
        this.prompt = _prompt;
        this.sanitizer = _sanitizer
    }

    read(): string {
        return readCli(this.prompt, this.sanitizer);
    }
}
