/**
 * Execution   : default node    cmd>node.gambler.js
 * 
 * purpose     : To find who wins the gamble
 * 
 * @description :Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. Run the experiment N times, averages the results, and prints them out.
 * @file        :gambler.js
 * @overview    :Generate random numbers and find who wins the gamble
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./gamblerBL');
let noOfTimes = readline.question('how many times gambling should be done');
if (noOfTimes === '') {
    console.log('Give valid input');
} else {
    console.log(access.whoWins(noOfTimes));
}