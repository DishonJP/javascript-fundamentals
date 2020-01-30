let access = require('../functional/powerOf2/powerOf2BL');
let assert = require('chai').assert;
let power = access.powerOf2(2);

describe('Positive', function () {
    it('check leap year', function () {
        assert.equal(power,4)
    })
})