/**
 * Execution   : default node    cmd>node.powerOf2.js
 * 
 * purpose     : To find power of 2
 * 
 * 
 * @description :This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
 * @file        :powerOf2.js
 * @overview    :Generate nth power of 2
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
const readline = require('readline-sync');
const access = require('./powerOf2BL');
let nthNumber = readline.question('To find 2 power n ,enter nth value');
if (nthNumber === '') {
    console.log('Enter valid input');

} else {
    access.powerOf2(nthNumber);
}