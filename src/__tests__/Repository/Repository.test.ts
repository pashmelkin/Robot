import {Repository} from "../../Repository/Repository";


describe('Repository', function() {
    it('Repository function returns something',  function () {
        const result = new Repository(undefined);
        expect(result).toBe('Successfully moved');
    });

});
