const access = require('./hashingFunctionBL');
const fs = require('fs');
let content = fs.readFileSync('numbers.txt', 'utf8');
access.hashingFunction(content.split(','));