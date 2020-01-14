const access = require('./commercialDataProcessingBL');
const fs = require('fs-sync');
let data = fs.read('./PersonData.txt')
access.commercialDataProcessing(data);