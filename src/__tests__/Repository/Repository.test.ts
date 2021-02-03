import {Repository} from "../../Repository/Repository";


describe('Repository', function() {
    it('Repository function returns something',  function () {
        const repo = new Repository(undefined);
        let result = repo.GetLocation();
        expect(result).toBe(undefined);
    });

});
