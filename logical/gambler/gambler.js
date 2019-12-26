const readline=require('readline-sync');
const access=require('./gamblerBL');
let noOfTimes=readline.questionInt('how many times gambling should be done');
console.log(access.whoWins(noOfTimes));

