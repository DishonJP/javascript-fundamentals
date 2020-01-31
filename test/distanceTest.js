let access = require('../functional/distance/distanceBL');
let assert = require('chai').assert;
describe("testing", () => {
    it("checking valid distance", () => {
        assert.isNumber(access.findDistance(2,4))
    })
})