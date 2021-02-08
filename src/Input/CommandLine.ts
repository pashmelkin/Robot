import * as rl from 'readline-sync';
import ISanitizer from './ISanitizer';

export function commandLine(prompt: string, sanitizer: ISanitizer): string {
    const answer = rl.question(prompt);
    let res: string;

    try {
        res = sanitizer.sanitize(answer);
    } catch (e) {
        console.error(e);
    }
    return res;
}
