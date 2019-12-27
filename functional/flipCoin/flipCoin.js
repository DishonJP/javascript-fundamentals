/**
 * Execution   : default node    cmd>node.flipCoin.js
 * 
 * purpose     : To find whether head or tails wins
 * 
 * 
 * @description :Flip Coin and print percentage of Heads and Tails
 * @file        :flipCoin.js
 * @overview    :coin flip is done with the help of random method and find the percentage
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
const readline = require('readline-sync');
const access = require('./flipCoinBL');
let noOfTimes = readline.question('How many times do you like to flip a coin :');
if (noOfTimes === '') {
    console.log('Give valid input');
} else
    console.log(access.flipCoin(noOfTimes));