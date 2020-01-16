const access = require('./factoryBL');
const readline = require('readline-sync');
let data = readline.question('Enter the class to create instance : ');
access.factory(data);