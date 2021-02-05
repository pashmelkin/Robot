import Sanitizer from "../../../Input/Sanitizer";

describe('Sanitizer', function() {
    it('Sanitize function returns sanitized string',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Move");
        expect(result).toBe('MOVE');
    });

});

describe('Sanitizer', function() {
    it('Sanitize function returns error in case the command is wrong',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Move it");
        expect(result).toBe('');
    });

});

describe('Sanitizer', function() {
    it('Sanitize function returns correct side if correct Place command',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Place 1 2 NORTH");
        expect(result).toBe("PLACE 1 2 NORTH");
    });

});


describe('Sanitizer', function() {
    it('Sanitize function returns empty string if wrong Place command',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Place 1 2");
        expect(result).toBe("");
    });

});

describe('Sanitizer', function() {
    it('Sanitize function returns empty string if wrong Place command',  function () {
        let sanitizer = new Sanitizer();
        let result = sanitizer.Sanitize("Place 1 2 South");
        expect(result).toBe("PLACE 1 2 SOUTH");
    });

});
