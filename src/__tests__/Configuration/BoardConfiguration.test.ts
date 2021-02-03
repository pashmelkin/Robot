import {BoardConfiguration} from "../../Configuration/BoardConfiguration";

describe('BoardConfiguration', function() {
    let config : BoardConfiguration;
    const length: number = 4;
    const width: number = 3;
    beforeEach(() => {
        config = new BoardConfiguration(length, width);;
    });
    it('BoardConfiguration is defined, width is returned correctly',  function () {
        expect(config.width).toEqual(width);
    });
    it('BoardConfiguration is defined, length is returned correctly',  function () {
        expect(config.length).toEqual(length);

    });

});
