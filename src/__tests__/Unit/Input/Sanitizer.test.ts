import Sanitizer from '../../../Input/Sanitizer';
import {Commands} from "../../../models/Commands";

const commands = [
    ['Move', Commands.MOVE],
    ['left', Commands.LEFT],
    ['rIgHt', Commands.RIGHT],
    ['REPORT', Commands.REPORT]
];


let sanitizer: Sanitizer;

beforeEach(() => {
    sanitizer = new Sanitizer();
});

describe('Sanitizer', function () {
    test.each(commands)(
        'returns sanitized command',
        (command: string, expectedResult: Commands) => {
            const result = sanitizer.Sanitize(command);
            expect(result.command).toEqual(expectedResult);
        },
    );
    it('Sanitize function returns correct Place command', function () {
        const result = sanitizer.Sanitize('Place 1 2 South');
        expect(result.command).toBe('PLACE 1 2 SOUTH');
        expect(result.error).toBe(undefined);
    });
});

describe('Sanitizer', function () {
    it('Sanitize function returns error in case the command is wrong', function () {
        const result = sanitizer.Sanitize('Move it');
        expect(result.error).toBe('Sanitize: Unknown command: Move it');
    });
    it('Sanitize function returns empty string if wrong Place command', function () {
        const result = sanitizer.Sanitize('Place 1 2');
        expect(result.error).toBe('Sanitize: Wrong Place command format');
    });
    it('Sanitize function returns correct side if wrong Place command', function () {
        const result = sanitizer.Sanitize('Place 1.4 2 NORTH');
        expect(result.command).toBe('PLACE 1.4 2 NORTH');
        expect(result.error).toBe(undefined);
    });
});
