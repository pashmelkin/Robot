import * as rl from 'readline-sync';
import ISanitizer from './ISanitizer';

export function readCli(prompt: string, sanitizer: ISanitizer): string {
    const answer = rl.question(prompt);
    const res = sanitizer.Sanitize(answer);
    if (res.error !== undefined) {
        console.log(res.error);
        return undefined;
    }
    return res.command;
}
