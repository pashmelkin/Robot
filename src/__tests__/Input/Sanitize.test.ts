import Sanitizer from "../../Input/Sanitizer";

describe('Sanitizer', function() {
    it('Sanitize function returns sanitized string',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Move it");
        expect(result).toBe('MOVE IT');
    });

});
