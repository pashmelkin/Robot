import InputSanitizer from '../../../Input/InputSanitizer';
import { Commands } from '../../../models/Commands';

const commands = [
    ['move', Commands.MOVE],
    ['left', Commands.LEFT],
    ['rIgHt', Commands.RIGHT],
    ['REPORT', Commands.REPORT],
    ['Place 1,2,South', 'PLACE 1,2,SOUTH'],
    ['place 1,2,north', 'PLACE 1,2,NORTH'],
];

const commandsInput = [
    //  ['Place 2,3,north#', 'Error: Sanitize: Wrong Complex command format:'],
    //   ['Place 2,3,north$', 'Error: Sanitize: Wrong Complex command format:'],
    //   ['Place 2,~,north', 'Error: Sanitize: Wrong Complex command format:'],
    //   ['Place 2,2,north@', 'Error: Sanitize: Wrong Complex command format:'],
    ['Place 2.3,2,north', 'Sanitize: Wrong Complex command format:'],
    ['Place  ,2,north', 'Sanitize: Wrong Complex command format:'],
    ['Place #,2,north', 'Sanitize: Wrong Complex command format:'],
    ['Place #,$,north', 'Sanitize: Wrong Complex command format:'],
    ['Place 0.1,2,South', 'Sanitize: Wrong Complex command format:'],
    ['Place 0,2,Soyth', 'Sanitize: Wrong Complex command format:'],
    ['move it', 'Sanitize: Wrong Complex command format:'],
    ['Place 1,2', 'Sanitize: Wrong Complex command format:'],
];

let sanitizer: InputSanitizer;

beforeEach(() => {
    sanitizer = new InputSanitizer();
});

describe('Sanitizer', function () {
    test.each(commands)('returns sanitized commandName', (command: string, expectedResult: any) => {
        const result = sanitizer.sanitize(command);
        expect(result).toEqual(expectedResult);
    });
});

describe('Sanitizer', function () {
    test.each(commandsInput)(
        'returns expected error message depends on input',
        (input: string, expectedResult: string) => {
            try {
                const result = sanitizer.sanitize(input);
                expect(result).toBe(expectedResult);
            } catch (e) {
                expect(e.message).toContain(expectedResult);
            }
        },
    );
});
