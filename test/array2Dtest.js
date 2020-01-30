let access = require('../functional/array2D/array2DBL');
const assert = require('chai').assert;
let readline = require('readline-sync');
let array=access.initializeArray(2,2)

describe('positive', function() {
    it("checking array", function () {
        assert.isArray(array);
    })
})
