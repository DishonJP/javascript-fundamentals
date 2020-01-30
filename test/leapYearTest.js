let access = require('../functional/leapYear/leapYearBL');
let assert = require('chai').assert;
let year = access.toCheckYear(2016);
console.log(year);

describe('Positive', function () {
    it('check leap year', function () {
        assert.equal(year,"Leap year")
    })
})