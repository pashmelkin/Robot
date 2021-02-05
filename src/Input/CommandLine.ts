import * as rl from 'readline-sync';
import ISanitizer from './ISanitizer';

export function readCli(prompt: string, sanitizer: ISanitizer): string {
    const answer = rl.question(prompt);
    const res = sanitizer.Sanitize(answer);
    return res;
}
