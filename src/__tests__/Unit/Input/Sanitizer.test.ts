import Sanitizer from '../../../Input/Sanitizer';
import { Commands } from '../../../models/Commands';

const commands = [
    ['Move', Commands.MOVE],
    ['left', Commands.LEFT],
    ['rIgHt', Commands.RIGHT],
    ['REPORT', Commands.REPORT],
];

const commandsInput = [
    ['Place 1.2 3 north', 'Sanitize: special symbols detected'],
    ['Move it', 'Sanitize: Unknown command: Move it'],
    ['Place 1 2', 'Sanitize: Wrong Place command format'],
];

let sanitizer: Sanitizer;

beforeEach(() => {
    sanitizer = new Sanitizer();
});

describe('Sanitizer', function () {
    test.each(commands)('returns sanitized command', (command: string, expectedResult: Commands) => {
        const result = sanitizer.Sanitize(command);
        expect(result.command).toEqual(expectedResult);
    });
    it('Sanitize function returns correct Place command', function () {
        const result = sanitizer.Sanitize('Place 1 2 South');
        expect(result.command).toBe('PLACE 1 2 SOUTH');
        expect(result.error).toBe(undefined);
    });
});

describe('Sanitizer', function () {
    test.each(commandsInput)('returns expected error depends on input', (input: string, expectedResult: string) => {
        const result = sanitizer.Sanitize(input);
        expect(result.error).toBe(expectedResult);
    });
});
