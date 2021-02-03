import * as rl from 'readline-sync';
import ISanitizer from "./ISanitizer";


export function readCli(prompt: string, sanitizer: ISanitizer) : string{
        let answer = rl.question(prompt);
        let res = sanitizer.Sanitize(answer);
        return res;
};
