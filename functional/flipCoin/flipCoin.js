const readline=require('readline-sync');
const access=require('./flipCoinBL');
let noOfTimes=readline.questionInt('How many times do you like to flip a coin :');
console.log(access.flipCoin(noOfTimes));