const access = require('./unOrderedListBL');
let fs = require('fs');
let content = fs.readFileSync('happen.txt', 'utf8');
let splitContent = content.split(' ');
access.unOrderedList(splitContent);