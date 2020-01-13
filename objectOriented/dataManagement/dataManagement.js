const access = require('./dataManagementBL');
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./details.json'));
access.dataManagement(data);