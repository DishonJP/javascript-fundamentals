const fs = require('fs');
const access = require('./orderedListBL');
let content = fs.readFileSync('orderedList.txt', 'utf8');
console.log();
access.orderedList(content.split(','));