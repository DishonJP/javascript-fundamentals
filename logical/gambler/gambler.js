/**
 * Execution   : default node    cmd>node.gambler.js
 * 
 * purpose     : To find who wins the gamble
 * 
 * 
 * @description
 * 
 * @file        :gambler.js
 * @overview    :Generate random numbers and find who wins the gamble
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :27-12-2019
 * */
const readline = require('readline-sync');
const access = require('./gamblerBL');
let noOfTimes = readline.questionInt('how many times gambling should be done');
console.log(access.whoWins(noOfTimes));