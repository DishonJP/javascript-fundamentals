let access = require('../functional/flipCoin/flipCoinBL');
let assert = require('chai').assert
describe("testing", () => {
    it("checking string", () => {
        assert.isString(access.flipCoin(2));
    })
})