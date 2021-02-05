import { BoardConfiguration } from '../../../Configuration/BoardConfiguration';
import { load } from 'ts-dotenv';

describe('BoardConfiguration', function () {
    let config: BoardConfiguration;
    let length: number;
    let width: number;
    beforeEach(() => {
        config = new BoardConfiguration();
        const env = load({
            LENGTH: Number,
            WIDTH: Number,
        });

        length = env.LENGTH;
        width = env.WIDTH;
    });
    it('BoardConfiguration is defined, width is returned correctly', function () {
        expect(config.width).toEqual(width);
    });
    it('BoardConfiguration is defined, length is returned correctly', function () {
        expect(config.length).toEqual(length);
    });
});
