const readline=require('readline-sync');
const access=require('./powerOf2BL');
let nthNumber=readline.questionInt('To find 2 power n ,enter nth value');
access.powerOf2(nthNumber);

