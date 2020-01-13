const access = require('./stockAccountManagementBL');
const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('./stock.json'));
access.stockAccountManagement(pkg);