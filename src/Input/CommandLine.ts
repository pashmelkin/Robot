import * as rl from 'readline-sync';
import ISanitizer from "./ISanitizer";


export function readCli(prompt: string, sanitizer: ISanitizer) : string{
        let answer = rl.question(prompt);
        console.log("received:" + answer);
        let res = sanitizer.Sanitize(answer);
        console.log(res);
        return res;
};
