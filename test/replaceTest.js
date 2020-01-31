let access = require('../functional/replaceString/replaceStringBL');
let assert = require('chai').assert;
describe("Checking", () => {
    it("to check string", () => {
        assert.isString(access.replaceString('Dishon'));
    })
})