let access = require('../functional/powerOf2/powerOf2BL');
let assert = require('chai').assert;
let power = access.powerOf2(2);

describe('Positive', function () {
    it('checking power', function () {
        assert.equal(power,4)
    })
})