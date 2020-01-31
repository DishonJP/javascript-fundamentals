let access = require('../functional/harmonicnumber/harmonicNumberBL')
let assert = require('chai').assert
describe("Checking", () => {
    it("cheching number", () => {
        assert.isNumber(access.harmonicNumber(5));
    })
})